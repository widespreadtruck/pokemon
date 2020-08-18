import React from 'react';
import styles from './QuestionMark.module.css';
import question from '../../assets/question.png';

const QuestionMark = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={question} alt="image of a random pokemon" />
        </div>
    )
}

export default QuestionMark;
