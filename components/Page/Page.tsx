import NavBar from "../Element/NavBar"
import Breadcrumbs from "../Element/Breadcrumbs"
import { useRouter } from "next/router"

const Page = ({ children }: any) => {

    const router = useRouter();

    return (
        <>

            <div className='min-h-screen bg-blue-grey-50'>
                <NavBar />
                {router.pathname !== '/' && router.pathname !== '/new-salary' && router.pathname !== '/directory' ? <Breadcrumbs /> : ''}
                
                {children}
            </div>
        </>
    )
}

export default Page
