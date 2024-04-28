import React, { useState } from 'react'
import {useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
//The useEffect hook is used to request data from the API endpoint once the component initially renders.


function Github() {
  const data = useLoaderData();
  //  const [data, setData] = useState([]); 
  // useEffect(()=> {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((res)=> res.json())
  //   .then((data) => {
  //       console.log(data);
  //       setData(data)
  //   })
  // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
    <img src={data?.avatar_url} alt="gitPic" width= '300' />
    </div> 
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
} 