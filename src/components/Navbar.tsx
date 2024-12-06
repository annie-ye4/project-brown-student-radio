import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSpotify, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Navbar.css';
import '../fonts/univers-lt-std-webfont/univers-font.css';

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number): void => {
    setActiveIndex(index);
  };

  // const [currentShow, setCurrentShow] = useState<string>('Loading...');
  // const [currentDJ, setCurrentDJ] = useState<string>('Loading...');

  // useEffect(() => {
  //   const fetchCurrentShowData = async () => {
  //     try {
  //       const response = await fetch('https://widgets.spinitron.com/widget/now-playing?station=wbru');
        
  //       if (!response.ok) {
  //         setCurrentShow('No Current Show');
  //         setCurrentDJ('No DJ Available');
  //         return;
  //       }

  //       const html = await response.text();

  //       // Check if the HTML contains the "Page not found" error
  //       if (html.includes('Page not found')) {
  //         setCurrentShow('No Current Show');
  //         setCurrentDJ('No DJ Available');
  //         return;
  //       }

  //       // Parse HTML and extract relevant information
  //       const parser = new DOMParser();
  //       const doc = parser.parseFromString(html, 'text/html');

  //       // Extract show and DJ
  //       const showElement = doc.querySelector('.recentsong .spunpart .playlist-part .showname a');
  //       const djElement = doc.querySelector('.recentsong .spunpart .djpart a');

  //       setCurrentShow(showElement ? showElement.textContent || 'No Current Show' : 'No Current Show');
  //       setCurrentDJ(djElement ? djElement.textContent || 'No DJ Available' : 'No DJ Available');
        
  //     } catch (error) {
  //       console.error('Error fetching Spinitron data:', error);
  //       setCurrentShow('No Show Available');
  //       setCurrentDJ('No DJ Available');
  //     }
  //   };

  //   fetchCurrentShowData();
  // }, []);

  const location = useLocation();
  if (location.pathname.startsWith("/blog") && location.pathname.length >= 7) return null;  

  return (
    <nav>
      <ul className="navbar">
        <li
          className={`home-link ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          <Link to="/Schedule">
            <div className="left-text">WHAT'S PLAYING:</div>
            <div className="center-text">THE MIX</div>
            <div className="right-text">MATTHEW DASILVA</div>

            {/* <div className="left-text">NOW LIVE:</div>
            <div className="center-text">{currentShow}</div>
            <div className="right-text">{currentDJ}</div> */}
          </Link>
        </li>

        <li
          className={`home-link ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          <Link to="/blog">
            <div className="left-text">BLOG POSTS</div>
          </Link>
        </li>

        <li
          className={`home-link ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          <Link to="/DJProfiles">
            <div className="left-text">DJ'S</div>
          </Link>
        </li>

        <li
          className={`home-link about-section ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          <Link to="/about">
            <div className="left-text">ABOUT</div>
          </Link>
          <div className="social-icons">
            <a
              href="https://twitter.com/bsrlive"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/bsrlive/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://open.spotify.com/user/ndis7o6g0u1oq2xvgww7itbvt?si=h8RtzXcKRPeMLna5J2CewA"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaSpotify size={20} />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
