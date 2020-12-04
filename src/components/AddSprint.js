import React,{useState} from 'react';
import "../styles/AddSprint.css";
import {Button} from 'react-bootstrap';

const AddSprint = ({id,onHandleClose}) => {
    const [duration, setDuration]=useState("Custom")
    const [startdate, setStartdate]=useState(new Date().toLocaleDateString('en-CA'))

    const changeDuration=()=>{
        const selDuration=document.getElementById("selectDuration").value;
        const startDate=document.getElementById("startdate");
        const endDate=document.getElementById("enddate");
        const sd = new Date(startDate.value)
        
        if(selDuration==="1 week"){  
            const ed=new Date()
            ed.setDate(sd.getDate()+7)
            endDate.value=ed.toLocaleDateString('en-CA')
            endDate.readOnly=true
        }
        else if(selDuration==="2 weeks"){ 
            const ed=new Date()
            ed.setDate(sd.getDate()+14)
            endDate.value=ed.toLocaleDateString('en-CA')
            endDate.readOnly=true
        }
        else if(selDuration==="3 weeks"){
            const ed=new Date()
            ed.setDate(sd.getDate()+21)
            endDate.value=ed.toLocaleDateString('en-CA')
            endDate.readOnly=true
        }
        else if(selDuration==="4 weeks"){ 
            const ed=new Date()
            ed.setDate(sd.getDate()+28)
            endDate.value=ed.toLocaleDateString('en-CA')
            endDate.readOnly=true
        }else{
            const ed=new Date()
            ed.setDate(sd.getDate()+7)
            endDate.value=ed.toLocaleDateString('en-CA')
            endDate.readOnly=false
        }
        
        setDuration(selDuration);
    }

    const changeStartDate=()=>{
        const startDate=document.getElementById("startdate");
        setStartdate(new Date(startDate.value).toLocaleDateString('en-CA'))
    }

    const getEndDate=()=>{
        const sd = new Date(startdate)
        
        if(duration==="1 week"){  
            const ed=new Date()
            ed.setDate(sd.getDate()+7)
            return ed.toLocaleDateString('en-CA')
        }
        else if(duration==="2 weeks"){ 
            const ed=new Date()
            ed.setDate(sd.getDate()+14)
            return ed.toLocaleDateString('en-CA')
        }
        else if(duration==="3 weeks"){
            const ed=new Date()
            ed.setDate(sd.getDate()+21)
            return ed.toLocaleDateString('en-CA')
        }
        else if(duration==="4 weeks"){ 
            const ed=new Date()
            ed.setDate(sd.getDate()+28)
            return ed.toLocaleDateString('en-CA')
        }else{
            const ed=new Date()
            ed.setDate(sd.getDate()+7)
            return ed.toLocaleDateString('en-CA')
        }
    }

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
                        Duration
                    </label>
                    <select id="selectDuration" type="button" onChange={changeDuration}>
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="3 weeks">3 weeks</option>
                        <option value="4 weeks">4 weeks</option>
                        <option value="Custom" selected>Custom</option>
                    </select>
                </div>
                <div className="field-group">
                    <label>
                        Start date
                    </label>
                    <input type="date" name="startdate" id="startdate"
                        placeholder="dd-mm-yyyy" value={startdate}
                        min={new Date().toLocaleDateString('en-CA')} onChange={changeStartDate}/> 
                </div>
                <div className="field-group">
                    <label>
                        End date
                    </label>
                    <input type="date" name="enddate" id="enddate"
                        placeholder="dd-mm-yyyy" value={getEndDate()}
                        min={getEndDate()}/> 
                </div>
                <div className="field-group">
                    <label>
                        Goal
                    </label>
                    <textarea name="sprintgoal" rows="4" style={{width:"100%"}} />

                <div className="field-group">
                    <label>
                        Issues to include in sprint
                    </label>
                    <select>
                        <option value="1">Issue 1</option>
                        <option value="2">Issue 2</option>
                        <option value="3">Issue 3</option>
                    </select>
                </div>
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

export default AddSprint;
