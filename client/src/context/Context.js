import {createContext, useEffect, useReducer} from "react";
import Reducer from "./Reducer";

//this is mainly used for login purpose


const INITIAL_STATE ={
    user:JSON.parse(localStorage.getItem("user"))|| null,
    isFetching:false,
    error:false,
}
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children})=>{
    const [state, dispatch]=useReducer(Reducer,INITIAL_STATE);//reducer will update the initial_state

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));

    },[state.user])

    return(
        <Context.Provider
         value={{
             user:state.user,
             isFetching:state.isFetching,
             error:state.error,
             dispatch,
         }}
         >
           {children} 
        </Context.Provider>
    )
}