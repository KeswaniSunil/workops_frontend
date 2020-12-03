import {actionTypes} from '../actions/ProjectActions';
const initialState={
    projectId:null ,
    errMessage: ''
}

export const ProjectReducer = (state = initialState, action) => {
     switch(action.type){
        case actionTypes.ERROR:
            return {...state,errMessage:action.payload};
        case actionTypes.SELECT_PROJECT:
            return {projectId:action.payload , errMessage:""};
        default:
            return state;
     }
}
