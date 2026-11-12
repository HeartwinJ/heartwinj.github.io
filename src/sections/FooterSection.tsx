import { socialLinks } from "../components/socialLinks";

function FooterSection() {
  return (
    <footer className="footer sky--night-deep">
      <div className="wrap footer__inner">
        <p className="footer__wordmark">
          Heartwin
          <br />
          Haveluck.
        </p>

        <div className="footer__meta">
          <p className="contact__socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="link"
              >
                {link.label}
              </a>
            ))}
          </p>
          <p className="label muted">
            © {new Date().getFullYear()} · Built with React. No stars were harmed.
          </p>
          <p className="label muted">Set in Mona Sans &amp; Martian Mono</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
