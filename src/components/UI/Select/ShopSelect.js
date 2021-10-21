import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import axios from "axios";


const ShopSelect = ({label, name, onChange, options}) => {

    const handleChange = e => {
        onChange(name, e.value)
    }

    return (
        <div>
            <label>
                {label}
                <Select options={options} onChange={handleChange}/>
            </label>
            
        </div>
    );
};

export default ShopSelect;