import React, { Suspense, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MdField from '../components/MdField';
import TextField from '../components/TextField';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function TextArea() {
    const [text, setText] = useState(``);
    const params = useParams();
    const dataList = useSelector(state => state.dataList.data);

    useEffect(() => {
      // data 호출이 오래걸려 dataList 정제 오류
      console.log('inner effect');
      let data;
      let timeout;
      if(dataList) {
        data = dataList.find(v => v.id === params.id);
      }else {
        timeout = setTimeout(() => {data = dataList.find(v => v.id === params.id);}, 1000);
      }
      setText(data.text);

      return () => {
        clearTimeout(timeout);
      }
    }, []);

  return (
    <Container>
      <Suspense fallback={<div>loading...</div>}>
        <TextField text={text} setText={setText} />
      </Suspense>
        <MdField text={text} />
    </Container>
  )
};

const Container = styled.section`
    width: 80%;
    display: flex;
    height: 100%;
`;
