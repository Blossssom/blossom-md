import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import MdField from '../components/MdField';
import TextField from '../components/TextField';

export default function TextArea(props) {
    const [text, setText] = useState(``);

  return (
    <Container>
        <TextField setText={setText} text={text} setDate={props.setData} />
        <MdField text={text} />
    </Container>
  )
};

const Container = styled.section`
    width: 80%;
    display: flex;
    height: 100%;
`;
