import React from 'react'
import Country from '../../components/Country/Country'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CountryPage() {
    let{name}=useParams();
    console.log(name)
    
  return (
    <div className=' w-full bg-white bg-opacity-80  dark:bg-opacity-0'>
        <div className='min-h-screen flex flex-col flex-shrink-0 font-Nunito py-10 laptop:mx-auto laptop:px-16 pc: gap-10 pc:min-w-[1020px] max-w-[1440px]'>
              <Link className='flex align-middle gap-2 ml-5 mb-5 mt-5 rounded-md shadow-around dark:shadow-around-dark laptop:shadow-none laptop:ml-0 laptop:mt-10 pc:mt-20 h-10 w-28 pl-6 pt-2 dark:bg-blue' to='/'>
                <div className=''>
                <ArrowBackIcon  color='inherit' />
                </div>
                Back
              </Link>
          <Country cName={name||''}/>
        </div>
    </div>
  )
}

export default CountryPage
