import {useState , useEffect } from 'react';


const useFetch = (url) => {

    

    const [data , setData] = useState(null);    
    const [ispadding, setPadding] = useState(true);
    const [err, seterr] = useState(null);


    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error("the connection data is not connected " + res.status);
                    }
                    return res.json()
                })
                .then(data=>{
                    setPadding(false);
                    setData(data);
                    seterr(null);
                })
                .catch(err=> {
                    setPadding(false);
                    seterr(err.message);
                    
                });
        },1000);
        
    } , [url]);

    return {data,ispadding,err};
}
 
export default useFetch;