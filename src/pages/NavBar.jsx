import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import axios from 'axios';
import TextCard from '../components/TextCard';
import { useSelector, useDispatch } from 'react-redux';
import { postDataList } from '../actions/dataListActions';

export default function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dataListState = useSelector(state => state.dataList);
    console.log('nav render');

    const createBtnHandler = async () => {
        const id = uuidv4();
        await dispatch(postDataList({id}));
        navigate(`/${id}`);
    };

    return (
        <Container>
            <button onClick={createBtnHandler}>Create</button>
            <div>
                {
                    dataListState.data 
                    &&
                    dataListState.data.map(v => {
                        return(
                            <Link key={v.id} to={`/${v.id}`}>
                                {v.title}
                            </Link>
                        )
                    })
                }
            </div>
        </Container>
    )
}

const Container = styled.aside`
    width: 20%;
    height: 100%;
    background-color: aqua;

    div > a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: black;
        background-color: wheat;
        width: 100%;
        height: 3rem;
        margin: 5px 0;
    }
`;
