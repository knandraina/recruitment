import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

interface TableProps {
    compensation: any,
    department?: any,
    role?: any,
    gender?: any
    country?: any
}

const Table = (props: TableProps) => {
    console.log(props, 'oui')
    const router = useRouter()
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            
            {router.pathname === '/' ? '' : <p className='text-s text-blue-grey-700 mt-2'>{`${props.compensation.post.length} ${props.compensation.post.length > 1 ? 'salaries' : 'salary'} from ${props.role ? props.role : 'Software engineer' } has been posted in ${props.department ?  props.department : props.country }.`}</p>}
            {router.pathname === '/' ? '' : <p className='text-xs text-blue-grey-200 mt-2'>Currently, we don&apos;t have enough data to disclose company name. For privacy reason, we will divulge company name only when we have more than 3 answers per company. You can click on a location to discover the average salary there. Scroll down to the bottom to select a particular area!</p>}
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-blue-grey-900">
                                                {transaction.company.compensation.length < 3 ? 'Private' : transaction.anonymous === false ? transaction.company.name : 'Private'}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-blue-grey-900">
                                                {transaction.gender}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-blue-grey-900">
                                                {<Link href={`/salaries/france/${transaction.department.toLowerCase()}/${transaction.category_role}`}><a>{transaction.category_role}</a></Link>}
                                                {/* test */}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-blue-grey-900 text-left">€ {transaction.revenue}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-blue-grey-500">€ {transaction.bonus}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-blue-grey-500">{transaction.years_of_experience}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-blue-grey-500">{transaction.seniority}</td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-blue-grey-500 hover:text-blue-grey-800"> <Link href={`/salaries/france/${transaction.department.toLowerCase()}`}><a>{transaction.department}</a></Link></td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-blue-grey-500">{transaction.office_setup}</td>
                                        </tr>
                                    )) : ''}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table;