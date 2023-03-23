const host = 'http://localhost:3030';

async function request(method, url, data) {

    const options = {

        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok == false) {
            if (response.status == 403) {
                localStorage.removeItem('user');
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }

}

//това декорира функциите за заявките
const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

//bind за първи параметър приема контекста, затова му подаваме, че е null

// за да тестваме функциятя я закачаме за window 
// window.api = {
//     request
// };

export {
    get,
    post,
    put,
    del as delete
};