import React from 'react';
import styled from 'styled-components';
import { FaHardHat, FaCheckCircle, FaRoad, FaArrowCircleRight, FaWalking } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { AiFillCar } from 'react-icons/ai';
import { GoArrowBoth } from 'react-icons/go';
import { GiStopSign } from 'react-icons/gi';
import { MdPhonelinkErase } from 'react-icons/md';

const SafetyFirst = styled.div`
    text-align: center;
    padding: 50px 0;
    ul { display: flex; 
        flex-wrap: wrap;
        justify-content: space-between; 
        li { width: 20%; 
            font-size: 45px; 
            padding : 40px 20px; 
            p { font-size: 15px; 
                color: #666; 
                padding: 10px;
            }
        }
    }
`;

const Safety1 = () => {
    return (
        <SafetyFirst>
            <ul>
                <li>
                    <FaHardHat />
                    <p>이용시 반드시 안전모를 착용합시다.</p>
                </li>
                <li>
                    <FaCheckCircle />
                    <p>이용전 브레이크, 타이어, 체인,<br/>안장 조임을 꼭 확인합니다.</p>
                </li>
                <li>
                    <BiDrink />
                    <p>음주후 이용시 도로교통법에 의해<br/>처벌을 받습니다.</p>
                </li>
                <li>
                    <AiFillCar />
                    <p>자전거도 차입니다.<br/>차와 같이 교통법규를 지켜야 합니다.</p>
                </li>
                <li>
                    <FaRoad />
                    <p>자전거도로가 따로 있는 곳에서는<br/>자전거 도로로!</p>
                </li>
                <li>
                    <FaArrowCircleRight />
                    <p>자전거도로가 설치되지 않은 곳은<br/>도로 우측 가장자리에 붙어서<br/>통행합니다.</p>
                </li>
                <li>
                    <GoArrowBoth />
                    <p>2대 이상 나란히 차도를 통행하지<br/>않습니다.</p>
                </li>
                <li>
                    <GiStopSign />
                    <p>보행자의 통행에 방해가 될 때에는<br/>일시정지합니다.</p>
                </li>
                <li>
                    <FaWalking />
                    <p>횡단보도에서는 자전거를 끌고<br/>보행하여야 합니다.</p>
                </li>
                <li>
                    <MdPhonelinkErase />
                    <p>주행 시 핸들을 놓거나<br/>이어폰, 핸드폰을 사용하지 않습니다.</p>
                </li>
            </ul>
        </SafetyFirst>
    );
};

export default Safety1;