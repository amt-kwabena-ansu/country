import React from 'react'

type search={
    search:string,
    setSearch:(search:string)=>void,
    filter:string,
    setFilter:(filter:string)=>void}
function Filter({search,setSearch,filter,setFilter}:search) {
  return (
    <div>
      <input type="text"
      value={search}
      onChange={(e)=>{setSearch(e.target.value)}}/>
      <select 
      value={filter}
      onChange={(e)=>{setFilter(e.target.value)}}>
        <option value="" disabled selected>Filter by region</option>
        <option value="" selected>All</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
