import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import Header from '../Head/Header'
function Home() {
  type resultType={
    name:string,
    region:string,
    capital:string,
    flag:string
  }
  const[result,setResult]= useState<resultType[]>([])
  const[loading,setLoading]= useState <boolean>(false)
  useEffect(()=>{
    async function all (){
      setLoading(true)
      const http =axios.create({baseURL :'https://restcountries.com/v2'})
      let response = await http.get('/all')
      setResult(response.data)
      setLoading(false)
      console.log(response.data)
  }
  all();
  },[])
  return (
    <div>
      <Header/>
      {
        loading && <div>loading</div>
      }
      {!loading && result.map((val)=>(
        <div className='countryTab'>
          <img className='flagImg'src={val.flag}/>
          <div className='name'>{val.name}</div>
          <div className='capital'>{val.capital}</div>
          <div className='region'>{val.region}</div>
        </div>
      ))
      }
    </div>
  )
}

export default Home

