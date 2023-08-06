import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div className= "footerBack">
            <div className="redesLogo">
                <div className='logo'>
                    <img style={{width: "45px", height: "35px", paddingRight: "10px"}} src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1687407263/flor_1_s5kkm6.png" alt="logo" />
                    <h1>Cassius</h1>
                </div>
                <div style={{flexDireaction: "column", width: "15%"}}>
                    <div>
                        <h2 style={{margin: "0px", textAlign: "center"}}>Seguinos</h2>
                        <hr />
                    </div>
                    <div className='redes'>
                        <a href="https://www.instagram.com/">
                            <img src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1691154680/instagram_dnfofq.png" alt="instagram" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1691154680/facebook_qx8wwk.png" alt="facebook" />
                        </a>
                        <a href="https://www.tiktok.com/es/">
                            <img src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1691154680/tik-tok_fngeh7.png" alt="tiktok" />
                        </a>
                    </div>
                </div>
            </div>
            <hr style={{width: "90%", marginBottom: "20px"}}/>
            <h4>© 2023 Cassius | Todos los derechos reservados</h4>
        </div>
    )
}

export default Footer