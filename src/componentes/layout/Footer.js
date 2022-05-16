import "../layout/Footer.css"
import {FaFacebook, FaInstagram} from 'react-icons/fa'

function Footer () {
  return (
    <footer className="footer">
      <ul className="social_list svg">
        <li className="social_list">
          <FaFacebook />
        </li>
        <li className="social_list">
          <FaInstagram/>
        </li>
      </ul>
      <p className="copy_right">
        <span>Todos Direitos Autorizados por Amanda De Lira </span> &copy; Afropratas 2022
      </p>
    </footer>
  )
}

export default Footer