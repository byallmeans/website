import React from "react"
import { Link } from "gatsby"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-work" role="menuitem">
                <Link to={`/`}>Work</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about/`}>About</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-contact" role="menuitem">
                <Link to={`/contact/`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        Copyright {new Date().getFullYear()} &mdash; <a href="https://instagram.com/byallmeanstogo" target="_blank" rel="noopener noreferrer">Instagram</a> • <a href="https://twitter.com/byallmeanstogo" target="_blank" rel="noopener noreferrer">Twitter</a> • <a href="https://dribbble.com/byallmeans" target="_blank" rel="noopener noreferrer">Dribbble</a>
      </footer>
    </div>
  )
}

export default Layout
