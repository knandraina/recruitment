interface TitleProps {
    value: string | undefined,
    handleChange: Function
}

const Title = (props: TitleProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('role', e.target.value)
    }

    return (
        <div>
        <label className="block text-sm font-medium text-blue-grey-700">
            Role*
        </label>
        <div className="mt-1">
            <input
                type="text"
                name="role"
                id="role"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
                placeholder="Software Engineer"
                onChange={handleChange}
                value={props.value}
            />
        </div>
    </div>
    )
}

export default Title;

