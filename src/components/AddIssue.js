import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link} from 'react-router-dom';
import "../styles/AddIssue.css";
import {Form ,Col   } from 'react-bootstrap';




const AddIssue = () => {
    return (
        <div className="addissue">
            <div className="addissue__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                        Add Issue
                </div>
                <h1 className="addissue__header__title">
                    Create Issue
                </h1>
            </div>
            <div className="addissue__content">
                <form >
                    <div className="field-group">
                        <label>
                            Project<span style={{color:"red"}}> *</span>
                        </label>
                        <select placeholder="Select project">
                            <option value="1">Project 1</option>
                            <option value="2">Project 2</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label>
                            Issue Type<span style={{color:"red"}}> *</span>
                        </label>
                        <select placeholder="Select issue type">
                            <option value="1">Story</option>
                            <option value="2">Task</option>
                            <option value="3">Bug</option>
                            <option value="4">Epic</option>
                        </select>
                    </div>
                    <hr/>
                    <div className="field-group">
                        <label>
                            Summary<span style={{color:"red"}}> *</span>
                        </label>
                        <input type="text" style={{width:"100%"}}/>
                    </div>
                    <div className="field-group">
                        <label>
                            Components
                        </label>
                        <h6 style={{fontWeight:"bold"}}>None</h6>
                    </div>
                    <div className="field-group">
                        <label>
                            Attachment
                        </label>
                        {/* <input type="text" value="Drop files to attach" style={{width:"50%"}}/> */}
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            style={{display:"none"}}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span" style={{backgroundColor:"transparent", width:"80%", border:"0.01em solid grey"}}>
                            Upload files to attach
                            </Button>
                        </label>
                    </div>
                    <div className="field-group">
                        <label>
                            Description
                        </label>
                        <textarea rows="4" cols="50" style={{width:"100%"}}/>
                    </div>
                    <div className="field-group">
                        <label>
                            Reporter<span style={{color:"red"}}> *</span>
                        </label>
                        <div className="addissue__usercontainer">
                                <div className="addissue__usercontainer__avatar">
                                    <img alt="My Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfkXX6ehXfa-zzSjkEQjne-NTk9Qkh2HtqXQ&amp;usqp=CAU"/>
                                </div>
                                <div className="addissue__usercontainer__name">
                                    <input type="text" value="Abhinav Mishra" style={{width:"100%"}}/>
                                </div>
                        </div>
                    </div>

                    <div className="field-group">
                        <label>
                            Linked Issues
                        </label>
                        <select placeholder="Select project">
                            <option value="blocks">blocks</option>
                            <option value="blocked">is blocked by</option>
                            <option value="clones">clones</option>
                            <option value="cloned">is cloned by</option>
                            <option value="duplicates">duplicates</option>
                            <option value="duplicated">is duplicated by</option>
                            <option value="causes">causes</option>
                            <option value="caused">is caused by</option>
                            <option value="relates">relates to</option>
                        </select>
                    </div>

                    <div className="field-group">
                        <label>
                            Issue
                        </label>
                        <select placeholder="Select project">
                            <option value="1">Issue 1</option>
                            <option value="2">Issue 2</option>
                        </select>
                    </div>

                    <div className="field-group">
                        <label>
                            Fix versions
                        </label>
                        <h6 style={{fontWeight:"bold"}}>None</h6>
                    </div>

                    <div className="field-group">
                        <label>
                            Assignee
                        </label>
                        <select placeholder="Select user">
                            <option value="1">User 1</option>
                            <option value="2">User 2</option>
                            <option value="3">User 3</option>
                        </select>
                    </div>

                    <div className="field-group">
                        <label>
                            Priority
                        </label>
                        <select placeholder="Select priority">
                            <option value="highest">Highest</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                            <option value="lowest">Lowest</option>
                        </select>
                    </div>

                    <div className="field-group">
                        <label>
                            Labels
                        </label>
                        <select placeholder="Select label">
                            <option value="1">Label 1</option>
                            <option value="2">Label 2</option>
                        </select>
                    </div>

                    <div className="field-group">
                        <label>
                            Sprint
                        </label>
                        <select placeholder="Select sprint">
                            <option value="1">Sprint 1</option>
                            <option value="2">Sprint 2</option>
                            <option value="3">Sprint 3</option>
                        </select>
                    </div>

                    <div class="buttons_container">
                        <input type="submit" value="Create" className="submitbutton"/>
                        <a href="">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddIssue;
