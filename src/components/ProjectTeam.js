import React from 'react';
import "../styles/CustomBreadcrumb.css";
import "../styles/ProjectTeam.css";
import DataTable from "./DataTable.js"


  

const ProjectTeam = () => {
  const rows=[
    {
        name:"Dummy Name 1",
        email:"Dummy1@gmail.com",
        team:"Frontend",
        role:"Owner"
    },
    {
        name:"Dummy Name 2",
        email:"Dummy2@gmail.com",
        team:"Backend",
        role:"Basic"
    },
    {
        name:"Dummy Name 3",
        email:"Dummy3@gmail.com",
        team:"DevOps",
        role:"Basic"
    },
    {
        name:"Dummy Name 4",
        email:"Dummy4@gmail.com",
        team:"Frontend",
        role:"Basic"
    },
    {
        name:"Dummy Name 5",
        email:"Dummy5@gmail.com",
        team:"QA",
        role:"Basic"
    },
    {
        name:"Dummy Name 6",
        email:"Dummy6@gmail.com",
        team:"Backend",
        role:"Basic"
    },
]
  
 
  
  const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' ,width:"30%"},
    { id: 'email', numeric: false, disablePadding: true, label: 'Email',width:"30%" },
    { id: 'team', numeric: true, disablePadding: false, label: 'Team',width:"20%" },
    { id: 'role', numeric: true, disablePadding: false, label: 'Role',width:"10%" },
  ];
    return (
        <div className="projectteam">
            <div className="projectteam__header">
                <div className="custombreadcrumb">
                    Projects
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Tracker
                    <span className="custombreadcrumb__forwardslash">/</span>
                    Team
                </div>
                <h1 className="projectteam__header__title">
                    Project Team
                </h1>
            </div>
            <div className="projectteam__content">
                <div className="projectteam__content__addteammember">
                    <div>
                        <button type="button">
                            Add New
                        </button>
                    </div>
                </div>
                <DataTable mode="projectteam" rows={rows} headCells={headCells}/>
            </div>
        </div>
    );
}

export default ProjectTeam;
