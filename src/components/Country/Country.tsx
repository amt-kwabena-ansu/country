import React from 'react'
import{useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Head/Header'
type cName={cName:string}

function Country({cName}:cName) {
  type resultType={
    name:string,
    Nativename:string,
    region:string,
    subRegion:string,
    capital:string,
    flag:string,
    population:number,
    topLevelDomain:string,
    currencies:[{name:string}],
    languages:[{name:string}],
    borders:string[]
  }
  const[result,setResult]= useState<resultType[]>([])
  const[loading,setLoading]= useState <boolean>(false)
  useEffect(()=>{
    async function all (){
      setLoading(true)
      const http =axios.create({baseURL :'https://restcountries.com/v2/name'})
      let response = await http.get('/'+cName +'?fullText=true')
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
          <img className='flagImg' src={val.flag}/>
          <div className='countryName'>{'Name: '+val.name}</div>
          <div className='countryName'>{'Population: '+val.population}</div>
          <div className='countryName'>{'Region: '+val.region}</div>
          <div className='countryName'>{'Sub region: '+val.subRegion}</div>
          <div className='countryName'>{'Capital: '+val.capital}</div>
          <div className='countryName'>{'Top level domain: '+val.topLevelDomain}</div>
          <div className='countryName'>{'Currencies : '+val.currencies.map((currency)=>(
          currency.name
          ))}</div>
          <div className='countryName'>{'Languages : '+val.languages.map((lang)=>(
            lang.name
          ))}</div>
          <div className='countryName'>{val.borders&&'Border countries : '+val.borders.map((cntry)=>(cntry))}</div>
        </div>
      ))
      }
    </div>
  )
}

export default Country
