import Link from "next/link";
import { withTranslation } from 'react-i18next';

const Banner = (props: any) => {

    return (
        <div className="grid grid-cols-12 px-4 content-center">
            <div className="bg-blue-grey-70 place-items-stretch col-start-2 col-span-9 lg:col-start-4 lg:col-span-6 rounded-lg shadow mt-10">
                <div className="items-center flex flex-row h-40 gap-4 lg:gap-10 2xl:gap-28">
                    <div className="hidden lg:block"></div>
                    <div className="">
                        <p className="text-xl text-light-blue-400 mt-2 text-left content-center">{props.data.compensation}</p>
                        <p className="text-blue-grey-200 text-sm text-left content-center">Average salary</p>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-l text-light-blue-400 mt-2 text-left content-center">{props.data.median}K</p>
                        <p className="text-blue-grey-200 text-sm text-left content-center">50th</p>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-l text-light-blue-400 mt-2 text-left content-center">{props.data.seventhPercentileCompensation}K</p>
                        <p className="text-blue-grey-200  text-sm text-left content-center">75th</p>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-l text-light-blue-400 mt-2 text-left content-center">{props.data.ninetythPercentileCompensation}K</p>
                        <p className="text-blue-grey-200 text-sm text-left content-center">90th</p>
                    </div>
                    <div>
                        <div>
                            <div className="rounded-md shadow w-40 lg:w-60 ">
                                <Link href="https://framaforms.org/annual-membership-help-1663166740">
                                    <a
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-grey-50 bg-green-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                                    >
                                        {props.t('main_cta_banner')}
                                    </a>
                                </Link>

                            </div>
                        </div>
                        <div className="mt-2">
                            <div>
                                <div className="rounded-md shadow w-40 lg:w-60 ">
                                    <Link href="https://framaforms.org/annual-membership-help-1663166740">
                                        <a
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-grey-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                                        >
                                            {props.t('second_cta_banner')}
                                        </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Banner)