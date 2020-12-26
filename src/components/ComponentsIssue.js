import React,{useState,useEffect} from 'react';
import "../styles/CustomBreadcrumb.css";
import "../styles/ComponentsIssue.css";
import DataTable from "./DataTable.js"
import {useSelector} from 'react-redux';
import WorkOpsApi from "../api/WorkOpsBackend";
import generate from '@babel/generator';

const ComponentsIssue = (props) => {

    const [rows,setRows]=useState([]);
    const {projectid}=useSelector(state=>state.ProjectReducer);
    const generate=()=>{
        WorkOpsApi.get("/api/componentissue/"+props.match.params.id)
        .then(res=>{
            if(res.data.length>0 && res.data[0].id!==undefined){
                console.log(res.data);
                // console.log(rows.length);
                setRows(res.data);             
            }
            else{
                setRows([]);
            }
            // console.log(res.data);
        });
    }
    useEffect(()=>{
        generate();
    },[]);
    
    const headCells = [
      { id: 'type', numeric: false, disablePadding: true, label: 'Type' ,width:"10%"},
      { id: 'desc', numeric: false, disablePadding: true, label: 'Description',width:"50%" },
      { id: 'status', numeric: true, disablePadding: false, label: 'Status',width:"20%" },
      { id: 'priority', numeric: true, disablePadding: false, label: 'Priority',width:"10%" }
    ];
    return (
        <div className="componentsissue">
            <div className="componentsissue__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Tracker
                    <span className="custombreadcrumb__forwardslash">/</span>
                    ComponentsIssue
                </div>
                <h1 className="componentsissue__header__title">
                    Component's Issues
                </h1>
            </div>
            <div className="componentsissue__content">
                <DataTable mode="componentIssue" componentIdForComponentIssuetype={props.match.params.id} rows={rows} headCells={headCells} generate={generate}/>                
            </div>
        </div>
    );
}

export default ComponentsIssue;
