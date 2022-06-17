import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (

        <footer className="bg-black text-center text-white position-fixed start-0 bottom-0 w-100">

            <div className="container">

                <section className="mb-4">

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.facebook.com"
                        role="button"
                    ><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>


                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.twitter.com"
                        role="button"
                    ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>


                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.google.com.mx"
                        role="button"
                    ><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></a>


                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.instagram.com"
                        role="button"
                    ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>


                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.linkedin.com/in/octavio-olea-perez"
                        role="button"
                    ><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>


                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.github.com/tavolordk"
                        role="button"
                    ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                </section>

            </div>

            <div
                className="text-center p-3 copyright"
                style={{ background: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2022 Copyright:
                <a className="text-white" href="https://www.github.com/tavolordk">Octavio Olea Pérez</a>
            </div>

        </footer>
    );
}