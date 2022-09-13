import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react';

import { loadData, loadDepartmentData } from '../../../../../../lib/load-data'
import connectionDB from '../../../../../../lib/connectionDB'
import { metricsCompensation } from '../../../../../../lib/calculation';

import Table from '../../../../../../components/Table/table';
import OptimizedPage from '../../../../../../components/Page/OptimizedPage'
import Footer from '../../../../../../components/Element/Footer';

import { NextSeo } from 'next-seo';


// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context: any) => {
    const country: String = context.params.country;
    const role: string = context.params.role
    const gender: string = context.params.gender;
    await connectionDB();
    const response: any = await loadData(context.params);
    const department = await response.compensation[0].department
    const { meanCompensation, medianCompensation } = await metricsCompensation(response.compensation)

    return {
        // Passed to the page component as props
        props: {
            post: response.compensation,
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
    return {
        paths: path,
        fallback: false, // can also be true or 'blocking'
    }
}


const GenderData = (props: any) => {

    return (
        <>
           <NextSeo
                title={`Discover ${props.gender? props.gender : ''} ${props.role ? props.role : 'Software Engineer'} salaries in ${props.department ? props.department : props.country}`}
                description={`Leverage our database to know the ${props.role ? props.role : 'Software Engineer'} wage in ${props.department ? props.department : props.country}`}
            />
            <OptimizedPage country={'France'} compensation={props.compensation} median={props.median} area={props.department} role={props.category_role} gender={props.gender}/>
            <Table compensation={props} department={props.department} role={props.role} gender={props.gender} country={'France'} participant={props.participant}/>
            <Footer />
        </>
    )
}

export default GenderData;