import {useState , useEffect } from 'react';


const useFetch = (url) => {

    

    const [data , setData] = useState(null);    
    const [ispadding, setPadding] = useState(true);
    const [err, seterr] = useState(null);

    

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url , { signal:abortCont.signal })
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
                    if(err.name === "AbortError"){
                        console.log("fetch is cleanup");
                    }else{
                    setPadding(false);
                    seterr(err.message);
                    }
                });
        },1000);

        return () => abortCont.abort();
        
    } , [url]);

    return {data,ispadding,err};
}
 
export default useFetch;