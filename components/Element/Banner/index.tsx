import Link from "next/link";

const Banner = () => {

    return (
        <div className='grid grid-cols-12 flex items-center mt-6 bg-blue-grey-70 py-6 px-2 rounded-lg shadow'>
        <p className='text-s text-blue-grey-600 mt-2 col-span-7'>If you want to get help to negociate your next salary, feel free to join our membership </p>
        <div>
            <div className="rounded-md shadow w-40 lg:w-60 ">
                <Link href="https://framaforms.org/annual-membership-help-1663166740">
                    <a
                        className=" flex items-center justify-center rounded-md border border-transparent bg-green-500 px-5 py-3 text-base font-medium text-blue-grey-50 hover:bg-cyan-700"
                    >
                        Get Access
                    </a>
                </Link>

            </div>
        </div>
    </div>
    )
}

export default Banner;