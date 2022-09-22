
import Banner from "../Element/Banner"

interface OptimizedPageProps {
    area?: string,
    compensation: number,
    median: number,
    role?: string
    gender?: string,
    country?: string,
    city_link_department?: string,
    seventhPercentileCompensation?: any,
    ninetythPercentileCompensation?: any,
    bonus?: any
}

const Page = (props: OptimizedPageProps) => {

    return (
        <>
            <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8">
                <div className="col-start-2 col-span-10">
                    <h1 className="text-2xl tracking-tight font-bold text-blue-grey-800 sm:text-4xl md:text-3xl mt-4">
                        <span className="block xl:inline">{`${props.role ? props.role : 'Software Engineer'} salary ${props.gender ? `for ${props.gender}` : ''} in ${props.city_link_department ? props.city_link_department : props.area ? props.area : props.country}`}.</span>{' '}
                    </h1>
                </div>
            </div>
          <Banner data={props}/>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flex flex-col grid grid-cols-12">
                    <div className="col-start-2 col-span-10">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page