import React, { useEffect, useState } from "react";

import Dropdown from '../Dropdown/index';


interface MultiselectProps {
  technology: Array<any>,
  handleChange: Function,
  value: any
}


const Multiselect = (props: MultiselectProps) => {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);
  // managing dropdown items (list of dropdown items)
  const [items, setItems] = useState(Array<any>);
  // contains selected items
  const [selectedItems, setSelected] = useState([]);

  useEffect(() => {
    setItems(props.technology)
  }, [])


  const toogleDropdown = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setDropdown(!dropdown)
  };
  // adds new item to multiselect 
  const addTag = async (item: any, tech: any) => {
    setSelected(selectedItems.concat(tech));
    setDropdown(false);
  };
  // removes item from multiselect
  const removeTag = async (item: any) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelected(filtered);
  }

  const handleChange = async (tech: any) => {
    props.handleChange('technology_used', tech)
  }

  useEffect(() => {
    async function fetchData() {
      await handleChange(selectedItems)
    }
    fetchData()
  }, [selectedItems])



  return (<div className="autcomplete-wrapper">
    <div className="autcomplete">
      <div className="w-full flex flex-col items-center mx-auto">
        <div className="w-full">
          <div className="flex flex-col items-center relative">
            <div className="w-full ">
              <div className="my-2 p-1 flex border border-blue-grey-200 bg-blue-grey-50 rounded ">
                <div className="flex flex-auto flex-wrap">
                  {
                    selectedItems.map((tag, index) => {
                      return (
                        <div key={index} className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-green-200 rounded-full text-green-700 bg-green-100 border border-green-300 ">
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">{tag}</div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div onClick={() => removeTag(tag)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-4 h-4 ml-2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                        </div>)
                    })
                  }
                  <div className="flex-1">
                    <input placeholder="" className="bg-blue-grey-50 p-1 px-2 appearance-none outline-none h-full w-full text-blue-grey-800" />
                  </div>
                </div>
                <div className="text-blue-grey-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-blue-grey-200" onClick={toogleDropdown}>
                  <button className="cursor-pointer w-6 h-6 text-blue-grey-600 outline-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-4 h-4">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {dropdown ? <Dropdown list={items} addItem={addTag} /> : null}
          </div>
        </div>
      </div>

    </div>
  </div>)
};

export default Multiselect;