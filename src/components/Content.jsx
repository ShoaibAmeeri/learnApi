import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import Loader from '../components/Loader'
import { fetchs } from '../api/fetch'

export default function Content(){
 
    let [users, setUsers] = useState([])
    let [err, setErr] = useState(null)
    let [loading, setLoading] = useState(false)
    // let [total, setTotal] = useSt/ate(0)

    const fetchUsers = async ()=>{
        setLoading(true)
        try {
            let res = await fetch('https://fakestoreapi.com/products')
            if (!res.ok) {
                throw new Error("Invalid response from server")
            } else {
                
                const data = await res.json()
                setUsers(data);
            }
         fetchs()  
        } catch (error) {
            setErr(error.message)
        } finally{
            setLoading(false)
        }
        
    }

    useEffect(()=>{fetchUsers()},[])
    if (loading) {
        return(
            <>
                <Loader/>
                <h2>Loading...</h2>
            </>
       )
    } else if(err) {
        return(
        <>
        <Loader/>
        <h2>{err}</h2>
        </>
        )
    }else{
        return (
            
            <>
            
                    <h1 align='center'>Total Items : {users.length}</h1>
                    <br />
                <Loader fetchUsers={fetchUsers} loading={loading}/>
                <div className="container d-flex row">
                {users.map(user =>(
                <Card 
                key={user.id} title = {user.title}
                description={user.description} image={user.image} price = {user.price}
                />
                ))
                }
                </div>
            </>
        )
    }

    // {loading && <Loader/>}
    // {err && <h2>{err}</h2>}

    
   
  
}