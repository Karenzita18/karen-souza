// Produtos divididos por categorias
const products = [
    {
        id: 1,
        name: "Rosquinha Integral de chocolate",
        price: 5.67,
        description: [
            "A Rosquinha Sem Açúcar Morango Show Da Luna Nutripleno é a mais nova linha de biscoitos sem glúten e sem adição de açúcares, que atende as necessidades de restrição alimentar dos intolerantes ao glúten, além de não possuir leite e nem ovos em sua formulação.",
            "É uma deliciosa opção de snack para comer a qualquer hora do dia, seja: assistindo um filme ou suas séries, na escola ou no trabalho, em uma viagem e onde mais a sua imaginação levar.",
            "Ingredientes: Farinha de arroz integral, edulcorantes maltitol e glicosídeos esteviol, fécula de mandioca, gordura de palma cacau alcalino, flocos de arroz, ameixa desidratada, mandioca desidratada, polidextrose, fibra de celulose, poliextrose, fibra de celulose, aroma idêntico ao natural de cacau com baunilha, fermentos químicos bicarbonato de amônio e bicarbonato de sódio, emulsificantes lecitina de girassol, goma xantana e vitamina E"
        ],
        image: "/img/alimentos/rosquinha.png",
        category: "alimentos",
    },
    {
        id: 2,
        name: "Iogurte de Morango 170g",
        price: 6.99,
        description: [
            "YourGut é uma bebida rica em inulina e, portanto, rica em fibras. Tem sabor de iogurte, cara de iogurte, textura de iogurte e função de iogurte.",
            "Ingredientes: Água, coco in natura, morango in natura, amido modificado, inulina, ácido lático, beterraba em pó, sal, aroma natural de morango, ciclamato de sódio (INS 952), sacarina sódico (INS 954), sucralose (INS 955), goma guar e goma gelana.",
            "Alérgicos: Pode conter amêndoas, castanha de caju e avelã."
        ],
        image: "/img/alimentos/yogut_morango_zero.png",
        category: "alimentos",
    },
    {
        id: 3,
        name: "Snacks Sabor Natural 50g",
        price: 7.88,
        description: [
            "Snacks sabor Natural tem farinha de arroz integral, proteína de arroz, proteína de ervilha, farinha de feijão branco e sementes de linhaça.",
            "ingredientes: amido, gordura vegetal, farinha de arroz integral, sal rosa do Himalaia, linhaça marrom, farinha de feijão branco, proteína de arroz, proteína de ervilha, emulsificante lecitina de girassol, espessante goma xantana e regulador de acidez ácido cítrico.",
            "Não contém glúten.",
            "ALÉRGICOS: PODE CONTER AMENDOIM, AMÊNDOA, AVELÃS, CASTANHA-DE-CAJU, CASTANHA-DO-BRASIL OU CASTANHA-DO-PARÁ, MACADÂMIAS, NOZES, PECÃS E SOJA"
        ],
        image: "/img/alimentos/snacknatural.png",
        category: "alimentos",
    },
    {
        id: 4,
        name: "Bebida Vegetal Notmilkinho",
        price: 4.67,
        description: [
            "Descubra o sabor irresistível do Leite Vegetal NotCo NotMilk sabor Chocolate 200ml. Feito com ingredientes 100% vegetais, esse leite com chocolate vegano é uma opção deliciosa e saudável para substituir o achocolatado convencional. Fonte de cálcio e vitaminas essenciais para o seu dia-a-dia. Em um tamanho conveniente e prático, é ideal para as lancheiras dos pequenos ou acompanhando o lanchinho entre refeições. É a escolha perfeita para pessoas com restrições alimentares: Sem lácteos, sem lactose, sem traços de leite, sem glúten, sem colesterol. Experimente agora e se surpreenda!",
        ],
        image: "/img/alimentos/notmilk.jpg",
        category: "alimentos",
    },


    {
        id: 5,
        name: "Hamburguer Mexicano Vegano 120g",
        price: 11.60,
        description: [
            "Alimentação saudável e saborosa, feita com carinho, amor e os melhores ingredientes extraídos da natureza, isso é Lyrios! Uma empresa familiar que produz alimentos veganos com muito amor e sabor.",
            "Os produtos são produzidos de forma artesanal, selecionando os melhores ingredientes e respeitando os animais e o meio ambiente. Suas refeições nunca mais será a mesma! Alimente-se bem com a Lyrios :)",
            "Peso Líq.: 120g contém 1 unidade - Hambúrguer Mexicano Vegano."
        ],
        image: "/img/congelados/hamburguerMexicano.jpeg",
        category: "congelados",
    },
    {
        id: 6,
        name: "Discos de Tempê de Feijão Fradinho com Arroz Preto 220g",
        price: 14.98,
        description: [
            "O Tempê é um alimento fermentado originário da Indonésia feito à base de qualquer leguminosa. Ao serem fermentados, os grãos se tornam mais digeríveis pelo corpo, ajudando na absorção de todos os nutrientes encontrados neste super alimento. Ele é um prebiótico rico em fibras, livre de colesterol, altamente proteico e naturalmente sem glúten. Um substituto da carne muito versátil na culinária.",
            "Pacote de 220g, com 2 discos de 110g cada.",
            "Ingredientes: Tempê (feijão fradinho com arroz negro), fermento rhizopus oligosporus e vinagre de álcool), água, shoyu macrobiótico pasteurizado, óleo de girassol, cebola em pó, alho em pó, páprica defumada e condimento natural sabor fumaça.",
            "Alérgicos: Pode conter soja."
        ],
        image: "/img/congelados/disco2.jpg",
        category: "congelados",
    },
    {
        id: 7,
        name: "Filé de Vegetais á Milanesa Sabor Frango 240g",
        price: 20.90,
        description: [
            "As Milanesas da N.OVO são feitas de vegetais e, se eu não te contasse, você não notaria a diferença. Bateu a curiosidade? Garanta seu pacote, afinal, quem experimenta vem de #N.OVO. Como toda a família N.OVO, nossa milanesa é amiga do planeta! Além disso, você já conhece e ama todos os seus ingredientes principais: ervilha, mandioca e milho."
        ],
        image: "/img/congelados/file-vegetais.jpg",
        category: "congelados",
    },
    {
        id: 8,
        name: "Tempê de Soja Orgânica 275g",
        price: 22.90,
        description: [
            "O Tempê é um alimento fermentado originário da Indonésia feito à base de qualquer leguminosa. Ao serem fermentados, os grãos se tornam mais digeríveis pelo corpo, ajudando na absorção de todos os nutrientes encontrados neste super alimento. Ele é um prebiótico rico em fibras, livre de colesterol, altamente proteico e naturalmente sem glúten. Um substituto da carne muito versátil na culinária.",
            "Ingredientes: Soja orgânica, fermento Rhizopus Oligosporus e vinagre orgânico de álcool.",
            "Alérgicos: Contém soja."
        ],
        image: "/img/congelados/tempedesoja1.jpg",
        category: "congelados",
    },
];

// Função para renderizar os produtos nas categorias
function renderCategoryProducts() {
    const alimentosContainer = document.getElementById('category-alimentos-e-bebidas');
    const congeladosContainer = document.getElementById('category-congelados-e-refrigerados');

    alimentosContainer.innerHTML = "";
    congeladosContainer.innerHTML = "";

    const alimentos = products.filter(product => product.category === "alimentos");
    const congelados = products.filter(product => product.category === "congelados");

    alimentos.forEach((product) => {
        alimentosContainer.innerHTML += `
            <div class="col-md-3 mb-3 product-item">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top mt-2" alt="${product.name}">
                    <div class="card-body">
                        <h2 class="card-title">${product.name}</h2>
                        <p class="card-text">R$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary btn-xs" style="background-color: #1f3b2ce6; color: white; border: none; padding: 5px 10px; font-size: 16px; cursor: pointer; border-radius: 4px;" onclick="showDetails(${product.id})">Ver Mais</button>
                    </div>
                </div>
            </div>
        `;
    });

    congelados.forEach((product) => {
        congeladosContainer.innerHTML += `
            <div class="col-md-3 mb-3 product-item">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h2 class="card-title">${product.name}</h2>
                        <p class="card-text">R$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary btn-xs" style="background-color: #1f3b2ce6; color: white; border: none; padding: 5px 10px; font-size: 16px; cursor: pointer; border-radius: 4px;" onclick="showDetails(${product.id})">Ver Mais</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Função para exibir detalhes do produto
function showDetails(productId) {
    const product = products.find((item) => item.id === productId);
    if (product) {
        document.getElementById('productName').textContent = `Nome: ${product.name}`;
        document.getElementById('productPrice').textContent = `Preço: R$ ${product.price.toFixed(2)}`;
        document.getElementById('productDescricao').innerHTML = `Descrição: <br>${product.description.join('<br>')}`;
        const productDetailsModal = new bootstrap.Modal(document.getElementById('productDetailsModal'));
        productDetailsModal.show();
    }
}

// Função para buscar produtos em tempo real
function searchProducts() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Filtra produtos com base na pesquisa
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));

    renderFilteredProducts(filteredProducts);
}

// Função para renderizar os produtos filtrados
function renderFilteredProducts(filteredProducts) {
    const alimentosContainer = document.getElementById('category-alimentos-e-bebidas');
    const congeladosContainer = document.getElementById('category-congelados-e-refrigerados');

    alimentosContainer.innerHTML = "";
    congeladosContainer.innerHTML = "";

    // Filtra por categoria e renderiza os produtos correspondentes
    const alimentos = filteredProducts.filter(product => product.category === "alimentos");
    const congelados = filteredProducts.filter(product => product.category === "congelados");

    alimentos.forEach((product) => {
        alimentosContainer.innerHTML += `
            <div class="col-md-3 mb-3 product-item">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h2 class="card-title">${product.name}</h2>
                        <p class="card-text">R$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary btn-xs" style="background-color: #1f3b2ce6; color: white; border: none; padding: 5px 10px; font-size: 16px; cursor: pointer; border-radius: 4px;" onclick="showDetails(${product.id})">Ver Mais</button>
                    </div>
                </div>
            </div>
        `;
    });

    congelados.forEach((product) => {
        congeladosContainer.innerHTML += `
            <div class="col-md-3 mb-3 product-item">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h2 class="card-title">${product.name}</h2>
                        <p class="card-text">R$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary btn-xs" style="background-color: #1f3b2ce6; color: white; border: none; padding: 5px 10px; font-size: 16px; cursor: pointer; border-radius: 4px;" onclick="showDetails(${product.id})">Ver Mais</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Função para ordenar os produtos
function sortProducts() {
    const sortValue = document.getElementById("sort-select").value;
    let sortedProducts = [...products];

    if (sortValue === "price_asc") {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price_desc") {
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }

    // Renderiza os produtos ordenados
    renderFilteredProducts(sortedProducts);
}

// Carrega os produtos nas seções quando a página é carregada
window.onload = () => {
    renderCategoryProducts();
};


// Detecta o scroll da página e fixa o cabeçalho
window.onscroll = function() {
    fixHeader();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function fixHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
}