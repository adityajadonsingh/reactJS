import logo from '../../assets/adi-logo.png'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className='py-3'>
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div className={`${styles.logo} w-1/5`}>
                    <a href="/"><img src={logo} alt="logo" /></a>
                </div>
                <div className="nav-list w-3/5 flex items-center justify-center">
                    <ul className="flex text-white gap-x-10 font-bold ">
                        <li className={styles["nav-item"]}><a href="/">About Me</a></li>
                        <li className={styles["nav-item"]}><a href="/">Portfolios</a></li>
                        <li className={styles["nav-item"]}><a href="/">Experience</a></li>
                        <li className={styles["nav-item"]}><a href="/">Education</a></li>
                        <li className={styles["nav-item"]}><a href="/">Skills</a></li>
                        <li className={styles["nav-item"]}><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="btn w-1/5 flex justify-center items-center">
                    <a href="tel:+91-9711118228"><button className='cta-btn text-white py-2 px-10 font-bold'>Call Me</button></a>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
