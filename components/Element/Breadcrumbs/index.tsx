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
    { entity: 'role', data: 'Software Engineer, Back-end' },
    { entity: 'role', data: 'Software Engineer, Full-Stack' },
    { entity: 'role', data: 'Software Engineer, Front-end' },
    { entity: 'role', data: 'Principal Engineer' },
    { entity: 'role', data: 'DevOps' },
    { entity: 'role', data: 'AdminSys' },
    { entity: 'role', data: 'Data Analyst' },
    { entity: 'role', data: 'Software Engineer' },
    { entity: 'role', data: 'Software Architect' },
    { entity: 'role', data: 'Data Scientist' },
    { entity: 'role', data: 'Machine Learning Engineer' },
    { entity: 'role', data: 'Software Security Engineer' },
    { entity: 'role', data: 'Software Engineer, Embedded Systems' },
    { entity: 'role', data: 'Software Engineer, Mobile' },
    { entity: 'role', data: 'Engineering Director' },
    { entity: 'role', data: 'Software Engineer, Digital Signal Processing Systems' },
    { entity: 'role', data: 'CTO' },
    { entity: 'role', data: 'Data Engineer' },
    { entity: 'gender', data: 'male' },
    { entity: 'gender', data: 'female' }
]


export default function Breadcrumbs() {
    const router = useRouter();
    const departmentPath = router.query.department ? router.query.department : '';
    console.log(departmentPath);
    const rolePath = router.query.role ? router.query.role : ''
    const genderPath = router.query.gender ? router.query.gender : ''

    const [department, setDepartment] = useState(departmentPath);
    const [role, setRole] = useState<any>(rolePath);
    const [gender, setGender] = useState<any>(genderPath);


    useEffect(() => {
        const departmentPath = router.query.department ? router.query.department : '';
        const rolePath = router.query.role ? router.query.role : '';
        const genderPath = router.query.gender ? router.query.gender : '';

        setDepartment(departmentPath)
        setRole(rolePath);
        setGender(genderPath)
    }, [])


    const handleChange = async (form: string, results: string) => {
        if (form === 'menu_one') {
            setDepartment(results);
            if (rolePath !== '') {
                router.push(`/salaries/france/${results}/${rolePath}`);
            } else if (genderPath !== '' && rolePath !== '') {
                router.push(`/salaries/france/${results}/${rolePath}/${genderPath}`);
            } else {
                router.push(`/salaries/france/${results}`)
            }
        } else if (form === 'menu_two') {
            setRole(results);
            const i = departmentChoice.findIndex((e: any) => e.data === rolePath);
            const response = i !== -1 ? departmentChoice[i].entity : '';
            const j = departmentChoice.findIndex((e: any) => e.data === departmentPath);
            const responseJ = departmentChoice[j].entity

            if (responseJ === 'gender') {
                router.push(`/salaries/france/${results}/${departmentPath}`)
            } else if (responseJ === 'role') {
                router.push(`/salaries/france/${results}/${departmentPath}`)
            } else if (responseJ === 'department') {
                router.push(`/salaries/france/${departmentPath}/${results}`)

            }

        } else if (form === 'menu_three') {
            setGender(results);
            router.push(`/salaries/france/${departmentPath}/${rolePath}/${results}`)
        }
    }

    return (
        <nav className="flex" aria-label="Breadcrumb">
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
                {departmentPath !== '' ? <li key={2}>
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
                        <SelectMenuTwo choice={departmentChoice} url={role} handleChange={handleChange} />
                    </div>
                </li> : ''}

                {rolePath !== '' ? <li key={3}>
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
                        <SelectMenuThree choice={departmentChoice} url={gender} handleChange={handleChange} />
                    </div>
                </li> : ''}
                {/* ))} */}
            </ol>
        </nav>
    )
}
