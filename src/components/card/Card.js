import styles from './Card.module.scss';
import {animated, useSpring } from 'react-spring';

const Card = ({image, title, descriptions, backgroundColor}) =>{
    const fadeStyles = useSpring({
        delay: 1000,
        config: {
            duration: 1000
        },
        from: {
             opacity: 0,
             marginLeft: -300},
        to: {
            opacity: 1,
            marginLeft: 0
        }
    });
    return(
        <div className={styles['card']} style={{
            backgroundColor: backgroundColor
        }}>
            <div className={styles['card-content']}>
                <animated.div className={styles['image']} style={fadeStyles}>
                    <img alt={image} src={image}/>
                </animated.div>
                <div className={styles['card-title']}>
                    <p>{title}</p>
                </div>
                <div className={styles['card-description']}>
                    <p>{descriptions}</p>
                </div>
                <div className={styles['learn-button']}>
                    <button style={{
                        color: backgroundColor
                    }}>Learn More</button>
                </div>
            </div>
        </div> 
    )
}

export default Card;