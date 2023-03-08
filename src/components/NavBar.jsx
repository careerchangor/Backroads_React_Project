import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const NavBar = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul class="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <PageLinks key={link.id} {...link} itemClass="nav-link" />
          ))}
        </ul>

        <ul class="nav-icons">
          {socialLinks.map((link) => (
            <SocialLinks key={link.id} {...link} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
