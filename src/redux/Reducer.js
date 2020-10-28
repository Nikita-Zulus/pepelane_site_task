import { DETAILED_ITEM, LOAD_ITEMS, SET_ERROR} from "./types"


const initialState = {
    error:true,
    items: [],
    detailedItem:{},
}

export const Reducer = (state=initialState,action) => { 
   switch (action.type) {
       case LOAD_ITEMS:
          return {
              ...state,
              items:action.payload
          }
          case SET_ERROR:
              return {
                  ...state,
                  error:action.payload
              }
        case DETAILED_ITEM:
        return {
            ...state,
            detailedItem:action.payload
        }
        default:
            return state
    }
    }