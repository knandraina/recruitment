import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react';

import { loadData, loadDepartmentData } from '../../../../../../lib/load-data'
import connectionDB from '../../../../../../lib/connectionDB'
import { metricsCompensation } from '../../../../../../lib/calculation';

import Table from '../../../../../../components/Table/table';
import OptimizedPage from '../../../../../../components/Page/OptimizedPage'
import FormRedirection from '../../../../../../components/Form/FormRedirection';
import Footer from '../../../../../../components/Element/Footer';

import { NextSeo } from 'next-seo';


// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context: any) => {
    const country: String = context.params.country;
    const department_lower_case: String = context.params.department;
    const role: string = context.params.role
    const gender: string = context.params.gender;
    await connectionDB();
    const response = await loadData(department_lower_case, role, gender);
    const department = await response[0].department
    const { meanCompensation, medianCompensation } = await metricsCompensation(response)

    return {
        // Passed to the page component as props
        props: {
            post: response,
            country,
            department,
            role,
            gender,
            compensation: Math.round(meanCompensation),
            median: Math.round(medianCompensation)
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    await connectionDB();
    const path: Array<any> = await loadDepartmentData();
    console.log(path)
    return {
        paths: path,
        fallback: false, // can also be true or 'blocking'
    }
}


const GenderData = (props: any) => {

    const [department, setDepartment] = useState<string>(props.department);

    const handleChange = async (department: string) => {
        setDepartment(department)
    }

    return (
        <>
            <NextSeo
                title={`Discover ${props.role} salaries in ${props.department}`}
                description={`Leverage our database to know the ${props.role} wage in ${props.department}`}
            />
            <OptimizedPage area={props.department} compensation={props.compensation} median={props.median} role={props.role} gender={props.gender} />
            <Table compensation={props} department={props.department} role={props.role} gender={props.gender}/>
            <Footer />
        </>
    )
}

export default GenderData;