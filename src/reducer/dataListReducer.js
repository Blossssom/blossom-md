import { createSlice } from "@reduxjs/toolkit";

const initState = {data: [], change: false};

const dataReducer = createSlice({
    name: 'dataList',
    initialState: initState,
    reducers: {
        replaceData(state, action) {
            state.data = action.payload.data;
        },

        addData(state, action) {
            const item = action.payload;
            state.data.push({id: item.id, title: 'Untitled', text: ''});
            state.change = true;
        }
    }
});

export const dataListAction = dataReducer.actions;
export default dataReducer;