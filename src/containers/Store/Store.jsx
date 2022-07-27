import CardStore from '../../components/Card-store/Card-store'
import React, {useState, useEffect } from 'react'
import './Store.css'
import { Link, useParams } from 'react-router-dom';


const Store = () =>{
    
    const [allGames, setGames] = useState([]);
    const { categoriaId } = useParams();

    const getGames = async()=>{
        try{
            const res = await fetch('/assets/Json/DATA.json')
            const data = await res.json()
            if(categoriaId){
                const filterList = data.filter(game => game.keyword == categoriaId)
                setGames(filterList)
            } else {
                setGames(data)}
        } catch(error){
            console.log(error)
        }
    }
    
    useEffect(()=>{
            getGames()
    },[categoriaId])

    return(
        <div className='Store'>
            <h1>Store</h1>
            <div className='filterBox'>
                <Link to={'/store/GTA'}><span className='filterItem'>GTA</span></Link>
                <Link to={'/store/FRC'}><span className='filterItem'>Far Cry</span></Link>
            </div>
            <div className='StoreGamesBox'>
                {allGames.map((game)=>(
                    <CardStore key={game.id} id={game.id} img={game.frontcard_img} brief={game.brief_description} name={game.name} price={game.price_standard} />
                ))}
            </div>
        </div>
    )
}

export default Store