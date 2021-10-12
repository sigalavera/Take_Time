import React,{useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { getAllCases } from "../../../Redux/Actions/cases";
import './cases.css';

const Cases = () => {
 const cases = useSelector(state => state.cases)
 const dispatch = useDispatch();
 
  useEffect(()=>{
  dispatch(getAllCases())
  
  },[])
 console.log(cases);
  const mapCases = () => 
    cases.map((item,key)=>{
        return(
            <tr key={key}>
                <td>{item?.title}</td>
                <td>{item?.createdAt}</td>
                <td>{item?.descripition}</td>
            </tr>
        )
   })
  
    return (
     <table>
         <th>Name</th>
         <th>Date</th>
         <th>Descripition</th>
      {
          cases?.map((item,key)=>
            (
                <tr key={key}>
                    <td>{item?.title}</td>
                    <td>{item?.createdAt}</td>
                    <td>{item?.descripition}</td>
                </tr>
            )
       )
      }
     </table>
  )
}
export default Cases;