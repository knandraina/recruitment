import { GetStaticPaths, GetStaticProps } from "next";
import Router from 'next/router'

import connectionDB from "../../lib/connectionDB";
import { retrieveData } from "../../lib/slugData";
import { buildPath } from "../../lib/slugLoad";
import Compensation from "../../models/compensation";
import { metricsCompensation } from "../../lib/calculation";

import { NextSeo } from "next-seo";

import Table from "../../components/Table/table";
import OptimizedPage from "../../components/Page/OptimizedPage"
import { useEffect } from "react";
import Footer from "../../components/Element/Footer";


export const getStaticProps: GetStaticProps = async (context: any) => {
    await connectionDB();
    const response = await retrieveData(context.params.slug);
    const department = response.compensation[0].department;
    const { meanCompensation, medianCompensation } = await metricsCompensation(response.compensation)
    const params = context.params.slug
    const paramsLength = params.length;

    if (paramsLength === 4) {
        return {
            props: {
                post: response.compensation,
                country: 'France',
                gender: params[paramsLength - 1],
                role: params[paramsLength - 2],
                department: department,
                meanCompensation: Math.round(meanCompensation),
                medianCompensation: Math.round(medianCompensation),
                fakeData: response
            }
        }
    } else if (paramsLength === 3) {
        if (Object.keys(response).indexOf('department_lower_case') > -1 && Object.keys(response).indexOf('category_role') > -1) {
            return {
                props: {
                    post: response.compensation,
                    country: 'France',
                    department: department,
                    role: params[paramsLength - 1],
                    meanCompensation: Math.round(meanCompensation),
                    medianCompensation: Math.round(medianCompensation),
                    fakeData: response
                }
            }
        } else if (Object.keys(response).indexOf('gender') > -1 && Object.keys(response).indexOf('category_role') > -1) {
            return {
                props: {
                    post: response.compensation,
                    country: 'France',
                    gender: params[paramsLength - 1],
                    role: params[paramsLength - 2],
                    meanCompensation: Math.round(meanCompensation),
                    medianCompensation: Math.round(medianCompensation),
                    fakeData: response
                }
            }
        } else if (Object.keys(response).indexOf('department_lower_case') > -1 && Object.keys(response).indexOf('gender') > -1) {
            return {
                props: {
                    post: response.compensation,
                    country: 'France',
                    department: department,
                    gender: params[paramsLength - 1],
                    meanCompensation: Math.round(meanCompensation),
                    medianCompensation: Math.round(medianCompensation),
                    fakeData: response
                }
            }

        }
    } else if (paramsLength === 2) {
        if (Object.keys(response).indexOf('gender') > -1) {
            return {
                props: {
                    post: response.compensation,
                    country: 'France',
                    gender: params[paramsLength - 1],
                    meanCompensation: Math.round(meanCompensation),
                    medianCompensation: Math.round(medianCompensation),
                    fakeData: response
                }
            }
        } else if (Object.keys(response).indexOf('category_role') > -1) {
            return {
                props: {
                    post: response.compensation,
                    country: 'France',
                    role: params[paramsLength - 1],
                    meanCompensation: Math.round(meanCompensation),
                    medianCompensation: Math.round(medianCompensation),
                    fakeData: response
                }
            }
        } else if (Object.keys(response).indexOf('department_lower_case') > -1) {
            return {
                props: {
                    post: response.compensation,
                    country: 'France',
                    department: department,
                    meanCompensation: Math.round(meanCompensation),
                    medianCompensation: Math.round(medianCompensation),
                    fakeData: response
                }
            }
        }
    }
    return {
        props: {
            post: response.compensation,
            country: 'France',
            meanCompensation: Math.round(meanCompensation),
            medianCompensation: Math.round(medianCompensation),
            fakeData: response
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    await connectionDB();
    const response = await Compensation.find({}).populate('company')
    const path = await buildPath(response)

    return {
        paths: path,
        fallback: false
    }
}


const AllPages = (props: any) => {
    useEffect(() => {
        if (props.fakeData.fake_data) {
            Router.push('/not-enough-data')
        }
    },[])

    return (
        <>
             <NextSeo
                title={`Discover ${props.gender? props.gender : ''} ${props.role ? props.role : 'Software engineer'} salaries in ${props.department? props.department : props.country}`}
                description={`Leverage our database to know the ${props.gender? props.gender : ''} ${props.role ? props.role : 'Software engineer'} wage in ${props.department? props.department : props.country}`}
                />
                <OptimizedPage area={props.department} compensation={props.meanCompensation} median={props.medianCompensation} role={props.role} gender={props.gender} country={props.country} />
                <Table compensation={props} department={props.department} country={props.country} role={props.role} gender={props.gender}/>
                <Footer/>
        </>
    )
}

export default AllPages;