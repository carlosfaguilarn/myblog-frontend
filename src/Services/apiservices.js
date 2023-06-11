const apiUrl = 'http://localhost:3001';

const Service = (endpoint, data, method = 'GET') =>{
    const url = `${ apiUrl }/${ endpoint }`
    if ( method === 'GET' ) {
        return fetch(url);
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify( data )
        });
    }
} 

export { Service }
