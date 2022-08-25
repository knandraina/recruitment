interface TitleProps {
    value: string | undefined,
    handleChange: Function
}


const role = [
    'Software Engineer, Back-end',
    'Software Engineer, Front-end',
    'Software Engineer, Full-Stack',
    'Software Engineer, Operating Systems',
    'Software Engineer, Embedded Systems',
    'Software Engineer, Digital Signal Processing Systems',
    'DevOps',
    'Admin Systems',
    'Data Analyst',
    'Data Scientist',
    'Site Reliability Engineer',
    'Software Architect',
    'Software Security Engineer',
    'Software Security Ops',
    'Software Network Engineer',
    'QA Engineer',
    'Engineering Director',
    'Principal Engineer',
    'CTO',
    "Software Engineer",

]

const Title = (props: TitleProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange('role', e.target.value)
    }

    return (
        <div>
            <label htmlFor="area" className="block text-sm font-medium text-blue-grey-700">
                Role*
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="role"
                name="role"
                autoComplete="role"
                className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 block w-full sm:text-sm border-blue-grey-300 rounded-lg border-none"
            >
                {role.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>

    )
}

export default Title;

