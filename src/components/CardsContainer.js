import React, { useState, useEffect } from 'react';
import Card from './Card';

const axios = require('axios');

const CardsContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = "/promotional/test.json";
        const fetchData = async () => {
            axios
                .get(url)
                .then(function (response) {
                    setItems(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
    
        fetchData();
      }, [])

      return (
        <div className="CardsContainer">
            {items.map(item => (
                <Card key={item.id} data={item}/>
            ))}
        </div>
      );
}

export default CardsContainer;