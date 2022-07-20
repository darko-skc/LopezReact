import './Index-Section.css'
import RecommendedGames from '../components/Recommended-games/Recommended-games'
import MainGames from '../components/Main-games/Main-games'
import React, {useState, useEffect } from 'react'


const IndexSection = () =>{

    const [allGames, setGames] = useState([]);
    const [majorGames, oldMajor] = useState([]);

    console.log(allGames)
    console.log(majorGames)
    const getGames = async() =>{
      try{
        const res = await fetch('/assets/Json/DATA.json')
        const data = await res.json()
        setGames(data)
        oldMajor(data[0]) 
      }catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
          getGames()
    },[])
    

    return(
            <div className='Index-section'>
                <MainGames></MainGames>
                <RecommendedGames allGames={allGames}></RecommendedGames>
            </div>
    )
}

export default IndexSection