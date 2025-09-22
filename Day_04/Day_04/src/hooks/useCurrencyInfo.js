import { useState,useEffect } from "react";

function useCurrencyInfo(curr) {
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
        .then((res)=>res.json())
        .then((data)=>{
            setData(data[curr]);
        })
    },[curr])
    // console.log(data);
    return data;
}

export default useCurrencyInfo;