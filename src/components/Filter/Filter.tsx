import React,{useEffect, useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type search={
    search:string,
    setSearch:(search:string)=>void,
    filter:string,
    setFilter:(filter:string)=>void}
function Filter({search,setSearch,filter,setFilter}:search) {
 
  
  return (
    <div className='m-0 flex flex-col pt-6 px-4 gap-6 laptop:px-0 laptop:flex-row laptop:justify-between w-auto'>
      <div className='flex gap-6 pl-8 bg-white shadow-sm dark:bg-blue h-14 laptop:w-[30rem]  rounded-lg'>
        <div className=' pt-4'>
            <SearchIcon color='inherit'/>
        </div>
        <input type="text"
        placeholder='Search for a country...'
        className=' bg-white dark:bg-blue h-12 dark:text-white rounded-lg outline-0'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      {<div className=' relative bg-white dark:bg-blue w-48 h-12  text-lg shadow-sm rounded-lg overflow-clip laptop:h-14 laptop:w-48' >
        <select 
          defaultValue={''}
          onChange={(e)=>{setFilter(e.target.value)}}
          className=' bg-white dark:bg-blue appearance-none bg-opacity-5 w-full h-full pl-3 outline-none'>
            <option  className='hidden' value="" disabled>Filter by region</option>
            <option value="" disabled></option>
            <option className='' value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
            <option value="" disabled></option>
        </select> 
        <span className=' absolute left-36 pt-2 laptop:pt-3 pointer-events-none'><KeyboardArrowDownIcon  color='inherit'/></span>
      </div> 
      }
    </div>
  )
}

export default Filter
