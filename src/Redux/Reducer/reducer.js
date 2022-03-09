
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
            const list = state.data
            list.push(action.payload)
            return{
                ...state,
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
            const data2 = state.data;
            let current_object = data2[action.payload]
            let current_user = {
                title:current_object.title,
                discription:current_object.discription
            }
            return{
                ...state,
                data:[current_user]
            }
        break;
        default:
            return state;
    }
    
}


export  default reducer;