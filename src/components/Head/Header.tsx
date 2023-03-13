import React, { useState, useEffect } from 'react'

function Header() {
  const [theme, setTheme] = useState<string>('')
  useEffect(()=>{
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){setTheme('dark')
      localStorage.setItem('theme','dark')
      }else{
        setTheme('light')
        localStorage.setItem('theme','light')
      }
  },[])

  useEffect(() => {
    (theme==='dark')?(document.documentElement.classList.add('dark')):(document.documentElement.classList.remove('dark'))
    localStorage.setItem('theme',theme)
  }, [theme])
  
  function themeChanger(){
    setTheme(theme==='dark'?'light':'dark')
    console.log(theme)
  }

  return (
    <div className='shadow-buttom bg-white dark:bg-blue'>
      <div  className='flex justify-items-stretch flex-shrink-0  font-Nunito px-4 py-5 laptop:max-w-[1440px] laptop:mx-auto laptop:px-16 pc:min-w-[1020px]   bg-white text-darkText dark:bg-blue  dark:text-white'>
        <div key='headerDiv' className='flex justify-between m-0 w-[100%]'>
          <div key='where' className=' font-extrabold laptop:text-2xl'>Where in the world ?</div>
          <button key='themeChanger' className='flex gap-2' onClick={themeChanger}>
            <div key='theme-icon' className=' pt-1'>
              {theme==='dark'?(
              <svg key='theme-dark' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z" fill="white"  />
              </svg>
              ):(
              <svg key='theme-light' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z" fill="white" stroke="#111517"/>
              </svg>)}  
            </div> 
          Dark mode</button>
        </div>
      </div>
    </div>
  )
}

export default Header

