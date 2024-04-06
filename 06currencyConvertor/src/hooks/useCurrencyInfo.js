
import {useState, useEffect} from 'react';


function useCurrencyInfo(currency){

  const [data, setData] = useState({})
// useState({}),  we used empty object as a contengency plan ,thus even if fetch is not called our code will not crash.  

  useEffect(()=> {
    fetch('url')
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
  }, [currency]) 

return data
}

export default useCurrencyInfo;