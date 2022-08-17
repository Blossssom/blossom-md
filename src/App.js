import styled from "styled-components";

import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import { useEffect, useState } from "react";
import NavBar from "./pages/NavBar";
import {Routes, Route} from 'react-router-dom';
import TextArea from "./pages/TextArea";
import axios from 'axios';

function App() {
  const [dataList, setDataList] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    axios.get(process.env.REACT_APP_FIREBASE_API + 'md.json').then(data => setDataList(Object.entries(data.data)));
  }, [isUpdate]);
  console.log('app render');
  return (
      <BrowserRouter>
        <AppContainer className="App">
          <NavBar datalist={dataList} setData={setDataList} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<TextArea setUpdate={setIsUpdate} />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
  );
}

const AppContainer = styled.main`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  height: 100vh;
`;

export default App;
