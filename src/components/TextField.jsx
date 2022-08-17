import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateDataList } from '../actions/dataListActions';

export default function TextField(props) {
  
  const params = useParams();
  const dispatch = useDispatch();
  console.log('Text Field render');

  const setTextHandler = (e) => {
    props.setText(e.target.value);
  };

  const saveBtnHandler = async () => {
    const title = props.text.split('\n')[0] || '';
    await dispatch(updateDataList({id: params.id, title: title, text: props.text}));
  };

  return (
    <Container>
        <textarea onChange={(e) => setTextHandler(e)} defaultValue={props.text} />
        <div>
          <button onClick={saveBtnHandler}>Save</button>
        </div>
    </Container>
  )
}

const Container = styled.article`
    width: 100%;
    
    textarea {
        font-size: 1rem;
        border: none;
        border-right: 1px solid black;
        margin: 0;
        height: 90%;
        flex-basis: 10%;
        box-sizing: border-box;
        width: 100%;
        resize: none;
        padding: 1rem;
    }

    div {
      display: flex;
      justify-content: center;
    }

    button {
      width: 50%;
      height: 2rem;
    }
`;