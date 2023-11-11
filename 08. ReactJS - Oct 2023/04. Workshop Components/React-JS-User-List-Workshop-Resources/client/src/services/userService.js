const host = 'http://localhost:3030/jsonstore/users';

export async function getAllData() {
    try {
        const responce = await fetch(host);
        const result = await responce.json();
        const data = Object.values(result);

        return data;

    } catch (error) {
        console.log(error);

    }
}
