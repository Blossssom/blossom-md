import { createSlice } from "@reduxjs/toolkit";

const initState = {data: [], change: false};

const dataReducer = createSlice({
    name: 'dataList',
    initialState: initState,
    reducers: {
        replaceData(state, action) {
            state.data = action.payload.data;
        }
    }
});

export const dataListAction = dataReducer.actions;
export default dataReducer;