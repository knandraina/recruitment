interface ContractTypeProps {
    value: string | undefined,
    handleChange: Function
}

const contract = [
    'Full-Time (CDI)',
    'Part-Time (CDD)',
    'Freelance'
]

const ContractType = (props: ContractTypeProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('contract', e.target.value)
    }

    return (
        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Contract*
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="contract"
                name="contract"
                autoComplete="contract"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {contract.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default ContractType;

