import React from 'react';
import "../styles/AddEditUser.css";
import Button from '@material-ui/core/Button';


const AddEditUser = ({id}) => {
    return (
        <div>
            <form >
                <div className="field-group" style={{width:"50%"}}>
                    {/* <label>
                        Avatar
                    </label> */}
                    {/* <input type="text" value="Drop files to attach" style={{width:"50%"}}/> */}
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        style={{display:"none"}}
                    />
                    <label htmlFor="contained-button-file" className="avatarselect">
                        <Button variant="contained" component="span" style={{backgroundColor:"transparent", height:"100px", width:"100px", border:"none"}} >
                            <img style={{height:"100px", width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfkXX6ehXfa-zzSjkEQjne-NTk9Qkh2HtqXQ&usqp=CAU" alt="My Avatar" />
                        </Button>
                        
                    </label>
                </div>
                <div className="field-group">
                    <label>
                        Name
                    </label>
                    <input type="text" value={id && "Abhinav Mishra"}
                    //  placeholder="Enter name"
                     />
                </div>
                <div className="field-group">
                    <label>
                        Email
                    </label>
                    <input type="text" value={id && "abhinav@gmail.com"}
                    //  placeholder="Enter name"
                     />
                </div>
                <div className="field-group">
                    <label>
                        Public Name
                    </label>
                    <input type="text" value={id && "Abhinav"}
                    //  placeholder="Enter name"
                     />
                </div>
                <div className="field-group">
                    <label>
                        Name
                    </label>
                    <input type="number" value={id && "8511232312"}
                    //  placeholder="Enter name"
                     />
                </div>
                <div className="field-group">
                    <label>
                        Department
                    </label>
                    <input type="text" value={id && "UX design"}
                    //  placeholder="Enter name"
                     />

                    {/* <select>
                        <option value="1">Dept 1</option>
                        <option value="2" selected={id!==undefined}>Dept 2</option>
                        <option value="3">Dept 3</option>
                    </select> */}
                </div>
                <div className="field-group">
                    <label>
                        Organisation
                    </label>
                    <input type="text" value={id && "DAIICT"}
                
                    //  placeholder="Enter name"
                     />
                </div>
                <div className="field-group">
                    <label>
                        Local Time
                    </label>
                    <input type="date" value={new Date().toLocaleDateString('en-CA')}
                    //  placeholder="Enter name"
                     />
                </div>
    
                <div className="buttons_container">
                    <input type="submit" value="Save Details" className="submitbutton"/>
                    <a href="">Cancel</a>
                </div>
            </form>
        </div>
    );
}

export default AddEditUser;
