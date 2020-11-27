import React,{useEffect} from 'react';
import { Route, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard.js';
import Projects from './components/Projects.js';
import Backlog from './components/Backlog.js';
import ProjectSettings from './components/ProjectSettings';
import IssueDetails from './components/IssueDetails';

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
        else if(pathname==="/issuedetails/:id") return <IssueDetails/>
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
