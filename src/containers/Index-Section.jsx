import './Index-Section.css'
import RecommendedGames from '../components/Recommended-games/Recommended-games'
import MainGames from '../components/Main-games/Main-games'
import React, {useState, useEffect } from 'react'


const IndexSection = () =>{

    const [allGames, setGames] = useState([]);
    const [majorGames, oldMajor] = useState([]);
    const getGames = async() =>{
      try{
        const res = await fetch('/assets/Json/DATA.json')
        const data = await res.json()
        const recommended = data.filter( item => item.keyword == 'FRC'
        )
        setGames(recommended)
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
                <MainGames majorGames={majorGames}></MainGames>
                <RecommendedGames allGames={allGames}></RecommendedGames>
            </div>
    )
}

export default IndexSection