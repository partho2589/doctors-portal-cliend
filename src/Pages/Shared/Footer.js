import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className=" p-10  text-neutral-content" >
            <div className='footer text-[#3A4256] '>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover ">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Weekly Checkup</Link>
                    <Link className="link link-hover">Deep Checkup </Link>
                </div>
                <div>
                    <span className="footer-title">ORAl</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling </Link>
                    <Link className="link link-hover"> Teath Whitening</Link>
                    
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link className="link link-hover">New York - 101010 Hudson</Link>
                    
                </div>
            </div>
            <div className='my-10 text-center text-black'>
                <p >Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer >
    );
};

export default Footer;