interface SolutionTestedProps {
    value: string | undefined,
    handleChange: Function
}

const SolutionTested = (props: SolutionTestedProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('solution_tested', e.target.value)
    }

    return (
        <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Based on your previous answer, how did you try to solve this challenge?
            </label>
            <div className="mt-1">
                <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
                    defaultValue={''}
                    onChange={handleChange}
                    value={props.value}
                />
            </div>
        </div>
    )
}

export default SolutionTested;



