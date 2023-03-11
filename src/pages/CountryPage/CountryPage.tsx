import React from 'react'
import Country from '../../components/Country/Country'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function CountryPage() {
    let{name}=useParams();
    console.log(name)
    let theme:string|null=localStorage.getItem('theme');
  return (
    <div className=' w-full bg-white bg-opacity-80  dark:bg-opacity-0'>
        <div className='min-h-screen flex flex-col flex-shrink-0 font-Nunito pc: gap-10 pc:min-w-[1020px] max-w-[1440px] laptop:mx-auto laptop:px-16 py-10]'>
        <Link to='/'>
          <div className='flex align-middle gap-2 mb-16 mt-10 h-10 w-28 pl-6 pt-2'>
            <div className=' pt-1'>
            {(theme==='dark')?(
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="call-made">
                <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="#FFFFFF"/>
              </g>
            </svg>
            ):(
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="call-made">
                  <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="#111517"/>
                </g>
              </svg>
            )}
            </div>
            Back
          </div> 
        </Link>
        <Country cName={name||''}/>
      </div>
    </div>
  )
}

export default CountryPage
