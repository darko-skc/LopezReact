import './Recommended-games.css'
import CardUser from '../Card-user/Card-user'
import React, {useState, useEffect } from 'react'


const RecommendedGames = () =>{

    const [allGames, setGames] = useState([]);

    console.log(allGames)

    useEffect(()=>{
        let get_games = new Promise((resolve, reject) => {
            setTimeout(() => {
              const games = [
                {
                  id: 0,
                  name: "FarCry4",
                  img:
                    "https://img.hype.games/cdn/4fafabc9-6899-4efc-8018-412ef4332ed5COVER---[Ubisoft]-FAR-CRY-4-600.jpg",
                  price: 55
                },
                {
                    id: 1,
                    name: "GTAV",
                    img:
                      "https://imgsrv2.voi.id/GDZExZ_4-_n70qUBdF55hTr7UCpIiiaprJPwYPtS5SM/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNTg2NjcvMjAyMjA0MTgxMjE0LW1haW4uY3JvcHBlZF8xNjUwMjU4OTA2LmpwZWc.jpg",
                    price: 99
                  }
              ];
              resolve(games);
            }, 2000);
          });
          
          get_games.then((games) => {
            setGames(games);
          });
          
    },[])

    return(
        <div className='Recommended-games'>
        {allGames.map((games)=>(
            <div key={games.id}>
                <CardUser id={games.id} name={games.name} img={games.img} price={games.price}></CardUser>
            </div>
        ))}
        </div>
    )
}

export default RecommendedGames