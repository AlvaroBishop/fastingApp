import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Loading } from '../Loading/Loading'
import './Food.css'
export const Food = () => {
    const [foodQuery, setFoodQuery] = useState('burger')
    const {data, isLoading} = useFetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=87b8156d&app_key=%20002ac1f39c2932640f6d8cdddc750da4%09&ingr=${foodQuery}&nutrition-type=cooking&category=generic-foods`)


    const onChange = ({target}) => {
        if(target.value)
        setFoodQuery(target.value);
    }
    console.log(data);
    return (
        <div className='Food'>
            <h1>Food Stats</h1>
            <div className="food-stats">
                <div className="food-search">
                    <label htmlFor="food">Enter Food</label>
                    <input type='text' id='food' name='food' onChange={onChange} placeholder="burger"/>
                </div>
                {
                    isLoading && <Loading />
                }
                <div className="food-results">
                    {
                        !isLoading && 
                        
                        data.hints.map(({food, food: {nutrients}}, key) => {
                            return(
                                <div className="food-result" key={key}>

                                    <h3>{food.label}</h3>
                                    {
                                        food.image && 
                                            <img src={food.image} alt={food.label}/>
                                    }
                                    <p>KCAL: <span>{nutrients.ENERC_KCAL}</span></p>
                                </div>
                            )
                        }
                        )
                    }
                </div>

            </div>
        </div>
    )
}
