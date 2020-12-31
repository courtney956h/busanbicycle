import React from 'react';
import { FaUserCircle, FaBicycle } from 'react-icons/fa';
import { AiOutlineGlobal, AiFillCaretRight, AiTwotoneShop } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { GiReturnArrow } from 'react-icons/gi';
import styled from 'styled-components';
import'./HomeSection.scss'

const Article = styled.div`
    height: 100vh !important;
    position: relative;
    .main_bg { height: 100%;
        background-image: url(images/main.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    &:before { content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.4); } 
    }
    .text { position: absolute;
        top: 50%; left: 5%;
        transform: translateY(-50%);
        color: #fff;
        h2 { font-size: 65px; }
        p { font-size: 20px; 
            padding: 20px 0; } 
        button { font-size: 18px;
            color: #fff;
            background: transparent;
            border: 2px solid #fff;
            border-radius: 30px; 
            padding: 10px 30px; 
            transition: all 0.5s;
        &:hover { background: #fff;
            color: #0b70b9; } 
        } 
    }
    .login_box { position: absolute;
        top: 50%; right: 10%;
        transform: translateY(-50%);
        padding: 30px;
        background: #fff;
        color: #666;
        form { 
            input { display: block; 
                height: 40px; 
                width: 250px;
                border: none;
                border-bottom: 1px solid #ddd;
                margin: 10px 0; } 
            .chk_box { font-size: 15px;
                    vertical-align: middle;
                input { display: inline-block;
                    height: 15px;
                    width: 15px;
                    margin: 5px 5px 5px 0;
                    vertical-align: top;
                } 
                p { display: inline-block; 
                    font-size: 15px; 
                    padding-left: 15px; }
            } 
            button { display: block;
                width: 100%;
                background: #0b70b9; 
                color: #fff;
                font-size: 15px;
                padding: 15px 0;
                margin: 20px 0; 
            } 
            .nonmb_box { font-size: 18px;
                display: flex;
                justify-content: space-between;
                p { 
                    span { padding: 0 10px; 
                        font-size: 15px; 
                        vertical-align: top; }   
                }
            }
        }
    }
`;


const HomeSection = () => {
    return (
        <div className="homesec_wrap">
            <Article className="article1">
                <div className="main_bg">
                    <div className="text row">
                        <h2>Everybody, Easy,<br/>Anywhere !</h2>
                        <p>You can use Public-Bicycle into Unmanned system.</p>
                        <button>View More</button>
                    </div>
                </div>
               
                <div className="login_box row">
                    <form>
                        <input type="text" name="userid" id="userid" placeholder="아이디"></input>
                        <input type="password" name="password" id="password" placeholder="비밀번호"></input>
                        <div className="chk_box">
                            <input type="checkbox" name="loginchk" id="loginchk" checked></input>
                            <label>자동로그인</label>
                            <p><a href="#" className="idpw_srch">아이디 </a>/<a href="#" className="idpw_srch"> 비밀번호 찾기</a></p>
                        </div>
                        <button>로그인</button>
                        <div className="nonmb_box">
                            <p><FaUserCircle /><span>비회원</span><AiFillCaretRight /></p>
                            <p><AiOutlineGlobal /><span>Foreigner</span><AiFillCaretRight /></p>
                        </div>
                    </form>
                </div>
            </Article>
        
            <article className="article2">
                <div className="quick">
                    <div className="row">
                        <p><a href="#"><CgNotes /><span>대여방법</span><AiFillCaretRight /></a></p>
                        <p><a href="#"><GiReturnArrow /><span>반납방법</span><AiFillCaretRight /></a></p>
                        <p><a href="#"><AiTwotoneShop /><span>대여소현황</span><AiFillCaretRight /></a></p>
                        <p><a href="#"><FaBicycle /><span>대여하기</span><AiFillCaretRight /></a></p>
                    </div>
                </div>
            </article>

            <article className="article3">
                <div className="row">
                    <div className="rental_guide">
                        <h3>대여소 안내</h3>
                        <ul>
                            <li>대여소는 지하철 출입구,
                                버스정류장, 주택단지, 관공서,
                                학교, 은행 등 생활내 통행장소를
                                중심으로 설치되어
                                운영중에 있습니다.
                            </li>
                            <li>
                                자전거의 대여와 반납이
                                무인으로 이루어지는
                                정류장 형태의 공간을
                                대여소라고 합니다.
                            </li>
                            <li>
                                대여소는 주변 생활시설에
                                접근 및 시민들의 이용이 편리한
                                장소를 중심으로 설치되어
                                운영 중에 있습니다.
                            </li>
                            <li>
                                자전거 이용자는
                                장소에 구애받지 않고
                                대여소가 설치된 곳이면
                                어디에서나 자전거를 대여하고
                                반납할 수 있습니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

            <article className="article4">
                <div className="bg">
                    <img src="images/bg1.jpg" alt="" />
                    <div className="bg_text">
                        <p>자전거와 함께하는 건강한 도시</p>
                        <h2>BUSAN</h2>
                    </div>
                </div>
            </article>

            <article className="article5">
                <ul className="grid_box">
                    <li className="grid_item grid1">
                        <img src="images/img_1.jpg" alt="" />
                    </li>
                    <li className="grid_item grid2">
                        <div className="grid_text">
                            <h4>건강한 자전거 도시</h4>
                            <p>자전거 이용의 생활화를 통한<br/>
                                시민건강 증진 실현</p>
                        </div>
                    </li>
                    <li className="grid_item grid3">
                        <div className="grid_text">
                            <h4>깨끗한 자전거의 도시</h4>
                            <p>자전거 교통수단 분담률을 향상시켜<br/>
                                CO2 발생 감소실현</p>
                        </div>
                    </li>  
                    <li className="grid_item grid4">
                        <img src="images/img_2.jpg" alt="" />
                    </li>
                    <li className="grid_item">
                        <img src="images/img_3.jpg" alt="" />
                    </li>
                    <li className="grid_item">
                        <div className="grid_text">
                            <h4>녹색 성장 선도 도시</h4>
                            <p>국가 비전인 “저탄소 녹색성장” 실현</p>
                        </div>
                    </li>  
                    <li className="grid_item">
                        <div className="grid_text">
                            <h4>활기찬 건강인의 도시</h4>
                            <p>자전거 코스를 통한<br/>
                                관광객 및 시민 활력 증진</p>
                        </div>
                    </li>
                    <li className="grid_item">
                        <img src="images/img_4.jpg" alt="" />
                    </li>
                </ul>
            </article>

        </div>
    );
};

export default HomeSection;