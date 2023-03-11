import React, { useState,useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type search={
    search:string,
    setSearch:(search:string)=>void,
    filter:string,
    setFilter:(filter:string)=>void}
function Filter({search,setSearch,filter,setFilter}:search) {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    setTheme(localStorage.getItem('theme')||'');
    console.log(theme)
  }, [theme])
  
  let selectedValue:string ='Filter by region';

  function filterChange(option:string):any{
    setFilter(option)
    selectedValue=option
  }

  function hideOptions (){
    document.getElementById('filter')?.classList.add('hidden')

  }
  
  return (
    <div className='m-0 flex flex-col pt-6 px-4 gap-6 laptop:px-0 laptop:flex-row laptop:justify-between w-auto'>
      <div className='flex gap-6 pl-8 bg-white shadow-sm dark:bg-blue h-14 laptop:w-[30rem] dark:text-white rounded-lg'>
        <div className=' pt-4'>
            <SearchIcon/>
          
        </div>
        <input type="text"
        placeholder='Search for a country...'
        className=' bg-white dark:bg-blue h-12 dark:text-white rounded-lg outline-0'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      {/* {<div>
        <select 
          defaultValue={''}
          onChange={(e)=>{setFilter(e.target.value)}}
          className=' bg-white dark:bg-blue h-12 w-[55%] text-sm shadow-sm rounded-lg pl-6 laptop:h-14 laptop:w-48'>
            <option value="" className='hidden mt-6' disabled>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
      </select> 
      </div> */
       <div className=' bg-white dark:bg-blue z-10 flex flex-col h-12 w-[55%] text-sm shadow-sm rounded-lg laptop:h-14 laptop:w-48'>
         <div id='selected' className=' pl-6 pt-3.5'>{selectedValue} <span><KeyboardArrowDownIcon/></span></div>
         <div id='filter' className='  pointer-events-none flex flex-col gap-2 mt-5 bg-white dark:bg-blue rounded-lg pl-6 py-3 w-full'>
           <button className=' w-fit' onClick={filterChange('Afica')}>Africa</button>
           <button className=' w-fit' onClick={filterChange('America')}>America</button>
           <button className=' w-fit' onClick={filterChange('Asia')}>Asia</button>
           <button className=' w-fit' onClick={filterChange('Europe')}>Europe</button>
           <button className=' w-fit' onClick={filterChange('Oceania')}>Oceania</button>
         </div>
       </div>
      }
    </div>
  )
}

export default Filter
