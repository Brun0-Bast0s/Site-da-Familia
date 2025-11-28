const familiares = [
    "Douglas Paz Bastos",
    "Tatiana da Silva",
    "Bruno da Silva Bastos",
    "Arthur da Silva Bastos"
];

// ==================== OBJETO representando 1 membro =====================
const meuPai = {
    nome: "Douglas Paz Bastos",
    idade: 39,
    qualidade: "Exemplo de força e dedicação"
};

// ==================== EVENTO DO BOTÃO ====================
document.getElementById("mensagemEspecial").addEventListener("click", function () {

    // ---------- IF / ELSE ----------
    const mostrar = confirm("Quer ver uma mensagem especial da família?");

    if (mostrar) {
        alert("A família Bastos sempre segue unida com amor, força e respeito!");
    } else {
        alert("Tudo bem, talvez da próxima vez ❤️");
    }
});

// ==================== Mostrar lista dos familiares com FOR ====================

// Cria um elemento novo no HTML
const listaDiv = document.createElement("div");
listaDiv.className = "caixa";
listaDiv.innerHTML = "<h2>Lista automática de familiares (via JavaScript)</h2>";

// Cria uma UL
const ul = document.createElement("ul");

// Usa FOR para percorrer o Array
for (let i = 0; i < familiares.length; i++) {
    const li = document.createElement("li");
    li.innerText = familiares[i];
    ul.appendChild(li);
}

// Adiciona a lista ao HTML
listaDiv.appendChild(ul);
document.body.appendChild(listaDiv);


console.log("Informações do meu pai:", meuPai);
