import React, { useState } from 'react'

export default function MarketItem({name, resultFiltered}) {

    const [defaultChoose, changeDefaultChoose] = useState('1lvl');
    if (!name) {
        return (<p>Select model plz</p>)
    }

    const test = resultFiltered[Object.keys(resultFiltered).filter((elem) => elem === defaultChoose)];

    const description = (obj) => {
        let array = [];
        for (let key in obj) {
            array = [...array, <p key={`key-name-${key}`}><span className='value-name'>{key}</span>: {obj[key]}</p>]
        }
        return array;
    };

    return(
        <div className='market-item-wrapper'>
            <h2>Name: {name}</h2>
            <div className='market-item'>
                <div className='img-wrapper'>
                    <img src={test.link} alt="Item"/>
                </div>
                <div className='description-wrapper'>
                    <div className='select-wrapper'>
                        <h4>Version:</h4>
                        <select
                            onChange={(evt)=> {
                                changeDefaultChoose(evt.target.value)
                            }}
                        >
                            <option value="1lvl">1</option>
                            <option value="2lvl">2</option>
                            <option value="3lvl">3</option>
                        </select>
                    </div>
                    {description(test['descr'])}
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}