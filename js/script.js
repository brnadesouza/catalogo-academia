const productsData = [
        { id: 1,
  name: "Legging Cos Cruzado + Top Bicolor Azul Marinho/Off",
  price: 199.00,
  category: "LEGGING + TOP",
  gender: "FEMININO",
  imgs: [
    "assets/img/roupas/top+legging/top-sabrina+legging-cos-cruzado-bicolor-azul-marinho-off/foto-1.jpeg",
    "assets/img/roupas/top+legging/top-sabrina+legging-cos-cruzado-bicolor-azul-marinho-off/foto-2.jpeg",
  ],
  badge: "NEW",

  description: "Peça ideal para treinos, com alta compressão e zero transparência.",

  sizes: ["38 ao 42"],
  composition: "Tecido Jacquard Canelado Compressão Kapana - 76% Poliamida 24% Elastano",
  washing: "Lavar com sabão neutro, não deixar de molho, lavar separado.",
  care: "Secar à sombra. Não usar alvejante.",
  notes: "A cor pode variar conforme iluminação. Use lingerie neutra." },
        { id: 2,
  name: "Legging Cos Cruzado + Top Bicolor Preto/Off",
  price: 199.00,
  category: "LEGGING + TOP",
  gender: "FEMININO",
  imgs: [
    "assets/img/roupas/top+legging/legging-cos-cruzado+top-bicolor-preto-off/foto-1.jpeg",
    "assets/img/roupas/top+legging/legging-cos-cruzado+top-bicolor-preto-off/foto-2.jpeg",
  ],
  badge: "NEW",

  description: "Peça ideal para treinos, com alta compressão e zero transparência.",

  sizes: ["38 ao 42"],
  composition: "Tecido Jacquard Canelado Compressão Kapana - 76% Poliamida 24% Elastano",
  washing: "Lavar com sabão neutro, não deixar de molho, lavar separado.",
  care: "Secar à sombra. Não usar alvejante.",
  notes: "A cor pode variar conforme iluminação. Use lingerie neutra." },
        { id: 3,
  name: "Bermuda Básica Compressão + Top Bicolor Azul Marinho",
  price: 199.00,
  category: "BERMUDA + TOP",
  gender: "FEMININO",
  imgs: [
    "assets/img/roupas/bermuda+top/bermuda-basica-compressao+top-bicolor-azul-marinho/foto-1.jpeg",
    "assets/img/roupas/bermuda+top/bermuda-basica-compressao+top-bicolor-azul-marinho/foto-2.jpeg",
  ],
  badge: "NEW",

  description: "Peça ideal para treinos, com alta compressão e zero transparência.",

  sizes: ["38 ao 42"],
  composition: "Tecido Jacquard Canelado Compressão Kapana - 76% Poliamida 24% Elastano",
  washing: "Lavar com sabão neutro, não deixar de molho, lavar separado.",
  care: "Secar à sombra. Não usar alvejante.",
  notes: "A cor pode variar conforme iluminação. Use lingerie neutra." },
        { id: 4,
  name: "Macaquinho Compressão Rosinha",
  price: 199.00,
  category: "MACACÕES",
  gender: "FEMININO",
  imgs: [
    "assets/img/roupas/macacoes/macaquinho-compressao-rosinha/foto-1.jpeg"
  ],
  badge: "NEW",

  description: "Peça ideal para treinos, com alta compressão e zero transparência.",

  sizes: ["38 ao 42"],
  composition: "Tecido Canelado Compressão - 76% Poliamida 24% Elastano",
  washing: "Lavar com sabão neutro, não deixar de molho, lavar separado.",
  care: "Secar à sombra. Não usar alvejante.",
  notes: "A cor pode variar conforme iluminação. Use lingerie neutra." },
        { id: 7, name: "Bermuda Tech Knit", price: 99.90, category: "BERMUDAS", gender: "MASCULINO", imgs: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1515464000451-9293111f9715?q=80&w=500&auto=format&fit=crop"], badge: "NEW", description: "Bermuda leve com tecnologia de absorção de suor para treinos intensos na academia." },
        {
  id: 6,
  name: "Macacão Compressão Marjorie Preto",
  price: 199.00,
  category: "MACACÕES",
  gender: "FEMININO",
  imgs: [
    "assets/img/roupas/macacoes/macacao-compressao-marjorie-preto/foto-1.jpeg",
    "assets/img/roupas/macacoes/macacao-compressao-marjorie-preto/foto-2.jpeg",
    "assets/img/roupas/macacoes/macacao-compressao-marjorie-preto/foto-3.jpeg",
    "assets/img/roupas/macacoes/macacao-compressao-marjorie-preto/foto-4.jpeg"
  ],
  badge: "NEW",

  description: "Peça ideal para treinos, com alta compressão e zero transparência.",

  sizes: ["38 ao 42"],
  composition: "76% Poliamida, 24% Elastano",
  washing: "Lavar com sabão neutro, não deixar de molho, lavar separado.",
  care: "Secar à sombra. Não usar alvejante.",
  notes: "A cor pode variar conforme iluminação. Use lingerie neutra."
}
    ];

    const menuStructure = {
        'MASCULINO': ['TODOS', 'BERMUDAS', 'CAMISAS', 'SHORT'],
        'FEMININO': ['TODOS', 'LEGGING + TOP', 'CALÇA FLARE + TOP', 'CORSÁRIO + TOP', 'BERMUDA + TOP', 'SHORT + TOP', 'BLUSAS', 'CAMISAS', 'CROPPED', 'MACACÕES', 'REGATAS'],
        'PLUS SIZE': ['TODOS', 'BERMUDA + TOP', 'LEGGING + TOP']
    };

    let cart = [];
    let selectedSize = null;
    let currentMainCategory = 'TODOS';
    let currentSubCategory = 'TODOS';

    function renderProducts(products) {
        const grid = document.getElementById('product-grid');
        grid.innerHTML = '';
        products.forEach(prod => {
            grid.innerHTML += `
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="product-card">
                        <div class="product-img-wrapper" onclick="openProductDetail(${prod.id})">
                            <img src="${prod.imgs[0]}" class="main-img" alt="${prod.name}">
                            <img src="${prod.imgs[1] || prod.imgs[0]}" class="alt-img" alt="${prod.name}">
                            ${prod.badge ? `<span class="badge-new">${prod.badge}</span>` : ''}
                        </div>
                        <div class="p-3">
                            <h6 class="text-uppercase fw-bold text-white text-truncate mb-1" style="font-size: 0.85rem;">${prod.name}</h6>
                            <p class="text-primary-orange fw-black h6 mb-3">R$ ${prod.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
                            <button class="btn btn-premium w-100 d-flex align-items-center justify-content-center gap-2" onclick="openProductDetail(${prod.id})">
                                <span class="material-symbols-outlined fs-6">visibility</span> VER PRODUTO
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        if (products.length === 0) {
            grid.innerHTML = '<div class="col-12 text-center py-5 text-secondary">Nenhum produto encontrado nesta categoria.</div>';
        }
    }

    function handleCategoryClick(mainCat, subCat = 'TODOS') {
        currentMainCategory = mainCat;
        currentSubCategory = subCat;

        // Update main buttons
        document.querySelectorAll('#main-category-tags .filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.innerText === mainCat);
        });

        const subContainer = document.getElementById('sub-category-tags');
        if (mainCat === 'TODOS') {
            subContainer.classList.add('d-none');
            renderProducts(productsData);
        } else {
            subContainer.classList.remove('d-none');
            renderSubTags(mainCat);
            applyFilters();
        }

        // Close menu drawer if open
        const drawerElement = document.getElementById('menuDrawer');
        const drawer = bootstrap.Offcanvas.getInstance(drawerElement);
        if (drawer) drawer.hide();
    }

    function renderSubTags(mainCat) {
        const container = document.getElementById('sub-category-tags');
        const subs = menuStructure[mainCat];
        container.innerHTML = subs.map(sub => `
            <button class="sub-filter-btn ${currentSubCategory === sub ? 'active' : ''}" onclick="setSubCategory('${sub}')">
                ${sub === 'TODOS' ? (mainCat === 'FEMININO' ? 'Ver Todas' : 'Ver Todos') : sub}
            </button>
        `).join('');
    }

    function setSubCategory(sub) {
        currentSubCategory = sub;
        document.querySelectorAll('.sub-filter-btn').forEach(btn => {
            const label = btn.innerText.toUpperCase();
            const isTodos = label.includes('VER TOD');
            btn.classList.toggle('active', (isTodos && sub === 'TODOS') || label === sub);
        });
        applyFilters();
    }

    function applyFilters() {
        let filtered = productsData;
        
        if (currentMainCategory !== 'TODOS') {
            filtered = filtered.filter(p => p.gender === currentMainCategory);
        }
        
        if (currentSubCategory !== 'TODOS') {
            filtered = filtered.filter(p => p.category === currentSubCategory);
        }
        
        renderProducts(filtered);
    }

    function openProductDetail(id) {
        const prod = productsData.find(p => p.id === id);
        selectedSize = null;
        
        const content = document.getElementById('modal-body-content');
        content.innerHTML = `
            <div class="row g-4">
                <div class="col-md-6">
                    <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner rounded bg-dark">
                            ${prod.imgs.map((img, idx) => `
                                <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                                    <img src="${img}" class="d-block w-100" style="height: 400px; object-fit: cover;">
                                </div>
                            `).join('')}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span></button>
                        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next"><span class="carousel-control-next-icon"></span></button>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="fw-black text-primary-orange fst-italic text-uppercase mb-1" style="font-size: 1.2rem;">${prod.name}</h3>
                    <h4 class="fw-black text-white mb-4">R$ ${prod.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h4>
                    <div class="mb-4">
                        <label class="small text-secondary fw-bold text-uppercase d-block mb-2">Descrição</label>
                        <div class="small text-light-emphasis" style="white-space: pre-line;">
  ${prod.description}
</div>

<div class="mt-3 small text-light-emphasis">
  ${prod.sizes ? `<p><strong>Tamanhos:</strong> ${prod.sizes.join(', ')}</p>` : ''}
  ${prod.composition ? `<p><strong>Composição:</strong> ${prod.composition}</p>` : ''}
  ${prod.washing ? `<p><strong>Lavagem:</strong> ${prod.washing}</p>` : ''}
  ${prod.care ? `<p><strong>Cuidados:</strong> ${prod.care}</p>` : ''}
  ${prod.notes ? `<p><strong>Observações:</strong> ${prod.notes}</p>` : ''}
</div>
                    </div>
                    <div class="mb-4">
                        <label class="small text-secondary fw-bold text-uppercase d-block mb-2">Tamanho</label>
                        <div class="d-flex flex-wrap gap-2">
                            ${['ÚNICO'].map(s => `<button class="btn size-btn" onclick="selectSize(this, '${s}')">${s}</button>`).join('')}
                        </div>
                    </div>
                    <button class="btn btn-premium w-100 py-3 d-flex align-items-center justify-content-center gap-2" onclick="addToCart(${prod.id})">
                        <span class="material-symbols-outlined">add_shopping_cart</span> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        `;
        new bootstrap.Modal(document.getElementById('productModal')).show();
    }

    function selectSize(btn, size) {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = size;
    }

    function addToCart(id) {
        if(!selectedSize) return alert('Por favor, selecione um tamanho.');
        const prod = productsData.find(p => p.id === id);
        const existing = cart.find(i => i.productId === prod.id && i.size === selectedSize);
        if(existing) existing.qty++;
        else cart.push({ id: Date.now(), productId: prod.id, name: prod.name, price: prod.price, qty: 1, size: selectedSize, img: prod.imgs[0] });
        bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
        renderCart();
        new bootstrap.Offcanvas(document.getElementById('cartDrawer')).show();
    }

    function renderCart() {
        const container = document.getElementById('cart-items-list');
        const totalEl = document.getElementById('cart-total-price');
        const badge = document.getElementById('cart-badge-count');
        let total = 0, count = 0;
        container.innerHTML = cart.length === 0 ? '<div class="text-center py-5 text-secondary">Seu carrinho está vazio.</div>' : '';
        cart.forEach(item => {
            total += item.price * item.qty;
            count += item.qty;
            container.innerHTML += `
                <div class="cart-item mb-3 d-flex gap-3 align-items-center">
                    <div style="width: 60px; height: 70px;"><img src="${item.img}" class="rounded" style="width: 100%; height: 100%; object-fit: cover;"></div>
                    <div class="flex-grow-1">
                        <h6 class="small fw-black text-uppercase mb-0 text-truncate" style="max-width: 140px;">${item.name}</h6>
                        <p class="text-secondary mb-1" style="font-size: 10px;">Tam: ${item.size}</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <span class="text-primary-orange fw-bold">R$ ${item.price.toLocaleString('pt-BR', {minimumFractionDigits:2})}</span>
                            <div class="d-flex align-items-center gap-2 bg-dark rounded border border-secondary px-1">
                                <button class="btn btn-sm p-0 text-secondary" onclick="updateQty(${item.id}, -1)"><span class="material-symbols-outlined fs-6">remove</span></button>
                                <span class="small fw-bold px-1">${item.qty}</span>
                                <button class="btn btn-sm p-0 text-secondary" onclick="updateQty(${item.id}, 1)"><span class="material-symbols-outlined fs-6">add</span></button>
                            </div>
                        </div>
                    </div>
                    <button class="btn p-0 text-secondary" onclick="removeFromCart(${item.id})"><span class="material-symbols-outlined fs-5">delete</span></button>
                </div>`;
        });
        totalEl.innerText = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
        badge.innerText = count;
    }

    function updateQty(id, delta) {
        const item = cart.find(i => i.id === id);
        if(item) {
            item.qty += delta;
            if(item.qty <= 0) removeFromCart(id);
            else renderCart();
        }
    }

    function removeFromCart(id) {
        cart = cart.filter(i => i.id !== id);
        renderCart();
    }

    function finalizeWhatsApp() {
        if (cart.length === 0) return alert("Seu carrinho está vazio!");
        let msg = "Olá Grow Up! Gostaria de finalizar meu pedido:\n\n";
        let total = 0;
        cart.forEach(item => {
            msg += `• ${item.qty}x ${item.name} (${item.size}) - R$ ${(item.price * item.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
            total += item.price * item.qty;
        });
        msg += `\n*TOTAL: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}*`;
        window.open(`https://wa.me/554298518757?text=${encodeURIComponent(msg)}`, '_blank');
    }

    // Iniciar
    renderProducts(productsData);