import { GetStaticProps, GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react';

import { loadData, loadDepartmentData } from '../../../../../../lib/load-data'
import connectionDB from '../../../../../../lib/connectionDB'
import { metricsCompensation } from '../../../../../../lib/calculation';
import { main } from '../../../../../../lib/graphicData';

import Table from '../../../../../../components/Table/table';
import OptimizedPage from '../../../../../../components/Page/OptimizedPage'
import Footer from '../../../../../../components/Element/Footer';
import { VerticalBar } from '../../../../../../components/Element/VerticalBar';
import Faq from '../../../../../../components/Faq';

import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';


// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context: any) => {
    const country: String = context.params.country;
    const role: string = context.params.role
    
    await connectionDB();
    const locale = context.locale
    const response: any = await loadData(context.params);

    const gender: string = response.compensation[0].sex;
    const intervalGraph = await main(response.compensation);
    const lengthKey = Object.keys(response).length
    const city_link_department = response.hasOwnProperty('city_link_department') ? Object.values(response)[lengthKey - 1] : null;
    const department = await response.compensation[0].department
    const { meanBonus, meanCompensation, medianCompensation, seventhPercentileCompensation, ninetythPercentileCompensation } = await metricsCompensation(response.compensation);

    return {
        // Passed to the page component as props
        props: {
            ...(await serverSideTranslations(locale, ['common','seo','optimizedPage', 'footer'])),
            post: response.compensation.slice(0, 50),
            country,
            department,
            role,
            gender,
            compensation: meanCompensation,
            median: medianCompensation,
            city_link_department,
            seventhPercentileCompensation,
            ninetythPercentileCompensation,
            bonus: meanBonus,
            seo: response.compensation[0].seo,
            intervalGraph,
            locale,
            job_description: response.compensation[0].job_description
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    await connectionDB();
    const path: Array<any> = await loadDepartmentData();

    const fr = path.map( (items: any) => {
        return  {...items, locale: 'fr'}
    })
    const en = path.map( (items: any) => {
        return  {...items, locale: 'en'}
    })

    const languagePath = fr.concat(en)

    return {
        paths: languagePath,
        fallback: false, // can also be true or 'blocking'
    }
}


const GenderData = (props: any) => {
    const { t } = useTranslation('seo')


    return (
        <>
            <NextSeo
                title={t('headline', {role: props.role ? props.seo[props.locale].first_role : 'Software Engineer', gender: props.gender ? props.gender[props.locale].gender : '', department: props.city_link_department ? props.city_link_department[props.locale].area : props.department ? props.department : props.country})}
                description={t('description_headline', {role: props.role ? props.seo[props.locale].first_role : 'Software Engineer', department: props.department ? props.department : props.country})}
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
                locale={props.locale}
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
                locale={props.locale}
            />
             <Faq
                job_description={props.job_description}
                role={props.role}
                locale={props.locale}
                seo={props.seo}
            />
            <Footer />
        </>
    )
}

export default GenderData;