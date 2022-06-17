import Footer from "./footer";
import Header from "./header";

export default function Home() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h1 className="text-start">Bienvenido a mi guarida de conocimiento</h1>
                <p className="text-start">Mi nombre es Octavio Olea Pérez en este espacio tú encontrarás, temas de distintas
                    tecnologías y temas de la actualidad con el fin de dar mi punto de vista y aprendas
                    muchas cosas. Espero que este blog sea de tu agrado
                </p>
                <div className="card">
                    <div className="card-body"></div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}