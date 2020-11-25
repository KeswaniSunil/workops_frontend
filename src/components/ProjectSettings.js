import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link} from 'react-router-dom';
import "../styles/ProjectSettings.css";
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
                <form >
                    <div className="field-group">
                        <label>
                            Name
                        </label>
                        <input type="text" value="Tracker" placeholder="Enter name"/>
                    </div>
                    <div className="field-group">
                        <label>
                            Key
                        </label>
                        <input type="text" value="ZG20191208" placeholder="Enter Key" style={{width:"30%"}}/>
                    </div>
                    <div className="field-group">
                        <label>
                            URL
                        </label>
                        <input type="text"  placeholder="Enter URL"/>
                    </div>
                    <div className="field-group">
                        <label>
                            Default Assignee
                        </label>
                        <textarea rows="4" cols="50" style={{width:"80%"}}>
                            At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                        </textarea>
                    </div>
                    <div className="field-group">
                        <label>
                            Default Assignee
                        </label>
                        <select>
                            <option value="1">Project Lead</option>
                            <option value="2">Unassigned</option>
                        </select>
                    </div>
                    <div class="buttons_container">
                        <input type="submit" value="Save Details" className="submitbutton"/>
                        <a href="">Cancel</a>
                    </div>
                </form>
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
