
const buildleaders = () => {
    const headers = {
    'content-type' : 'aplication/json'
    }
    return headers;
}
const buildOptions = (payload, method) => {
    return{
        method,
        headers: buildHeaders(),
        body:JSON.stringify(payload)
    }
}

const buildPath = (endPoint) => {
    if(process.env.REACT_APP_API_ENDPOINT){
        throw('ERROR')
    }
    return `${process.env.REACT_APP_API_ENDPOINT}/${endPoint}`
}
const request = async(endPoint, payload, method) =>{
    const path = buildPath(endPoint);
    const options = buildOptions(payload, method);
    const response = await fetch(path, options);
    if(response.ok){
        const data = await response.json();
        return data;
    }
}

export const post = async(endPoint, payload) => await request(endPoint, payload, "POST");
export const get = async(endPoint, payload) => await request(endPoint, payload, "GET");
