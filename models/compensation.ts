import mongoose from 'mongoose';
import company from './company';

const Schema = mongoose.Schema;

interface ICompensation {
    revenue: number,
    company: any,
    bonus: number,
    stock_option: number,
    role: string,
    category_role: string,
    gender: string,
    years_in_company: number,
    years_of_experience: number,
    seniority: string,
    place_of_work: string,
    region: string,
    office_setup: string,
    technology_used: string,
    number_of_salaries: string,
    contract: string,
    anonymous: boolean,
    department: string,
    department_lower_case: string,
    approved: boolean
}

const CompensationSchema = new Schema<ICompensation>({
    revenue: { type: Number, required: true, min: 1000 },
    company: { type: mongoose.Schema.Types.ObjectId, ref: company },
    bonus: { type: Number, required: true, min: 0, default: 0 },
    stock_option: { type: Number, required: true, min: 0, default: 0 },
    role: { type: String, required: true },
    category_role: { type: String, enum: ['Software Engineer', 'DevOps', 'AdminSys', 'Data Analyst', 'Site Reliability Engineer', 'Data Scientist', 'Software Architect', 'Support'], required: true, default: 'Software Engineer' },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    years_in_company: { type: Number, required: true, min: 0 },
    years_of_experience: { type: Number, required: true, min: 0 },
    seniority: { type: String, enum: ['Associate / Junior', 'Intermediate', 'Senior', 'Lead', 'Director / VP', 'CTO'] },
    place_of_work: { type: String, required: true },
    office_setup: { type: String, enum: ['Remote', 'Office', 'Hybrid'], required: true },
    technology_used: { type: String, required: true },
    contract: { type: String, enum: ['Full-Time', 'Part-Time', 'Freelance'], required: true },
    anonymous: { type: Boolean, required: true, default: false },
    department: { type: String, required: true, default: 'Paris' },
    department_lower_case: {type: String, required: true, unique: true, default: 'paris'},
    approved: {type: Boolean, required: true, default: false}
})

export default mongoose.models.Compensation || mongoose.model('Compensation', CompensationSchema);