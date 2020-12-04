import React,{useState} from 'react';
import "../styles/CustomBreadcrumb.css";
import "../styles/Modal.css";

import "../styles/Sprints.css";
import DataTable from "./DataTable.js"
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';

import AddSprint from './AddSprint.js';

const Sprint = () => {
    const rows=[
        {
            name:"Sprint 1",
            duration:"2 weeks",
            startdate:"4th December 2020",
            enddate:"18th December 2020",
            sprintgoal:"Finish Login/registration modules"
        },
        {
            name:"Sprint 2",
            duration:"Custom",
            startdate:"4th December 2020",
            enddate:"18th December 2020",
            sprintgoal:"Finish Login/registration modules"
        },    {
            name:"Sprint 3",
            duration:"2 weeks",
            startdate:"4th December 2020",
            enddate:"18th December 2020",
            sprintgoal:"Finish Login/registration modules"
        },    {
            name:"Sprint 4",
            duration:"2 weeks",
            startdate:"4th December 2020",
            enddate:"18th December 2020",
            sprintgoal:"Finish Login/registration modules"
        },    {
            name:"Sprint 5",
            duration:"2 weeks",
            startdate:"4th December 2020",
            enddate:"18th December 2020",
            sprintgoal:"Finish Login/registration modules"
        },    {
            name:"Sprint 6",
            duration:"2 weeks",
            startdate:"4th December 2020",
            enddate:"18th December 2020",
            sprintgoal:"Finish Login/registration modules"
        },
    ]

    const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' ,width:"20%"},
    { id: 'duration', numeric: false, disablePadding: true, label: 'Duration',width:"10%" },
    { id: 'startdate', numeric: true, disablePadding: false, label: 'Start Date',width:"20%" },
    { id: 'enddate', numeric: true, disablePadding: false, label: 'End Date',width:"20%" },
    { id: 'sprintggoal', numeric: true, disablePadding: false, label: 'Sprint Goal',width:"30%" }
    ];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="sprint">
            <div className="sprint__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Tracker
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Sprints
                </div>
                <h1 className="sprint__header__title">
                    Project sprints
                </h1>
            </div>
            <div className="sprint__content">
                <div className="sprint__content__addsprint">
                    <div>
                        <button type="button" onClick={handleShow}>
                            Create New
                        </button>
                    </div>
                </div>
                <DataTable mode="sprints" rows={rows} headCells={headCells}/>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    // size="lg"
                    // aria-labelledby="contained-modal-title-vcenter"
                    // centered
                    centered
                    // animation={true}
                >
                    <Modal.Header closeButton >
                    <Modal.Title>Add Sprint</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <AddSprint onHandleClose={handleClose}/>
                    </Modal.Body>
                    {/* <Modal.Footer>
                    <Button style={{width:"15%"}} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{width:"25%"}} variant="primary">Save Changes</Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        </div>
    );
}

export default Sprint;
