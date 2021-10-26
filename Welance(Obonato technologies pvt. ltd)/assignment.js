const dog1_result = document.getElementById('dog1_result');
const dog2_result = document.getElementById('dog2_result');
const dog3_result = document.getElementById('dog3_result');

document.addEventListener('DOMContentLoaded', getRandomDog)

function getRandomDog() {
    fetch('https://dog.ceo/api/breed/hound/images')
        .then(res => res.json())
        .then(data => {
            dog1_result.innerHTML = `<img src="${data.message[10]}" />`
            dog2_result.innerHTML = `<img src="${data.message[3]}" />`
            dog3_result.innerHTML = `<img src="${data.message[26]}" />`

        })

}