interface SeniorityProps {
    value: string | undefined,
    handleChange: Function
}

const seniority = [
    'Associate / Junior',
    'Intermediate',
    'Senior',
    'Lead',
    'Director / VP',
    'CTO'
]

const Seniority = (props: SeniorityProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('seniority', e.target.value)
    }

    return (
        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Seniority*
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="seniority"
                name="seniority"
                autoComplete="Seniority"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {seniority.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default Seniority;

