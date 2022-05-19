import "./Slider.css"
import { useInView } from 'react-intersection-observer';

const Slider = ({imageSrc, title, subtitle, flipped}) => {

    // Animação, tem que instalar no ínicio do project npm install react-intersection-observer --save
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
      });
    const renderContent = () => {
        if(!flipped) {
            return (
            <>
                <img src={imageSrc} alt="Travel" className="slider_image" />
                <div className="slider_content">
                    <h1 className="slider_title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </>
            )
        }else {
            return (
            <>
                <div className="slider_content">
                    <h1 className="slider_title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <img 
                src={imageSrc} 
                alt="Travel" 
                className="slider_image" />
            </>
            )
        }
    }
       
    return (
        <div 
            // Use inView bottom, passando a class create slider--zoom animation
            className={inView ? "slider slider--zoom " : "slider"}
            ref={ref}
            >{renderContent()}
        </div>
        )
}
export default Slider