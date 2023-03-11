import React from 'react'
import{useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
type cName={cName:string}

function Country({cName}:cName) {
  console.log(cName)
  type resultType={
    name:string,
    nativeName:string,
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
  const[loading,setLoading]= useState <boolean>(false)
  const [err, setErr] = useState<boolean>(false)
  const [border, setBorder] = useState<string[]>(['None'])
  const [boolborder, setBoolborder] = useState<boolean>(false)
  useEffect(()=>{
    async function all (){
      setLoading(true)
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

          setBoolborder(true)
        }else{
          console.log(border)
        }
      setResult(response.data)
      setLoading(false)
      console.log(response.data)
    }
    all();

  },[])


  return (
    <div className=''>
      {err && <div 
      className=''> <h1>There is an error Sorry </h1></div>}
      {
        !err&& loading && <div 
        className=''>loading</div>
      }
      { 
        !err && !loading && result.map((val, ind)=>(
          <div key={ind+'box'} className=''>
            <div className='flex gap-36 pt-20' key={ind+'main'}>
              <img className=' w-[40%] rounded-lg aspect-4/3' key={ind+'flag'} src={val.flag}/>
              <div className='pt-10' key={ind+'content'}>
                <div className='text-2xl font-extrabold' key={ind+'name'}>{val.name}</div>
                <div className='flex gap-36 pt-10 text-base' key={ind+'inner-content'}>
                  <div className='font-bold' key={ind+'first'}>
                    <div className='' key={ind+'native'}>Native name: <span className=' font-light' key={ind+'native-val'}>{val.nativeName}</span></div>
                    <div className='' key={ind+'population'}>Population:  <span className='font-light' key={ind+'population-val'}>{val.population.toLocaleString()}</span></div>
                    <div className='' key={ind+'region'}>Region:  <span className=' font-light' key={ind+'region-val'}>{val.region}</span></div>
                    <div className='' key={ind+'sub'}>Sub region:  <span className=' font-light' key={ind+'sub-val'}>{val.subregion}</span></div>
                    <div className='' key={ind+'capital'}>Capital: <span className=' font-light' key={ind+'capital-val'}>{val.capital}</span></div>
                  </div>
                  <div className='font-bold' key={ind+'second'}>
                    <div className='' key={ind+'domain'}>Top level domain:  <span className=' font-light' key={ind+'dommian-val'}>{val.topLevelDomain}</span></div>
                    <div className='' key={ind+'curencey'}>Currencies:  {val.currencies && val.currencies.map((currency,ind0)=>(
                      <span className=' font-light' key={ind0+'curency-val'}>{currency.name}</span>
                    ))}</div>
                    <div className='' key={ind+'lang'}>Languages:  {val.languages.map((lang,ind2)=>(
                      <span className=' font-light' key={ind2+'lang-val'}>{lang.name}</span>
                    ))}</div>
                  </div>
                </div>
                <div className='flex gap-4 pt-16 pr-16' key={ind+'border'}><div className='w-[20%]' key={ind+'border-label'}>Border countries:</div> <div className='flex flex-wrap gap-3' key={ind+'border-val'}>{boolborder && border.map((Country,ind3)=>(
                  <Link key={ind3+'link'} to={'/'+Country}>
                    <button className=' bg-white dark:bg-blue w-fit h-7 px-7 rounded-sm shadow-around' key={ind3+'country-button'}>{Country}</button>
                  </Link>))}</div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Country
