import React from 'react'
import Country from '../../components/Country/Country'
import { useParams } from 'react-router-dom'

function CountryPage() {
    let{name}=useParams();
    console.log(name)
  return (
    <div>
      <Country cName={name||''}/>
    </div>
  )
}

export default CountryPage
