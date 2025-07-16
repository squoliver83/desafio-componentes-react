import './styles.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import OpinionCard from '../../components/OpinionCard';
import VisitCard from '../../components/VisitCard';

export default function Comments() {
    return (
        <>
            <Header />
            <main className="dcr-comments-main">
                <section id="dcr-comments-visit-section" className="dcr-container">
                    <div className="dcr-comments-visit-title">
                        <h2>Venha nos visitar</h2>
                    </div>
                    <div className="dcr-comments-visit-cards">
                        <VisitCard />
                        <VisitCard />
                    </div>
                </section>
                <section id="dcr-comments-opinions-section">
                    <div className="dcr-comments-opinions-title">
                        <h2>O que estão dizendo</h2>
                    </div>
                    <div className="dcr-comments-opinions-cards">
                        <OpinionCard />
                        <OpinionCard />
                        <OpinionCard />
                        <OpinionCard />
                        <OpinionCard />
                    </div>                    
                </section>
            </main>
            <Footer />
        </>
    );
}
