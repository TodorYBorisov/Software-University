async function lockedProfile() {
    let main = document.getElementById('main');

    try {
        let url = 'http://localhost:3030/jsonstore/advanced/profiles';
        let response = await fetch(url);
        if (response.status !== 200) {
            throw new Error('Error');
        }
        let data = await response.json();
        let arrValues = Object.values(data);

        main.innerHTML = '';

        for (let profile of arrValues) {

            let div = document.createElement('div');
            div.classList.add('profile');

            // let button = document.createElement('button');
            // button.textContent = 'Show more';

            div.innerHTML = `<img src='./iconProfile2.png' class='userIcon'>
            <label>Lock</label>
            <input type='radio' name='user${profile._id}Locked' value='lock' checked=''>
            <label>Unlock</label>
            <input type='radio' name='user${profile._id}Locked' value='unlock'><br>
            <hr>
            <label>Username</label>
            <input type='text' name='user${profile._id}Username' value=${profile.username} disabled='' readonly=''>
            <div id='user${profile._id}HiddenFields'>
            <hr>
            <label>Email:</label>
            <input type='email' name='user${profile._id}Email' value=${profile.email} disabled='' readonly=''>
            <label>Age:</label>
            <input type='text' name='user${profile._id}Age' value=${profile.age} disabled='' readonly=''>
            </div>
            <button>Show more</button>`;

            main.appendChild(div);
            document.getElementById(`user${profile._id}HiddenFields`).style.display = 'none';

        };
        
        const btns = [...document.getElementsByTagName('button')];
        btns.forEach(btn => btn.addEventListener('click', reveal));

        function reveal(event) {

            const buttonClick = event.target;
            const profile = buttonClick.parentNode;
            const moreInformation = profile.getElementsByTagName('div')[0];
            const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

            if (lockStatus === 'unlock') {
                if (buttonClick.textContent === 'Show more') {
                    moreInformation.style.display = 'block';
                    buttonClick.textContent = 'Hide it';
                } else if (buttonClick.textContent === 'Hide it') {
                    moreInformation.style.display = 'none';
                    buttonClick.textContent = 'Show more';
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}