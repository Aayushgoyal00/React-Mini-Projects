import React, { useEffect ,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  let dataFirst=useLoaderData()
  const [user,setUser]=useState("aayushgoyal00")
  const [data,setdata]=useState(dataFirst)
  const [inputValue,setInputValue]=useState("")
  useEffect(()=>{
    if (user !== "aayushgoyal00") {
    fetch(`https://api.github.com/users/${user}`)
    // console.log("222")
    .then(res=>res.json())
    .then(res=>setdata(res))
  }},[user])
  const handleSearch = () => {
    if (inputValue.trim()) {
      setUser(inputValue);
      // setInputValue('');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <>
    <input type="text" placeholder='Type Github Username' value={inputValue} onChange={(e)=>{
      setInputValue(e.target.value)}
    } onKeyPress={handleKeyPress} className='border border-black rounded-xl p-2 mt-2' />
    <button className='m-2 bg-red-500 p-1 rounded-xl text-amber-400 hover:scale-105' onClick={handleSearch} >Search</button>
    <div className=' flex justify-around space-x-2 flex-wrap rounded m-4 bg-gray-600 text-white p-4 text-3xl'>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    <ul className='text-left flex flex-col'>  

    <li>Name: {data.name}</li>
    <li>Bio: {data.bio}</li>
    <li>Github followers: {data.followers}</li>
    <li>Github following: {data.following}</li>
    </ul>
    </div>
    </>
  )
}

export default Github

export const githubInfo= async()=>{
const username="aayushgoyal00"
const user =await  fetch(`https://api.github.com/users/${username}`)
const data =await user.json()
console.log("1")
return data
}