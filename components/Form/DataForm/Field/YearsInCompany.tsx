interface YearsInCompanyProps {
    value: string | undefined,
    handleChange: Function
}

const YearsInCompany = (props: YearsInCompanyProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        props.handleChange('years_in_company', e.target.value)
    }
}

    return (
        <div>
            <label className="block text-sm font-medium text-blue-grey-700">
                Years In Company*
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    inputMode="numeric"
                    id="years_in_company"
                    min="0"
                    className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
                    placeholder="1"
                    onChange={handleChange}
                    value={props.value}
                />
            </div>
        </div>
    )
}

export default YearsInCompany;