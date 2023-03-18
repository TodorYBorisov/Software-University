const detailsSection = document.getElementById('details');

//вадим референции към всеки параграф
const content = {
    id: detailsSection.querySelector('#part-id'),
    label: detailsSection.querySelector('#part-label'),
    price: detailsSection.querySelector('#part-price'),
    qty: detailsSection.querySelector('#part-qty'),
};

export async function showDetails(id) {
    document.querySelector('main').replaceChildren(detailsSection);

    //само при включен тротлинг от админ панела
    content.id.textContent = 'Loading...';
    content.label.textContent = 'Loading...';
    content.price.textContent = 'Loading...';
    content.qty.textContent = 'Loading...';

    try {
        //сетваме токена от локал сториджа
        const token = localStorage.getItem('accessToken');
        //сетваме оппъните за правене на ауторизирана заявка
        const options = {
            method: 'get',
            headers: {},

        };
        //ако имаме токен
        if (token != null) {
            options.headers['X-Authorization'] = token;
        }

        const response = await fetch(`http://localhost:3030/data/autoparts/${id}`, options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();

        //това го сетваме от обекта горе
        content.id.textContent = data._id;
        content.label.textContent = data.label;
        content.price.textContent = data.price;
        content.qty.textContent = data.qty;


    } catch (error) {
        alert(error.message);
    }
}