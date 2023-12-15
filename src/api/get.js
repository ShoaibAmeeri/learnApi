export const get = async(apiEndpoint)=>{
    console.log('loading ' + apiEndpoint);

    // let res = await fetch('https://jsonplaceholder.typicode.com/' + apiEndpoint)
    let res = await fetch('https://fakestoreapi.com/' + apiEndpoint)
    if(!res.ok)
    throw new Error(res.statusText)

    let data = await res.json()
    console.log(data)

    return data
}