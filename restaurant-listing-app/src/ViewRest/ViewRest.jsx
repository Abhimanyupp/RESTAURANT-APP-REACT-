import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../base_url';
import axios from 'axios';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';
function ViewRest() {
  //to get particular id from url
// const pathParams=useParams
// console.log(pathParams.id);
//destructuring using id
  const {id}=useParams()
  console.log(id);

  //create a state for holding restaurant details
  const [restDetails,setRestDetails]=useState([])

  //Make an api call to fetch particular restaurant details
 const fetchData=async()=>{
  const {data}= await axios.get(`${base_url}/restaurants/${id}`)
  console.log(data);//particular details
  setRestDetails(data)
 }

console.log(restDetails);//particular details

 useEffect(()=>{
  fetchData()
 },[])

  return (
    <>
     {
      restDetails?
      <Row>
      
        <Col>
        {/* image */}
        <Image src={`${restDetails.photograph}` } fluid style={{height:'500px',width:'400px',padding:'20px',border:'2px solid white',marginLeft:'50px'}}/>
        </Col>
        
         <Col style={{padding:'100px'}}>
          <h1 className='text-center m-2'>{restDetails.name}</h1>
         <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem
        tag='button'
        action
        noBorders
        active
        aria-current='true'
        type='button'
        className='px-3'
      >
       Address : {restDetails.address}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        Cuisine type : {restDetails.cuisine_type}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        Neighbourhood: {restDetails.neighborhood}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
       <RestOp op={restDetails.operating_hours}/>
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders  type='button' className='px-3'>
        <RestReview review={restDetails.reviews} />
      </MDBListGroupItem>
    </MDBListGroup>
         </Col>




      
    </Row> : <p>No Data</p>
     }
    </>
  )
}

export default ViewRest