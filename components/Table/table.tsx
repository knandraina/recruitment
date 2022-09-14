import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

interface TableProps {
    compensation: any,
    department?: any,
    role?: any,
    gender?: any
    country?: any,
    participant?: any
}

const Table = (props: TableProps) => {
    const router = useRouter()

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className='grid grid-cols-12'>
                <div className='col-start-2 col-span-10'>
                    {router.pathname === '/' ? '' : <p className='text-s text-blue-grey-700 mt-2'>{`${props.participant ? props.participant : props.compensation.post.length} ${props.compensation.post.length > 1 ? 'salaries' : 'salary'} from ${props.gender ? props.gender : ''} ${props.role ? props.role : 'Software engineer'} has been posted in ${props.department ? props.department : props.country}.`}</p>}
                    {router.pathname === '/' ? '' : <p className='text-xs text-blue-grey-200 mt-2'>Currently, we don&apos;t have enough data to disclose company name. For privacy reason, we will divulge company name only when we have more than 3 answers per company. You can click on a location to discover the average salary there. </p>}

                    {Object.keys(router.query).length > 2 && props.gender || props.role ?
                        <p className='text-xs text-blue-grey-200 mt-2'>{`Maybe you wanted to visit the ${props.role ? props.role : props.gender} salary in France`}. <Link href={`/salaries/france/${props.role ? props.role : props.gender.toLowerCase()}`}>Click here.</Link></p>
                        : ''}
                    <div className='grid grid-cols-12 flex items-center mt-6'>
                        <p className='text-s text-blue-grey-600 mt-2 col-span-4'>If you want to get help to negociate your next salary, feel free to join our membership </p>
                        <div>
                            <div className="rounded-md shadow">
                                <Link href="https://framaforms.org/annual-membership-help-1663166740">
                                    <a
                                        className="flex items-center justify-center rounded-md border border-transparent bg-green-500 px-5 py-3 text-base font-medium text-blue-grey-50 hover:bg-cyan-700"
                                    >
                                        Get Access
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>


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
                                            Company name
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            Gender
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            Category Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            Salary
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            Bonus                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            Years of experience
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            Seniority
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            Location
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-blue-grey-900"
                                        >
                                            Office
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
export default Table;