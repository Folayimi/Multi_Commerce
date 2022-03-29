import React, {useEffect} from 'react';
import {ErrorMode} from "./Components/styledComponents";
const Modal=({message, setError, modal, setModal})=>{    
    useEffect(()=>{
        setModal(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])  
    setTimeout(()=>{
        setModal(false);
        setError(false);
    },[3000]) 
    return(
        <>
        {modal && <ErrorMode>{message}</ErrorMode>}            
        </>
    ) 
}
export default Modal;
