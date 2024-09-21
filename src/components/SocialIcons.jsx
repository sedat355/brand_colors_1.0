import facebook from "../assets/icons/facebook.svg"
import twitter from "../assets/icons/twitter.svg"
import linkedin from "../assets/icons/linkedin.svg"
import pinterest from "../assets/icons/pinterest.svg"


function SocialIcons() {
  return(
    <ul className="social-icon-list">
      <li className="social-item">
        <a className="social-icon-link">
          <img className="social-icon" src={twitter}/>
        </a>
      </li>
      <li className="social-item">
        <a className="social-icon-link">
          <img className="social-icon" src={facebook}/>
        </a>
      </li>
      <li className="social-item">
        <a className="social-icon-link">
          <img className="social-icon" src={linkedin}/>
        </a>
      </li>
      <li className="social-item">
        <a className="social-icon-link">
          <img className="social-icon" src={pinterest}/>
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons