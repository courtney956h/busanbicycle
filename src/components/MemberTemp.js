import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

const MemberTempBlock = styled.div`
    padding: 120px 0;
    // .location { padding: 20px 0;
    //     font-size: 18px;
    //     color: #666;
    //     border-bottom: 1px solid #ddd;
    //     .row { display: flex;
    //         p { padding: 0 10px; }
    //         span { line-height : 23px; 
    //             color: #0b70b9; 
    //         }
    //     }
    // }
    .row { padding: 0 100px; 
        h2 { font-size: 30px; 
            text-align: center;
            letter-spacing: 2px;
            padding-top: 30px; }
    }
`;

// const textMap = {
//     login:'로그인',
//     join:'회원가입'
// }

const MemberTemp = ({children}) => {
    // const text = textMap[type]
    return (
        <div className="wrap">
            <Header />
            <MemberTempBlock>
                <div className="not_bg">
                    <img src="images/bg3.jpg" alt="" />
                </div>
                {/* <div className="location">
                    <div className="row">
                        <Link to="/"><AiFillHome /></Link><p><AiOutlineRight /></p><span>{text}</span>
                    </div>
                </div> */}
                <div className="row">
                    <h2>MEMBERSHIP</h2>
                    {children}
                </div>
            </MemberTempBlock>
            <Footer />
        </div>
    );
};

export default MemberTemp;