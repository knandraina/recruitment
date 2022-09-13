import { useState } from "react";
import Router from 'next/router'
import Link from "next/link";

import Button from "../../Element/Button";
import Anonymized from "./Field/Anonymized";
import Bonus from "./Field/Bonus";
import CompanyName from "./Field/CompanyName";
import CompanySize from "./Field/CompanySize";
import CompanyStage from "./Field/CompanyStage";
import ContractType from "./Field/ContractType";
import Gender from "./Field/Gender";
import Industry from "./Field/Industry";
import OfficeSetup from "./Field/OfficeSetup";
import PlaceOfWork from "./Field/PlaceOfWork";
import Salary from "./Field/Salary";
import Seniority from "./Field/Seniority";
import StockOption from "./Field/StockOption";
import Technology from "./Field/Technology";
import Title from "./Field/Title";
import YearsInCompany from "./Field/YearsInCompany";
import YearsOfExperience from "./Field/YearsOfExperience";
import FeedbackJobForm from "./Field/FeedbackJobForm";
import SolutionTested from "./Field/SolutionTested";
import Email from "./Field/Email";
import ProductFeedback from "./Field/ProductFeedback";

import axios from "axios";
import { AnalyticsBrowser } from '@segment/analytics-next'
const apiKey: any = process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY
const analytics = AnalyticsBrowser.load({ writeKey: apiKey })


const newCompensation = {
    revenue: '',
    bonus: '',
    stock_option: '',
    gender: 'Male',
    years_in_company: '',
    years_of_experience: '',
    seniority: 'Associate / Junior',
    place_of_work: '',
    office_setup: 'Hybrid',
    technology_used: '',
    contract: 'Full-Time',
    name: '',
    company_size: '0-10',
    company_stage: 'Startup',
    industry: 'Agriculture',
    role: 'Software Engineer, Back-end',
    anonymous: "false",
    email: '',
    feedback_job_form: '',
    solution_tested: '',
    product_feedback: ''
}




const FormCompensation = () => {

    const [compensation, setCompensation] = useState(newCompensation);
    const [handleError, setHandleError] = useState<any>('')

    const handleChange = async (key: string, value: string) => {
        setCompensation({
            ...compensation,
            [key]: value
        })
    }

    const handleSubmit = async (e: React.BaseSyntheticEvent) => {
        try {
            e.preventDefault();

            const anonymousId = (await analytics.user()).anonymousId()
            await analytics.track('Form Submitted Selected', {
                compensation
            })
            await axios.post('/api/new-compensation', { compensation, anonymousId })
            setCompensation(newCompensation);

            Router.push('/salaries/france')
        } catch (error: any) {
            setHandleError(error.response.data)
            throw error
        }

    }

    return (
        <>
            <div className="grid grid-cols-8 gap-4">
                <div ></div>
                <form className="space-y-6 py-8 px-2 sm:rounded-lg sm:px-10 col-start-3 col-span-4" action="#" method="POST">
                    <h1 className="text-4xl text-blue-grey-400">Add your salary</h1>
                    <p className="text-blue-grey-300">If, for security purpose, you prefer to fill the form in Framaforms, feel free to share your data
                        <Link href='https://framaforms.org/salary-survey-1658479303'>
                            <a className="text-cyan-700"> here.</a>
                        </Link>
                    </p>
                    <p className="text-blue-grey-300">Currently, we don&apos;t have enough data to disclose company name. For privacy reason, we will divulge company name only when we have more than 3 answers per company</p>
                    <Gender value={compensation.gender} handleChange={handleChange} />
                    <CompanyName value={compensation.name} handleChange={handleChange} error={handleError.name ? handleError.name : undefined} />
                    <Industry value={compensation.industry} handleChange={handleChange} />
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <CompanyStage value={compensation.company_stage} handleChange={handleChange} />
                        </div>
                        <div>
                            <CompanySize value={compensation.company_size} handleChange={handleChange} />
                        </div>
                    </div>
                    <Title value={compensation.role} handleChange={handleChange} />
                    <ContractType value={compensation.contract} handleChange={handleChange} />
                    <Salary value={compensation.revenue} handleChange={handleChange} error={handleError.revenue ? handleError.revenue : undefined} />
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Bonus value={compensation.bonus} handleChange={handleChange} error={handleError.bonus ? handleError.bonus : undefined} />
                        </div>
                        <div>
                            <StockOption value={compensation.stock_option} handleChange={handleChange} error={handleError.stock_option ? handleError.stock_option : undefined} />
                        </div>
                    </div>
                    {/* <Technology value={compensation.technology_used} handleChange={handleChange} /> */}
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <YearsInCompany value={compensation.years_in_company} handleChange={handleChange} error={handleError.years_in_company ? handleError.years_in_company : undefined} />
                        </div>
                        <div>
                            <YearsOfExperience value={compensation.years_of_experience} handleChange={handleChange} error={handleError.years_of_experience ? handleError.years_of_experience : undefined} />
                        </div>
                    </div>
                    <Seniority value={compensation.seniority} handleChange={handleChange} />
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <OfficeSetup value={compensation.office_setup} handleChange={handleChange} />
                        </div>
                        <div>
                            <PlaceOfWork value={compensation.place_of_work} handleChange={handleChange} error={handleError.place_of_work} />
                        </div>
                    </div>
                    <Anonymized value={compensation.anonymous} handleChange={handleChange} />
                    <Email value={compensation.email} handleChange={handleChange}  error={handleError.email ? handleError.email : undefined}/>
                    <FeedbackJobForm value={compensation.feedback_job_form} handleChange={handleChange} />
                    <SolutionTested value={compensation.solution_tested} handleChange={handleChange} />
                    <ProductFeedback value={compensation.product_feedback} handleChange={handleChange} />
                    <Button value='Submit my data' handleSubmit={handleSubmit} />
                </form>
                <div></div>
            </div>
        </>
    )
}

export default FormCompensation;