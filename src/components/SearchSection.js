// import React from 'react';
import React, { useState, useRef } from 'react';
import SearchItem from './SearchItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';


const SearchBlock = styled.div`
    padding-top: 120px;
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
    div {
        .row {
            form { padding: 20px 80px;
                input { width: 250px; 
                    height: 40px; 
                    border: 1px solid #ddd; 
                    padding-left: 1em; }
                button { width: 80px;
                    height: 40px;
                    background: #0b70b9;
                    color: #fff;
                    font-size: 15px;
                    vertical-align: middle;
                    margin-left: 5px; 
                }
            }
        }

    }
`;

const SearchSection = () => {
    const [inputText, setInputText] = useState("");
    const elInput = useRef()
    const onChange = (e) => {
        setInputText(e.target.value)
    }
    const [place, setPlace] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
        elInput.current.focus();
    }

    return (
        <SearchBlock>
            <div className="sch_bg">
                <img src="images/bg7.jpg" alt=""/>
            </div>
            <div className="location">
                <div className="row">
                    <Link to="/"><AiFillHome /></Link><p><AiOutlineRight /></p><span>대여소 조회</span>
                </div>
            </div>
            {/* 지도 iframe 넣은 것 */}
            {/* <div className="row" dangerouslySetInnerHTML={{ __html:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104407.1090160227!2d128.98623399138998!3d35.1386065038458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893547acb7d77%3A0x47b8fdf24219a59a!2z67aA7IKw6rSR7Jet7Iuc7LKt!5e0!3m2!1sko!2skr!4v1606968821728!5m2!1sko!2skr" width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`}} /> */}

            <div>
                <div className="row">
                    <form className="inputForm" onSubmit={onSubmit}>
                        <input placeholder="장소검색" onChange={onChange} value={inputText} ref={elInput} />
                        <button type="submit">검색</button>
                    </form>
    
                    <SearchItem searchPlace={place} />
                </div>
            </div>
            
        
        </SearchBlock>
    );
};

export default SearchSection;