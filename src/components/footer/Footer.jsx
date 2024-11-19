import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import logo from '../../assets/img/logo.jpg'

const Footer = () => {
    return (
        <>
            <div className=" bg-body-tertiary row shadow-sm mt-4">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={logo} alt="Logo" className="img-fluid w-25" />
                </div>
                <div className="col-md-4 text-center">
                    <p>Calle 123, Oficina 456</p>
                    <p>Teléfono: 1234567890</p>
                    <p>Email: spacesinmobiliaria@business.com</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center my-4">
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
