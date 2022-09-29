
import Banner from "../Element/Banner"
import Panel from "../Element/Panel"

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
    bonus?: any,
    seo?: any
}

const Page = (props: OptimizedPageProps) => {
    const text = 'Software Engineer gather all the role like Front-end Engineer, Back-end Engineer... . There are several different Software Engineering roles, and each one offers a specific focus within the organization. Those in the applications development field work with C# and Java programming languages to problem solve software that is not web based. Systems development jobs consist of creating and coding the background software that supports the development of applications. Web developers are responsible for designing applications and software that work in a variety of web browsers. Software Engineers working in embedded systems development create software and computing systems that work in vehicles and other devices that are not computer based.'

    return (
        <>
            <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8">
                <div className="col-start-2 col-span-10">
                    <h1 className="text-2xl tracking-tight font-bold text-blue-grey-800 sm:text-4xl md:text-3xl mt-4">
                        <span className="block xl:inline">{`${props.role ? props.role : 'Software Engineer'} salary ${props.gender ? `for ${props.gender}` : ''} in ${props.city_link_department ? props.city_link_department : props.area ? props.area : props.country}`}.</span>{' '}
                    </h1>
                </div>
            </div>
            {props.role? <Panel text={props.seo[2]} />: <Panel text={text} />}  
            <Banner data={props} />
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