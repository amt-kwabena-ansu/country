import axios from "axios";
import { resultTypeCountry, boolHook, stringHook,resultHook,resultHookCountry } from "../types";
import { setCountry, getCountry, getNeighbourNames } from "../countries/allCountries";


const http =axios.create({baseURL :'https://restcountries.com/v2'})

export  async function all (setLoading:boolHook, setErr:boolHook, setResult:resultHook){
    setLoading(true)
    let response:any;
    try{
      response= await http.get('/all')
    }catch(e){
      setErr(true)
    }
    setResult(response.data)
    setCountry(response.data)
    setLoading(false)
}


export function singleCountry (setLoading:boolHook,setErr:boolHook,setBorder:stringHook,setBoolborder:boolHook,setResult:resultHookCountry,countryName:string){
    setLoading(true)
    let response:any;
    try{
      response= getCountry(countryName)
    }catch(e){
      console.log(e)
      setErr(true)
      console.log('Error')
    } 
    let output:resultTypeCountry[] = response
    if(output[0].borders){
      let borders=getNeighbourNames(output[0].borders)
      setBorder(borders)
      setBoolborder(true)
      }
    setResult(response)
    setLoading(false)
  }