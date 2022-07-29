import CardDetail from "../Card-detail/Card-detail"
import { useParams } from "react-router-dom"
import React, {useState, useEffect } from 'react'

const DetailCard = () =>{

    const {productID} = useParams()
    const [product, setproduct] = useState([]);
    parseInt(productID)
    const getGames = async() =>{
      try{
        const res = await fetch('/assets/Json/DATA.json')
        const data = await res.json()
        setproduct(data[productID])
      }catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
          getGames()
    },[])

    return(
    
        <CardDetail product={product}/>
    )

}

export default DetailCard