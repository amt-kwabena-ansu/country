import React from 'react'
import{useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
type cName={cName:string}

function Country({cName}:cName) {
  console.log(cName)
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
  const [err, setErr] = useState<boolean>(false)
  useEffect(()=>{
    async function all (){
      setLoading(true)
      const http =axios.create({baseURL :'https://restcountries.com/v2/name'})
      let response:any;
      try{
      response = await http.get('/'+cName +'?fullText=true')
      }catch(e){setErr(true)
      console.log('Error ')}    
      setResult(response.data)
      setLoading(false)
      console.log(response.data)
    }
    all();
  },[])
  
  return (
    <div>
      {err && <div> <h1>There is an error Sorry </h1></div>}
      {
        !err&& loading && <div>loading</div>
      }
      {
        !err && !loading && result.map((val)=>(
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
            <div className='countryName'>{val.borders &&'Border countries : '+val.borders.map((cntry)=>(cntry))}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Country
