import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 50px;
    padding: 15px 10px;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    background: #ddd;
    border-radius: 10px;
    border: none;
    &:hover { background: #0b70b9; 
        color: #fff; 
    }
`;


const Button = (props) => {
    return (
        <StyledButton {...props} />
    );
};

export default Button;