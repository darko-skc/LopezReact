import './Card-detail.css'

const CardDetail = ({name,price_standard,frontpage_img}) =>{
    return(
        <div className="Card-detail">
            <div className="Card-detail__title">
                <div className="Card-detail__title_img">
                    <img src={frontpage_img} alt="" />
                </div>
                <div className='Card-detail__box'>
                    <div className="Card-detail__title_name">
                        <h2>{name}</h2>
                    </div>
                    <div className="Card-detail__title_platform">
                        <span>Steam</span>
                        <span>Windows</span>
                    </div>
                </div>
            </div>
            <div className='Card-detail__content'>
                <div className="Card-detail__media">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tSDMwngdkF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="Card-detail__img">
                        <img src="/image/farcry6/gameplay1.jpeg" alt="" />
                        <img src="/image/farcry6/gameplay2.jpeg" alt="" />
                        <img src="/image/farcry6/gameplay3.webp" alt="" />
                    </div>
                </div>
                <div className="Card-detail__info">
                    <h2>{name}</h2>
                    <span>{price_standard}</span>
                    <span>Activation: Steam</span>
                    <span>Product activated by <a href="">activation key</a></span>
                    <div className='Card-detail__info__buttom'>BUY</div>
                </div>
            </div>
        </div>
    )
}

export default CardDetail