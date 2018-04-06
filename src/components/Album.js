import React from 'react';
import styled, { css } from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Fonts, shadows, colors } from '../styles';

const Root = styled.div`
    min-height: 200px;
    background: ${props => css`url(${props.image});`}
    background-repeat: no-repeat;
    background-size: cover;
    ${shadows(2)}
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    transition: all 0.2s;
    cursor: pointer;

    :hover {
        transform: translateY(-4px);
        ${shadows(4)}

        a {
            opacity: 1;
        }
    }
`;

const Info = styled(Row)`
    background-color: white;
    margin: 0;
    padding: 1rem;
`;

const Button = styled.div`
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
    transition: all 0.1s;

    :hover {
        background: rgba(0,0,0,0.5);
    }
`;

const A = styled.a`
    margin: auto;
    border: solid 1px white;
    border-radius: 3px;
    padding: 0.5rem 2rem;
    transition: all 0.1s;
    opacity: 0;

    :hover {
        background: ${colors.blue};
        ${shadows(2)}
        border: none;
    }
`;

export default function Album(props) {
    return (
        <Col xs={6} sm={4} md={2}>
            <Root image={props.artworkUrl100}>
                <Button>
                    <A target='_blank' href={props.collectionViewUrl}>
                        <Fonts.md color='white'>View on iTunes</Fonts.md>
                    </A>
                </Button>
                <Info between='xs'>
                    <Col>
                        <Fonts.md weight={600}>{props.collectionName}</Fonts.md>
                        <Fonts.sm color='grey'>{props.artistName}</Fonts.sm>
                    </Col>
                    <Col>
                        <Fonts.sm color='grey'>{props.releaseDate}</Fonts.sm>
                    </Col>
                </Info>
            </Root>
        </Col>
    );
}
