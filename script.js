const projetos = [
    {
        nome: "Projeto 1",
        descricao: "Meu primeiro projeto em HTML e CSS.",
        link: "#"
    },
    {
        nome: "Projeto 2",
        descricao: "Projeto usando JavaScript.",
        link: "#"
    },
    {
        nome: "Projeto 3",
        descricao: "Aplicação simples para treino.",
        link: "#"
    }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("projeto");

    div.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
    `;

    lista.appendChild(div);
});