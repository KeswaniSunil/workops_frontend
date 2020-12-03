import React,{useState,useEffect} from 'react';
import "../styles/AddEditProject.css";
import WorkOpsApi from "../api/WorkOpsBackend";

const AddEditProject = ({id}) => {
    //Way 1:
    // const [name,setName]=useState("");
    // const [key,setKey]=useState("");
    // const [desc,setDesc]=useState("");
    
    //Way 2:
    let initialprojecstate={
        name:"",
        projectkey:"",
        description:""
    }

    const [project,setProject]=useState(initialprojecstate);
    useEffect(()=>{
        if(id!==undefined){
            WorkOpsApi.get("/api/projects/"+id)
            .then(res=>{
                setProject(res.data);
            })
        }
    },[]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id===undefined){
            WorkOpsApi.post("/api/projects",{project})
            .then(res=>{
                if(res){
                    console.log(res);
                  alert("Project Added");
                }
            })
            .catch(e=>{
                alert("Error");
            })
        }
        else{
            WorkOpsApi.put("/api/projects",{project})
            .then(res=>{
                if(res){
                    console.log(res);
                  alert("Project Added");
                }
            })
            .catch(e=>{
                alert("Error");
            })
        }
    }
    return (
        <div>
            <form >
                <div className="field-group">
                    <label>
                        Name
                    </label>
                    <input type="text" value={id && project.name}
                    //  placeholder="Enter name"
                        onChange={(e)=>{setProject({...project,name:e.target.value})}}
                     />
                </div>
                <div className="field-group">
                    <label>
                        Key
                    </label>
                    <input type="text" value={id && project.projectkey} 
                        onChange={(e)=>{setProject({...project,projectkey:e.target.value})}}
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
                    value={id && project.description}
                    onChange={(e)=>{setProject({...project,description:e.target.value})}}
                    >
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
                    <input type="submit" value="Save Details" className="submitbutton" onClick={handleSubmit}/>
                    <a href="">Cancel</a>
                </div>
            </form>
        </div>
    );
}

export default AddEditProject;
