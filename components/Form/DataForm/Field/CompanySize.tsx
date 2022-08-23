interface CompanySizeProps {
    value: string | undefined,
    handleChange: Function
}

const size = [
    '0-10',
    '10-100',
    '100-500',
    '500-1000',
    '1000-5000',
    '5000+'
]

const CompanySize = (props: CompanySizeProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('company_size', e.target.value)
    }

    return (
        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Company size*
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="company_size"
                name="company_size"
                autoComplete="company_size"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {size.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default CompanySize;

