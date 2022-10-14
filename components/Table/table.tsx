
import { withTranslation } from 'react-i18next';
import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Banner from '../Element/Banner';
import Salary from '../Form/DataForm/Field/Salary';


interface TableProps {
    area?: string,
    compensation: any,
    department?: any,
    role?: any,
    gender?: any
    country?: any,
    participant?: any,
    city_link_department?: any
    bonus?: any,
    seo?: any,
    t?: any,
    locale?: any
}

const Table = (props: TableProps) => {
    const router = useRouter()
    const salaries: any = {
        fr:
            { singular: 'salaire', plural: 'salaires' },
        en: {
            singular: 'salary', plural: 'salaries'
        }
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className='grid grid-cols-12'>
                <div className='col-start-2 col-span-10'>
                    {router.pathname === '/' ? '' : <p className='text-s text-blue-grey-700 mt-2'>{props.t('summary_salary', { gender: props.gender ? props.gender[props.locale].gender.toLowerCase() : '', role: props.role ? props.seo[props.locale].second_role.toLowerCase() : 'Software engineer', area: props.city_link_department ? `${props.city_link_department[props.locale].area}` : props.area ? `à ${props.area}` : `${props.country}`, bonus: props.bonus, participant: props.participant ? props.participant : props.compensation.post.length, plural: props.compensation.post.length > 1 ? salaries[props.locale].plural : salaries[props.locale].singular })}</p>}
                    {router.pathname === '/' ? '' : <p className='text-xs text-blue-grey-200 mt-2'>{props.t('note')}</p>}
                </div>
            </div>
            <div className="mt-8 flex flex-col grid grid-cols-12">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 col-start-2 col-span-10">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-blue-grey-300">
                                <thead className="bg-blue-grey-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-blue-grey-900 sm:pl-6"
                                        >
                                            {props.t('company_name')}
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            {props.t('gender')}
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            {props.t('role')}
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            {props.t('salary')}
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            {props.t('bonus')}                                       </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            {props.t('years_of_experience')}
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            {props.t('seniority')}
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            {props.t('location')}
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            {props.t('office')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-blue-grey-200 bg-blue-grey-50">
                                    {props.compensation ? props.compensation.post.map((transaction: any) => (
                                        <tr key={transaction._id}>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs font-medium text-blue-grey-900">
                                                {transaction.company.compensation.length < 3 ? 'Private' : transaction.anonymous === false ? transaction.company.name : 'Private'}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs font-medium text-blue-grey-900 hover:text-blue-grey-200">
                                                <Link href={`/salaries/france/${transaction.department_lower_case}/${transaction.gender.toLowerCase()}`}>
                                                    <a className=''>{transaction.gender}</a>
                                                </Link>
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs font-medium text-blue-grey-900 hover:text-blue-grey-200">
                                                {<Link href={`/salaries/france/${transaction.department_lower_case}/${transaction.category_role}`}><a>{transaction.category_role}</a></Link>}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs text-blue-grey-900 text-left">€ {transaction.revenue}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs text-blue-grey-500">€ {transaction.bonus}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs text-blue-grey-500">{transaction.years_of_experience}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs text-blue-grey-500">{transaction.seniority}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs text-blue-grey-500 hover:text-blue-grey-200"> <Link href={`/salaries/france/${transaction.department.toLowerCase()}`}><a>{transaction.department}</a></Link></td>
                                            <td className="whitespace-nowrap px-2 py-2 text-xs text-blue-grey-500">{transaction.office_setup}</td>
                                        </tr>
                                    )) : ''}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <div></div> */}
            </div>
        </div>
    )
}
export default withTranslation()(Table);