import React from 'react'
import CountryPage from '../pages/CountryPage/CountryPage';
import Home from '../pages/Home/Home'
import { useRoutes,useParams } from 'react-router-dom'
function MainRoute() {
  return useRoutes([
    {path:'/' ,element:<Home/>},
    {path:'/:name' ,element:<CountryPage/>},
  ])
}

export default MainRoute
