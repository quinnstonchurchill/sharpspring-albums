import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-styled-flexboxgrid';
import Album from './Album';

const CustomGrid = styled(Grid)`
    padding: 1rem;
`;

export default function Albums({ albums }) {
    return (
        <CustomGrid fluid>
            <Row>
                {albums.map(album => {
                    return <Album {...album} />;
                })}
            </Row>
        </CustomGrid>
    );
}
