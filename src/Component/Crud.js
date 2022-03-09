import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {adddata, Deletedata, Editdata} from "../Redux/Action/action";

const Crud = () =>{
    
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    
    const data = useSelector((state) => state.reducer.data )

    const dispatch = useDispatch();
    const handletitle = (e) => setTitle(e.target.value);
    const handlediscription = (e) => setDiscription(e.target.value);

   

    const Save = (event) =>{
        event.preventDefault();
        let obj = {title,discription}
        dispatch(adddata(obj))  
        document.getElementById("myform").reset();
    }

  
    const Edit = (id) =>{
        // console.log("editable id",data); 
        dispatch(Editdata(id,data))       
    }

    const Delete = (id) =>{
        // console.log("id",id);
        dispatch(Deletedata(id)) 
    }

    return(
        
        <div className="home-page">
            <h1>Crud Task</h1>
            <div className="clearfix">
                <div className="form-section">
                    <form id="myform">
                        <div className="form-heading">
                        <h2>Form Feed</h2>
                        </div>
                        <div className="form-field">
                            <input type="text" 
                            placeholder="Title"
                            // value={state.title}
                            // onChange={(e)=>setState({...state,title:e.target.value})}
                            value={title}
                            onChange={handletitle}
                            />   
                        </div>
                        <div className="form-field">
                            <input type="text"
                            placeholder="Discription"
                            // value={state.discription}
                            // onChange={(e)=>setState({...state,discription:e.target.value})}
                            value={discription}
                            onChange={handlediscription}
                            />   
                        </div>
                        <div className="form-field">
                            <button onClick={Save}>Save Data</button>
                        </div>
                    </form>
                </div>
                <div className="Table-area">
                    <div className="table-heading">
                        <h2>Table Data</h2>
                        {
                            data ? 
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Discription</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item,id)=>
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.discription}</td>
                                            <td>
                                                <button onClick={()=>Edit(id)}>Edit</button>
                                                <button onClick={()=>Delete(id)}>Trash</button>
                                            </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            
                            
                            : <p>Record Not Found</p>
                        }
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Crud