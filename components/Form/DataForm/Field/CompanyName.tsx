interface CompanyNameProps {
    value: string | undefined,
    handleChange: Function,
    error?: any
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
                    className={`shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm rounded-lg border-none ${props.error != undefined ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="Apple"
                    onChange={handleChange}
                    value={props.value}
                />
                {(props.error != undefined) 
                ? <p className="text-red-500 text-xs"> {props.error}</p> 
                : '' }


            </div>
        </div>
    )
}

export default CompanyName;

