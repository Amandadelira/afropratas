import "../layout/Footer.css"
import {FaFacebook, FaInstagram} from 'react-icons/fa'

function Footer () {
  return (
    <footer className="footer">
      <ul>
        <li className="list">
          <FaFacebook />
        </li>
        <li className="list">
          <FaInstagram/>
        </li>
      </ul>
      <p className="copy_right">
        <span>Afropratas</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer