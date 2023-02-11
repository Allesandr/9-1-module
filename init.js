window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById("surnameOutput").innerText = "Генератор фамилии";
    document.getElementById("firstNameOutput").innerText = "Генератор имени";
    document.getElementById("patronymicOutput").innerText = "Генератор фамилии";
    document.getElementById("genderOutput").innerText = "Генератор пола";
    document.getElementById("birthYearOutput").innerText = 'Генератор года рождения';
    document.getElementById("occupationOutput").innerText = 'Генератор професии';
};