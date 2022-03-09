 export const adddata = (data,id) =>{
    console.log("data",data)
    return {
        type:"ADD",
        payload:data,
        id:id
    }
}

export const Deletedata = (id) =>{
    return {
        type:"DELETE",
        payload:id
    }
}

export const Editdata = (id) =>{
    return {
        type:"EDIT",
        payload:id
    }
}

export const Updatedata = (data,id) =>{
    return {
        type:"UPDATE",
        payload:data,
        id:id
    }
}