import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import axios from "axios";
const AcquirerSelect = ({label, name, id}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
         axios
            .get('https://my-json-server.typicode.com/Arakelove/db-select/Acquirer')
            .then(resource => {
                setPosts(resource.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const options = posts.map(items => ({
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

export default AcquirerSelect;