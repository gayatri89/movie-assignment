import React from "react";
import Input from '@mui/material/Input';

export const MovieFilter = ({setInputValue, value}) => {
    return(   
        <input 
            type="text"
            onChange={(event)=>{
                console.log(event.target.value)
                setInputValue(event.target.value)}}
            value={value}
            placeholder="search Movie"
            className="my-3 form-control"
        />    
    )
}