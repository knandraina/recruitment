interface TechnologyProps {
    value: string | undefined,
    handleChange: Function
}

const Technology = (props: TechnologyProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('technology_used', e.target.value)
    }

    return (
        <div>
            <label className="block text-sm font-medium text-blue-grey-700">
                Technology used at work*
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name="technology_used"
                    id="technology_used"
                    min="0"
                    className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
                    placeholder="JS"
                    onChange={handleChange}
                    value={props.value}
                />
            </div>
        </div>
    )
}

export default Technology;