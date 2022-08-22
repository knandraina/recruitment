interface OptimizedPageProps {
    area: string,
    compensation: number,
    median: number,
}

const Page = (props: OptimizedPageProps) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 px-4">
                <div>
                    <h1 className="text-2xl tracking-tight font-bold text-blue-grey-800 sm:text-4xl md:text-3xl mt-4">
                        <span className="block xl:inline">Software engineer salaries in {props.area}</span>{' '}
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-4 content-center">
                <div>
                    <p className="text-blue-grey-300 mt-2 text-center">Average revenue</p>
                    <p className="text-2xl text-light-blue-400 text-center">{props.compensation} €</p>
                </div>
                <div>
                    <p className="text-blue-grey-300 mt-2 text-center">Median revenue</p>
                    <p className="text-2xl text-light-blue-400 text-center">{props.median} €</p>
                </div>
            </div>
        </>
    )
}

export default Page