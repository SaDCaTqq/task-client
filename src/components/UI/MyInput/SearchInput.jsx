import React, { } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({children,valueSearch,filter,setFilter,...props}) => {
    const ClearSearch = () => {
        setFilter({...filter,query: ''});
        
    }
    return (
        <div className={styles.SearchBox}>
            <input {...props} value={valueSearch} className={styles.Input}/>
            <img src="close.png" alt="" onClick={ClearSearch}/>
        </div>
    );
};

export default SearchInput;