import { useState } from "react";
import { get } from "../api/get";
import { useEffect } from "react";

const Api = () => {
  let [todos, setTodos] = useState([]);
  let [error, setError] = useState([false]);
  let [loading, setLoading] = useState([true]);


  useEffect(() => {
    const fetchTodos = async () => {
      try{
        let data = await get("products");
        setTodos(data);
      }catch(error){
        setError(true)
      }finally{
        setLoading(false)
      }
    };
    fetchTodos();
  }, []);

  if (loading)
    return (
      <div className="spinner-border text-primary mt-3" role="status">
          <span className="visually-hidden">Loading...</span>
      </div>
    )
    else if(error === true)
    return (
      <h1 className="er text-danger">Something went wrong</h1>
    )
    else if(!todos.length)
    return(
      <div className="container">
        <h1>todos is emoty</h1>
      </div>  
    )
    else
  return (
    <>
      <h1>API : Example</h1>

      <div
        className="container-fluid d-flex gap-2 m-5"
        style={{ flexWrap: "wrap" }}
       
      >
        {todos.map((todo) => (
          <div
            className="card py-2"
            style={{ width: "22%"}}
            key={todo.id}
          >
            <img
              src={todo.image}
              className="card-img-top mx-auto"
              style={{ width: "50%", height: "45%" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{todo.title.slice(0,25)}</h5>
              <p
                className="card-text"
             
              >
                {todo.description.slice(0,50)}
              </p>
              <h5>Rs {todo.price} </h5>
              <a href="#" className="btn btn-primary" >
              Add to Card
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Api;
