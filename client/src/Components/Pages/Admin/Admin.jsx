import React,{useState,useEffect} from "react";
import {useDispatch} from "react-redux";
import { getAllCases } from "../../../Redux/Actions/cases";

import Cases from "../../Features/Cases/Cases";
const Admin = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllCases())
        },[])
    return(
        <Cases/>
    )

}

export default Admin;