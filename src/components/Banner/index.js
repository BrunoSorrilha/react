import styles from './Banner.module.css';

function Banner({ image }){
    return(
        <div 
        className={styles.banner} 
        style={{BackgroundImage: `url('/images/banner-${image}.png')`}}>
            
        </div>
    );
}

export default Banner;