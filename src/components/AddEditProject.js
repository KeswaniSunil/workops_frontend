import React from 'react';
import "../styles/AddEditProject.css";


const AddEditProject = ({id}) => {
    return (
        <div>
            <form >
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
                        Key
                    </label>
                    <input type="text" value={id && "ZG20191208"} 
                    // placeholder="Enter Key" 
                    style={{width:"30%"}}/>
                </div>
                <div className="field-group">
                    <label>
                        URL
                    </label>
                    <input type="text" value={id && "https://www.google.com/"}  
                    // placeholder="Enter URL"
                    />
                </div>
                <div className="field-group">
                    <label>
                        Description
                    </label>
                    <textarea rows="4" cols="50" style={{width:"80%"}} 
                    // placeholder="enter description"
                    >
                        {id && 'This is my Project Description..This is my Project Description..This is my Project Description..'}
                    </textarea>
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
                    <input type="submit" value="Save Details" className="submitbutton"/>
                    <a href="">Cancel</a>
                </div>
            </form>
        </div>
    );
}

export default AddEditProject;
