import React from 'react';
import styled from 'styled-components';

export default function TextCard(props) {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

const Container = styled.button`
    text-align: center;
    width: 100%;
    height: 3rem;
    margin: 5px 0;
`;
