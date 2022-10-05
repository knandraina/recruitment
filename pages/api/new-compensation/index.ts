import type { NextApiRequest, NextApiResponse } from 'next';
import validateCompensation from '../../../lib/compensation';

import connectDB from '../../../middleware/connectDB';
import Company from '../../../models/company';
import Compensation from '../../../models/compensation';

const apiKey: any = process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY

var Analytics = require('analytics-node');
var analytics = new Analytics(apiKey);

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyEhtbC8BEcOHnfU' }).base('appkuQ9Rzvw0sjelz');

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { anonymousId } = req.body;
        const { errors, isValid } = await validateCompensation(req.body.compensation);
        if (!isValid) {
            
            analytics.track({
                anonymousId: anonymousId,
                event: 'Form Submitted Failure',
                properties: {
                    type: 'new salary',
                    errors
                }
            })

            return res.status(500).json(errors);
        }

        const {
            revenue,
            bonus,
            stock_option,
            gender,
            years_in_company,
            years_of_experience,
            seniority,
            place_of_work,
            office_setup,
            contract,
            name,
            role,
            company_size,
            company_stage,
            industry,
            technology_used,
            anonymous,
            feedback_job_form,
            solution_tested,
            email,
            product_feedback
        } = req.body.compensation

        const seo = await seoFunction(role); 

        const response = await addNewCompensation(
            revenue,
            bonus,
            stock_option,
            gender,
            years_in_company,
            years_of_experience,
            seniority,
            place_of_work,
            office_setup,
            contract,
            name,
            technology_used,
            role,
            company_size,
            company_stage,
            industry,
            anonymous,
            feedback_job_form,
            solution_tested, seo)


        await analytics.track({
            anonymousId: anonymousId,
            event: 'Form Submitted Successful',
            properties: {
                type: 'new salary',
                revenue,
                bonus,
                stock_option,
                gender,
                years_in_company,
                years_of_experience,
                seniority,
                place_of_work,
                office_setup,
                contract,
                name,
                role,
                company_size,
                company_stage,
                industry,
                technology_used: 'Javascript',
                anonymous,
                feedback_job_form,
                solution_tested,
                email,
                product_feedback
            }
        })
        await base('Table 1').create({
            feedback_job_form,
            solution_tested,
            email,
            product_feedback
        })
        res.status(200).json({ response })
    } catch (error) {
        const { anonymousId } = req.body
        await analytics.track({
            anonymousId: anonymousId,
            event: 'Form Submitted Failure',
            properties: {
                type: 'new salary',
                error
            }
        })
        return res.status(400).json({ error })
    }


}


async function addNewCompensation(
    revenue: string,
    bonus: string,
    stock_option: string,
    gender: string,
    years_in_company: string,
    years_of_experience: string,
    seniority: string,
    place_of_work: string,
    office_setup: string,
    contract: string,
    name: string,
    technology_used: any,
    role: string,
    company_size: string,
    company_stage: string,
    industry: string,
    anonymous: string,
    feedback_job_form: string,
    solution_tested: any,
    seo: any) {
    const company = await createCompany(name,
        company_size,
        company_stage,
        industry
    );
    const compensation = await createCompensation(
        company,
        revenue,
        bonus,
        stock_option,
        gender,
        years_in_company,
        years_of_experience,
        seniority,
        place_of_work,
        office_setup,
        contract,
        role,
        anonymous,
        technology_used,
        seo,
    );
    

    const res = await linkCompensationToCompany(compensation._id, company._id)
    return compensation
}


async function linkCompensationToCompany(compensationId: any, companyId: any) {
    return Company.findByIdAndUpdate(companyId, { $push: { compensation: compensationId } }, { new: true })
}

async function createCompany(
    name: string,
    company_size: string,
    company_stage: string,
    industry: string,
) {
    const company = await Company.findOne({ unique_name: name.toLowerCase() });
    
    if (!company) {
        const results = await Company.create({
            name: name,
            unique_name: name.toLowerCase(),
            company_size: company_size,
            company_stage: company_stage,
            industry: industry
        })

        return results;
    }
    return company;
}

async function createCompensation(
    company: any,
    revenue: string,
    bonus: string,
    stock_option: string,
    gender: string,
    years_in_company: string,
    years_of_experience: string,
    seniority: string,
    place_of_work: string,
    office_setup: string,
    contract: string,
    role: string,
    anonymous: string,
    technology_used: any,
    seo: any,
) {

    const compensation = await Compensation.create({
        revenue: parseInt(revenue),
        bonus: parseInt(bonus),
        stock_option: parseInt(stock_option),
        role: role,
        gender,
        years_in_company: years_in_company,
        years_of_experience: years_of_experience,
        seniority,
        place_of_work,
        office_setup,
        technology_used: 'Javascript',
        contract: contract,
        anonymous: anonymous === 'true',
        company: company._id,
        department: undefined,
        department_lower_case: undefined,
        category_role: role,
        seo: seo
    })
    return compensation;
}

const seoFunction = async (role: string) => {
    if (role === 'Software Engineer, Full-Stack') {
        return ['Full-Stack Developer', 'Full-Stack Engineer', "A full-stack engineer is a position in high demand these days. This role requires general knowledge of all the different layers of software development. At a minimum, he/she must have functional knowledge of the front-end and back-end of software development, which they can turn into a finished project. In some cases, depending on the company and its requirements,a full-stack engineer is expected to have extensive knowledge and technical expertise in these different areas."]
    } else if (role === 'Software Engineer, Front-end') {
        return ['Front-end Engineer', 'Front-end Developer', 'A front-end engineer is vital to the success of a website. The position of the front-end engineer focuses on making websites friendly and functional to their users. So, no matter how great the product offering on the website is or how interesting the stories are, much of the utility of it depends on the users ability to navigate it. The front-end engineer makes websites user-friendly by creating rich and exciting features such as animations, text boxes, games, forums, and even navigation. They often coordinate their efforts with the back-end engineers who then process the data.']
    } else if (role === 'Software Engineer, Back-end') {
        return ['Back-end Engineer','Back-end Developer', 'Back-end engineers rely on their knowledge of Java, C++, .NET, C# and other skills to create data access layers for software and applications. Back-end engineers also analyze, troubleshoot, and diagnose system hardware and physical infrastructure to maintain optimal performance. Back-end engineers provide valuable services by writing code that enables browsers and databases to communicate effectively.']
    } else if (role === 'Software Engineer, Mobile') {
        return ['Mobile Developer','Mobile Engineer', 'Back-end engineers rely on their knowledge of Java, C++, .NET, C# and other skills to create data access layers for software and applications. Back-end engineers also analyze, troubleshoot, and diagnose system hardware and physical infrastructure to maintain optimal performance. Back-end engineers provide valuable services by writing code that enables browsers and databases to communicate effectively.']
    } else if (role === 'Software Engineer, Embedded Systems') {
        return ['Embedded Systems Engineer', 'Embedded Systems Developer', 'An embedded engineer works with the code of dedicated computer systems within larger electrical and mechanical systems. They create code that addresses and solves problems within the system for proper functioning. Embedded engineers also help develop systems and provide technical support directly to users within an organization.']
    } else if (role === 'DevOps') {
        return ['DevOps Engineer', 'Platform Engineer', 'DevOps engineers often focus on automating deployment and network operations. At many organizations, they are responsible for creating and maintaining development platforms and processes that enable automation of builds and releases.']
    } else if (role === 'AdminSys') {
        return ['Systems Administrator','Administrator Systems','Systems administrators are also known as SysAdmins. They maintain the computer systems of organizations to ensure reliable operation. Systems administrators handle backup procedures, software upgrades, and patches. They perform security monitoring to make sure a computer system is running smoothly. SysAdmins understand network services, resource requirements for applications, and access controls.']
    } else if (role === 'Data Analyst') {
        return ['Data Analyst', 'Data Analyst', 'Data analysts synthesize and derive learnings from data to inform and drive business strategy. Their duties may include identifying areas to increase efficiency and automation of processes, setting up and maintaining automated data processes, producing and tracking key performance indicators, monitoring and auditing data quality, and creating dashboards, graphs, and visualisations.']
    } else if (role === 'Data Scientist') {
        return ['Data Scientist', 'Data Scientist', 'A data scientist is often well versed in statistics and machine learning. They are often hired to solve complex problems related to prediction, recommendations, pattern detection, automated processes, decision-making, and scoring and ranking.']
    } else if (role === 'Site Reliability Engineer') {
        return ['SRE','Site Reliability Engineer', 'Software architects are responsible for mapping the technical requirements to business needs and ensuring they meet the architectural demands of the organization. They handle all systems solutions, including those geared towards human resources, supply chains, product life cycles, and customer relations.']
    } else if (role === 'Software Architect') {
        return ['Software Architect', 'Software Architect', 'Software architects are responsible for mapping the technical requirements to business needs and ensuring they meet the architectural demands of the organization. They handle all systems solutions, including those geared towards human resources, supply chains, product life cycles, and customer relations.']
    } else if (role === 'Software Security Engineer') {
        return ['Security Engineer', 'Security Developer', 'Security engineers maintain the security of computer systems and networks within an organization. They create and implement strategies to prevent unauthorized internal network access and protect sensitive information. Also known as information security analysts, these engineers work with IT teams to develop policies and plans for information security. They create best practices and security standards that enhance system protection and teach others in the company to follow them.']
    } else if (role === 'Software Network Engineer') {
        return ['Network Engineer', 'Network Developer', 'A networking software engineer specializes in designing, building and installing software for existing or new networks and infrastructures. Often, organizations require bespoke software solutions. By writing and creating these platforms, networking software engineers allow organizations to operate more efficiently, maximize their productivity and function securely.']
    } else if (role === 'QA Engineer') {
        return ['QA automation engineers', 'QA Engineer', 'QA automation engineers are generally responsible for writing and conducting automated tests to verify software or apps end-user quality and the structural integrity of back-end databases. The role of a QA automation engineer often includes duties like designing, creating, and implementing tests, developing automation strategies, overseeing the execution of automated scripts, and training junior members of the automation team']
    } else if (role === 'Data Engineer') {
        return ['Data Engineer', 'Data Engineer', 'Data engineers create data pipelines for organizational analysis. Candidates are responsible for extracting and transferring big data, then improving and presenting that information to data scientists and other team members. They solve problems with data integration and must often work with unstructured data sets to make them easier to understand. They help develop and construct databases and large-scale data processing systems and test and maintain these systems for proper functionality.']
    } else if (role === 'Machine Learning Engineer') {
        return ['Machine Learning Engineer', 'Machine Learning Engineer', 'The machine learning engineer position describes an engineer working with one of the various machine learning models. A machine learning engineer develops the infrastructure to support the model. This may be on a large or small scale, depending on the company and the scope of work. To work in artificial intelligence (AI), a machine learning engineer should have a solid background in data science, applied research, and coding.']
    } else if (role === 'Principal Engineer') {
        return ['Principal Engineer', 'Principal Engineer', 'A principal engineer is an engineering professional with many years of experience in their field. They oversee projects and staff after working as engineers in a particular field. Different from other engineers, the role of principal engineer is a leadership role where they guide staff to ensure an engineering team completes projects on time and within budgets.']
    } else if (role === 'Engineering Director') {
        return ['Head of Engineering', 'President of Engineering', 'A director of engineering is a leader that oversees and guides a company&apos;s engineering department. Also known as the vice president of engineering or the head of engineering, these professionals help ensure that an organization&apos;s engineering goals align with the company s values, mission and goals. Often, these professionals involve themselves with administrative, financial and human resource tasks to help promote the success of the department.']
    } else if (role === 'CTO') {
        return ['Chief Technology Officer', 'CTO', 'A chief technology officer (CTO) is the executive in charge of an organization&apos;s technological needs as well as its research and development (R&D). Also known as a chief technical officer, this individual examines the short- and long-term needs of an organization and utilizes capital to make investments designed to help the organization reach its objectives. The CTO usually reports directly to a company&apos;s chief information officer (CIO), but may also report to the chief executive officer of the firm.']
    }
}

export default connectDB(handler);