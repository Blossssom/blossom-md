import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import { useEffect, useState } from "react";
import NavBar from "./pages/NavBar";
import {Routes, Route} from 'react-router-dom';
import TextArea from "./pages/TextArea";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataList } from "./actions/dataListActions";

function App() {
  // const [dataList, setDataList] = useState('');
  // const [isUpdate, setIsUpdate] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataList());
  }, [dispatch]);

  return (
      <BrowserRouter>
        <AppContainer className="App">
          <NavBar />
          {/* <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<TextArea setData={setDataList} />} />
          </Routes> */}
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
