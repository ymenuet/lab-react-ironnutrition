import React from 'react'
import 'bulma/css/bulma.css'

const FoodBox = ({ food, onClick, onChange, quantity }) => {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={food.image} alt={food.name} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={quantity} onChange={onChange} />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={onClick}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox
