import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

export default function CountryPicker({ handleCountryChange }) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setCountries(await fetchCountries());
        }
        fetchData();
    }, [setCountries])
    return (
        <FormControl>
            <NativeSelect default="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country, i) => {
                    return <option key={i} value={country}>{country}</option>
                })}
            </NativeSelect>
        </FormControl>
    )
}
