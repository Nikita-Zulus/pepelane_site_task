import { getVehicles } from "../api/request";

const { SET_ERROR, LOAD_ITEMS, DETAILED_ITEM,} = require("./types");

function setError(payload){
    return {
        type:SET_ERROR,
        payload
    }
}
export function setDetailedItem(payload){
    return {
        type:DETAILED_ITEM,
        payload
    }
}


export function setItems() {
    return async (dispatch) => {
        try {
            let response = await getVehicles();
            dispatch({type:LOAD_ITEMS,payload:response});
            dispatch(setError(false));   
        }
        catch (e) {
            dispatch(setError(true));
        }
    };
}