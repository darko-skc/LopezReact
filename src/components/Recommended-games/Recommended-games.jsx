import './Recommended-games.css'

import CardRecommended from '../Card-recommended/Card-recommended';


const RecommendedGames = ({allGames}) =>{

    return(
        <div className='Recommended-games'>
        {allGames.map((games)=>(
            <div key={games.id}>
                <CardRecommended id={games.id} name={games.name} img={games.frontpage_img} price={games.price}></CardRecommended>
            </div>
        ))}
        </div>
    )
}

export default RecommendedGames