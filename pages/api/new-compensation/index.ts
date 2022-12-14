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
            solution_tested,
             seo)


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
        seo: seo,
        sex: gender === 'Female' ? { "en": { "gender": "Female" }, "fr": { "gender": "Femme" } } : { "en": { "gender": "Male" }, "fr": { "gender": "Homme" } }

    })
    return compensation;
}

const seoFunction = async (role: string) => {
    if (role === 'Software Engineer, Full-Stack') {
        return { "en": { "first_role": "Full-Stack Developer", "second_role": "Full-Stack Engineer", "description": "A full-stack engineer is a position in high demand these days. This role requires general knowledge of all the different layers of software development. At a minimum, he/she must have functional knowledge of the front-end and back-end of software development, which they can turn into a finished project. In some cases, depending on the company and its requirements,a full-stack engineer is expected to have extensive knowledge and technical expertise in these different areas." }, "fr": { "first_role": "Full-Stack Developer", "second_role": "Full-Stack Engineer", "description": "Un ing??nieur full-stack est un poste tr??s demand?? de nos jours. Ce r??le n??cessite une connaissance g??n??rale de toutes les diff??rentes couches de d??veloppement logiciel. Au minimum, il / elle doit avoir une connaissance fonctionnelle du front-end et du back-end du d??veloppement logiciel, qu'il peut transformer en un projet fini. Dans certains cas, en fonction de l'entreprise et de ses exigences, un ing??nieur full-stack est cens?? avoir des connaissances et une expertise technique approfondies dans ces diff??rents domaines." } }
    } else if (role === 'Software Engineer, Front-end') {
        return { "en": { "first_role": "Front-end Engineer", "second_role": "Front-end Developer", "description": "A front-end engineer is vital to the success of a website. The position of the front-end engineer focuses on making websites friendly and functional to their users. So, no matter how great the product offering on the website is or how interesting the stories are, much of the utility of it depends on the users' ability to navigate it. The front-end engineer makes websites user-friendly by creating rich and exciting features such as animations, text boxes, games, forums, and even navigation. They often coordinate their efforts with the back-end engineers who then process the data." }, "fr": { "first_role": "Developpeur Front-end", "second_role": "Ingenieur Front-end", "description": "Un ing??nieur front-end est essentiel au succ??s d'un site Web ou d'une application. Le poste d'ing??nieur front-end vise ?? rendre les sites Web conviviaux et fonctionnels pour leurs utilisateurs. Ainsi, quelle que soit la qualit?? de l'offre de produits sur le site Web ou l'int??r??t des histoires, une grande partie de son utilit?? d??pend de la capacit?? des utilisateurs ?? y naviguer. L'ing??nieur front-end rend les sites Web conviviaux en cr??ant des fonctionnalit??s riches et int??ressantes telles que des animations, des zones de texte, des jeux, des forums et m??me la navigation. Ils coordonnent souvent leurs efforts avec les ing??nieurs back-end qui traitent ensuite les donn??es." } }
    } else if (role === 'Software Engineer, Back-end') {
        return { "en": { "first_role": "Back-end Engineer", "second_role": "Back-end Developer", "description": "Back-end engineers rely on their knowledge of Java, C++, .NET, C# and other skills to create data access layers for software and applications. Back-end engineers also analyze, troubleshoot, and diagnose system hardware and physical infrastructure to maintain optimal performance. Back-end engineers provide valuable services by writing code that enables browsers and databases to communicate effectively." }, "fr": { "first_role": "Developpeur Back-end", "second_role": "Ing??nieur Back-end", "description": "Les ing??nieurs back-end s'appuient sur leurs connaissances de Java, C++, .NET, C# et d'autres comp??tences pour cr??er des couches d'acc??s aux donn??es pour les logiciels et les applications. Les ing??nieurs back-end analysent, d??pannent et diagnostiquent ??galement le mat??riel syst??me et l'infrastructure physique pour maintenir des performances optimales. Les ing??nieurs back-end fournissent des services pr??cieux en ??crivant du code qui permet aux navigateurs et aux bases de donn??es de communiquer efficacement." } }

    } else if (role === 'Software Engineer, Mobile') {
        return { "en": { "first_role": "Mobile Developer", "second_role": "Mobile Engineer", "description": "Mobile engineer is a broad term for anyone who builds and programs mobile applications. The most common types are Android developers and iOS developers. iOS engineers typically use Objective-C or Swift, while Android engineers work primarily with Java." }, "fr": { "first_role": "Developpeur Mobile", "second_role": "Ingenieur Mobile", "description": "C'est un role qui a pour but de cr??er des applications mobiles. Les plus connus sont les developpeurs iOS ou Android." } }

    } else if (role === 'Software Engineer, Embedded Systems') {
        return { "en": { "first_role": "Embedded Systems Engineer", "second_role": "Embedded Systems Developer", "description": "An embedded engineer works with the code of dedicated computer systems within larger electrical and mechanical systems. They create code that addresses and solves problems within the system for proper functioning. Embedded engineers also help develop systems and provide technical support directly to users within an organization." }, "fr": { "first_role": "Ingenieur Systeme Embarque", "second_role": "Developpeur Systeme Embarque", "description": "Un ing??nieur embarqu?? travaille avec le code de syst??mes informatiques d??di??s au sein de syst??mes ??lectriques et m??caniques plus importants. Ils cr??ent un code qui traite et r??sout les probl??mes au sein du syst??me pour un bon fonctionnement. Les ing??nieurs embarqu??s aident ??galement ?? d??velopper des syst??mes et fournissent un support technique directement aux utilisateurs au sein d'une organisation." } }

    } else if (role === 'DevOps') {
        return { "en": { "first_role": "DevOps Engineer", "second_role": "Platform Engineer", "description": "DevOps engineers often focus on automating deployment and network operations. At many organizations, they are responsible for creating and maintaining development platforms and processes that enable automation of builds and releases." }, "fr": { "first_role": "Ingenieur DevOps", "second_role": "Ingenieur Plateforme", "description": "Les ing??nieurs DevOps se concentrent souvent sur l'automatisation du d??ploiement et des op??rations r??seau. Dans de nombreuses organisations, ils sont responsables de la cr??ation et de la maintenance des plates-formes et des processus de d??veloppement qui permettent l'automatisation des builds et des versions." } }

    } else if (role === 'AdminSys') {
        return { "en": { "first_role": "Systems Administrator", "second_role": "Administrator Systems", "description": "Systems administrators are also known as SysAdmins. They maintain the computer systems of organizations to ensure reliable operation. Systems administrators handle backup procedures, software upgrades, and patches. They perform security monitoring to make sure a computer system is running smoothly. SysAdmins understand network services, resource requirements for applications, and access controls." }, "fr": { "first_role": "AdminSys", "second_role": "AdminSys", "description": "Les administrateurs syst??me sont ??galement connus sous le nom de SysAdmins. Ils maintiennent les syst??mes informatiques des organisations pour assurer un fonctionnement fiable. Les administrateurs syst??me g??rent les proc??dures de sauvegarde, les mises ?? niveau logicielles et les correctifs. Ils effectuent une surveillance de la s??curit?? pour s'assurer qu'un syst??me informatique fonctionne correctement. Les administrateurs syst??me comprennent les services r??seau, les besoins en ressources des applications et les contr??les d'acc??s." } }

    } else if (role === 'Data Analyst') {
        return { "en": { "first_role": "Data Analyst", "second_role": "Data Analyst", "description": "Data analysts synthesize and derive learnings from data to inform and drive business strategy. Their duties may include identifying areas to increase efficiency and automation of processes, setting up and maintaining automated data processes, producing and tracking key performance indicators, monitoring and auditing data quality, and creating dashboards, graphs, and visualisations." }, "fr": { "first_role": "Data Analyst", "second_role": "Data Analyst", "description": "Les Data Analyst synth??tisent et tirent des enseignements des donn??es pour informer et piloter la strat??gie commerciale. Leurs t??ches peuvent inclure l'identification des domaines permettant d'accro??tre l'efficacit?? et l'automatisation des processus, la mise en place et la maintenance de processus de donn??es automatis??s, la production et le suivi d'indicateurs de performance cl??s, la surveillance et l'audit de la qualit?? des donn??es et la cr??ation de tableaux de bord, de graphiques et de visualisations." } }

    } else if (role === 'Data Scientist') {
        return { "en": { "first_role": "Data Scientist", "second_role": "Data Scientist", "description": "A data scientist is often well versed in statistics and machine learning. They are often hired to solve complex problems related to prediction, recommendations, pattern detection, automated processes, decision-making, and scoring and ranking." }, "fr": { "first_role": "Data Scientist", "second_role": "Data Scientist", "description": "Un data scientist conna??t souvent bien les statistiques et le machine learning. Ils sont souvent embauch??s pour r??soudre des probl??mes complexes li??s ?? la pr??diction, aux recommandations, ?? la d??tection de mod??les, aux processus automatis??s, ?? la prise de d??cision, ?? la notation et au classement." } }

    } else if (role === 'Site Reliability Engineer') {
        return { "en": { "first_role": "Site Reliability Engineer", "second_role": "SRE", "description": "Site Reliability Engineers (SRE) combine software architecture with system operations. They have operations skills and oversee the reliability of systems and products for optimal functioning. This combination reduces the need for organizations to rely on both development and operations teams, streamlining the entire process. SREs use service-level agreements that define the system reliability needs of the service." }, "fr": { "first_role": "Ingenieur de la fiabilite du site", "second_role": "Site Reliability Engineer", "description": "Les ing??nieurs en fiabilit?? du site (SRE) combinent l'architecture logicielle avec les op??rations syst??me. Ils ont des comp??tences op??rationnelles et supervisent la fiabilit?? des syst??mes et des produits pour un fonctionnement optimal. Cette combinaison r??duit la n??cessit?? pour les organisations de s'appuyer ?? la fois sur des ??quipes de d??veloppement et d'exploitation, rationalisant ainsi l'ensemble du processus. Les SRE utilisent des accords de niveau de service qui d??finissent les besoins de fiabilit?? du syst??me du service." } }

    } else if (role === 'Software Architect') {
        return { "en": { "first_role": "Software Architect", "second_role": "Software Architect", "description": "Software architects are responsible for mapping the technical requirements to business needs and ensuring they meet the architectural demands of the organization. They handle all systems solutions, including those geared towards human resources, supply chains, product life cycles, and customer relations." }, "fr": { "first_role": "Architecte Logiciel", "second_role": "Architecte Logiciel", "description": "Les architectes logiciels sont charg??s de faire correspondre les exigences techniques aux besoins de l'entreprise et de s'assurer qu'ils r??pondent aux exigences architecturales de l'organisation. Ils g??rent toutes les solutions syst??mes, y compris celles orient??es vers les ressources humaines, les cha??nes d'approvisionnement, les cycles de vie des produits et la relation client." } }

    } else if (role === 'Software Security Engineer') {
        return { "en": { "first_role": "Security Engineer", "second_role": "Security Developer", "description": "Security engineers maintain the security of computer systems and networks within an organization. They create and implement strategies to prevent unauthorized internal network access and protect sensitive information. Also known as information security analysts, these engineers work with IT teams to develop policies and plans for information security. They create best practices and security standards that enhance system protection and teach others in the company to follow them." }, "fr": { "first_role": "Ingenieur en Securite Logiciel", "second_role": "Developpeur en Securite Logiciel", "description": "Les ing??nieurs en s??curit?? maintiennent la s??curit?? des syst??mes informatiques et des r??seaux au sein d'une organisation. Ils cr??ent et mettent en ??uvre des strat??gies pour emp??cher l'acc??s non autoris?? au r??seau interne et prot??ger les informations sensibles. ??galement connus sous le nom d'analystes de la s??curit?? de l'information, ces ing??nieurs travaillent avec les ??quipes informatiques pour d??velopper des politiques et des plans de s??curit?? de l'information. Ils cr??ent les meilleures pratiques et les normes de s??curit?? qui am??liorent la protection du syst??me et enseignent aux autres dans l'entreprise ?? les suivre." } }

    } else if (role === 'Software Network Engineer') {
        return { "en": { "first_role": "Security Engineer", "second_role": "Security Developer", "description": "Security engineers maintain the security of computer systems and networks within an organization. They create and implement strategies to prevent unauthorized internal network access and protect sensitive information. Also known as information security analysts, these engineers work with IT teams to develop policies and plans for information security. They create best practices and security standards that enhance system protection and teach others in the company to follow them." }, "fr": { "first_role": "Ingenieur en Securite Logiciel", "second_role": "Developpeur en Securite Logiciel", "description": "Les ing??nieurs en s??curit?? maintiennent la s??curit?? des syst??mes informatiques et des r??seaux au sein d'une organisation. Ils cr??ent et mettent en ??uvre des strat??gies pour emp??cher l'acc??s non autoris?? au r??seau interne et prot??ger les informations sensibles. ??galement connus sous le nom d'analystes de la s??curit?? de l'information, ces ing??nieurs travaillent avec les ??quipes informatiques pour d??velopper des politiques et des plans de s??curit?? de l'information. Ils cr??ent les meilleures pratiques et les normes de s??curit?? qui am??liorent la protection du syst??me et enseignent aux autres dans l'entreprise ?? les suivre." } }

    } else if (role === 'QA Engineer') {
        return { "en": { "first_role": "QA Automation Engineer", "second_role": "QA Engineer", "description": "QA automation engineers are generally responsible for writing and conducting automated tests to verify software or apps end-user quality and the structural integrity of back-end databases. The role of a QA automation engineer often includes duties like designing, creating, and implementing tests, developing automation strategies, overseeing the execution of automated scripts, and training junior members of the automation team" }, "fr": { "first_role": "Ing??nieur Qualit??", "second_role": "Ing??nieur Qualit??", "description": "Les ing??nieurs qualit?? sont g??n??ralement responsables de l'??criture et de la r??alisation de tests automatis??s pour v??rifier la qualit?? de l'utilisateur final des logiciels ou des applications et l'int??grit?? structurelle des bases de donn??es principales. Le r??le d'un ing??nieur en automatisation QA comprend souvent des t??ches telles que la conception, la cr??ation et la mise en ??uvre de tests, le d??veloppement de strat??gies d'automatisation, la supervision de l'ex??cution de scripts automatis??s et la formation de membres juniors de l'??quipe d'automatisation." } }

    } else if (role === 'Data Engineer') {
        return { "en": { "first_role": "Data Engineer", "second_role": "Data Engineer", "description": "Data engineers create data pipelines for organizational analysis. Candidates are responsible for extracting and transferring big data, then improving and presenting that information to data scientists and other team members. They solve problems with data integration and must often work with unstructured data sets to make them easier to understand. They help develop and construct databases and large-scale data processing systems and test and maintain these systems for proper functionality." }, "fr": { "first_role": "Ingenieur de donn??es", "second_role": "Data Engineer", "description": "Les ing??nieurs de donn??es cr??ent des pipelines de donn??es pour l'analyse organisationnelle. Les candidats sont responsables de l'extraction et du transfert de donn??es volumineuses, puis de l'am??lioration et de la pr??sentation de ces informations aux scientifiques des donn??es et aux autres membres de l'??quipe. Ils r??solvent des probl??mes d'int??gration de donn??es et doivent souvent travailler avec des ensembles de donn??es non structur??s pour les rendre plus faciles ?? comprendre. Ils aident ?? d??velopper et ?? construire des bases de donn??es et des syst??mes de traitement de donn??es ?? grande ??chelle et testent et maintiennent ces syst??mes pour une fonctionnalit?? appropri??e." } }

    } else if (role === 'Machine Learning Engineer') {
        return { "en": { "first_role": "Machine Learning Engineer", "second_role": "Machine Learning Engineer", "description": "The machine learning engineer position describes an engineer working with one of the various machine learning models. A machine learning engineer develops the infrastructure to support the model. This may be on a large or small scale, depending on the company and the scope of work. To work in artificial intelligence (AI), a machine learning engineer should have a solid background in data science, applied research, and coding." }, "fr": { "first_role": "Machine Learning Engineer", "second_role": "Machine Learning Engineer", "description": "Un Machine Learning Engineer d??crit un ing??nieur travaillant avec l'un des diff??rents mod??les d'apprentissage automatique. Un ing??nieur en apprentissage automatique d??veloppe l'infrastructure pour prendre en charge le mod??le. Cela peut ??tre ?? grande ou ?? petite ??chelle, selon l'entreprise et l'??tendue des travaux. Pour travailler dans l'intelligence artificielle (IA), un ing??nieur en apprentissage automatique doit avoir une solide exp??rience en science des donn??es, en recherche appliqu??e et en codage." } }

    } else if (role === 'Principal Engineer') {
        return { "en": { "first_role": "Principal Engineer", "second_role": "Principal Engineer", "description": "A principal engineer is an engineering professional with many years of experience in their field. They oversee projects and staff after working as engineers in a particular field. Different from other engineers, the role of principal engineer is a leadership role where they guide staff to ensure an engineering team completes projects on time and within budgets." }, "fr": { "first_role": "Principal Engineer", "second_role": "Principal Engineer", "description": "Un Principal Engineer est un ing??nieur professionnel poss??dant de nombreuses ann??es d'exp??rience dans son domaine. Ils supervisent les projets et le personnel apr??s avoir travaill?? comme ing??nieurs dans un domaine particulier. Diff??rent des autres ing??nieurs, le r??le d'ing??nieur principal est un r??le de leadership dans lequel il guide le personnel pour s'assurer qu'une ??quipe d'ing??nieurs ach??ve les projets dans les d??lais et dans les limites des budgets." } }

    } else if (role === 'Engineering Director') {
        return { "en": { "first_role": "Head of Engineering", "second_role": "President of Engineering", "description": "A director of engineering is a leader that oversees and guides a company's engineering department. Also known as the vice president of engineering or the head of engineering, these professionals help ensure that an organization's engineering goals align with the company's values, mission and goals. Often, these professionals involve themselves with administrative, financial, and human resource tasks to help promote the success of the department." }, "fr": { "first_role": "Directeur de l'ingenierie", "second_role": "Directeur de l'ingenierie", "description": "Un directeur de l'ing??nierie est un leader qui supervise et guide le service d'ing??nierie d'une entreprise. ??galement connus sous le nom de vice-pr??sident de l'ing??nierie ou de responsable de l'ing??nierie, ces professionnels aident ?? s'assurer que les objectifs d'ing??nierie d'une organisation s'alignent sur les valeurs, la mission et les objectifs de l'entreprise. Souvent, ces professionnels s'impliquent dans des t??ches administratives, financi??res et de ressources humaines pour aider ?? promouvoir le succ??s du d??partement." } }

    } else if (role === 'CTO') {
        return { "en": { "first_role": "Chief Technology Officer", "second_role": "CTO", "description": "A chief technology officer (CTO) is the executive in charge of an organizations technological needs as well as its research and development (R&D). Also known as a chief technical officer, this individual examines the short- and long-term needs of an organization and utilizes capital to make investments designed to help the organization reach its objectives. The CTO usually reports directly to a companys chief information officer (CIO), but may also report to the chief executive officer (CEO) of the firm." }, "fr": { "first_role": "Directeur Technique", "second_role": "Directeur Technique", "description": "Un directeur technique est le cadre responsable des besoins technologiques d'une organisation ainsi que de sa recherche et d??veloppement (R&D). ??galement connu sous le nom de directeur technique, cet individu examine les besoins ?? court et ?? long terme d'une organisation et utilise le capital pour effectuer des investissements destin??s ?? aider l'organisation ?? atteindre ses objectifs. Le directeur technique rel??ve g??n??ralement directement du directeur de l'information d'une entreprise, mais peut ??galement rendre compte au directeur g??n??ral (PDG) de l'entreprise." } }

    }
}

export default connectDB(handler);