import axios from "axios";
import { dataListAction } from "../reducer/dataListReducer";


export const fetchDataList = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(process.env.REACT_APP_FIREBASE_API + 'md.json');
            if(response.status !== 200) {
                throw new Error('Response Error!!');
            }

            const data = response;
            return data;
        };
        // 5c7a4129-3dcd-4161-a038-010cc81d47b8:
        // text: "### **[ 피드백 주고받기 ] (4분 내외)**\n\n- 결과물 공유 내용을 기반으로 개선할 수 있는 부분에 대해서 객관적으로 피드백을 주세요.\n    - ex) Delete 기능을 구현할 때 ~한 방식으로 구현했다면 어땠을까요?\n\n```js\nconso\n```"
        // title: "### **[ 피드백 주고받기 ] (4분 내외)**"
        try {
            const dataList = await fetchData();
            console.log('data list :', dataList);
            dispatch(dataListAction.replaceData({
                data: Object.entries(dataList.data).map(v => {
                    return {id: v[0], title: v[1].title, text: v[1].text};
                }) || []
            }))
        }catch(err) {
            console.log(err);
        }
    }
};