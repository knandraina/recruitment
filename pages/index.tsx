
import { useState } from "react";
import Footer from "../components/Element/Footer";

import Heroes from "../components/Element/Heroes";
import Table from "../components/Table/table";
import Pricing from "../components/Pricing";

const post = [{ "_id": "62fbc24eb2659f54508993df", "revenue": 61000, "company": { "_id": "62fbc24eb2659f54508993cd", "name": "Algolia", "unique_name": "algolia", "company_size": "500-1000", "company_stage": "Startup", "__v": 0, "compensation": ["62fbc24eb2659f54508993cf", "62fbc24eb2659f54508993dc", "62fbc24eb2659f54508993df", "62fbc251b2659f545089949e"] }, "bonus": 3000, "stock_option": 0, "role": "Software Engineer, Frontend", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 4, "years_of_experience": 4, "seniority": "Senior", "place_of_work": "Paris", "office_setup": "Hybrid", "technology_used": "JS; React", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc250b2659f545089946b", "revenue": 49998, "company": { "_id": "62fbc250b2659f5450899469", "name": "SoundHound", "unique_name": "soundhound", "company_size": "100-500", "company_stage": "Traditional Foreign Company", "__v": 0, "compensation": ["62fbc250b2659f545089946b"] }, "bonus": 0, "stock_option": 27559, "role": "Software Engineer", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 1, "years_of_experience": 1, "seniority": "Associate / Junior", "place_of_work": "Paris", "office_setup": "Hybrid", "technology_used": "C/C++, Python, LUA, Javascript", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc24eb2659f54508993ca", "revenue": 125000, "company": { "_id": "62fbc24eb2659f54508993c8", "name": "Microsoft (USA)", "unique_name": "microsoft (usa)", "company_size": "5000+", "company_stage": "Traditional Foreign Company", "__v": 0, "compensation": ["62fbc24eb2659f54508993ca"] }, "bonus": 35000, "stock_option": 250000, "role": "Senior Developer Advocate Engineer", "category_role": "Software Engineer", "gender": "Female", "years_in_company": 2, "years_of_experience": 7, "seniority": "Senior", "place_of_work": "France", "office_setup": "Remote", "technology_used": "Microsoft Azure", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc253b2659f5450899543", "revenue": 36000, "company": { "_id": "62fbc24db2659f54508993b4", "name": "Linxo", "unique_name": "linxo", "company_size": "100-500", "company_stage": "Traditional Company", "__v": 0, "compensation": ["62fbc24db2659f54508993b6", "62fbc253b2659f5450899543"] }, "bonus": 0, "stock_option": 0, "role": "Fullstack developer", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 0.3, "years_of_experience": 3, "seniority": "Associate / Junior", "place_of_work": "Aix-en-Provence", "office_setup": "Office", "technology_used": "Typescript", "contract": "Full-Time", "anonymous": false, "department": "Bouches-du-Rhone", "__v": 0, "department_lower_case": "bouches-du-rhone", "approved": true }, { "_id": "62fbc250b2659f545089944d", "revenue": 88816, "company": { "_id": "62fbc24fb2659f5450899443", "name": "Apple", "unique_name": "apple", "company_size": "5000+", "company_stage": "Traditional Foreign Company", "__v": 0, "compensation": ["62fbc250b2659f5450899445", "62fbc250b2659f545089944d"] }, "bonus": 8623, "stock_option": 68983, "role": "Software Engineer", "category_role": "Software Engineer", "gender": "Female", "years_in_company": 4, "years_of_experience": 14, "seniority": "Senior", "place_of_work": "Paris", "office_setup": "Remote", "technology_used": "java, cassandra, kafka", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc24fb2659f5450899418", "revenue": 144000, "company": { "_id": "62fbc24fb2659f5450899416", "name": "Stripe", "unique_name": "stripe", "company_size": "5000+", "company_stage": "Traditional Foreign Company", "__v": 0, "compensation": ["62fbc24fb2659f5450899418"] }, "bonus": 43000, "stock_option": 0, "role": "Solutions Architect", "category_role": "Software Architect", "gender": "Male", "years_in_company": 0, "years_of_experience": 12, "seniority": "Senior", "place_of_work": "Paris", "office_setup": "Remote", "technology_used": "Web Development (Front-End)", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc253b2659f545089953e", "revenue": 48000, "company": { "_id": "62fbc252b2659f54508994de", "name": "Amadeus", "unique_name": "amadeus", "company_size": "5000+", "company_stage": "ESN", "__v": 0, "compensation": ["62fbc252b2659f54508994e0", "62fbc253b2659f545089953e"] }, "bonus": 2500, "stock_option": 1000, "role": "software engineer", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 6, "years_of_experience": 6, "seniority": "Intermediate", "place_of_work": "Sophia Antipolis", "office_setup": "Hybrid", "technology_used": "C++", "contract": "Full-Time", "anonymous": false, "department": "Alpes-Maritimes", "__v": 0, "department_lower_case": "alpes-maritimes", "approved": true }, { "_id": "63048b244b35f181ce5c65e8", "revenue": 35000, "company": { "_id": "63048b244b35f181ce5c65e6", "name": "Makina Corpus", "unique_name": "makina corpus", "company_size": "10-100", "company_stage": "ESN", "industry": "ESN", "compensation": ["63048b244b35f181ce5c65e8"], "__v": 0 }, "bonus": 0, "stock_option": 0, "role": "Django, Python, Ansible, Docker", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 1, "years_of_experience": 1, "seniority": "Intermediate", "place_of_work": "Toulouse", "office_setup": "Hybrid", "technology_used": "false", "contract": "Full-Time", "anonymous": false, "department": "Paris", "department_lower_case": "paris", "approved": true, "__v": 0 }, { "_id": "62fbc24bb2659f545089931d", "revenue": 46000, "company": { "_id": "62fbc24bb2659f545089931b", "name": "Kaiman", "unique_name": "kaiman", "company_size": "10-100", "__v": 0, "compensation": ["62fbc24bb2659f545089931d"] }, "bonus": 0, "stock_option": 0, "role": "Développeur Java", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 7, "years_of_experience": 7, "seniority": "Senior", "place_of_work": "Aix en Provence", "office_setup": "Remote", "technology_used": "Java", "contract": "Full-Time", "anonymous": true, "department": "Bouches-du-Rhone", "__v": 0, "department_lower_case": "bouches-du-rhone", "approved": true }, { "_id": "62fbc24fb2659f5450899406", "revenue": 65000, "company": { "_id": "62fbc24fb2659f5450899404", "name": "Meritis", "unique_name": "meritis", "company_size": "500-1000", "company_stage": "ESN", "__v": 0, "compensation": ["62fbc24fb2659f5450899406"] }, "bonus": 0, "stock_option": 0, "role": "Architecte logiciel", "category_role": "AdminSys", "gender": "Male", "years_in_company": 1, "years_of_experience": 11, "seniority": "Lead", "place_of_work": "Aix en Provence", "office_setup": "Remote", "technology_used": "Java, JS, C#, python, Azure, AWS, ...", "contract": "Full-Time", "anonymous": false, "department": "Bouches-du-Rhone", "__v": 0, "department_lower_case": "bouches-du-rhone", "approved": true }]


const Homepage = () => {

  const [compensation, setCompensation] = useState<any>({ data: { post } })

  return (
    <>
      <Heroes table={<Table compensation={compensation ? compensation.data : ''} department={'France'} />} />
      <Pricing />
      <Footer />

    </>
  )
}

export default Homepage;