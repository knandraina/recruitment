interface OptimizedPageProps {
    area?: string,
    compensation: number,
    median: number,
    role?: string
    gender?: string,
    country?: string
}

const Page = (props: OptimizedPageProps) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-2xl tracking-tight font-bold text-blue-grey-800 sm:text-4xl md:text-3xl mt-4">
                        <span className="block xl:inline">{`${props.role ? props.role :'Software Engineer'} salary ${props.gender ? `for ${props.gender}` : ''} in ${props.area ? props.area : props.country}`}</span>{' '}
                    </h1>
                    <p className="text-s text-blue-grey-700 mt-2">{`How much does a ${props.role ? props.role :'Software Engineer'} make in the ${props.area ? props.area : props.country}?`}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 px-4 content-center">
                <div>
                    <p className="text-blue-grey-300 mt-2 text-center">Average salary</p>
                    <p className="text-2xl text-light-blue-400 text-center">{props.compensation} €</p>
                </div>
                <div>
                    <p className="text-blue-grey-300 mt-2 text-center">Median salary</p>
                    <p className="text-2xl text-light-blue-400 text-center">{props.median} €</p>
                </div>
            </div>
            <p className="px-4 sm:px-6 lg:px-8 mt-2 text-s text-blue-grey-700">{`The average salary for ${props.role ? props.role :'Software Engineer'} in ${props.area} is ${props.compensation} €, and the median salary is ${props.median} €`}</p>
        </>
    )
}

export default Page