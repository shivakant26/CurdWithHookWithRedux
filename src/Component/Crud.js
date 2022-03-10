import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {adddata, Deletedata, Editdata, Updatedata} from "../Redux/Action/action";

const Crud = () =>{
    // here define state
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    // here call data from redux using useSelector Hook
    // useSelecter work look like mapstateToProps
    const data = useSelector((state) => state.reducer.data )
    const test = useSelector((state) => state.reducer )
    console.log("data",data)
    var id = test.id;
    var record = test.isEdit;
    
    // Here make Dispatcher use dispatch Action
    // useDispatcher work look like mapDispatchtoProps
    const dispatch = useDispatch();
    const handletitle = (e) => setTitle(e.target.value);
    const handlediscription = (e) => setDiscription(e.target.value);



    const Save = (event) =>{
        var id = test.id;
        event.preventDefault();
        let obj = {title,discription}
        dispatch(adddata(obj,id+1))
        setTitle("")
        setDiscription("")
        document.getElementById("myform").reset();  
        
    }

    const Edit = (id) =>{
        dispatch(Editdata(id,data))
    }
    

    useEffect(()=>{
        var record = test.isEdit;
        console.log(54545,record)
        if(record){
            setTitle(record.title)
            setDiscription(record.discription)
        }
    },[record])

    const Delete = (id) =>{
        dispatch(Deletedata(id))
    }

    return(
        
        <div className="home-page">
            <h1><span className="red">C</span>rud + 
                <span className="green">R</span>edux + 
                <span className="blue">H</span>ook</h1>
            <div className="page-wr">
            <div className="clearfix">
                <div className="form-section">
                    <form id="myform">
                        <div className="form-heading">
                        <h2>Form Feed</h2>
                        </div>
                        <div className="form-field">
                            <input type="text" 
                            placeholder="Title"
                            value={title}
                            onChange={handletitle}
                            
                            />
                        
                        </div>
                        <div className="form-field">
                            <input type="text"
                            placeholder="Discription"
                            value={discription}
                            onChange={handlediscription}
                            required
                            />   
                        </div>
                        <div className="form-field">
                        <button className="submit" onClick={Save}>
                                {
                                    
                                    record ? 
                                    "Update"
                                    : 
                                    "Save"
                                }
                             </button>
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
                                            <td>{id+1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.discription}</td>
                                            <td>
                                                <button className="edit" onClick={()=>Edit(id)}><i className="fa fa-edit"></i></button>
                                                <button className="delete" onClick={()=>Delete(id)}><i className="fa fa-trash-o"></i></button>
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
    </div>
    )
}

export default Crud;