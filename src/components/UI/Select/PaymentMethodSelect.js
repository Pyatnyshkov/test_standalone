import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import axios from "axios";
const PaymentMethodSelect = ({label, name, id}) => {

    const [paymentPosts, setPaymentPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://my-json-server.typicode.com/Arakelove/db-select/Acquirer')
            .then(resource => {
                setPaymentPosts(resource.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const options = paymentPosts.map(items => ({
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

export default PaymentMethodSelect;