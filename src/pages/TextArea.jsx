import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MdField from '../components/MdField';
import TextField from '../components/TextField';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function TextArea() {
    const [text, setText] = useState(``);
    const dataList = useSelector(state => state.dataList.data);
    const params = useParams();
    useEffect(() => {
      const data = dataList.find(v => v.id === params.id)
      setText(data.text);
    }, [params.id]);

  return (
    <Container>
        <TextField text={text} setText={setText} />
        <MdField text={text} />
    </Container>
  )
};

const Container = styled.section`
    width: 80%;
    display: flex;
    height: 100%;
`;
