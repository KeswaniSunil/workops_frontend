import React from 'react';
import AddEditProject from "./AddEditProject.js"
import "../styles/CreateProject.css";
import "../styles/CustomBreadcrumb.css";

const CreateProject = () => {
    return (
        <div className="createproject">
            <div className="createproject__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Tracker
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Project Settings
                </div>
                <h1 className="createproject__header__title">
                    Create Project
                </h1>
            </div>
            <div className="createproject__content">
                <AddEditProject />
            </div>
        </div>
    );
}

export default CreateProject;
