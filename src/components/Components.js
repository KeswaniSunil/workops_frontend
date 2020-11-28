import React,{useState} from 'react';
import "../styles/CustomBreadcrumb.css";
import "../styles/Modal.css";

import "../styles/Components.css";
import DataTable from "./DataTable.js"

import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap';

import AddEditComponent from './AddEditComponent.js';


  

const Components = () => {
  const rows=[
    {
        name:"Component 1",
        desc:"Component 1 Description goes here",
        lead:"Dummy Lead 1",
        assignee:"Dummy Assignee 1"
    },
    {
        name:"Component 2",
        desc:"Component 2 Description goes here",
        lead:"Dummy Lead 2",
        assignee:"Dummy Assignee 2"
    },

]
  const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' ,width:"10%"},
    { id: 'desc', numeric: false, disablePadding: true, label: 'Description',width:"40%" },
    { id: 'lead', numeric: true, disablePadding: false, label: 'Component Lead',width:"20%" },
    { id: 'assignee', numeric: true, disablePadding: false, label: 'Default Assignee',width:"20%" }
  ];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="components">
            <div className="components__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Tracker
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Components
                </div>
                <h1 className="components__header__title">
                    Project components
                </h1>
            </div>
            <div className="components__content">
                <div className="components__content__addcomponent">
                    <div>
                        <button type="button" onClick={handleShow}>
                            Create New
                        </button>
                    </div>
                </div>
                <DataTable mode="components" rows={rows} headCells={headCells}/>
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
                    <Modal.Title>Add Component</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <AddEditComponent onHandleClose={handleClose}/>
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

export default Components;
