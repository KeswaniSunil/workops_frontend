import React,{useEffect} from 'react';
import { Route, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard.js';
import Projects from './components/Projects.js';
import Backlog from './components/Backlog.js';
import ProjectSettings from './components/ProjectSettings';
import ProjectTeam from './components/ProjectTeam';
import CreateProject from './components/CreateProject';
import Components from './components/Components';
import Sprints from './components/Sprints';
import Versions from './components/Versions';
import SprintDetails from './components/SprintDetails';
import VersionDetails from './components/VersionDetails';

import IssueDetails from './components/IssueDetails';
import AddIssue from './components/AddIssue';
import UserProfile from './components/UserProfile';
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
        else if(pathname==="/sprints") return <Sprints/>
        else if(pathname==="/issues/:id") return <IssueDetails/>
        else if(pathname==="/sprints/:id") return <SprintDetails/>
        else if(pathname==="/addissue") return <AddIssue/>
        else if(pathname==="/userprofile") return <UserProfile/>
        else if(pathname==="/versions") return <Versions/>
        else if(pathname==="/versions/:id") return <VersionDetails/>
    }
    return (        
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem("token")) {
                    // console.log(props);
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
