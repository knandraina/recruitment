import NavBar from "../Element/NavBar"

const Page = ({ children }: any) => {
    return (
        <>

            <div className='min-h-screen bg-blue-grey-50'>
                <NavBar />
                {children}
            </div>
        </>
    )
}

export default Page
