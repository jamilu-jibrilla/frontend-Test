import Logo from "../assets/Logo.svg"
import SearchIcon from "../assets/nav/search.png"
import Notif from "../assets/nav/notifs.png"
import ProfilePhoto from "../assets/nav/profile.png"
import DownArrow from "../assets/nav/arrow.png"
function Nav() {
    return (
      <div className="Nav">

        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>  
      
        <img className="logo-image" src={Logo} alt="logo image" />
      
        <div className="search">
            <input type="text"  placeholder="search for anything"/>
            <span className="search-icon"><img src={SearchIcon} alt="search icon" /></span>
        </div>

        <div className="profile-section">
          <a href="#">Docs</a>
          <img className="notif-icon" src={Notif} alt="notification icon" />
          <img className="profile-photo" src={ProfilePhoto} alt="profile-photo" />
          <div>
            <p className="name-text">Adedeji</p>
            <img src={DownArrow} alt="arrow pointing down" />
          </div>
        </div>

      </div>
    )
  }
  
  export default Nav
  