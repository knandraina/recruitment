interface FeedbackJobFormProps {
    value: string | undefined,
    handleChange: Function
}

const FeedbackJobForm = (props: FeedbackJobFormProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('feedback_job_form', e.target.value)
    }

    return (
        <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                What is your main challenge when looking for a new job?
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

export default FeedbackJobForm;



