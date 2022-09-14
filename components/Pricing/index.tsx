/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const includedFeatures = [
    'Dedicated help to get the best package possible',
    'Get to know if the company is for you or not',
    'Private forum access',
    'Available for one year'
]

export default function Pricing() {
    return (
        <div className="bg-blue-grey-100">
            <div className="pt-12 sm:pt-16 lg:pt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-blue-grey-900 sm:text-4xl lg:text-5xl">
                            Simple no-tricks pricing
                        </h2>
                        <p className="mt-4 text-xl text-blue-grey-600">
                            If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-blue-grey-100" />
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
                            <div className="flex-1 bg-blue-grey-50 px-6 py-8 lg:p-12">
                                <h3 className="text-2xl font-bold text-blue-grey-900 sm:text-3xl sm:tracking-tight">Annual Membership</h3>
                                <p className="mt-6 text-base text-blue-grey-500">
                                    Optimize your salary package whenever you want an increase or want to change a job.
                                </p>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <h4 className="flex-shrink-0 bg-blue-grey pr-4 text-base font-semibold text-indigo-600">
                                            What's included
                                        </h4>
                                        <div className="flex-1 border-t-2 border-blue-grey-200" />
                                    </div>
                                    <ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                                        {includedFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                                </div>
                                                <p className="ml-3 text-sm text-blue-grey-700">{feature}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-blue-grey-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                                {/* <p className="text-lg font-medium leading-6 text-blue-grey-900">Pay once, own it forever</p> */}
                                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-blue-grey-900">
                                    <span>€100</span>
                                    <span className="ml-3 text-xl font-medium tracking-normal text-blue-grey-500">EUR</span>
                                </div>
                                {/* <p className="mt-4 text-sm">
                                    <a href="#" className="font-medium text-blue-grey-500 underline">
                                        Learn about our membership policy
                                    </a>
                                </p> */}
                                <div className="mt-6">
                                    <div className="rounded-md shadow">
                                        <Link href="https://framaforms.org/annual-membership-help-1663166740">
                                            <a
                                                className="flex items-center justify-center rounded-md border border-transparent bg-blue-grey-800 px-5 py-3 text-base font-medium text-blue-grey-50 hover:bg-blue-grey-900"
                                            >
                                                Get Access
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                                <div className="mt-4 text-sm">
                                    {/* <a href="#" className="font-medium text-blue-grey-900">
                    Get a free sample <span className="font-normal text-blue-grey-500">(20MB)</span>
                  </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
