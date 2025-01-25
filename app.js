// Produtos divididos por categorias
const products = [

    //Alimentos e bebidas
    {
        id: 1,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "alimentos",
    },
    {
        id: 2,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  // Adicione o link da imagem do produto
        category: "alimentos",
    },
    {
        id: 3,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "alimentos",
    },
    {
        id: 4,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "alimentos",
    },
   
    //Congelados e refrigerados
    {
        id: 5,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "congelados",
    },
    {
        id: 6,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "congelados",
    },
    {
        id: 7,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "congelados",
    },
    {
        id: 8,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "congelados",
    },

    //Suplementos
    {
        id: 9,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "suplementos",
    },
    {
        id: 10,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "suplementos",
    },
    {
        id: 11,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "suplementos",
    },
    {
        id: 12,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "suplementos",
    },

    //Beleza
    {
        id: 13,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "beleza",
    },
    {
        id: 14,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "beleza",
    },
    {
        id: 15,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "beleza",
    },
    {
        id: 16,
        name: "Achocolatado em Pó Zerou Qualicoco 200g",
        price: 15.90,
        description: [
            "INGREDIENTES:Enbsp; Cacau alcalino em pó, edulcorante natural de mandioca, farinha de arroz, aroma identico ao natural, edulcorante natural glicosideos de estevol vitaminas (A, B1, B2, B3, B6,B9,B12,C,D,E,B5 e B7), minerai(crmo, cobre, manganês, molibdênio, ferro, selênio,zinco e iodo)",
            "NÃO CONTEM GLUTEN",
        ],
        image: "/img/alimentos/achocolatado-em-po.webp",  
        category: "beleza",
    },
];

// Função para renderizar os produtos nas categorias
function renderCategoryProducts(category, containerId) {
    const container = document.getElementById(containerId);
    const filteredProducts = products.filter((product) => product.category === category);

    filteredProducts.forEach((product) => {
        container.innerHTML += `
            <div class="col-md-3 mb-3 product-item">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">  <!-- Exibindo a imagem -->
                    <div class="card-body">
                        <h2 class="card-title">${product.name}</h5>
                        <p class="card-text">R$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary btn-sm " onclick="showDetails(${product.id})">Ver Mais</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function showDetails(productId) {
    const product = products.find((item) => item.id === productId);
    if (product) {
        // Preenche os detalhes do produto no modal
        document.getElementById('productName').textContent = `Nome: ${product.name}`;
        document.getElementById('productPrice').textContent = `Preço: R$ ${product.price.toFixed(2)}`;
        document.getElementById('productDescricao').innerHTML = `Descrição: <br>${product.description.join('<br>')}`;


        // Exibe o modal (usando Bootstrap 5)
        const productDetailsModal = new bootstrap.Modal(document.getElementById('productDetailsModal'));
        productDetailsModal.show();
    } else {
        console.error("Produto não encontrado!");
    }
}

// Função para buscar produtos em tempo real
function searchProducts() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    // Filtra os produtos com base no nome ou descrição
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery) || 
               product.description.toLowerCase().includes(searchQuery);
    });

    // Renderiza os produtos filtrados nas categorias correspondentes
    renderFilteredProducts("alimentos", filteredProducts);
    renderFilteredProducts("bebidas", filteredProducts);
    renderFilteredProducts("cosmeticos", filteredProducts);
    renderFilteredProducts("snacks", filteredProducts);
}

// Função para renderizar os produtos filtrados na categoria
function renderFilteredProducts(category, filteredProducts) {
    const container = document.getElementById(`category-${category}`);
    container.innerHTML = ""; // Limpa o container

    // Filtra os produtos por categoria e renderiza apenas os que correspondem à pesquisa
    const categoryProducts = filteredProducts.filter(product => product.category === category);

    categoryProducts.forEach((product) => {
        container.innerHTML += `
            <div class="col-md-4 mb-3 product-item">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">R$ ${product.price.toFixed(2)}</p>
                        <p class="card-text">${product.description}</p>
                        <button class="btn btn-primary btn-sm" onclick="showDetails(${product.id})">Ver Mais</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Função para ordenar os produtos
function sortProducts() {
    const sortOption = document.getElementById("sort-select").value;

    // Ordena os produtos com base no preço
    const sortedProducts = [...products];
    if (sortOption === "price_asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price_desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    // Renderiza os produtos ordenados nas categorias correspondentes
    renderSortedCategoryProducts("alimentos", sortedProducts);
    renderSortedCategoryProducts("congelados", sortedProducts);
    renderSortedCategoryProducts("suplementos", sortedProducts);
    renderSortedCategoryProducts("beleza", sortedProducts);
}

// Função para renderizar produtos ordenados nas categorias
function renderSortedCategoryProducts(category, sortedProducts) {
    const container = document.getElementById(`category-${category}`);
    container.innerHTML = ""; // Limpa o container

    // Filtra os produtos pela categoria
    const categoryProducts = sortedProducts.filter(product => product.category === category);

    categoryProducts.forEach((product) => {
        container.innerHTML += `
            <div class="col-md-4 mb-3 product-item">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">R$ ${product.price.toFixed(2)}</p>
                        <p class="card-text">${product.description}</p>
                        <button class="btn btn-primary btn-sm" onclick="showDetails(${product.id})">Ver Mais</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Chama a função de renderização das categorias no carregamento da página
document.addEventListener("DOMContentLoaded", function() {
    renderCategoryProducts("alimentos", "category-alimentos-e-bebidas");
    renderCategoryProducts("congelados", "category-congelados-e-refrigerados");
    renderCategoryProducts("suplementos", "category-suplementos");
    renderCategoryProducts("beleza", "category-beleza-e-limpeza");
});


document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão
        const targetId = this.getAttribute('href').substring(1); // Pega o ID da seção
        const targetSection = document.getElementById(targetId);

        // Scroll ajustado (com compensação de 100px, por exemplo)
        window.scrollTo({
            top: targetSection.offsetTop - 200, // Ajuste a distância conforme necessário
            behavior: 'smooth'
        });
    });
});