interface CompanyNameProps {
    value: string | undefined,
    handleChange: Function
}

const CompanyName = (props: CompanyNameProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('name', e.target.value)
    }

    return (
        <div>
            <label className="block text-sm font-medium text-blue-grey-700">
                Company Name*
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
                    placeholder="Apple"
                    onChange={handleChange}
                    value={props.value}
                />
            </div>
        </div>
    )
}

export default CompanyName;

