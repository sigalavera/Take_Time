import React,{useEffect, useState} from "react";
import { getAllCases } from "../../../api";
import './cases.css'
const Cases = () => {
  const [cases,setCases] = useState([]);

  useEffect(()=>{
     getAllCases().then(res => setCases(res.data.cases))
  },[])
  console.log(cases,"dsadsa");
  const mapCases = (cases) => 
    cases.map((item,key)=>{
        return(
            <tr key={key}>
                <td>{item.title}</td>
                <td>{item.createdAt}</td>
                <td>{item.descripition}</td>
            </tr>
        )
   })
  
    return (
     <table>
         <th>Name</th>
         <th>Date</th>
         <th>Descripition</th>
         {
            mapCases(cases) 
         }
     </table>
  )
}
export default Cases;