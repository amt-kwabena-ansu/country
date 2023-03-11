import  { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from '../../components/Filter/Filter'
import {Link} from 'react-router-dom'

function Home() {
  type resultType={
    name:string,
    region:string,
    capital:string,
    flag:string,
    population:number
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
      <div className='flex flex-col flex-shrink-0 font-Nunito pc: gap-10 pc:min-w-[1020px] max-w-[1440px] laptop:mx-auto laptop:px-16 pt-12 pb-10]'>
        <Filter filter={filter} search={search} setFilter={setFilter} setSearch={setSearch}/>
        {err && <div className='text-2xl font-bold'> <h1>We sorry there was something wrong</h1></div>}
        {
          !err && loading && <div key='loadingHome' className='text-2xl font-bold'>loading</div>
        }
        <div className=' grid mx-12 grid-cols-1 laptop:mx-0 laptop:grid-cols-4 gap-14' >
          {!err && !loading && reOganize().map((val,ind)=>(
            <Link to={'/'+val.name} key={ind+'linker'}>
              <div key={ind} className='bg-white dark:bg-blue self-center h-96 shadow-lg rounded-lg'>
                <div key={ind+'imdiv'} className=' w-[100%] h-[50%] m-0 rounded-t-lg overflow-hidden '>
                <img key={ind+'img'} className=' h-full w-full object-cover' alt={val.name}src={val.flag}/>
                </div>
                <div key={ind+'text'} className='px-5'>
                  <div key={ind+'name'} className='text-xl font-extrabold pt-4 pb-3'>{val.name}</div>
                  <div key={ind+'population'} className=' font-bold'>Population: <span key={ind+'population-val'} className='font-thin'>{val.population.toLocaleString()}</span></div>
                  <div key={ind+'region'} className=' font-bold'>Region: <span key={ind+'region-val'} className='font-thin'>{val.region}</span></div>
                  <div key={ind+'capital'} className=' font-bold'>Capital: <span key={ind+'capital-val'} className='font-thin'>{val.capital}</span></div>
                </div>
              </div>
            </Link>
          ))
          }
        </div>
      </div>
  )
}

export default Home

