
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surNameOutput').innerText = initPerson.surName;
    document.getElementById('patrNameOutput').innerText = initPerson.patrName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('profOutput').innerText = initPerson.prof;
    document.getElementById('birthYearOutput').innerText = initPerson.birthday;
};