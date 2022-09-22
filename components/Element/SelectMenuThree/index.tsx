/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface SelectMenuTwoProps {
    choice: any,
    url: any,
    handleChange: Function

}

export default function SelectMenuThree(props: SelectMenuTwoProps) {
    const router = useRouter();

    const departmentPath = router.query.department;
    const rolePath = router.query.role;
    const genderPath = router.query.gender;

    const [choiceForUser, setChoiceForUser] = useState(props.choice)

    useEffect(() => {
        // const department = props.choice;
        // const i = department.findIndex((e: any) => e.data === rolePath);
        // const response = i !== -1 ? department[i].entity : '';
        // const j = department.findIndex((e: any) => e.data === departmentPath);
        // const responseJ = j !== -1 ? department[j].entity : '';
        
        // if (response === 'gender' && responseJ === 'department') {
        //     let arr = department.filter((item: any) => item.entity !== 'gender');
        //         arr = arr.filter((item: any) => item.entity !== 'department');
        //     setChoiceForUser(arr)
        // } else if (response === 'role' && responseJ === 'gender') {
        //     let arr = department.filter((item: any) => item.entity !== 'role');
        //         arr = arr.filter((item: any) => item.entity !== 'gender');
        //     setChoiceForUser(arr)
        // } else if (response === 'department' && responseJ === 'role') {
        //     let arr = department.filter((item: any) => item.entity !== 'department');
        //         arr = arr.filter((item: any) => item.entity !== 'role');
        //     setChoiceForUser(arr)
        // }

        // let arr = department.filter((item: any) => item.entity !== 'department');
        // arr = arr.filter((item: any) => item.entity !== 'role');

        // setChoiceForUser(arr);


    },[])
    
    const handleChange = async (results: string) => {
        props.handleChange('menu_three', results);
    }

    return (
        <div className='w-80'>
        <Listbox value={props.url} onChange={handleChange}>
            
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-blue-grey-700"></Listbox.Label>
                    <div className="relative mt-1 w-full">
                        <Listbox.Button className="relative w-full h-10 cursor-default rounded-md border border-blue-grey-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <span className="block truncate">{props.url}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-blue-grey-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-blue-grey-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {choiceForUser.map((person: any, i: number) => (
                                    <Listbox.Option
                                        key={i}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-blue-grey-50 bg-cyan-600' : 'text-blue-grey-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={person.data}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {person.data}
                                                </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
        </div>
    )
}
