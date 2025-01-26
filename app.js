// Produtos divididos por categorias
const products = [
    {
        id: 1,
        name: "Produto 1",
        price: 15.90,
        description: [
            "INGREDIENTES: Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma idêntico ao natural, edulcorante natural glicossídeos de estevóides vitaminas (A, B1, B2, B3, B6, B9, B12, C, D, E, B5 e B7), minerais (Cr, Mo, Cu, Mn, Fe, Se, Zn e I)",
            "NÃO CONTÉM GLÚTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",
        category: "alimentos",
    },
    {
        id: 2,
        name: "Produto 2",
        price: 25.90,
        description: [
            "INGREDIENTES: Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma idêntico ao natural, edulcorante natural glicossídeos de estevóides vitaminas (A, B1, B2, B3, B6, B9, B12, C, D, E, B5 e B7), minerais (Cr, Mo, Cu, Mn, Fe, Se, Zn e I)",
            "NÃO CONTÉM GLÚTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",
        category: "alimentos",
    },
    {
        id: 3,
        name: "Produto 3",
        price: 25.90,
        description: [
            "INGREDIENTES: Frango congelado, congelado em embalagem a vácuo.",
            "CONSUMIR EM ATÉ 3 MESES",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",
        category: "congelados",
    },
    {
        id: 4,
        name: "Produto 4",
        price: 15.90,
        description: [
            "INGREDIENTES: Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma idêntico ao natural, edulcorante natural glicossídeos de estevóides vitaminas (A, B1, B2, B3, B6, B9, B12, C, D, E, B5 e B7), minerais (Cr, Mo, Cu, Mn, Fe, Se, Zn e I)",
            "NÃO CONTÉM GLÚTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",
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
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h2 class="card-title">${product.name}</h2>
                        <p class="card-text">R$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary btn-sm" onclick="showDetails(${product.id})">Ver Mais</button>
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
                        <button class="btn btn-primary btn-sm" onclick="showDetails(${product.id})">Ver Mais</button>
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
                        <button class="btn btn-primary btn-sm" onclick="showDetails(${product.id})">Ver Mais</button>
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
                        <button class="btn btn-primary btn-sm" onclick="showDetails(${product.id})">Ver Mais</button>
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
