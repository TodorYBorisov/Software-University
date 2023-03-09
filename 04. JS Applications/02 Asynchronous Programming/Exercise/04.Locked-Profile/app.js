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

            let button = document.createElement('button');
            button.textContent = 'Show more';

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
            </div>`;

            div.appendChild(button);
            main.appendChild(div);
            document.getElementById(`user${profile._id}HiddenFields`).style.display = 'none';

            button.addEventListener('click', reveal);

            function reveal(event) {

                let button = event.target;
                let currProfile = button.parentNode;
                let checked = currProfile.querySelector('input[type="radio"]:checked');

                let moreInfo = document.getElementById(`user${profile._id}HiddenFields`);

                if (checked.value === 'unlock') {
                    
                    if (button.textContent === 'Show more') {
                        moreInfo.style.display = 'block';
                        button.textContent = 'Hide it';
                    } else {
                        moreInfo.style.display = 'none';
                        button.textContent = 'Show more';
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}