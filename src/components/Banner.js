import React from 'react';
import styled from 'styled-components';
import { Fonts } from '../styles';

const Root = styled.div`
    height: 360px;
    width: 100%;
    background: linear-gradient(45deg, #2D8AFC, #48C6FC);
    display: flex;
    * {
        margin: auto;
    }
`;

export default function Banner(props) {
    return (
        <Root>
            <Fonts.lg color='white'>{'Albums by ' + props.artistName}</Fonts.lg>
        </Root>
    );
}
