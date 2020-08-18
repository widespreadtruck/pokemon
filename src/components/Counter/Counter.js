import React from 'react';
import styles from './Counter.module.css';

const Counter = (props) => {
    return(
        <div className={styles.Counter}>Answered:<span>0</span>/10</div>
    )
}

export default Counter;