interface CompanyStageProps {
    value: string | undefined,
    handleChange: Function
}

const stage = [
    'Startup',
    'Traditional Foreign Company',
    'ESN',
    'Traditional Company',
    'Foreign Startup'
]

const CompanyStage = (props: CompanyStageProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('company_stage', e.target.value)
    }

    return (
        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Company Stage*
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="company_stage"
                name="company_stage"
                autoComplete="company_stage"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {stage.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default CompanyStage;

