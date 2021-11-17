import styles from './CardList.module.scss';
import Card from '../card/Card';
import sedanImage from '../../assets/icon-sedans.svg';
import suvsImage from '../../assets/icon-suvs.svg';
import luxuryImage from '../../assets/icon-luxury.svg';
import {animated, useSpring } from 'react-spring';


const CardList = () =>{
    const fadeStyles = useSpring({
        config: {
            duration: 1500
        },
        from: { opacity: 0 },
        to: {
            opacity: 1
        }
    });
    return(
        <animated.div style={fadeStyles} className={styles['card-list']}>
            <Card image={sedanImage} 
                title="SEDANS"
                descriptions="Choose a sedan for its affordability
                and excellent fuel economy. Ideal for cruising in the city or on
                your next road trip."
                backgroundColor="#E28525"/>
            <Card image={suvsImage } 
                title="SUVS"
                descriptions="Take an SUV For its spacious interior, power, and versatility. 
                Perfect for your next family vacation and 
                off-road adventures"
                backgroundColor="#016972"/>
            <Card image={luxuryImage} 
                title="LUXURY"
                descriptions="Cruise in the best car brands without the bloadted prices.
                Enjoy the enhanced comfort of a luxury rental and arrive in style"
                backgroundColor="#00403F"/>
        </animated.div>
    )
}

export default CardList;