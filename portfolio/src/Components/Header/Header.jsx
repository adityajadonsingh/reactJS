import logo from "../../assets/adi-logo.png";
import styles from "./Header.module.css";
import { useRef, useState } from 'react';

const Header = () => {
  const buttonRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    if (isFocused) {
      buttonRef.current.blur();
    } else {
      buttonRef.current.focus();
    }
    setIsFocused(!isFocused);
  };
  return (
    <>
      <header className="py-3">
        <div className="container mx-auto md:px-0 px-5">
          <div className="flex justify-between">
            <div className={`${styles.logo} lg:w-1/5 w-1/3`}>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="nav-list w-3/5 flex items-center justify-center">
              <ul className="flex text-white gap-x-10 font-bold ">
                {/* <li className={styles["nav-item"]}><a href="/">About Me</a></li> */}
                <li className={styles["nav-item"]}>
                  <a href="#portfolio">Portfolios</a>
                </li>
                <li className={styles["nav-item"]}>
                  <a href="#skills">Skills</a>
                </li>
                <li className={styles["nav-item"]}>
                  <a href="#exp">Experience & Education</a>
                </li>
                <li className={styles["nav-item"]}>
                  <a href="#contact-home">Contact</a>
                </li>
              </ul>
            </div>
            <div className="btn lg:w-1/5 md:w-1/3 w-2/3 flex md:justify-center justify-end items-center">
              <a href="tel:+91-9711118228">
                <button className="cta-btn text-white py-2 px-10 font-bold">
                  Call Me
                </button>
              </a>
              <button
                className="nav-btn ml-3"
                ref={buttonRef}
                onClick={handleClick}
              >
                <span className="line block top"></span>
                <span className="line cent block"></span>
                <span className="line block bot"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
