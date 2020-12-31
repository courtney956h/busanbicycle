import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header_wrap">
                <div className="top_nav">
                    <div className="row">
                        <ul className="language">
                            <li><Link to="/">ENGLISH</Link></li>
                            <li><Link to="/">中國語</Link></li>
                            <li><Link to="/">日本語</Link></li>
                            <li><Link to="/">한국어</Link></li>
                        </ul>
                        <ul className="topmenu">
                            <li><Link to="/login">로그인</Link></li>
                            <li><Link to="/join">회원가입</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="logo_nav">
                    <div className="row">
                        <h1 className="logo">
                            <Link to="/" className="lnk">
                                <img src="images/logo.png" alt="" />
                            </Link>
                        </h1>
                        <nav className="nav">
                            <ul className="detph1">
                                <li><Link to="/business" className="lnk">사업소개</Link></li>
                                <li><Link to="/road" className="lnk">도로정보</Link></li>
                                <li><Link to="/search" className="lnk">대여소 조회</Link></li>
                                <li><Link to="/purchase" className="lnk">이용권 구매</Link></li>
                                <li><Link to="/notice" className="lnk">공지사항</Link></li>
                                <li><Link to="/safety" className="lnk">안전수칙</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </div>
    );
};

export default Header;