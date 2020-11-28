import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link} from 'react-router-dom';
import "../styles/ProjectSettings.css";
import "../styles/CustomBreadcrumb.css";
import AddEditProject from "./AddEditProject.js"
import {Form ,Col , Button  } from 'react-bootstrap';


const ProjectSettings = () => {
    return (
        <div className="projectsettings">
            <div className="projectsettings__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Tracker
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Project Settings
                </div>
                <h1 className="projectsettings__header__title">
                    Details
                </h1>
            </div>
            <div className="projectsettings__content">
                <AddEditProject id={11}/>
                {/* <Form className="my-3">
                    <Form.Row className="my-2">
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                required
                                placeholder="Enter Name"
                                type="text"
                                value="Tracker"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="my-2">
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                required
                                placeholder="Enter Name"
                                type="text"
                                value="Tracker"
                            />
                        </Form.Group>
                    </Form.Row>
                </Form> */}
            </div>
        </div>
    );
}

export default ProjectSettings;
