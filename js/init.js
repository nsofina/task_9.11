window.onload = createPerson();

const creater = document.getElementById('creater');
const deleter = document.getElementById('deleter');

function createPerson() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surNameOutput').innerText = initPerson.surName;
    document.getElementById('patrNameOutput').innerText = initPerson.patrName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('profOutput').innerText = initPerson.prof;
    document.getElementById('birthYearOutput').innerText = initPerson.birthday;
};

function deletePerson() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surNameOutput').innerText = '';
    document.getElementById('patrNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('profOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
}

creater.addEventListener('click', createPerson);
deleter.addEventListener('click', deletePerson);

