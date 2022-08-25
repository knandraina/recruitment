interface IndustryProps {
    value: string | undefined,
    handleChange: Function
}

const industry = [
    "Agriculture",
    "Arts",
    "Construction",
    "Consumer Goods",
    "Corporate Services",
    "Design",
    "Education",
    'Energy & Mining',
    "Entertainment",
    "Finance",
    "Hardware & Networking",
    "Health Care",
    "Legal",
    "Manufacturing",
    "Media & Communications",
    "Nonprofit",
    "Public Administration",
    "Public Safety",
    "Real Estate",
    "Recreation & Travel",
    "Retail",
    "Software & IT Services",
    "Transportation & Logistics",
    "Wellness & Fitness",
    "Aerospace"
]


const Industry = (props: IndustryProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('industry', e.target.value)
    }

    return (

        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Industry
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="industry"
                name="industry"
                autoComplete="industry"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {industry.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>

    )
}

export default Industry;

