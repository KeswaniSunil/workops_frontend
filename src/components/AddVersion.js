import React,{useState} from 'react';
import "../styles/AddVersion.css";
import {Button} from 'react-bootstrap';

const AddVersion = ({id,onHandleClose}) => {

    return (
        <div>
            <form >
                <div className="field-group">
                    <label>
                        Name
                    </label>
                    <input type="text"/>
                </div>
                <div className="field-group">
                    <label>
                        Release Date
                    </label>
                    <input type="date" name="startdate" id="startdate"
                        placeholder="dd-mm-yyyy"
                        min={new Date().toLocaleDateString('en-CA')} /> 
                </div>

                <div className="field-group">
                    <label>
                        Description
                    </label>
                    <textarea name="sprintgoal" rows="4" style={{width:"100%"}} />
                </div>

                <div className="field-group">
                    <label>
                        Issues to include in version
                    </label>
                    <select>
                        <option value="1">Issue 1</option>
                        <option value="2">Issue 2</option>
                        <option value="3">Issue 3</option>
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

export default AddVersion;
