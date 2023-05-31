import React from "react";

function CardsSection(props) {
    return (
        <>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {props.data.map((card, i) => {
                    return (
                        <div class="col">
                            <div class="card" key={i}>
                                <img src={card.posterUrl} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">{card.title}</h5>
                                    <p class="card-text">{card.year}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default CardsSection;