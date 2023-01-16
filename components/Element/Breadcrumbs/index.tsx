/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/20/solid'
import SelectMenu from '../SelectMenu'
import SelectMenuTwo from '../../SelectMenuTwo';

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import SelectMenuThree from '../SelectMenuThree';
import Link from 'next/link';


const departmentChoice = [
    { entity: '', data: '' },
     { entity: 'department', data: 'bouches-du-rhone' } ,
     { entity: 'department', data: 'paris' } ,
     { entity: 'department', data: 'alpes-maritimes' } ,
     { entity: 'department', data: 'rhone' } ,
     { entity: 'department', data: 'haute-garonne' } ,
     { entity: 'department', data: 'loire-atlantique' } ,
     { entity: 'department', data: 'drome' } ,
     { entity: 'department', data: 'nord' } ,
     { entity: 'department', data: 'moselle' } ,
     { entity: 'department', data: 'ille-et-vilaine' } ,
     { entity: 'department', data: 'bas-rhin' } ,
     { entity: 'department', data: 'maine et loire' } ,
     { entity: 'department', data: 'lorraine' } ,
    {  entity: 'department', department: 'alpes-de-haute-provence' },
     { entity: 'department', data: 'isere' } ,
     { entity: 'department', data: 'vienne' } ,
     { entity: 'department', data: 'gironde' } ,
     { entity: 'department', data: 'haut-de-seine' } ,
     { entity: 'department', data: 'baviere' } ,
     { entity: 'department', data: 'vaucluse' } ,
     { entity: 'department', data: 'herault' } ,
     { entity: 'department', data: 'morbihan' } ,
     { entity: 'department', data: 'var' } ,
     { entity: 'department', data: 'rhone-alpes' } ,
     { entity: 'department', data: 'loiret' } ,
     { entity: 'department', data: 'seine-maritime' } ,
     { entity: 'department', data: 'meurthe-et-moselle' } ,
     { entity: 'department', data: 'indre-et-loire' } ,
     { entity: 'department', data: 'pyrenees-atlantiques' } ,
     { entity: 'department', data: 'charente-maritime' } ,
     { entity: 'department', data: "cotes-d'armor" } ,
     { entity: 'department', data: 'savoie' }
  ]


const roleChoice = [
    { entity: '', data: '' },
    { entity: 'role', data: 'Software Engineer, Back-end'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Full-Stack'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Front-end'.toLowerCase() },
    { entity: 'role', data: 'Principal Engineer'.toLowerCase() },
    { entity: 'role', data: 'DevOps'.toLowerCase() },
    { entity: 'role', data: 'AdminSys'.toLowerCase() },
    { entity: 'role', data: 'Data Analyst'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer'.toLowerCase() },
    { entity: 'role', data: 'Software Architect'.toLowerCase() },
    { entity: 'role', data: 'Data Scientist'.toLowerCase() },
    { entity: 'role', data: 'Machine Learning Engineer'.toLowerCase() },
    { entity: 'role', data: 'Software Security Engineer'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Embedded Systems'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Mobile'.toLowerCase() },
    { entity: 'role', data: 'Engineering Director'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Digital Signal Processing Systems'.toLowerCase() },
    { entity: 'role', data: 'CTO'.toLowerCase() },
    { entity: 'role', data: 'Data Engineer' .toLowerCase()},]

    
const genderChoice = [
    { entity: '', data: '' },
    { entity: 'gender', data: 'male' },
    { entity: 'gender', data: 'female' }
]

const all = [
    { entity: '', data: '' },
    { entity: 'department', data: 'bouches-du-rhone' },
    { entity: 'department', data: 'paris' },
    { entity: 'department', data: 'alpes-maritimes' },
    { entity: 'department', data: 'rhone' },
    { entity: 'department', data: 'haute-garonne' },
    { entity: 'department', data: 'loire-atlantique' },
    { entity: 'department', data: 'drome' },
    { entity: 'department', data: 'nord' },
    { entity: 'department', data: 'moselle' },
    { entity: 'department', data: 'ille-et-vilaine' },
    { entity: 'department', data: 'bas-rhin' },
    { entity: 'department', data: 'maine et loire' },
    { entity: 'department', data: 'lorraine' },
    { entity: 'department', data: 'alpes-de-haute-provence' },
    { entity: 'department', data: 'isere' },
    { entity: 'department', data: 'vienne' },
    { entity: 'department', data: 'gironde' },
    { entity: 'department', data: 'haut-de-seine' },
    { entity: 'department', data: 'baviere' },
    { entity: 'department', data: 'vaucluse' },
    { entity: 'department', data: 'herault' },
    { entity: 'department', data: 'morbihan' },
    { entity: 'department', data: 'var' },
    { entity: 'department', data: 'rhone-alpes' },
    { entity: 'department', data: 'loiret' },
    { entity: 'role', data: 'Software Engineer, Back-end'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Full-Stack'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Front-end'.toLowerCase() },
    { entity: 'role', data: 'Principal Engineer'.toLowerCase() },
    { entity: 'role', data: 'DevOps'.toLowerCase() },
    { entity: 'role', data: 'AdminSys'.toLowerCase() },
    { entity: 'role', data: 'Data Analyst'.toLowerCase() },
    { entity: 'role', data: 'Software Architect'.toLowerCase() },
    { entity: 'role', data: 'Data Scientist'.toLowerCase() },
    { entity: 'role', data: 'Machine Learning Engineer'.toLowerCase() },
    { entity: 'role', data: 'Software Security Engineer'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Embedded Systems'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Mobile'.toLowerCase() },
    { entity: 'role', data: 'Engineering Director'.toLowerCase() },
    { entity: 'role', data: 'Software Engineer, Digital Signal Processing Systems'.toLowerCase() },
    { entity: 'role', data: 'CTO'.toLowerCase() },
    { entity: 'role', data: 'Data Engineer'.toLowerCase() },
    { entity: 'gender', data: 'male' },
    { entity: 'gender', data: 'female' }
]


export default function Breadcrumbs() {
    const router = useRouter();
    const departmentPath = router.query.department ? router.query.department : '';
    const rolePath = router.query.role ? router.query.role : ''
    const genderPath = router.query.gender ? router.query.gender : ''


    const [department, setDepartment] = useState<any>(departmentPath);
    const [role, setRole] = useState<any>(rolePath);
    const [gender, setGender] = useState<any>(genderPath);

    useEffect(() => {
        const i = all.findIndex((e: any) => e.data === department);
        const responseDepartment = i !== -1 ? all[i].entity : '';
        const j = all.findIndex((e: any) => e.data === role);
        const responseRole = j !== -1 ? all[j].entity : '';
        const k = all.findIndex((e: any) => e.data === gender);
        const responseGender = k !== -1 ? all[k].entity : '';

        if (responseDepartment === 'department' && responseRole === 'role' && responseGender === 'gender') {
            setDepartment(department)
            setRole(role.toLowerCase());
            setGender(genderPath)
        } else if (responseDepartment === 'role' && responseRole === 'gender') {
            setRole(department.toLowerCase())
            setGender(role);
            setDepartment('');
        } else if (responseDepartment === 'department' && responseRole === 'role') {
           
            setGender('');
            setDepartment(department)
            setRole(role.toLowerCase());
        } else if (responseDepartment === 'department' && responseRole === 'gender') {

            setGender(role);
            setDepartment(department)
            setRole('');
        } else if (responseDepartment === 'department') {

            setDepartment(department)
            setGender('')
            setRole('');
        } else if (responseDepartment === 'role') {

            setRole(department.toLowerCase())
            setDepartment('')
            setGender('')
        } else if (responseDepartment === 'gender'){

            setGender(department)
            setDepartment('')
            setRole('')
        }        

    }, [])


    const handleChange = async (form: string, results: string) => {
        if (form === 'menu_one') {
            const i = all.findIndex((e: any) => e.data === departmentPath);
            const responseDepartment = i !== -1 ? all[i].entity.toLowerCase() : '';
            const j = all.findIndex((e: any) => e.data === rolePath);
            const responseRole = all[j].entity.toLowerCase();
            const k = all.findIndex((e: any) => e.data === genderPath);
            const responseGender = k !== -1 ? all[k].entity.toLowerCase() : '';


            setDepartment(results);

            if (responseGender !== '' && responseRole !== '') {
                router.push(`/salaries/france/${results.toLowerCase()}/${rolePath}/${genderPath}`);
            } else if (responseDepartment === 'department' && responseRole !== '') {

                router.push(`/salaries/france/${results.toLowerCase()}/${rolePath}`);
            } else if (responseDepartment === 'department' && responseRole === 'role' && responseGender === 'gender') {

                router.push(`/salaries/france/${results.toLowerCase()}/${rolePath}/${genderPath}`)
            } else if (responseDepartment === 'role' && responseRole === 'gender') {

                router.push(`/salaries/france/${results.toLowerCase()}/${departmentPath}/${rolePath}`)
            } else if (responseDepartment === 'role' || responseDepartment === 'gender') {

                router.push(`/salaries/france/${results.toLowerCase()}/${departmentPath}`)
            } else if (responseDepartment === '' && responseRole === '' && responseGender === '') {

                router.push(`/salaries/france/${results.toLowerCase()}`)
            } else {

                router.push(`/salaries/france/${results.toLowerCase()}`)
            }


        } else if (form === 'menu_two') {
            setRole(results);
            const i = all.findIndex((e: any) => e.data === departmentPath);
            const responseDepartment = i !== -1 ? all[i].entity.toLowerCase() : '';
            const j = all.findIndex((e: any) => e.data === rolePath);
            const responseRole = all[j].entity.toLowerCase();
            const k = all.findIndex((e: any) => e.data === genderPath);
            const responseGender = k !== -1 ? all[k].entity.toLowerCase() : '';



            if (responseDepartment === 'department' && responseRole === 'role' && responseGender === 'gender') {

                router.push(`/salaries/france/${departmentPath}/${results}/${genderPath}`)

            } else if (responseDepartment === 'department' && responseRole === 'gender') {

                router.push(`/salaries/france/${departmentPath}/${results}/${rolePath}`)

            } else if (responseDepartment === 'gender' && responseRole === 'role') {

                router.push(`/salaries/france/${results}/${departmentPath}`);

            } else if (responseDepartment === 'role' && responseRole === 'gender' ) {

                router.push(`/salaries/france/${results}/${rolePath}`);

            } else if (responseDepartment === 'department' && responseRole === 'role') {

                router.push(`/salaries/france/${departmentPath}/${results}`)

            } else if (responseDepartment === 'gender') {

                router.push(`/salaries/france/${results}/${departmentPath}`);

            } else if (responseDepartment === 'department') {

                router.push(`/salaries/france/${departmentPath}/${results}`);

            } else if ((responseDepartment === 'role' && responseGender === '' && responseRole === '') || (responseDepartment === '' && responseGender === '' && responseRole === '')) {

                router.push(`/salaries/france/${results}`);
            } 

        } else if (form === 'menu_three') {

            const i = all.findIndex((e: any) => e.data === departmentPath);
            const responseDepartment = i !== -1 ? all[i].entity.toLowerCase() : '';
            const j = all.findIndex((e: any) => e.data === rolePath);
            console.log(all, 'test keke', j, 'marche pas', rolePath)
            const responseRole = all[j].entity.toLowerCase();
            const k = all.findIndex((e: any) => e.data === genderPath);
            const responseGender = k !== -1 ? all[k].entity.toLowerCase() : '';



            setGender(results);
            if (responseDepartment === '' && responseGender === '' && responseRole === '') {

                router.push(`/salaries/france/${results}`);
            } else if (responseDepartment === 'gender' && responseGender === '' && responseRole === '') {

                router.push(`/salaries/france/${results}`);
            } else if (responseDepartment === 'department' && responseRole === 'role') {

                router.push(`/salaries/france/${departmentPath}/${rolePath}/${results}`)
            } else if (responseDepartment === 'department' && responseRole === 'role' && responseGender === 'gender') {

                router.push(`/salaries/france/${departmentPath}/${rolePath}/${results}`)
            } else if (responseDepartment !== 'gender' && responseRole === '') {

                router.push(`/salaries/france/${departmentPath}/${results}`);
            } else if (responseDepartment !== 'gender' && responseRole === 'gender') {

                router.push(`/salaries/france/${departmentPath}/${results}`);
            }



        }
    }

    return (
        <nav className="flex hidden lg:block" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <Link href="/salaries/france" >
                            <a className="text-gray-400 hover:text-gray-500">
                                <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                <span className="sr-only">Home</span>
                            </a>
                        </Link>
                    </div>
                </li>
                {/* {pages.map((page) => ( */}
                <li key={1}>
                    <div className="flex items-center">
                        <svg
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                        <SelectMenu choice={departmentChoice} url={department} handleChange={handleChange} />
                    </div>
                </li>
                <li key={2}>
                    <div className="flex items-center">
                        <svg
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                        <SelectMenuTwo choice={roleChoice} url={role} handleChange={handleChange} />
                    </div>
                </li>

                <li key={3}>
                    <div className="flex items-center">
                        <svg
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                        <SelectMenuThree choice={genderChoice} url={gender} handleChange={handleChange} />
                    </div>
                </li>
                {/* ))} */}
            </ol>
        </nav>
    )
}
