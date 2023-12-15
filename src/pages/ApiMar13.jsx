import React, { useEffect, useState } from 'react'

const Header = ()=>{
   
    return(
    <>
        <h1>List of users</h1>
        <hr/>
        <br />  
    </>
    )
} 

const Loader = (props)=>{
    let {fetchUsers, loading} = props
    return(
        <>
         <button onClick={fetchUsers} disabled={loading} className="btn btn-primary">
            {!loading ? 'Fetch Users' : 'Loading..'}
            </button>
        </>
    )
}


const Footer = ()=>{
    return(
        <>
        <br />
        <hr />
        <h2>Footer Links</h2>
        </>
    )
}
function Content() {
    let [users, setUsers] = useState([])
    let [err, setErr] = useState(null)
    let [loading, setLoading] = useState(false)

    useEffect(()=>{fetchUsers()},[])

    const fetchUsers = async () => {
        setLoading(true)
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users")
            if (res.ok) {
                const data = await res.json()
                setUsers(data)
            }

            else {
                throw new Error("Invalid response from server")
            }
        }
        catch (error) {

            setErr(error.message)
        }
        finally {
            setLoading(false)
        }
    }



    if (loading) {
        return (
            <>
                <Loader fetchUsers={fetchUsers} loading={loading}/>
                <h1>loading...</h1>
                

            </>
        )
    }
    if (err) {
        return (
            <>
              <Loader fetchUsers={fetchUsers} loading={loading}/>
                <h3>{err}</h3>

            </>
        )

    }

    else
        return (
            <div className='container p-2'>
                <Loader fetchUsers={fetchUsers} loading={loading}/>
                {err ? <h3> {err} </h3> : (
                    users.map(user => <h6 key={user.id}>{user.name}</h6>)
                )}

            </div>
        )
}


const wraper = ()=>{
    return(
        <>
        <Header/>
            <Content/>
       
        <Footer/>

        </>
    )
}
export default wraper