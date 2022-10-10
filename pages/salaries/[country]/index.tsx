
import { GetStaticProps, GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { loadData } from '../../../lib/load-data'
import connectionDB from '../../../lib/connectionDB'
import { metricsCompensation } from '../../../lib/calculation';

import Table from '../../../components/Table/table';
import OptimizedPage from '../../../components/Page/OptimizedPage'
import Footer from '../../../components/Element/Footer';
import { VerticalBar } from '../../../components/Element/VerticalBar';

import * as ss from 'simple-statistics'

import { NextSeo } from 'next-seo';
import { main } from '../../../lib/graphicData';
import { useTranslation } from 'next-i18next';
const _ = require("lodash");


// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context: any) => {
    await connectionDB();
    const locale = context.locale
    console.log(context)
    const response: any = await loadData(context.params);
    const intervalGraph = await main(response.compensation);
    const { meanBonus, meanCompensation, medianCompensation, seventhPercentileCompensation, ninetythPercentileCompensation } = await metricsCompensation(response.compensation);

    return {
        // Passed to the page component as props
        props: {
            ...(await serverSideTranslations(locale, ['common', 'footer'])),
            post: response.compensation.slice(0, 50),
            participant: response.compensation.length,
            country: 'France',
            compensation: meanCompensation,
            median: medianCompensation,
            seventhPercentileCompensation,
            ninetythPercentileCompensation,
            bonus: meanBonus,
            seo: response.compensation[0].seo,
            intervalGraph,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { country: 'france' }, locale: 'fr' }, { params: { country: 'france' }, locale: 'en' }],
        fallback: false, // can also be true or 'blocking'
    }
}

const FrenchData = (props: any) => {
    const { t } = useTranslation('common')
    return (
        <>
            <NextSeo
                title={t('headline', {role: props.role ? props.seo[0] : 'Software Engineer', gender: props.gender ? props.gender : '', department: props.city_link_department ? props.city_link_department : props.department ? props.department : props.country})}
                description={t('description_headline', {role: props.role ? props.seo[0] : 'Software Engineer', department: props.department ? props.department : props.country})}
            />
            <OptimizedPage
                country={'France'}
                compensation={props.compensation}
                median={props.median}
                area={props.department}
                role={props.role}
                gender={props.gender}
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
                bonus={props.bonus}
                seo={props.seo}
            />

            <Footer />
        </>
    )
}

export default FrenchData;