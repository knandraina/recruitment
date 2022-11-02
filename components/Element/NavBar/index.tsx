/* This example requires Tailwind CSS v2.0+ */
import { withTranslation, WithTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import Button from '../Button'
import Modal from '../Modal';
import SecondaryButton from '../SecondaryButton';
import Link from 'next/link';


function NavBar() {

    const router = useRouter()
    const [modal, setModal] = useState(false);

    const handleModal = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        setModal(true);
    }

    const handleChange = async () => {
        setModal(!modal);
    }

    return (
        <Disclosure as="nav" className="bg-blue-grey-500">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    {/* <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    /> */}
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        {<Modal open={modal} handleChange={handleChange} />}
                                        {/* <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> */}
                                        <SecondaryButton value='Share your feedback' handleSubmit={handleModal} />
                                        {/* </Menu.Button> */}
                                    </div>

                                </Menu>
                                {router.locale === 'en' ?
                                    <div className='ml-1'><Link href={`https://salaries.cc/fr${router.asPath}`}><a>Changer le site en Francais</a></Link></div> :
                                    <div className='ml-1'><Link href={`https://salaries.cc${router.asPath}`}><a>Change the website in English</a></Link></div>
                                }
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}


export default withTranslation()(NavBar);