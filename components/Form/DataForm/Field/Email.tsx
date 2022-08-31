interface EmailProps {
    value: string | undefined,
    handleChange: Function,
    error?: string
}

const Email = (props: EmailProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('email', e.target.value)
    }

    return (
        <div>
            <label className="block text-sm font-medium text-blue-grey-700">
                If you want to join the community, please share your email
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name="email"
                    id="email"
                    className={`shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm rounded-lg border-none ${props.error != undefined ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="name@gmail.com"
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

export default Email;

