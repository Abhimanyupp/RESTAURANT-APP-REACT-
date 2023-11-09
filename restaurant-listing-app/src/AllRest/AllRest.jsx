import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RestCard from '../RestCard/RestCard'
import { base_url } from '../base_url'

function AllRest() {

 // const baseUrl='http://localhost:3001'
//state creation
 const [allRest,setAllRest]=useState([])
  

  const fetchData=async()=>{
    const {data} = await axios.get(`${base_url}/restaurants`)
    console.log(data);//array of data
    setAllRest(data)
  }
  console.log(allRest);//array of data
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
       <Row>
           {
            allRest.map((item)=>(
              <Col sm={12} md={6} lg={4} xl={3} className='my-3'>
                <RestCard restaurants={item}/>
              </Col>
            ))
           }
       </Row>
    </>
  )
}

export default AllRest