export const getGames = async() =>{
    try{
      const res = await fetch('/assets/Json/DATA.json')
      const data = await res.json()
      return data 
    }catch(error){
      console.log(error)
    }
  }