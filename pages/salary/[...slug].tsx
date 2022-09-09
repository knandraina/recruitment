import { GetStaticPaths, GetStaticProps } from "next";

import connectionDB from "../../lib/connectionDB";
import { buildPath } from "../../lib/slugLoad";
import Compensation from "../../models/compensation";


export const getStaticProps: GetStaticProps = async (context: any) => {

    return {
        props: {
            post: 'test'
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    await connectionDB();
    const response = await Compensation.find({}).populate('company')
    const path = await buildPath(response)

    return {
        paths: path,
        fallback: false
    }
}


const AllPages = () => {



    return (
        <>
            Salaries
        </>
    )
}

export default AllPages;