interface AnonymizedProps {
    value: string | undefined,
    handleChange: Function
}

const anonymized = [
    "true",
    "false"
]

const Anonymized = (props: AnonymizedProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('anonymous', e.target.value)
    }

    return (
        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Anonymized
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="Anonymized"
                name="Anonymized"
                autoComplete="Anonymized"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {anonymized.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default Anonymized;

