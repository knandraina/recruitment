import NavBar from "../Element/NavBar"
import Breadcrumbs from "../Element/Breadcrumbs"

const Page = ({ children }: any) => {
    return (
        <>

            <div className='min-h-screen bg-blue-grey-50'>
                <NavBar />
                <Breadcrumbs />
                
                {children}
            </div>
        </>
    )
}

export default Page
