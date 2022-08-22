import mongoose from 'mongoose';
import compensation from './compensation';

const Schema = mongoose.Schema;

interface ICompany {
    name: string,
    unique_name: string,
    industry: string,
    company_size: string,
    company_stage: string,
    compensation: Array<Object>,
}

const CompanySchema = new Schema<ICompany>({
    name: { type: String, required: true },
    unique_name: { type: String, required: true, unique: true },
    company_size: { type: String, enum: ['0-10', '10-100', '100-500', '500-1000', '1000-5000', '5000+'], required: true },
    company_stage: { type: String, enum: ['Startup', 'Traditional Foreign Company', 'ESN', 'Traditional Company', 'Foreign Startup'] },
    industry: { type: String },
    compensation: [{type: mongoose.Schema.Types.ObjectId, ref: "compensation", unique: true}]
})

export default mongoose.models.Company || mongoose.model('Company', CompanySchema);