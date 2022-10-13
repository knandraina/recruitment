import { withTranslation } from 'react-i18next';

import Banner from "../Element/Banner"
import Panel from "../Element/Panel"

interface OptimizedPageProps {
    area?: string,
    compensation: number,
    median: number,
    role?: string
    gender?: any,
    country?: string,
    city_link_department?: any,
    seventhPercentileCompensation?: any,
    ninetythPercentileCompensation?: any,
    bonus?: any,
    seo?: any,
    t?: any,
    locale?: any
}

const Page = (props: OptimizedPageProps) => {


    return (
        <>
            <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8">
                <div className="col-start-2 col-span-10">
                    <h1 className="text-2xl tracking-tight font-bold text-blue-grey-800 sm:text-4xl md:text-3xl mt-4">
                        {props.locale === 'fr' ?
                            <span className="block xl:inline">{props.t('h1', { role: props.role ? props.seo.fr.first_role.toLowerCase() : 'Software Engineer', gender: props.gender ? `${props.gender[props.locale].gender.toLowerCase()}` : '', area: props.city_link_department ? `${props.city_link_department[props.locale].area}` : props.area ? `à ${props.area}` : `${props.country}` })}</span> :
                            <span className="block xl:inline">{props.t('h1', { role: props.role ? props.seo.en.first_role.toLowerCase() : 'Software Engineer', gender: props.gender ? `for ${props.gender[props.locale].gender.toLowerCase()}` : '', area: props.city_link_department ? props.city_link_department[props.locale].area : props.area ? props.area : props.country })}</span>}
                    </h1>
                </div>
            </div>
            {props.role ? <Panel text={props.t('variable_text', { description: props.seo[props.locale].description })} /> : <Panel text={props.t('basic_text')} />}
            <Banner data={props} />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flex flex-col grid grid-cols-12">
                    <div className="col-start-2 col-span-10">
                    </div>
                </div>
            </div>
        </>
    )
}

export default withTranslation()(Page)