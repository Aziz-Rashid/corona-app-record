import axios from 'axios'
const url = "https://covid19.mathdro.id/api"
export const fetchData = async (country)=>{
    try {
        let changeurl = url;
        if(country){
            changeurl = `${url}/countries/${country}`
        }
        const {data:{confirmed,recovered,deaths,dailySummary,dailyTimeSeries,image,lastUpdate}} = await axios.get(changeurl)
        const modifyngData = {
            confirmed,
            recovered,
            deaths,
            dailySummary,
            dailyTimeSeries,
            image,lastUpdate
        }
        return modifyngData

        
    } catch (error) {
        console.log("error")
        
    }
}
export const country = async () =>{
    try {
        const url = "https://covid19.mathdro.id/api"
        const {data:{countries}} = await axios.get(`${url}/countries`)
       
        return countries.map(country => country.name)
    } catch (error) {
        
    }
    }