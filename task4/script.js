const Prmpt = document.querySelector('#Prmpt');
Prmpt.onclick = function() {
    let txt = prompt('Изменение текста ссылки');
    document.querySelector('#Prmpt').textContent = txt;
}
