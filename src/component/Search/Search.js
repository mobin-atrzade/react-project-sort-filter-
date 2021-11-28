import React, { useState } from 'react'
import { useProductsActions } from '../Providers/ProductsProvider'
import styles from './search.module.css'

const SearchBar = ({ filter }) => {
    const dispatch = useProductsActions()
    const [value, setValue] = useState("")

    const changeHandler = (e) => {
        // console.log(e.target.value);
        dispatch({ type: "filter", selectedOption: filter })
        dispatch({ type: "search", event: e })
        setValue(e.target.value)
    }

    return (
        <div className={styles.formControl}>
            <div>search for : </div>
            <input type="text"
                placeholder="search for ..."
                onChange={changeHandler}
                value={value}
            />
        </div>
    )
}
export default SearchBar;