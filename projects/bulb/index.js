const E1 = document.getElementById('demo');

let header = "Templates Literals";
let tags = ['template literals','javascript','es6'];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;

E1.innerHTML = html;
