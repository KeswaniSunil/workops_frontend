import React from 'react';
import "../styles/AddEditComponent.css";
import {Button} from 'react-bootstrap';

const AddEditComponent = ({id,onHandleClose}) => {
    return (
        <div className="addeditcomponent">
            <form>
                <div className="field-group">
                    <label>
                        Name
                    </label>
                    <input type="text" value={id && "Tracker Mobile App"}
                    //  placeholder="Enter name"
                     />
                </div>
                <div className="field-group">
                    <label>
                        Description
                    </label>
                    <input type="text" value={id && "Tracker Mobile App"}
                    //  placeholder="Enter name"
                     />
                </div>
                <div className="field-group">
                    <label>
                        Component Lead
                    </label>
                    <select>
                        <option value="11"></option>
                        <option value="1" selected={id!==undefined}>Sunil</option>
                        <option value="2">Assignee</option>
                    </select>
                </div>
                <div className="field-group">
                    <label>
                        Default Assignee
                    </label>
                    <select>
                        <option value="11"></option>
                        <option value="1" selected={id!==undefined}>Project Lead</option>
                        <option value="2">Unassigned</option>
                    </select>
                </div>
                <div className="buttons_container">
                    {/* <input type="submit" value="close   " className="closebutton"/>
                    <input type="submit" value="Save" className="submitbutton"/> */}
                    <Button style={{width:"15%"}} variant="secondary" onClick={onHandleClose}>
                        Close
                    </Button>
                    <Button style={{width:"20%"}} variant="primary">Save</Button>
                </div>
            </form>
        </div>
    );
}

export default AddEditComponent;
