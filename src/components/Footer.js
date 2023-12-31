const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          Coffee<span>.</span>Love
        </h1>
        <p className="footer__description">
          This place is ideal for both work productivity <br />
          and romantic dates.
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              Street no.1500 <br />
              Romantic Getaways
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +959263302749 <br />
              thandarlinttu@gmail.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Office</h2>
            <p className="footer__information">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
          <div className="footer__data">
            <p className="footer__newsletter-description">
              Subscribe to our newsletter
            </p>

            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="footer__input"
              />
              <button className="footer__button">
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a
              href="https://www.facebook.com/thandar.lin.378537/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-facebook"></i>
            </a>

            <a
              href="https://github.com/Thandar-Lin11"
              target="_blank"
              className="footer__social-link"
            >
              <i class="bx bxl-linkedin"></i>
            </a>

            <a
              href="https://instagram.com/thandar4508/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-instagram"></i>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=959263302749"
              target="_blank"
              className="footer__social-link"
            >
              <i class="bx bxl-whatsapp"></i>
            </a>

            <a
              href="https://www.tiktok.com/@thandarlin110/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-tiktok"></i>
            </a>
          </ul>

          <span className="footer__copy">
            {" "}
            &#169; ypcode. All rigths reserved{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
