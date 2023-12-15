import React, { useState } from 'react'

const  ApiMar12 =()=> {
    let [users, setUsers] = useState([])
    let [err, setErr] = useState(null)
    let [loading, setLoading] = useState(false)
    const fetchUsers = async()=>{
        setLoading(true)
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(res.ok){
                const data = await res.json();
                setUsers(data)
            }
            else
            {
                setErr("check your connnection or array is empty")
            }
        } 
        catch(error){
            console.log('Error', err)
            setErr(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    // if (users == []) 
    //     return(
    //         <h2>Loading</h2>
    //     )
    
        // if (loading) {
        //     return <h2>loading...</h2>
        // }
        // else
        return (
        <div className='container p-2'>
            <h1>List of users</h1>
            <button onClick={fetchUsers} className="btn btn-primary">{!loading ? 'Fetch Users' : 'Loading..'}  </button>
            
            {err ? <h3> {err} </h3> : ( 
                users.map(user=><h6>{user.name}</h6> )
            )}

        </div>
            )
    }

export default ApiMar12