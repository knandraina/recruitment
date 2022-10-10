import { GetStaticProps, GetStaticPaths } from 'next'

import { loadData } from '../../../../../lib/load-data'
import connectionDB from '../../../../../lib/connectionDB'
import { metricsCompensation } from '../../../../../lib/calculation';

import Table from '../../../../../components/Table/table';
import OptimizedPage from '../../../../../components/Page/OptimizedPage'
import Footer from '../../../../../components/Element/Footer';
import { main } from '../../../../../lib/graphicData';

import { NextSeo } from 'next-seo';
import { buildPath } from '../../../../../lib/slugLoad';
import { VerticalBar } from '../../../../../components/Element/VerticalBar';


// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context: any) => {
    const country: String = context.params.country;
    await connectionDB();
    const response: any = await loadData(context.params);
    const intervalGraph = await main(response.compensation);
    const lengthKey = Object.keys(response).length
    const keyOne = Object.keys(response)[1];
    const keyTwo = Object.keys(response)[2];
    const city_link_department = response.hasOwnProperty('city_link_department') ? Object.values(response)[lengthKey - 1] : null;
    const { meanBonus, meanCompensation, medianCompensation, seventhPercentileCompensation, ninetythPercentileCompensation } = await metricsCompensation(response.compensation);

    return {
        // Passed to the page component as props
        props: {
            post: response.compensation.slice(0, 50),
            country,
            [keyOne]: Object.values(response)[1],
            [keyTwo]: Object.values(response)[2],
            compensation: meanCompensation,
            median: medianCompensation,
            city_link_department,
            seventhPercentileCompensation,
            ninetythPercentileCompensation,
            bonus: meanBonus,
            seo: response.compensation[0].seo,
            intervalGraph
        },
    }
}


export const getStaticPaths: GetStaticPaths = async () => {

    await connectionDB();
    const path = await buildPath();
    return {
        paths: path.answerDepartmentRole,
        fallback: false, // can also be true or 'blocking'
    }
}


const RoleData = (props: any) => {

    return (
        <>
            <NextSeo
                title={`Discover ${props.gender ? props.gender : ''} ${props.role ? props.seo[0] : 'Software Engineer'} salary in ${props.city_link_department ? props.city_link_department : props.department ? props.department : props.country}`}
                description={`Leverage our database to know the ${props.role ? props.seo[0] : 'Software Engineer'} wage in ${props.city_link_department ? props.city_link_department : props.department ? props.department : props.country}`}
            />
            <OptimizedPage
                country={'France'}
                compensation={props.compensation}
                median={props.median}
                area={props.department}
                role={props.role}
                gender={props.gender}
                city_link_department={props.city_link_department}
                seventhPercentileCompensation={props.seventhPercentileCompensation}
                ninetythPercentileCompensation={props.ninetythPercentileCompensation}
                bonus={props.bonus}
                seo={props.seo}
            />
            <VerticalBar compensation={props.intervalGraph} />
            <Table
                compensation={props}
                department={props.department}
                role={props.role}
                gender={props.gender}
                country={'France'}
                participant={props.participant}
                city_link_department={props.city_link_department}
                bonus={props.bonus}
                seo={props.seo}
            />
            <Footer />
        </>
    )
}

export default RoleData;