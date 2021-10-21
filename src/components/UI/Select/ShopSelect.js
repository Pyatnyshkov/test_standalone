import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import axios from "axios";


const ShopSelect = ({label, name, onChange, options}) => {

    const handleChange = e => {
        onChange(name, e.value)
    }

    const shopOptions = options.map(shop => ({
        label: shop.name,
        value: shop.id
    }))

    console.log(shopOptions)

    return (
        <div>
            <label>
                {label}
                <Select options={shopOptions} onChange={handleChange}/>
            </label>
            
        </div>
    );
};

export default ShopSelect;