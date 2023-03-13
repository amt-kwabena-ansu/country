import axios from "axios";
type resultType={
    name:string,
    region:string,
    capital:string,
    flag:string,
    population:number
  }
type boolHook= React.Dispatch<React.SetStateAction<boolean>>
type stringHook= React.Dispatch<React.SetStateAction<string[]>>
type resultHook= React.Dispatch<React.SetStateAction<resultType[]>>


//country

type resultTypeCountry={
    name:string,
    nativeName:string,
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
type resultHookCountry= React.Dispatch<React.SetStateAction<resultTypeCountry[]>>

const http =axios.create({baseURL :'https://restcountries.com/v2'})

export  async function all (setLoading:boolHook, setErr:boolHook, setResult:resultHook){
    setLoading(true)
    let response:any 
    try{
      response= await http.get('/all')
    }catch(e){
      setErr(true)
    }
    setResult(response.data)
    setLoading(false)
}

export async function singleCountry (setLoading:boolHook,setErr:boolHook,setBorder:stringHook,setBoolborder:boolHook,setResult:resultHookCountry,cName:string){
    setLoading(true)
    let response:any;
    try{
        response = await http.get('/name/'+cName +'?fullText=true')
        
    }catch(e){
        console.log(e)
        setErr(true)
        console.log('Error ')
    } 
    
    console.log(response)
    let output:resultTypeCountry[] = response.data  
    if(output[0].borders){
      let promises=output[0].borders.map(async(cntry)=>(await axios.get('https://restcountries.com/v2/alpha?codes='+cntry))) 
      let reply = await Promise.all(promises);
      let countries:any = reply.map((country) => country.data[0].name);
      setBorder(countries)
      setBoolborder(true)
      }
    setResult(response.data)
    setLoading(false)
    console.log(response.data)
  }