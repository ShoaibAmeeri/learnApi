export const fetchs = async() =>{

    let res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) {
    throw new Error("Invalid response from server")

    
    let data = await res.json()
    console.log(data);
    return data

}
}

// console.log('loading ' + apiEndpoint);

//     let res = await fetch('https://fakestoreapi.com/' + apiEndpoint)
//     if(!res.ok)
//     throw new Error(res.statusText)

//     let data = await res.json()
//     console.log(data)

//     return data