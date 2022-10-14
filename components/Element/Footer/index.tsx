import axios from 'axios';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

import _ from "lodash";


const data = ['Alpes-Maritimes', 'Alpes-de-Haute-Provence', 'Bas-Rhin', 'Baviere', 'Bouches-du-Rhone', 'Charente-Maritime', "Cotes-d'Armor", 'Drome', 'Gironde', 'Haut-de-Seine', 'Haute-Garonne', 'Herault', 'Ille-et-Vilaine', 'Indre-et-loire', 'Isere', 'Loire-Atlantique', 'Loiret', 'Lorraine', 'Maine et Loire', 'Meurthe-et-Moselle', 'Morbihan', 'Moselle', 'Nord', 'Paris', 'Pyrenees-Atlantiques', 'Rhone', 'Rhone-Alpes', 'Savoie', 'Seine-Maritime', 'Var', 'Vaucluse', 'Vienne']

export default function Footer() {
    const router = useRouter();

    const [variable, setVariable] = useState<any>('')


    useEffect(() => {
        async function fetchData() {
            const response = Object.keys(router.query);
            // const results = await axios.post('/api/footer', { res: response })
            // const department = results.data.post;

            const departmentDivided = _.chunk(data, Math.ceil(data.length / 4))
            setVariable(departmentDivided);
        }
        fetchData()

    }, [])

    return (
        <footer className="bg-blue-grey-500 mt-10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <img
                            className="h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=gray&shade=300"
                            alt="Company name"
                        />
                        <p className="text-base text-blue-grey-900">
                            Transparency for good
                        </p>
                        {/* <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div> */}
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li>
                                    <Link href={`/directory`}>
                                                <a className="text-base text-blue-grey-300 hover:text-blue-grey-800">
                                                    Directory
                                                </a>
                                            </Link>
                                    </li>
                                    {variable.length ? variable[0].map((item: any, i: number) => (
                                        <li key={i}>
                                            <Link href={`/salaries/france/${item.toLowerCase()}`}>
                                                <a className="text-base text-blue-grey-300 hover:text-blue-grey-800">
                                                    {`Salary in ${item}`}
                                                </a>
                                            </Link>
                                        </li>
                                    )) : 'Loading'}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <ul role="list" className="mt-4 space-y-4">
                                    {variable.length ? variable[1].map((item: any, i: number) => (
                                        <li key={i}>
                                            <Link href={`/salaries/france/${item.toLowerCase()}`}>
                                                <a className="text-base text-blue-grey-300 hover:text-blue-grey-800">
                                                    {`Salary in ${item}`}
                                                </a>
                                            </Link>
                                        </li>
                                    )) : 'Loading'}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <ul role="list" className="mt-4 space-y-4">
                                    {variable.length ? variable[2].map((item: any, i: number) => (
                                        <li key={i}>
                                            <Link href={`/salaries/france/${item.toLowerCase()}`}>
                                                <a className="text-base text-blue-grey-300 hover:text-blue-grey-800">
                                                    {`Salary in ${item}`}
                                                </a>
                                            </Link>
                                        </li>
                                    )) : 'Loading'}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <ul role="list" className="mt-4 space-y-4">
                                    {variable.length ? variable[3].map((item: any, i: number) => (
                                        <li key={i}>
                                            <Link href={`/salaries/france/${item.toLowerCase()}`}>
                                                <a className="text-base text-blue-grey-300 hover:text-blue-grey-800">
                                                    {`Salary in ${item}`}
                                                </a>
                                            </Link>
                                        </li>
                                    )) : 'Loading'}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2020 Workflow, Inc. All rights reserved.</p>
          </div> */}
            </div>
        </footer>
    )
}
