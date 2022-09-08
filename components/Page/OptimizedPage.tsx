interface OptimizedPageProps {
    area: string,
    compensation: number,
    median: number,
    role?: string
}

const Page = (props: OptimizedPageProps) => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8">
                <div className="col-start-2 col-span-10">
                    <h1 className="text-2xl tracking-tight font-bold text-blue-grey-800 sm:text-4xl md:text-3xl mt-4">
                        <span className="block xl:inline">{`${props.role ? props.role : 'Software Engineer'} salary in ${props.area}`}</span>{' '}
                    </h1>
                    <p className="text-s text-blue-grey-700 mt-2">{`How much does a ${props.role ? props.role : 'Software Engineer'} make in the ${props.area}?`}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 px-4 content-center">
                <div className="mt-8 flex flex-col">
                    <p className="text-blue-grey-300 mt-2 text-center">Average salary</p>
                    <p className="text-2xl text-light-blue-400 text-center">{props.compensation} €</p>
                </div>
                <div className="mt-8 flex flex-col">
                    <p className="text-blue-grey-300 mt-2 text-center">Median salary</p>
                    <p className="text-2xl text-light-blue-400 text-center">{props.median} €</p>
                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flex flex-col grid grid-cols-12">
                    <div className="col-start-2 col-span-10">
                        <p className="mt-2 text-s text-blue-grey-700">{`The average salary for ${props.role ? props.role : 'Software Engineer'} in ${props.area} is ${props.compensation} €, and the median salary is ${props.median} €`}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page