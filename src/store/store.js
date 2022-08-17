import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducer/dataListReducer';

const store = configureStore({
    reducer: {
        dataList: dataReducer.reducer
    }
});

export default store;
