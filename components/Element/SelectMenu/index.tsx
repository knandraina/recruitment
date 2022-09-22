/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface SelectMenuProps {
    choice: any,
    url: any,
    handleChange: Function

}

export default function SelectMenu(props: SelectMenuProps) {
    const handleChange = async (results: string) => {
        props.handleChange('menu_one', results);
    }
    console.log(props)

    return (
        <div className='w-80'>
            <Listbox value={props.url !== '' ? props.url : 'Choose a department'} onChange={handleChange}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium text-blue-grey-700"></Listbox.Label>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full h-10 cursor-default rounded-md border border-blue-grey-300 bg-blue-grey-50 py-2 pl-3 pr-10 text-left shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 sm:text-sm">
                                <span className="block truncate">{props.url !== '' ? props.url : 'Choose a department'}</span>
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
                                    {props.choice.map((person: any, i: number) => (
                                        <Listbox.Option
                                            key={i}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-cyan-600' : 'text-blue-grey-900',
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
                                                                active ? 'text-white' : 'text-cyan-600',
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
