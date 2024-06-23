import React from 'react';
import styles from './MySelect.css';

const MySelect = ({options, defaultVal, value, onChange}) => {
    return (
        <select className={styles.Select}
            value={value}
            onChange={e => onChange(e.target.value)}>
                
            <option disabled hidden defaultValue value="">{defaultVal}</option>
            {options.map(option =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
            )}
        </select>
    );
};

export default MySelect;