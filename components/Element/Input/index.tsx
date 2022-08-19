import axios from "axios";
import { useEffect, useState } from "react";

interface InputProps {
    value: string,
    handleChange: Function
}


const Input = (props: InputProps) => {

    const [areaChoice, setAreaChoice] = useState<any>([])

    const handleChange = (e: React.BaseSyntheticEvent) => {
        props.handleChange(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/area');
            setAreaChoice(response.data);
        }

        fetchData()
    }, [])


    return (
        <div>
            <label htmlFor="area" className="sr-only">
                Area - region
            </label>
            <select
                onChange={handleChange}
                value={props.value}
                id="department"
                name="department"
                autoComplete="department-name"
                className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
            >
                <option>France</option>
                {areaChoice.map((data: any, i: number) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default Input;