import React,{useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { singleCountry } from '../../api/api'
import { resultTypeCountry,countryName } from '../../types'

function Country({countryName}:countryName) {

  const[result,setResult]= useState<resultTypeCountry[]>([])
  const[loading,setLoading]= useState <boolean>(false)
  const [err, setErr] = useState<boolean>(false)
  const [border, setBorder] = useState<string[]>(['None'])
  const [boolborder, setBoolborder] = useState<boolean>(false)
  
  useEffect(()=>{
    singleCountry(setLoading,setErr,setBorder,setBoolborder,setResult,countryName)
  },[countryName])


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
            <div className='grid px-4 laptop:grid-cols-2 laptop:px-0 laptop:gap-20 pc:gap-36' key={ind+'main'}>
              <div className=' rounded-2xl overflow-clip laptop:max-h-96 laptop:min-w-[450px] pc:h-full'>
              <img className=' object-fill h-full rounded-2xl' key={ind+'flag'} src={val.flag} alt={'Flag of '+val.name}/>
              </div>
              <div className='laptop:pt-6 pc:pt-[5%]' key={ind+'content'}>
                <div className='text-xl font-extrabold mt-11 mb-4 laptop:mt-0 laptop:mb-0' key={ind+'name'}>{val.name}</div>
                <div className='flex flex-col gap-8 text-base laptop:flex-row laptop:gap-25 laptop:pt-5 pc:gap-36 pc:pt-10' key={ind+'inner-content'}>
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
                    <div className='' key={ind+'lang'}>Languages:  <span className=' font-light' key={ind+'lang-val'}>{val.languages.map((lang)=>(lang.name)).join(', ')}</span></div>
                  </div>
                </div>
                <div className='flex gap-4 pt-16 pr-16 flex-col laptop:pt-9 laptop:flex-row pc:pt-[8%]' key={ind+'border'}><div className=' laptop:min-w-[127px]' key={ind+'border-label'}>Border countries:</div> <div className='flex flex-wrap gap-3' key={ind+'border-val'}>{boolborder && border.map((Country,ind3)=>(
                  <Link key={ind3+'link'} to={'/'+Country}>
                    <button className=' bg-white dark:bg-blue w-fit h-fit min-h-7 px-7 rounded-sm shadow-around dark:shadow-around-dark' key={ind3+'country-button'}>{Country}</button>
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
