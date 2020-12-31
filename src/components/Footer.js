import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer_wrap">
            <div className="row">
                <div className="footer_left">
                    <ul className="bottom_nav">
                        <li><Link to="/">이용약관</Link></li>
                        <li><Link to="/">개인정보처리방침</Link></li>
                        <li><Link to="/">보험안내</Link></li>
                        <li><Link to="/">도움주신 분</Link></li>
                    </ul>
                    <div className="address">
                        <p>부산광역시 연제구 중앙대로 1001(연산동) 우편번호 47545</p>
                        <p>COPYRIGHT ⓒ 2020 Busan Metropolitan City All RIGHTS RESERVED.</p>
                    </div>
                </div>
                
                <div className="footer_right">
                    <div className="sns">
                        <p><a href="#"><AiFillFacebook /></a></p>
                        <p><a href="#"><AiFillInstagram /></a></p>
                        <p><a href="#"><FaBlogger /></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;