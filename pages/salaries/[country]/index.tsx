import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'

import { loadData } from '../../../lib/load-data'
import connectionDB from '../../../lib/connectionDB'
import { metricsCompensation } from '../../../lib/calculation';

import Table from '../../../components/Table/table';
import OptimizedPage from '../../../components/Page/OptimizedPage'
import FormRedirection from '../../../components/Form/FormRedirection';
import Footer from '../../../components/Element/Footer';

import { NextSeo } from 'next-seo';
const _ = require("lodash");


// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps  = async (context: any) => {
    const country: String = context.params.country  
    await connectionDB();   
    const response = await loadData('');

    const { meanCompensation, medianCompensation } = await metricsCompensation(response)

    return {
        // Passed to the page component as props
        props: {
            post: response,
            country,
            compensation: Math.round(meanCompensation),
            median: Math.round(medianCompensation)
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { country: 'france' } }],
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
            <OptimizedPage area={props.country} compensation={props.compensation} median={props.median} />
            <Table compensation={props} department={'France'}/>
            <Footer />
        </>
    )
}

export default FrenchData;