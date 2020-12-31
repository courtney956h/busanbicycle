import React from 'react';
import styled from 'styled-components';

const RoadInfoItemBlock = styled.div`
    width: 33.33%;
    div { padding: 30px 50px; 
        h4 { font-size: 18px; 
            margin-bottom: 10px; }
        p { font-size: 15px;
            color: #666; 
        }
    }
`;

const RoadInfoItem = ({name, start, end, total}) => {
    return (
        <RoadInfoItemBlock>
            <div>
                <h4>{name}</h4>
                <p>출발지점 : {start}</p>
                <p>종료지점 : {end}</p>
                <p>총 거리 : {total} km</p>
            </div>
        </RoadInfoItemBlock>
    );
};

export default RoadInfoItem;