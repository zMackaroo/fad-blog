function Footer() {
  return (
    <div className="footer">
      <a
        className="footer__emailus"
        href={`mailto:${import.meta.env.VITE_COMPANY_EMAIL}`}
      >
        <span>Email us</span>
      </a>
      <span>© 2024 by Urban Vogue</span>
    </div>
  );
}

export default Footer;
