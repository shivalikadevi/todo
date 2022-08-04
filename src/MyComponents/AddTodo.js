
 import React , { useState } from 'react';
export const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState ("");

    const submit = (e) => {
        e.preventDefault();
        if(!title||!desc){
            alert("Title or descriptiom cannot be blank")
        }
        else{
     props.addTodo(title,desc) ;
       setTitle("");
       setDesc("");    
    }}
  return (
    <div className="container my-3">
        <h3>Add A Todo</h3>
        <form onSubmit={submit}>
  <div class="mb-3">
    <label   for="title">Todo title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" id="title" aria-describedby="emailHelp" placeholder="Add todo"/>
    
  </div>
  <div class="mb-3">
    <label for="desc"class="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} class="form-control" id="desc" />
  </div>
  
  <button type="submit" class="btn btn-success btn-sm ">Submit</button>
</form>
    </div>
  )
}
