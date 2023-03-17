
export type boolHook= React.Dispatch<React.SetStateAction<boolean>>
export type stringHook= React.Dispatch<React.SetStateAction<string[]>>
export type resultHook= React.Dispatch<React.SetStateAction<resultType[]>>
export type countryName={countryName:string}
export type resultHookCountry= React.Dispatch<React.SetStateAction<resultTypeCountry[]>>

//country page
export type resultType={
    name:string,
    region:string,
    capital:string,
    flag:string,
    population:number
  }
export type resultTypeCountry={
    name:string,
    nativeName:string,
    alpha3Code:string,
    region:string,
    subregion:string,
    capital:string,
    flag:string,
    population:number,
    topLevelDomain:string,
    currencies:[{name:string}],
    languages:[{name:string}],
    borders:string[]
  }
