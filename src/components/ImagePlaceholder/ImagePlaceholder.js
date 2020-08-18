import React from 'react';
import styles from './ImagePlaceholder.module.css'

import pokeball from '../../assets/Pokeball.png';

const ImagePlaceholder = () => {
    return (
        <div className={styles.imgPlaceholder}>
            <img className={styles.image} src={pokeball} alt="image of a random pokemon"/>
        </div>
    )
}

export default ImagePlaceholder
