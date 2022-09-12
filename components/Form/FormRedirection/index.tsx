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
            Router.push('/salary/france')
        } else {
            Router.push(`/salary/france/${props.department.toLowerCase()}`)
        }
    }

    async function handleChange(department: String) {
        props.handleChange(department)
    }

    return (
        <form className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-start-0 col-span-2"><Input value={props.department} handleChange={handleChange} /></div> <Button value={props.textButton} handleSubmit={handleSubmit} />
        </form>
    )
}

export default FormRedirection;