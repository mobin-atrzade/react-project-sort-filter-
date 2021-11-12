import React from 'react'
import styles from './filter.module.css'
import Select from 'react-select'

const SelectComponent = ({ title, ...rest }) => {
    return (
        <div className={styles.selectContainer}>
            <span> {title} </span>
            <Select
                {...rest}
                className={styles.select}
            />
        </div>
    )
}

export default SelectComponent;