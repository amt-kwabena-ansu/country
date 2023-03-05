import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import Filter from '../../components/Filter/Filter'
import {Link} from 'react-router-dom'

function Home() {
  type resultType={
    name:string,
    region:string,
    capital:string,
    flag:string
  }
  const[result,setResult]= useState<resultType[]>([])
  const[loading,setLoading]= useState <boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<string>('')
  const [err, setErr] = useState<boolean>(false)
  
  useEffect(()=>{
    async function all (){
      setLoading(true)
      const http =axios.create({baseURL :'https://restcountries.com/v2'})
      let response:any 
      try{
        response= await http.get('/all')
      }catch(e){
        setErr(true)
      }
      setResult(response.data)
      setLoading(false)
  }
  all();
  },[])
  
  function reOganize(){
    let output=result;
    if(filter){
      console.log(filter)
      output=output.filter((value)=>(value.region.toLowerCase().includes(filter.toLowerCase())));
    } 
    if(search){
      console.log(search.toLowerCase())
      output=output.filter((value)=>( value.name.toLowerCase().includes(search.toLowerCase())));
    }
    return(output)
  }
  


  return (
    <div>
      <Filter filter={filter} search={search} setFilter={setFilter} setSearch={setSearch}/>
      {err && <div> <h1>We sorry there was something wrong</h1></div>}
      {
        !err && loading && <div>loading</div>
      }
      {!err && !loading && reOganize().map((val)=>(
        <Link to={'/'+val.name}>
        <div className='countryTab'>
          <img className='flagImg' alt={val.name}src={val.flag}/>
          <div className='name'>{val.name}</div>
          <div className='capital'>{val.capital}</div>
          <div className='region'>{val.region}</div>
        </div>
        </Link>
      ))
      }
    </div>
  )
}

export default Home

