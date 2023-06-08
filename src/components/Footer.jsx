import classes from './Footer.module.scss'
import logo from '../assets/images/logo-white.svg'

const Footer = () => {
    return <div className={classes.Container}>
        <img src={logo} alt="" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer;