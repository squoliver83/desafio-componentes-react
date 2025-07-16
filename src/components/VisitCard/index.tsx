import './styles.css';
import carroImg from "../../assets/car.png";

export default function VisitCard() {
    return (
        <div className="dcr-visit-card">
            <div className="dcr-visit-card-image">
                <img src={carroImg} alt="Carro" />
            </div>
            <div className="dcr-visit-card-description">
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    );
}