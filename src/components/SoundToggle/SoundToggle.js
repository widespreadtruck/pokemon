import React from 'react';
import SoundIcon from './SoundIcon/SoundIcon'
import styles from './SoundToggle.module.css';

const SoundToggle = (props) => {
    return(
        <div className={styles.SoundToggle}>
            Sound:<SoundIcon />
        </div>
    )
};

export default SoundToggle;