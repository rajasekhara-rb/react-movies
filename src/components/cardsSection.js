import React from "react";

function CardsSection(props) {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {props.returnCard().map((card, i) => {
                    return (
                        <div className="col" key={i}>
                            <div className="card">
                                <img src={card.posterUrl} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.year}</p>
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