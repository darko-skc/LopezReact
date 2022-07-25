import './Card-Main.css'
import { Link } from 'react-router-dom'

const CardMain = ({majorGames})=>{

    const imgs = [majorGames.gameplay_img_1,majorGames.gameplay_img_2,majorGames.gameplay_img_3,majorGames.gameplay_img_4,majorGames.gameplay_img_5]
    
    const IndexImgTemplate = ({img}) =>{
        return(
            <div className="CardMainImg">
                 <img src={img}/>
            </div>
        )
    }

    const IndexAboutButton = () =>{
        return(
            <div className="CardMainAbout">
                    <Link to={`/detail/${majorGames.id}`}>
                        <i className="fa-solid fa-gamepad"></i>
                        <span>About Game</span>
                    </Link>
            </div>
        )
    }

    const CardMainImgBox = ({imgs}) =>{
        return(
            <div className="CardMainImgBox">
                {imgs.map((img)=>(
                <IndexImgTemplate key={img} img={img}/>
                ))}
                <IndexAboutButton/>
            </div>
        )
    }

    const CardMainFrontpage = ({img,trailer}) =>{
        return(
        <div className="CardMainFrontpage">
                
            <img className="CardMainFrontpageImg" src={img}/>

            <div className="CardMainFrontpageButtom">
                <a href={trailer} target="_blank">
                    <i className="fa-solid fa-film"></i>
                    <span>Trailer</span>
                </a>
            </div>

        </div>
        )
    }

    const CardMainName = ({name,valoration}) => {
        return (
            <div className="CardMainName">
                <h2>{name}</h2>
                <i className="fa-solid fa-star"><p>{valoration}</p></i>
            </div>
        )
    }

    const CardMainVersion = () =>{
        return(
            <div className="CardMainVersionBox">
                <select name="version" className="CardMainVersion">
                    <option value="standard">Standard</option>
                    <option value="gold">Gold</option>
                    <option value="ultimate">Ultimate</option>
                </select>
            </div>
        )
    }

    const CardMainSale = ({price}) => {
        return (
            <div className="CardMainSale">
                <span className="CardMainPrice">{price}</span>
                <div className="CardMainCart"><i className="fa-solid fa-basket-shopping"> Add cart</i></div>
                <div className="CardMainCartHeart"><i className="fa-regular fa-heart"></i></div>
            </div>
        )
    }

    const CardMainOptions = ({price,name,valoration}) =>{
        return(
            <div className="CardMainOptions">
                
                <CardMainName name={name} valoration={valoration}/>
                <CardMainVersion />
                <CardMainSale price={price}/>
                
            </div>
        )
    }

    return(
        <div className="CardMain" >
            
            <CardMainImgBox imgs={imgs}/>
            <CardMainFrontpage   img={majorGames.frontpage_img} trailer={majorGames.trailer}/>
            <CardMainOptions   price={majorGames.price_standard} name={majorGames.name} valoration={majorGames.valoration}/>
            
        </div>
    )
}

export default CardMain