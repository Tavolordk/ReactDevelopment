import Footer from "./footer";
import Header from "./header";

export default function Contact() {
    return (
        <>
            <Header></Header>
            <form className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type={"text"} id="nombre" placeholder="Escribe tu nombre..." className="form-control" name="nombre" />
                        </div>
                        <div className="mb-3">
                            <label for="apellidos" className="form-label">Apellidos:</label>
                            <input type={"text"} id="apellidos" placeholder="Escribe tus apellidos..." className="form-control" name="apellidos" />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email:</label>
                            <input type={"email"} id="email" placeholder="ejemplo@algo.com" className="form-control" name="apellidos" />
                        </div>
                        <div className="mb-3">
                            <label for="mensaje" className="form-label">Mensaje:</label>
                            <textarea id="mensaje" className="form-control" rows={3} name="mensaje" />
                        </div>
                        <input type={"submit"} className="btn btn-primary" value={"Enviar"} />
                    </div>
                </div>
            </form>
            <Footer></Footer>
        </>
    );
}