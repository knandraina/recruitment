interface IndustryProps {
    value: string | undefined,
    handleChange: Function
}

const Industry = (props: IndustryProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('industry', e.target.value)
    }

    return (
        <div>
            <label className="block text-sm font-medium text-blue-grey-700">
                Industry*
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name="Industry"
                    id="Industry"
                    className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
                    placeholder="Health"
                    onChange={handleChange}
                    value={props.value}
                />
            </div>
        </div>
    )
}

export default Industry;

