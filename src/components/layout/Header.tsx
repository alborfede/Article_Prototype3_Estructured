import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Nuevo estado para el menú de perfil
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Nueva función para alternar el menú de perfil
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="nyt-top-line"></div>

      <div className="header-top">
        <div className="header-left-actions">
          <button className="icon-btn" title="Menú" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </button>
          <button className="icon-btn" title="Buscar">
            <i className="ri-search-line"></i>
          </button>
        </div>

        <div className="brand-logo-container">
          <a href="/" aria-label="Inicio">
            <svg width="340" viewBox="0 0 160 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="brand-logo-svg">
              <path d="M15.6992 3.56642H21.3387L21.5033 5.66069C21.5033 5.66069 22.4788 3.35699 24.0213 3.27692C25.5638 3.19684 27.1551 3.89288 27.1977 6.07338C27.2404 8.25388 25.6065 8.82673 24.7712 8.82673C23.936 8.82673 22.3325 7.55169 22.3325 7.55169C22.3325 7.55169 21.3936 7.92126 21.357 10.5083C21.3204 13.0953 21.3387 15.2389 21.3387 15.2389H15.8516L15.6992 3.56642Z" fill="#E64427"></path>
              {/* Se omiten el resto de los paths del logo por brevedad, pero asegúrate de mantener tu SVG original intacto */}
            </svg>
          </a>
        </div>

        <div className="header-right-actions" style={{ position: 'relative' }}>
          <button className="btn-suscribite-nyt">SUSCRIBITE</button>
          {/* Se agregó el evento onClick aquí */}
          <button className="btn-account-nyt" onClick={toggleProfileMenu}>
            Ingresar <i className="ri-user-3-line"></i>
          </button>

          {/* NUEVO MENÚ DESPLEGABLE DE PERFIL */}
          {isProfileMenuOpen && (
            <div className="profile-dropdown-menu">
              <div className="profile-dropdown-header">
                <span className="profile-email">alborfede@gmail.com</span>
                <button className="profile-close-btn" onClick={toggleProfileMenu}>
                  <i className="ri-close-line"></i>
                </button>
              </div>
              
              <div className="profile-dropdown-body">
                <div className="profile-greeting-section">
                  <div className="profile-avatar">
                    <i className="ri-user-3-fill"></i>
                  </div>
                  <h2>Good evening.</h2>
                  <a href="#" className="profile-setup-link">Set up your profile</a>
                </div>

                <p className="profile-sub-status">
                  The email you logged in with isn't associated with a News subscription and has limited access to articles.
                </p>

                <button className="profile-subscribe-btn">
                  Subscribe for more access
                </button>

                <p className="profile-alt-email">
                  Already subscribed? <a href="#">Try a different email</a>
                </p>

                <ul className="profile-nav-list">
                  <li>
                    <a href="#">Account settings <i className="ri-arrow-right-s-line"></i></a>
                  </li>
                  
                  <li className="profile-nav-section">YOUR CONTENT</li>
                  <li>
                    <a href="#">Saved articles <i className="ri-arrow-right-s-line"></i></a>
                  </li>
                  <li>
                    <a href="#">Newsletters <i className="ri-arrow-right-s-line"></i></a>
                  </li>

                  <li className="profile-nav-section">GET SUPPORT</li>
                  <li>
                    <a href="#">Help Center <i className="ri-arrow-right-s-line"></i></a>
                  </li>
                </ul>

                <a href="#" className="profile-logout">Log out</a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navegación y el resto de tu código se mantiene igual */}
      <nav className={`sub-navbar ${isSticky ? 'is-sticky' : ''}`}>
        {/* ... */}
      </nav>
      {/* ... */}
    </header>
  );
};