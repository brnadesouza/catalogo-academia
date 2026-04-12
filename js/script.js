const productsData = [
        { id: 1, name: "Legging Iron Force V2", price: 189.90, category: "LEGGINGS", gender: "FEMININO", imgs: ["https://images.unsplash.com/photo-1506629082925-47f2492827c9?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500&auto=format&fit=crop"], badge: "NEW", description: "Compressão de alto impacto com tecnologia Dry-Fit avançada. Design anatômico que valoriza o corpo." },
        { id: 2, name: "Top Infinity Cross", price: 89.90, category: "TOPS", gender: "FEMININO", imgs: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500&auto=format&fit=crop"], badge: "TREND", description: "Suporte máximo para treinos intensos. Costas em X para total liberdade de movimento." },
        { id: 3, name: "Camiseta Aero Performance", price: 124.90, category: "CAMISAS", gender: "MASCULINO", imgs: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop"], badge: null, description: "Tecido ultra leve com micro-perfurações para máxima respirabilidade durante o treino." },
        { id: 4, name: "Tênis Pulse Runner", price: 459.90, category: "CALÇADOS", gender: "MASCULINO", imgs: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500&auto=format&fit=crop"], badge: "DESTAQUE", description: "Amortecimento responsivo de última geração. Perfeito para corridas de longa distância e HIIT." },
        { id: 7, name: "Bermuda Tech Knit", price: 99.90, category: "BERMUDAS", gender: "MASCULINO", imgs: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1515464000451-9293111f9715?q=80&w=500&auto=format&fit=crop"], badge: "NEW", description: "Bermuda leve com tecnologia de absorção de suor para treinos intensos na academia." },
        { id: 6, name: "Macacão Fit One", price: 219.90, category: "MACACÕES", gender: "FEMININO", imgs: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&auto=format&fit=crop"], badge: "NEW", description: "Macacão peça única de alta performance. Ajuste perfeito e conforto absoluto." }
    ];

    const menuStructure = {
        'MASCULINO': ['TODOS', 'ACESSÓRIOS', 'BERMUDAS', 'BLUSAS', 'BONÉS', 'CALÇADOS', 'CAMISAS', 'REGATAS', 'SHORTS'],
        'FEMININO': ['TODOS', 'ACESSÓRIOS', 'BERMUDAS', 'BLUSAS', 'BONÉS', 'CALÇADOS', 'CAMISAS', 'CROPPED', 'MACACÕES', 'REGATAS', 'SHORTS', 'TOPS'],
        'PLUS SIZE': ['TODOS', 'BERMUDA', 'LEGGING', 'TOP']
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
                        <p class="small text-light-emphasis">${prod.description}</p>
                    </div>
                    <div class="mb-4">
                        <label class="small text-secondary fw-bold text-uppercase d-block mb-2">Tamanho</label>
                        <div class="d-flex flex-wrap gap-2">
                            ${['P', 'M', 'G', 'GG'].map(s => `<button class="btn size-btn" onclick="selectSize(this, '${s}')">${s}</button>`).join('')}
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
        window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(msg)}`, '_blank');
    }

    // Initialize
    renderProducts(productsData);
