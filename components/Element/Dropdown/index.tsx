import React from "react";

interface DropdownProps {
    list: Array<any>,
    addItem: Function
}

const Dropdown = (props: DropdownProps) => {

    const handleChange = async (items: any) => {
        props.addItem('technology_used', items)
    }


    return (
        <div id="dropdown" className="absolute shadow top-100 bg-light-blue-50 z-40 w-3/6 rounded max-h-select overflow-y-auto ">
            <div className="flex flex-col w-full">
                {props.list.map((item, key) => {
                    return <div key={key}
                        className="cursor-pointer w-full border-blue-grey-100 rounded hover:bg-green-100"
                        onClick={() => handleChange(item)}>
                        <div className="flex w-full items-center p-2 pl-2 border-transparent relative hover:border-green-100" >
                            <div className="w-full items-center flex">
                                <   div className="mx-2 leading-6  ">
                                    {item}
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>);

};


export default Dropdown;  