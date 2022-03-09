 export const adddata = (data) =>{
    console.log("data",data)
    return {
        type:"ADD",
        payload:data
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