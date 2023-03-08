import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import { pageLinks, socialLinks } from "../data";
const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => (
          <PageLinks key={link.id} {...link} itemClass="footer-link" />
        ))}
      </ul>
      <ul class="footer-icons">
        {socialLinks.map((link) => (
          <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
        ))}
      </ul>
      <p class="copyright">
        <p>copyright &copy; Backroads travel tours company</p>
        <p>
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </p>
    </footer>
  );
};
export default Footer;
