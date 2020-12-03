import React from 'react';
import "../styles/AddEditComponent.css";
import {Button} from 'react-bootstrap';


const AddEditTeamMember = ({id,onHandleClose}) => {
    return (
        <div>
            <form >
                <div className="field-group">
                    <label>
                        Email
                    </label>
                    <input type="email" required value={id && "Tracker Mobile App"}
                    //  placeholder="Enter name"
                     />
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

export default AddEditTeamMember;
