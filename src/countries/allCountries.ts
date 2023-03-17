import { resultTypeCountry } from "../types"
const allCountries:{list:resultTypeCountry[]}= {
    'list':[]
}
export function setCountry(input:resultTypeCountry[]){
    allCountries.list=input
}
export function getCountry(countryName:string){
    return allCountries.list.filter((country)=>(country.name===countryName))
}
export function getNeighbourNames(codes:string[]){
    return codes.map((code)=>(allCountries.list.filter((country)=>(country.alpha3Code===code)))[0].name)
}