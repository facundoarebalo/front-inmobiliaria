import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <div className=" bg-body-tertiary row shadow-sm mt-4">
                <div className="col-md-4">
                    <img src="logo.png" alt="Logo" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h4>Ubicación</h4>
                    <p>Calle 123, Casa 456</p>
                    <p>Teléfono: 1234567890</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <FaInstagram className="mx-2" size={30} />
                    <FaFacebook className="mx-2" size={30} />
                    <FaTwitter className="mx-2" size={30} />
                    <FaLinkedin className="mx-2" size={30} />
                </div>
            </div>
        </>
    )
}

export default Footer
