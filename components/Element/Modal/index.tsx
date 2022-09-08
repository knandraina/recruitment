/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { Dialog, Transition } from '@headlessui/react'

import TextArea from '../TextArea'
import Button from '../Button'
import axios from 'axios'

interface ModalProps {
    open: boolean,
    handleChange: Function
}

export default function Modal(props: ModalProps) {

    const [feedback, setFeedback] = useState('');

    const cancelButtonRef = useRef(null)
    const router = useRouter();

    const handleChange = async () => {
        props.handleChange();
    }

    const handleSubmit = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        const area = router.asPath
        await axios.post('/api/feedback', { feedback, area })
        props.handleChange();
        setFeedback('');
    }

    const handleChangeFeedback = async (item: string, value: string) => {
        setFeedback(value);
    }


    return (
        <Transition.Root show={props.open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleChange}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-blue-grey-500 bg-opacity-90 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-cyan-700 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <form>
                                    <TextArea value={feedback} handleChange={handleChangeFeedback} />
                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                                        <Button value='Submit your feedback' handleSubmit={handleSubmit} />
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
