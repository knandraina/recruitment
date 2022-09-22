import NavBar from "../Element/NavBar"
import Breadcrumbs from "../Element/Breadcrumbs"
import { useRouter } from "next/router"

const Page = ({ children }: any) => {

    const router = useRouter();

    return (
        <>

            <div className='min-h-screen bg-blue-grey-50'>
                <NavBar />
                <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8">
                    <div className="col-start-2 col-span-10">
                        {router.pathname !== '/' && router.pathname !== '/new-salary' && router.pathname !== '/directory' ? <Breadcrumbs /> : ''}
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}

export default Page
