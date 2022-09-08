import React from 'react';
import './footer.css';
import shape from '../../assests/images/footer/shape-1.svg';
import logo from '../../assests/images/logo/logo.png';
import {FaFacebookF, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
            <footer className="footer pt-160">
			<div className="shape">
				<img src={shape} alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-md-6">
						<div className="footer-widget">
							<h3>Follow Us On</h3>
							<ul className="social-links">
								<li><a href="#0"><FaFacebookF /></a></li>
								<li><a href="#0"><FaLinkedin /></a></li>
								<li><a href="#0"><AiFillInstagram /></a></li>
								<li><a href="#0"><FaTwitter /></a></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
						<div className="footer-widget">
							<h3>About Us</h3>
							<ul className="links">
								<li><a href="#home">Home</a></li>
								<li><a href="#add">Add User</a></li>
								<li><a href="#list">Peeps List</a></li>
								<li><a href="#subscribe">Subscribe</a></li>
		
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
						<div className="footer-widget">
							<h3>Services</h3>
							<ul className="links">
								<li><a href="#0">SaaS Inclined</a></li>
								<li><a href="#0">Filing</a></li>
								<li><a href="#0">Storage</a></li>
								<li><a href="#0">Security</a></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
						<div className="footer-widget">
							<div className="logo">
								<a href="#0"> <img src={logo} alt="logo" /> </a>
							</div>
							<p className="desc">Keeping peoples' details since the turn of the century.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="copyright">
					<p>{new Date().getFullYear()} Copyright &copy; Peeps Store</p>
				</div>
			</div>
		</footer>
    );
};

export default Footer;
