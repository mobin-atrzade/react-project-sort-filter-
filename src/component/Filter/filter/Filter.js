import { useState } from 'react'
import { useProductsActions } from '../../Providers/ProductsProvider'
import styles from './filter.module.css'
import SelectComponent from '../selectComponent/selectComponent';
import SearchBar from '../../Search/Search';

const filterOptions = [
    { value: '', label: 'ALL' },
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
];

const sortOptions = [
    { value: 'highest', label: 'highest' },
    { value: 'lowest', label: 'lowest' },
];

const Filter = () => {
    const dispatch = useProductsActions()
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")

    const filterHandler = (selectedOption) => {
        dispatch({ type: "filter", selectedOption })
        dispatch({ type: "sort", selectedOption: sort })
        setFilter(selectedOption);
    }
    const sortHandler = (selectedOption) => {
        dispatch({ type: "sort", selectedOption })
        setSort(selectedOption);
    }

    return (
        <section >
            <SearchBar filter={filter} />
            <div className={styles.filter}>
                <p> filter products based on:</p>
                <SelectComponent
                    value={filter}
                    onChange={filterHandler}
                    options={filterOptions}
                    title="order by"
                />
                <SelectComponent
                    value={sort}
                    onChange={sortHandler}
                    options={sortOptions}
                    title="sort by price"
                />
            </div>
        </section>
    )
}
export default Filter;
