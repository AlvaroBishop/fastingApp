import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './Food.css'
export const Food = () => {
    const [foodQuery, setFoodQuery] = useState('burger')
    const {data, isLoading} = useFetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=87b8156d&app_key=%20002ac1f39c2932640f6d8cdddc750da4%09&ingr=${foodQuery}&nutrition-type=cooking&category=generic-foods`)

    console.log(data);
    return (
        <div className='Food'>
            <h1>Food Stats</h1>
            <div className="food-stats">
                <div className="food-search">
                    <label htmlFor="food">Enter Food</label>
                    <input type='text' id='food' name='food' onChange=''/>
                </div>
                <div className="food-results">
                    {
                        data &&
                        data.hints.map(({food, food: {nutrients}}) => {
                            console.log(food)
                            console.log(nutrients)
                            return(
                                <div className="food-result">

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
