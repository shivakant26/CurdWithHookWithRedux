import { Updatedata } from "../Action/action"

const initialState = {
    
    data:[
        {
          title:"html" , discription:"tutorial"
        }
    ]
}


const reducer = (state=initialState,action) =>{
console.log("action",action)
    switch(action.type){
        case 'ADD':
            const list = state.data;
            let userid = action.id;
            if(userid){
                list.splice(userid-1,1,action.payload)
            }else{
                list.push(action.payload)
            }
            return{
                ...state,
                id: state.id+1,
                data: [...list]//[...state.data, action.payload] //state.data.push(action.payload)
            }
        break;
        case 'DELETE':
            const data1 = state.data;
            data1.splice(action.payload,1)
            return{
                ...state,
                data:[...data1]
            }
        break;
        case 'EDIT':
            return{
                ...state,
                isEdit:state.data[action.payload],
                id:action.payload
            }
        break;
        
        default:
            return state;
    }
    
}


export  default reducer;