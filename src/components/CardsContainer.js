import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const CardsContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = "/promotional/test.json";
        const fetchData = async () => {
            const response = await axios.get(url);
            setItems(response.data);
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