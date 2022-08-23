interface GenderProps {
    value: string | undefined,
    handleChange: Function
}

const gender = [
    'Male',
    'Female',
    'Other'
]

const Gender = (props: GenderProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('gender', e.target.value)
    }

    return (
        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Gender*
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="gender"
                name="gender"
                autoComplete="gender"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {gender.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default Gender;

