import './Recommended-games.css'

import CardRecommended from '../Card-recommended/Card-recommended';


const RecommendedGames = ({allGames}) =>{
    return(
        <div className='Recommended-games'>
        <div className="Recommended-games--title"><h2>Similar</h2></div>
        {allGames.map((games)=>(
            
                <CardRecommended key={games.id} id={games.id} name={games.name} img={games.frontpage_img} price={games.price_standard}></CardRecommended>
            
        ))}
        </div>
    )
}

export default RecommendedGames