interface TextAreaProps {
    value: any,
    handleChange: Function
}

export default function TextArea(props: TextAreaProps) {

    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('feedback', e.target.value)
    }

    return (
        <div className="flex items-start">
            <div className="flex-shrink-0">
            </div>
            <div className="min-w-0 flex-1">
                    <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                        <label htmlFor="comment" className="sr-only">
                            Add your comment
                        </label>
                        <textarea
                            rows={3}
                            name="comment"
                            id="comment"
                            className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
                            placeholder="Add your comment..."
                            value={props.value}
                            onChange={handleChange}
                        />
                        {/* Spacer element to match the height of the toolbar */}
                    </div>
            </div>
        </div>
    )
}
