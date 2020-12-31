import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';

const NoticeBlock = styled.div`
    padding: 120px 0;
    .location { padding: 20px 0;
        font-size: 18px;
        color: #666;
        border-bottom: 1px solid #ddd;
        .row { display: flex;
                p { padding: 0 10px; }
            span { line-height : 23px; 
                color: #0b70b9; 
            }
        }
    }
    .row {
        .notice_box { margin: 0 200px;
            .not_h2 { padding: 50px 0; 
                text-align: center;
                h2 { font-size: 30px; }
            }
            .not_search { background: #eee;
                padding: 20px 100px; 
                text-align: center;
                form { display: flex;
                    justify-content: between-space;
                    input { height: 40px;
                        width: 90%;
                        border: 1px solid #ddd;
                        } 
                    }
                    button { height: 40px;
                        width: 10%; 
                        margin: 0 10px;
                        background: #0b70b9; 
                        color: #fff; 
                        font-size: 15px;
                        vertical-align: middle;
                    }
                }
            }
            .not_table { padding: 30px 0;
                font-size: 15px;
                table {
                    col:nth-child(1) { width: 80%; }
                    col:nth-child(2) { width: 20%; }
                    th { border-top: 1.5px solid #666;
                        border-bottom: 1.5px solid #666;
                        padding: 15px; 
                    }
                    td { border-bottom: 1px solid #ddd;
                        padding: 15px; 
                    }
                    
                    tr {
                        td:nth-child(1) { font-weight: bold; }
                    }
                    tr { 
                        td:nth-child(2) { text-align: center; }
                    }
                    
                    tr:nth-child(1) {
                        td:nth-child(1) { color: #0b70b9; }
                    }
                    tr:nth-child(2) {
                        td:nth-child(1) { color: #0b70b9; }
                    }
                    tr:nth-child(3) {
                        td:nth-child(1) { color: #0b70b9; }
                    }
                    tr:nth-child(4) {
                        td:nth-child(1) { color: #0b70b9; }
                    }
                }
            }
            .num_list { text-align: center;
                span { font-size: 13px;
                    padding: 7px 12px; 
                    margin: 5px; }
                span:nth-child(1) { color: #fff;
                    background: #0b70b9; }
            }
        }
    }
`;

const NoticeSection = () => {
    return (
        <NoticeBlock>
            <div className="not_bg">
                <img src="images/bg5.jpg" alt="" />
            </div>
            <div className="location">
                <div className="row">
                <Link to="/"><AiFillHome /></Link><p><AiOutlineRight /></p><span>공지사항</span>
                </div>
            </div>
            <div className="row">
                <div className="notice_box">
                    <div className="not_h2">
                        <h2>공지사항</h2>
                    </div>
                    <div className="not_search">
                        <form>
                            <input type="text" name="search_box" id="search_box"></input>
                            <button>검색</button>
                        </form>
                    </div>
                    <div className="not_table">
                        <table>
                            <caption className="blind">공지사항</caption>
                            <colgroup>
                                <col/>
                                <col/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>제목</th>
                                    <th>날짜</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>[안내] 자전거 관련 앱 기능 추가 안내</td>
                                    <td>2020.11.18</td>
                                </tr>
                                <tr>
                                    <td>'보이는 상담' 시범 실시</td>
                                    <td>2020.09.28</td>
                                </tr>
                                <tr>
                                    <td>[중요] QR형 자전거 주의사항 안내</td>
                                    <td>2020.06.10</td>
                                </tr>
                                <tr>
                                    <td>[중요]QR형 자전거 운영 안내</td>
                                    <td>2020.02.19</td>
                                </tr>
                                <tr>
                                    <td>[안내]유실물 처리 관련 공지사항</td>
                                    <td>2020.10.08</td>
                                </tr>
                                <tr>
                                    <td>[안내] 자전거 이용관련 안전수칙 안내</td>
                                    <td>2020.06.09</td>
                                </tr>
                                <tr>
                                    <td>[안내] 유튜버에게 배우는 자전거 안전수칙안내</td>
                                    <td>2020.09.14</td>
                                </tr>
                                <tr>
                                    <td>[필수] QR형 자전거 이용시 블루투스 와 GPS 기능 ON 확인후 대여 가능안내</td>	
                                    <td>2020.04.02</td>
                                </tr>
                                <tr>
                                    <td>[중요] QR형 자전거 대여 반납 안내</td>
                                    <td>2020.03.20</td>
                                </tr>
                                <tr>
                                    <td>공공자전거 방역, 이렇게 합니다!</td>
                                    <td>2020.03.18</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="num_list">
                        <span><a href="#">1</a></span>
                        <span><a href="#">2</a></span>
                        <span><a href="#">3</a></span>
                        <span><a href="#">4</a></span>
                        <span><a href="#">5</a></span>
                    </div>
                </div>
            </div>
        </NoticeBlock>
    );
};

export default NoticeSection;