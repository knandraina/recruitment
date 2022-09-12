import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'

import connectionDB from '../../../../../lib/connectionDB'
import { metricsCompensation } from '../../../../../lib/calculation';
import Compensation from '../../../../../models/compensation';

import Table from '../../../../../components/Table/table';
import OptimizedPage from '../../../../../components/Page/OptimizedPage'
import FormRedirection from '../../../../../components/Form/FormRedirection';
import Footer from '../../../../../components/Element/Footer';

import { NextSeo } from 'next-seo';
import { buildPath } from '../../../../../lib/slugLoad';
import { retrieveData } from '../../../../../lib/slugData';
const _ = require("lodash");


// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context: any) => {
    const country: String = context.params.country;
    const index: string = context.params.index;
    const gender: string = context.params.gender;
    await connectionDB();

    const genderUpperCase = gender.charAt(0).toUpperCase() + gender.slice(1);
    const res = await Compensation.find({$or:[{department_lower_case: index}, {category_role: index}], $and: [{approved: true, gender: genderUpperCase}]}).populate('company')
    const response = await retrieveData(index, res);

    const key = Object.keys(response)[1];
    
    const { meanCompensation, medianCompensation } = await metricsCompensation(response.compensation)

    return {
        // Passed to the page component as props
        props: {
            post: JSON.parse(JSON.stringify(res)),
            country,
            gender: genderUpperCase,
            compensation: Math.round(meanCompensation),
            median: Math.round(medianCompensation),
            [key]: Object.values(response)[1] 
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    await connectionDB();
    
    const path = await buildPath();
    return {
        paths: path.answerGenderDepartmentRole,
        fallback: false, // can also be true or 'blocking'
    }
}

const FrenchData = (props: any) => {
    const [department, setDepartment] = useState<string>(props.department);

    const handleChange = async (department: string) => {
        setDepartment(department)
    }

    return (
        <>
            <NextSeo
                title={`Discover Software engineer salary in ${props.country}`}
                description="Leverage our database to know the sofware engineer wage in France"
            />
            <OptimizedPage country={'France'} compensation={props.compensation} median={props.median} area={props.department} role={props.category_role} gender={props.gender} />
            <Table compensation={props} department={props.department} role={props.category_role} gender={props.gender} country={'France'} participant={props.participant}/>
            <Footer />
        </>
    )
}

export default FrenchData;