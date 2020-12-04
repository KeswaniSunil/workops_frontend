import React,{useState} from 'react';
import "../styles/CustomBreadcrumb.css";
import "../styles/Modal.css";

import "../styles/Versions.css";
import DataTable from "./DataTable.js"
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';

import AddVersion from './AddVersion.js';

const Versions = () => {
    const rows=[
        {
            name:"1.1",
            releasedate:"4th December 2020",
            description:"Finish Login/registration modules"
        },
        {
            name:"1.2",
            releasedate:"4th December 2020",
            description:"Finish Login/registration modules"
        },    {
            name:"1.3",
            releasedate:"4th December 2020",
            description:"Finish Login/registration modules"
        },    {
            name:"2.1",
            releasedate:"4th December 2020",
            description:"Finish Login/registration modules"
        },    {
            name:"2.2",
            releasedate:"4th December 2020",
            description:"Finish Login/registration modules"
        },    {
            name:"3.1",
            releasedate:"4th December 2020",
            description:"Finish Login/registration modules"
        },
    ]

    const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' ,width:"30%"},
    { id: 'releasedate', numeric: true, disablePadding: false, label: 'Release Date',width:"35%" },
    { id: 'description', numeric: true, disablePadding: false, label: 'Description',width:"35%" }
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
                    Versions
                </div>
                <h1 className="sprint__header__title">
                    Project versions
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
                <DataTable mode="versions" rows={rows} headCells={headCells}/>
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
                    <Modal.Title>Add Version</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <AddVersion onHandleClose={handleClose}/>
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

export default Versions;
