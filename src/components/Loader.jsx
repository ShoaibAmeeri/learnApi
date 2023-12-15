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
export default Loader