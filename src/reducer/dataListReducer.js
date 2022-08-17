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
            console.log('item :', state);
            state.data.push({id: item.id, title: item.title, text: item.text});
            state.change = true;
        },

        updateData(state, action) {
            const bodyData = action.payload;
            console.log(bodyData);
            state.data = state.data.map(v => v.id === bodyData.id ? bodyData : v);
        }
    }
});

export const dataListAction = dataReducer.actions;
export default dataReducer;