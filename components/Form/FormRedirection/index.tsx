import Input from "../../Element/Input/index";
import Button from '../../Element/Button/index'
import Router from 'next/router'

interface formRedirectionProps {
    department: string,
    handleChange: Function,
    textButton: string
}

const FormRedirection = (props: formRedirectionProps) => {

    async function handleSubmit(e: React.BaseSyntheticEvent) {
        e.preventDefault();
        if (props.department === 'France') {
            Router.push('/salaries/france')
        } else {
            Router.push(`/salaries/france/${props.department.toLowerCase()}`)
        }
    }

    async function handleChange(department: String) {
        props.handleChange(department)
    }

    return (
        <form className="grid grid-cols-2 gap-4 mt-4">
            <Input value={props.department} handleChange={handleChange} /> <Button value={props.textButton} handleSubmit={handleSubmit} />
        </form>
    )
}

export default FormRedirection;