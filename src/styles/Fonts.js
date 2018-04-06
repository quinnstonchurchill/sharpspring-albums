import styled, { css } from 'styled-components';
import colors from './colors';

const Text = styled.p`
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    color: ${props => props.color ? colors[props.color] : colors.charcoal};
    ${props => props.align && css`text-align: ${props.align};`}
    font-weight: ${props => props.weight ? props.weight : 400};
`;

export default {
    sm: Text.extend`
        font-size: 14px;
    `,
    md: Text.extend`
        font-size: 16px;
    `,
    lg: Text.extend`
        font-size: 34px;
    `
}