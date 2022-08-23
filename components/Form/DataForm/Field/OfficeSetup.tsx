interface OfficeSetupProps {
    value: string | undefined,
    handleChange: Function
}

const officeSetup = [
    'Hybrid',
    'Remote',
    'Office'
]

const OfficeSetup = (props: OfficeSetupProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('office_setup', e.target.value)
    }

    return (
        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Office Setup*
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="office_setup"
                name="office_setup"
                autoComplete="office_setup"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {officeSetup.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default OfficeSetup;

