import  { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import {Link} from 'react-router-dom'
import { all } from '../../api/api'
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
    all(setLoading,setErr,setResult);
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
      <div className='flex flex-col flex-shrink-0 font-Nunito max-w-[1440px] gap-10 laptop:mx-auto laptop:px-16 pc:min-w-[1020px] pt-12 pb-10]'>
        <Filter filter={filter} search={search} setFilter={setFilter} setSearch={setSearch}/>
        {err && <div className='text-2xl font-bold'> <h1>We sorry there was something wrong</h1></div>}
        {
          !err && loading && <div key='loadingHome' className='text-2xl font-bold'>loading</div>
        }
        <div className=' grid mx-12 grid-cols-1 gap-14 laptop:mx-0 laptop:grid-cols-4 laptop:gap-8 pc:gap-14' >
          {!err && !loading && reOganize().map((val,ind)=>(
            <Link to={'/'+val.name} key={ind+'linker'}>
              <div key={ind} className='bg-white dark:bg-blue self-center h-96 laptop:h-80 pc:h-96 shadow-lg dark:shadow-sm rounded-lg'>
                <div key={ind+'imdiv'} className=' w-[100%] h-[50%] m-0 rounded-t-lg overflow-hidden '>
                <img key={ind+'img'} className=' h-full w-full aspect-square object-cover' alt={val.name}src={val.flag}/>
                </div>
                <div key={ind+'text'} className=' px-5 laptop:px-3 pc:px-5'>
                  <div key={ind+'name'} className=' laptop:text-lg pc:text-xl font-extrabold pt-4 pb-3'>{val.name}</div>
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

