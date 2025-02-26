export default function FooterComponent() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content--wrapper">
          <div className="footer__content--wrapper--left">
            <a href="">EcoMart</a>

            <div className="footer__content--wrapper--left--info">
              Cloth Store is a store that sells some good
              <span className="d-block">
                Watch, and especially Cloth. We provide
                <span className="d-block">high quality Stuff</span>
              </span>
            </div>

            <div className="footer__content--wrapper--left--media">
              <figure>
                <a href="">
                  <img src="/assets/images/icons/icon-fb.svg" alt="t" />
                </a>
              </figure>
              <figure>
                <a href="">
                  <img src="/assets/images/icons/icon-twitter.svg" alt="t" />
                </a>
              </figure>
              <figure>
                <a href="">
                  <img src="/assets/images/icons/icon-instagram.svg" alt="t" />
                </a>
              </figure>
            </div>

            <div className="footer__content--wrapper--left--copyright">
              ©2021 EcoMart
            </div>
          </div>

          <div className="footer__content--wrapper--right">
            <div className="d-flex justify-content-center">
              <div className="sitelink__list--wrapper">
                <h5>Product</h5>
                <div className="list-group">
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: "1.25rem" }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Download
                    </a>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: "1.25rem" }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Pricing
                    </a>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: "1.25rem" }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Locations
                    </a>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: "1.25rem" }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Countries
                    </a>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: 0 }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Blog
                    </a>
                  </li>
                </div>
              </div>
              <div className="sitelink__list--wrapper me-0">
                <h5>Engage</h5>
                <div className="list-group">
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: "1.25rem" }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Cloth Store ?
                    </a>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: "1.25rem" }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      FAQ
                    </a>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: "1.25rem" }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Abous Us
                    </a>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: "1.25rem" }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Privacy Policy
                    </a>
                  </li>
                  <li
                    className="list-group-item"
                    style={{ listStyle: "none", marginBottom: 0 }}
                  >
                    <a href="/" style={{ color: "#4f5665" }}>
                      Terms of Service
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
