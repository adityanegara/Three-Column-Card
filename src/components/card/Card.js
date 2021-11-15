import styles from './Card.module.scss';

const Card = ({image, title, descriptions, backgroundColor}) =>{
    return(
        <div className={styles['card']} style={{
            backgroundColor: backgroundColor
        }}>
            <div className={styles['card-content']}>
                <div className={styles['image']}>
                    <img src={image}/>
                </div>
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