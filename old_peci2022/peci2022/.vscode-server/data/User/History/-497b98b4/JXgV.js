import React,{useState, useEffect} from 'react';
import Chart from "./graph"
function Linechart(props)
{ 

    return(
        <div>
            <Chart value={props.value}/>
        </div>
    );
}

export default Linechart;