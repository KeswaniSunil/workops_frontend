import React,{useEffect} from 'react';
import { Route, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard.js';
import Projects from './components/Projects.js';
import Backlog from './components/Backlog.js';
import ProjectSettings from './components/ProjectSettings';
import ProjectTeam from './components/ProjectTeam';
import CreateProject from './components/CreateProject';
import Components from './components/Components';

import IssueDetails from './components/IssueDetails';
import AddIssue from './components/AddIssue';
 const PrivateRoutes = ({
    component: Component,
    ...rest
  }) => {
  const routeToComponentMapping=(pathname)=>{
        console.log(pathname)
        if(pathname==='/dashboard') return <Dashboard />
        else if(pathname==='/projects') return <Projects/>
        else if(pathname==="/backlog") return <Backlog />
        else if(pathname==="/projectsettings") return <ProjectSettings />
        else if(pathname==="/projectteam") return <ProjectTeam/>
        else if(pathname==="/createproject") return <CreateProject />
        else if(pathname==="/components") return <Components />
        else if(pathname==="/issuedetails/:id") return <IssueDetails/>
        else if(pathname==="/addissue") return <AddIssue/>
    }
    return (        
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem("token")) {
                    console.log(props);
                return <Component {...props} >
                    {/* <Dashboard/> */}
                    {routeToComponentMapping(props.match.path)}
                </Component>;
                } else {
                    alert("You are not Signed In");
                return (
                    <Redirect
                    to="/"
                    />
                );
                }
            }}
        />
    );
}
export default PrivateRoutes;
