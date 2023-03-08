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
    subregion:string,
    capital:string,
    flag:string,
    population:number,
    topLevelDomain:string,
    currencies:[{name:string}],
    languages:[{name:string}],
    borders:string[]
  }
  const[result,setResult]= useState<resultType[]>([])
  const[isLoading,setIsLoading]= useState <boolean>(false)
  const [err, setErr] = useState<boolean>(false)
  const [border, setBorder] = useState<any[]>(['None'])
  const [isBorder, setIsBorder] = useState<boolean>(false)
  useEffect(()=>{
    async function all (){
      setIsLoading(true)
      const http =axios.create({baseURL :'https://restcountries.com/v2/name'})
      let response:any;
      try{
      response = await http.get('/'+cName +'?fullText=true')
      }catch(e){setErr(true)
      console.log('Error ')} 
      let output:resultType[] = response.data  
      if(output[0].borders){
        let promises=output[0].borders.map(async(cntry)=>(await axios.get('https://restcountries.com/v2/alpha?codes='+cntry))) 
        let reply = await Promise.all(promises);
        let countries = reply.map((response) => response.data[0].name);
        setBorder(countries)

        console.log(border)

        setIsBorder(true)
      }
      setResult(response.data)
      setIsLoading(false)
      console.log(response.data)
    }
    all();

  },[])


  return (
    <div>
      {err && <div> <h1>There is an error Sorry </h1></div>}
      {
        !err&& isLoading && <div>loading</div>
      }
      { 
        !err && !isLoading && result.map((val)=>(
          <div className='countryTab'>
            <img className='flagImg' src={val.flag}/>
            <div className='countryName'>{'Name: '+val.name}</div>
            <div className='countryName'>{'Population: '+val.population.toLocaleString()}</div>
            <div className='countryName'>{'Region: '+val.region}</div>
            <div className='countryName'>{'Sub region: '+val.subregion}</div>
            <div className='countryName'>{'Capital: '+val.capital}</div>
            <div className='countryName'>{'Top level domain: '+val.topLevelDomain}</div>
            <div className='countryName'>{'Currencies : '+val.currencies.map((currency)=>(
            currency.name
            ))}</div>
            <div className='countryName'>{'Languages : '+val.languages.map((lang)=>(
              lang.name
            ))}</div>
            <div>Border countries : <div className='countryName'>{isBorder && border.map((Country)=>(Country+' '))}</div></div>
          </div>
        ))
      }
    </div>
  )
}

export default Country
