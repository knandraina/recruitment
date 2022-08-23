import { GetStaticProps, GetStaticPaths } from 'next'
import { useState, useEffect } from 'react';

import { loadData, loadDepartmentData } from '../../../../lib/load-data'
import connectionDB from '../../../../lib/connectionDB'
import { metricsCompensation } from '../../../../lib/calculation';

import Table from '../../../../components/Table/table';
import OptimizedPage from '../../../../components/Page/OptimizedPage'
import FormRedirection from '../../../../components/Form/FormRedirection';

import { NextSeo } from 'next-seo';


// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context: any) => {
    const country: String = context.params.country;
    const department_lower_case: String = context.params.department;
    await connectionDB();
    const response = await loadData(department_lower_case);
    const department = await response[0].department
    const { meanCompensation, medianCompensation } = await metricsCompensation(response)

    return {
        // Passed to the page component as props
        props: {
            post: response,
            country,
            department,
            compensation: Math.round(meanCompensation),
            median: Math.round(medianCompensation)
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    await connectionDB();
    const path: Array<any> = await loadDepartmentData()
    return {
        paths: path,
        fallback: false, // can also be true or 'blocking'
    }
}


const DepartmentData = (props: any) => {

    const [department, setDepartment] = useState<string>(props.department);

    const handleChange = async (department: string) => {
        setDepartment(department)
    }

    return (
        <>
            <NextSeo
                title={`Discover Software engineer salaries in ${props.country}`}
                description={`Leverage our database to know the sofware engineer wage in ${props.country}`}
            />
            <OptimizedPage area={props.department} compensation={props.compensation} median={props.median} />
            <Table compensation={props} />
            <FormRedirection department={department} handleChange={handleChange} textButton={"Explore Data"} />
        </>
    )
}

export default DepartmentData;