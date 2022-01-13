import React from 'react'
import { url } from '../helpers/endpoint'

export const Products:React.FC = () => {

    const handleProducts = async() =>{
        const data = await fetch(`${url}/products`)
        const dataParse = await data.json();
        
    }
    return (
        <div>
            Products
        </div>
    )
}
