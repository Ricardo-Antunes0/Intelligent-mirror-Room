import React,{useState, useEffect} from 'react';
import Chart from "./graph"
function Linechart()
{
    const [sData, setSdata]= useState([]);
    useEffect( ()=>{
        const getvaluedata= async()=>{
            const newvalue=[];
            const reqData= await fetch('http://192.168.160.19:5000/counter');
            const resData= await reqData.json();
            //console.log(resData);
            for(let i=0; i < 10; i++)
            {
                newvalue.push({name:'1',data: resData['value']});   

            }
            console.log(newvalue);
            setSdata(newvalue);

        }
        getvaluedata();
    },[]);   

    return(
        <div>
            <Chart />
        </div>
    );
}

export default Linechart;