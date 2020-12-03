import WorkOpsApi from "../api/WorkOpsBackend";


export const actionTypes={
    ERROR : 'ERROR',
    SELECT_PROJECT : 'SELECT_PROJECT',
    CLEAR_ERR_MESSAGE:"CLEAR_ERR_MESSAGE"
};
export const switchProject= async(newProjectId,dispatch)=>{
    try{
        // console.log("Called");
        await WorkOpsApi.put('/api/userprofiles/switchproject/'+localStorage.getItem("token"),{newProjectId});
        dispatch({type:actionTypes.SELECT_PROJECT,payload:newProjectId});    
        // return true;
    }catch(error){
        dispatch({type:actionTypes.ERROR,payload:error.response.data.error});
        // return false;
    }
};
export const getProject= async(dispatch)=>{
    try{
        // console.log("called getProject");
        WorkOpsApi.get('/api/user/'+localStorage.getItem("token"))
        .then(res=>{
            WorkOpsApi.get('/api/userprofiles/'+res.data.email)
            .then(res1=>{
                // console.log(res.email); 
                // console.log("selected Proj= "+res1);
               dispatch({type:actionTypes.SELECT_PROJECT,payload:res1.data.selectedProject});    
            })
        })
        // console.log(response);

    }
    catch(error){
        dispatch({type:actionTypes.ERROR,payload:error.response.data.error});        
    }
};