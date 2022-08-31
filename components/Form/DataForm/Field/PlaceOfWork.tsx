interface PlaceOfWorkProps {
    value: string | undefined,
    handleChange: Function,
    error?: any
}

const PlaceOfWork = (props: PlaceOfWorkProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('place_of_work', e.target.value)
    }

    return (
        <div>
            <label className="block text-sm font-medium text-blue-grey-700">
                {"Place Of Work (city)*"}
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name="place_of_work"
                    id="place_of_work"
                    className={`shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm rounded-lg border-none ${props.error != undefined ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="Paris"
                    onChange={handleChange}
                    value={props.value}
                />
                {(props.error != undefined)
                    ? <p className="text-red-500 text-xs"> {props.error}</p>
                    : ''}
            </div>
        </div>
    )
}

export default PlaceOfWork;