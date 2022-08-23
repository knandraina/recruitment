import { useState } from "react";
import Router from 'next/router'

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

import axios from "axios";

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
    industry: '',
    role: '',
    anonymous: "false",
    feedback_job_form: '',
    solution_tested: ''
}


const FormCompensation = () => {

    const [compensation, setCompensation] = useState(newCompensation);

    const handleChange = async (key: string, value: string) => {
        setCompensation({
            ...compensation,
            [key]: value
        })
    }

    const handleSubmit = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        await axios.post('/api/new-compensation', compensation)
        setCompensation(newCompensation);

        Router.push('/salaries/france')
    }

    return (
        <>
            <div className="grid grid-cols-8 gap-4">
                <div ></div>

                <form className="space-y-6 py-8 px-2 sm:rounded-lg sm:px-10 col-start-3 col-span-4" action="#" method="POST">
                    <h1 className="text-4xl text-blue-grey-400">Add your salary</h1>
                    <Gender value={compensation.gender} handleChange={handleChange} />
                    <CompanyName value={compensation.name} handleChange={handleChange} />
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
                    <Salary value={compensation.revenue} handleChange={handleChange} />
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Bonus value={compensation.bonus} handleChange={handleChange} />
                        </div>
                        <div>
                            <StockOption value={compensation.stock_option} handleChange={handleChange} />
                        </div>
                    </div>

                    <Technology value={compensation.technology_used} handleChange={handleChange} />
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <YearsInCompany value={compensation.years_in_company} handleChange={handleChange} />
                        </div>
                        <div>
                            <YearsOfExperience value={compensation.years_of_experience} handleChange={handleChange} />
                        </div>
                    </div>
                    <Seniority value={compensation.seniority} handleChange={handleChange} />
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <OfficeSetup value={compensation.office_setup} handleChange={handleChange} />
                        </div>
                        <div>
                            <PlaceOfWork value={compensation.place_of_work} handleChange={handleChange} />
                        </div>
                    </div>
                    <Anonymized value={compensation.anonymous} handleChange={handleChange} />
                    <FeedbackJobForm value={compensation.feedback_job_form} handleChange={handleChange} />
                    <SolutionTested value={compensation.solution_tested} handleChange={handleChange} />
                    <Button value='Submit my data' handleSubmit={handleSubmit} />
                </form>
                <div></div>
            </div>
        </>
    )
}

export default FormCompensation;