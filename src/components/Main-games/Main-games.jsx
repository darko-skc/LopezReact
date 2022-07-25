import CardMain from '../Card-Main/Card-Main'
import './Main-games.css'

const MainGames = ({majorGames}) =>{
    return(
        <div className="Main-games">
            <CardMain majorGames={majorGames}/>
        </div>
    )
}

export default MainGames