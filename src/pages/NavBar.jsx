import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import axios from 'axios';
import TextCard from '../components/TextCard';

export default function NavBar(props) {
    const navigate = useNavigate();
    
    const createBtnHandler = async () => {
        const id = uuidv4();
        await axios.put(process.env.REACT_APP_FIREBASE_API + `md/${id}.json`, {
            title: 'Untitled',
            text: ''
        }).then(data => props.setData(prev => [...prev, [id, data.data]]));
        console.log(process.env.REACT_APP_FIREBASE_API + `md/${id}.json`)
        
        navigate(`/${id}`);
    };

    return (
        <Container>
            <button onClick={createBtnHandler}>Create</button>
            <div>
                {
                    props.datalist 
                    &&
                    props.datalist.map(v => {
                        return(
                            <Link key={v[0]} to={`/${v[0]}`}>
                                {v[1].title}
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
