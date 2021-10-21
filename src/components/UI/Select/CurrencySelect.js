import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import axios from "axios";
const AcquirerSelect = ({label, name, id}) => {

    const [currencyPost, setCurrencyPosts] = useState([])

    useEffect(() => {
         axios
            .get('https://my-json-server.typicode.com/Arakelove/db-select/Currency')
            .then(resource => {
                setCurrencyPosts(resource.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const options = currencyPost.map(items => ({
        "value": items.id,
        "label": items.title
    }))

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Select options={options}/>
        </div>
    );
};

export default AcquirerSelect;