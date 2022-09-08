interface ButtonProps {
    value: string
    handleSubmit: Function,
}

const SecondaryButton = (props: ButtonProps) => {
    const handleSubmit = (e: any) => {
        props.handleSubmit(e)
    }
    return (
        <div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-grey-50  hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                onClick={handleSubmit}
            >
                {props.value}
            </button>
        </div>
    )
}

export default SecondaryButton;