import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import style from './Footer.module.css'
import {ReactComponent as Facebook} from '../../assets/facebook.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {ReactComponent as YouTube} from '../../assets/youtube.svg';
import {ReactComponent as Instagram} from '../../assets/instagram.svg';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footer__docs}>
                <ul className={style.footer__links}>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
            <div className={style.footer__content}>
                <Logo/>
                <p>©2022 All rights reserved. Powered by Atla</p>
            </div>
            <div className={style.footer__socials}>
                <ul className={style.footer__social}>
                    <li><a href="https://www.facebook.com/" target="_blank"><Facebook/></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><Twitter/></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><YouTube/></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><Instagram/></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;