import React, {useEffect, useState} from 'react';
import Select from "react-select";
import axios from "axios";


const CardTypeSelect = ({name, label, id}) => {
    const [cardPost, setCardPost] = useState([])
    useEffect(() => {
         axios
            .get('https://my-json-server.typicode.com/Arakelove/db-select/CardType')
            .then(resource => {
                setCardPost(resource.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
    const options = cardPost.map(items => ({
        "value": items.id,
        "label": items.name
    }))
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Select options={options}/>
        </div>
    );
};

export default CardTypeSelect;