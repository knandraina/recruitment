
import { useEffect, useState } from "react";

import Heroes from "../components/Element/Heroes";
import Table from "../components/Table/table";
import Compensation from "../models/compensation";
import { metricsCompensation } from "../lib/calculation";

import axios from 'axios'


const Homepage = () => {

  const [compensation, setCompensation] = useState<any>()

  useEffect(() => {
    async function fetchData() {
      const response = await getCompensation()
      console.log(response, 'test')
      setCompensation(response);
    }
    fetchData()
  }, [])

  async function getCompensation() {
    const url = '/api/hello'
    return axios.get(url);
  }



  return (
    <>
      <Heroes table={<Table compensation={compensation? compensation.data : '' } />} />
      
    </>
  )
}

export default Homepage;