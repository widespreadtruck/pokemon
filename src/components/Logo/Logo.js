import React from 'react';
import style from './Logo.module.css';
import PokeLogo from '../../assets/logo.png';

const Logo = (props) => {
    return(
        <img className={style.Logo} src={PokeLogo} alt="Pokemon logo"/>
    );
}

export default Logo;