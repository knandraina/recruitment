import Link from "next/link"
import connectionDB from "../../lib/connectionDB"
import { loadDepartmentData } from "../../lib/load-data"
import { buildPath, findUniqueValues } from "../../lib/slugLoad"
import Compensation from "../../models/compensation"

export async function getStaticProps(context: any) {

    await connectionDB()
    const response = await Compensation.find({ approved: true }).populate('company')
    const path = await buildPath();
    const uniqueValues = await findUniqueValues(response);
    const loadFullPath = await loadDepartmentData()
    const { uniqueDepartment,
        uniqueGender,
        uniqueRole } = uniqueValues

    const { answerDepartmentGender,
        answerDepartmentRoles,
        answerRoleGender } = path;


    return {
        props: {
            uniqueRole,
            uniqueDepartment,
            uniqueGender,
            answerDepartmentGender,
            answerDepartmentRoles,
            answerRoleGender,
            loadFullPath
        }, // will be passed to the page component as props
    }
}


const Directory = (props: any) => {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className='grid grid-cols-12'>
                    <div className='col-start-2 col-span-10 mt-2'>
                        <h2 className="mt-4 text-lg font-bold tracking-tight text-blue-grey-600 sm:text-5xl sm:tracking-tight md:text-4xl md:tracking-tight">
                            Role
                        </h2>
                        <div className="grid grid-cols-4 gap-6 mt-4">
                            {props.uniqueRole.map((data: any, key: number) => {
                                return (
                                    <div key={key} className='hover:text-blue-grey-200 font-medium text-blue-grey-900'>
                                        <Link href={`/salaries/france/${data}`}>
                                            <a>{data} Salary </a>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className='col-start-2 col-span-10 mt-2'>
                        <h2 className="mt-4 text-lg font-bold tracking-tight text-blue-grey-600 sm:text-5xl sm:tracking-tight md:text-4xl md:tracking-tight">
                            Gender
                        </h2>
                        <div className="grid grid-cols-4 gap-6 mt-4">
                            {props.uniqueGender.map((data: any, key: number) => {
                                return (
                                    <div key={key} className='hover:text-blue-grey-200 font-medium text-blue-grey-900'>
                                        <Link href={`/salaries/france/${data.toLowerCase()}`}>
                                            <a>{data} Salary</a>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className='col-start-2 col-span-10 mt-2'>
                        <h2 className="mt-4 text-lg font-bold tracking-tight text-blue-grey-600 sm:text-5xl sm:tracking-tight md:text-4xl md:tracking-tight">
                            Department
                        </h2>
                        <div className="grid grid-cols-4 gap-6 mt-4">
                            {props.uniqueDepartment.map((data: any, key: number) => {
                                return (
                                    <div key={key} className='hover:text-blue-grey-200 font-medium text-blue-grey-900'>
                                        <Link href={`/salaries/france/${data}`}>
                                            <a className="capitalize">{data} Salary </a>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className='col-start-2 col-span-10 mt-2'>
                        <h2 className="mt-4 text-lg font-bold tracking-tight text-blue-grey-600 sm:text-5xl sm:tracking-tight md:text-4xl md:tracking-tight">
                            Department Role
                        </h2>
                        <div className="grid grid-cols-4 gap-6 mt-4">
                            {props.answerDepartmentRoles.map((data: any, key: number) => {
                                return (
                                    <div key={key} className='hover:text-blue-grey-200 font-medium text-blue-grey-900'>
                                        <Link href={`/salaries/france/${data.params.department}/${data.params.role}`}>
                                            <a className='capitalize'>{data.params.department} {data.params.role} Salary </a>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className='col-start-2 col-span-10 mt-2'>
                        <h2 className="mt-4 text-lg font-bold tracking-tight text-blue-grey-600 sm:text-5xl sm:tracking-tight md:text-4xl md:tracking-tight">
                            Role Gender
                        </h2>
                        <div className="grid grid-cols-4 gap-6 mt-4">
                            {props.answerRoleGender.map((data: any, key: number) => {
                                return (
                                    <div key={key} className='hover:text-blue-grey-200 font-medium text-blue-grey-900'>
                                        <Link href={`/salaries/france/${data.params.department}/${data.params.role}`}>
                                            <a className='capitalize'>{data.params.department} {data.params.role} Salary </a>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className='col-start-2 col-span-10 mt-2'>
                        <h2 className="mt-4 text-lg font-bold tracking-tight text-blue-grey-600 sm:text-5xl sm:tracking-tight md:text-4xl md:tracking-tight">
                            Department Gender
                        </h2>
                        <div className="grid grid-cols-4 gap-6 mt-4">
                            {props.answerDepartmentGender.map((data: any, key: number) => {
                                return (
                                    <div key={key} className='hover:text-blue-grey-200 font-medium text-blue-grey-900'>
                                        <Link href={`/salaries/france/${data.params.department}/${data.params.role}`}>
                                            <a className='capitalize'>{data.params.department} {data.params.role} Salary </a>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className='col-start-2 col-span-10 mt-2'>
                        <h2 className="mt-4 text-lg font-bold tracking-tight text-blue-grey-600 sm:text-5xl sm:tracking-tight md:text-4xl md:tracking-tight">
                            Department Role Gender 
                        </h2>
                        <div className="grid grid-cols-4 gap-6 mt-4">
                            {props.loadFullPath.map((data: any, key: number) => {
                                return (
                                    <div key={key} className='hover:text-blue-grey-200 font-medium text-blue-grey-900'>
                                        <Link href={`/salaries/france/${data.params.department}/${data.params.role}/${data.params.gender}`}>
                                            <a className='capitalize'>{data.params.department} {data.params.role} {data.params.gender} Salary </a>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Directory