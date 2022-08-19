import Link from "next/link";
import { useState } from "react";

import FormRedirection from "../../Form/FormRedirection";

interface HeroesProps {
    table: any
}

const Heroes = (props: HeroesProps) => {

    const [department, setDepartment] = useState<any>('France')

    async function handleChange(area: string) {
        setDepartment(area);
    }


    return (
        <div className="relative bg-blue-grey-800 overflow-hidden min-h-screen">
            <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
                <svg
                    className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-blue-grey-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
                    width={364}
                    height={384}
                    viewBox="0 0 364 384"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
                </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24">
                <main className="mt-16 sm:mt-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                <div>
                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-blue-grey-50 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                                        Level up your salary
                                    </h1>
                                    <p className="mt-3 text-base text-blue-grey-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Stop asking yourself if you are paid correctly or not. Leverage our database to get confidence when you ask for your next raise or to know if your next company will pay you well compared to competitor.
                                    </p>
                                    <FormRedirection department={department} handleChange={handleChange} textButton={'Explore the data'} />
                                    <Link href={'https://framaforms.org/salary-survey-1658479303'} className='mt-2'><a className="text-blue-grey-400 text-sm">Share your salaries</a></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
                {props.table}
            </div>
        </div>
    )
}

export default Heroes;