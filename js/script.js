const productsData = {
            'prod-kinetic': {
                name: 'KINETIC LEGGINGS',
                price: 189.90,
                category: 'Leggings',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsF7AKM5Ep5XizHkC12Ii3gza6_gGEuem7Thv22_JJdnAMOhEuuYnNISutpW6_CkfUSWcP-zpjuuI6SN3tbHzcFR6Ks-wCIQNbcLsHER8HqVTtejuiDyXJW2z0IRhZbe_cK5NiIVxY0a3uvxZw14u5AfIq4MxhTlwxbqsWexvP9fBdG72WKr45n9TVAK2lb4PsyLuPyFcJULE1ajb-vghPOgChzDlJ7vcZTIuGxJ-6Gn_AwJ20jD-VssriU4nSySLQR2YAy8PglUw',
                description: 'Desenvolvida com tecnologia de compressão avançada, a Kinetic Leggings oferece suporte muscular total e liberdade de movimento.',
                composition: '88% Poliamida, 12% Elastano. Proteção UV50+.',
                sizes: ['P', 'M', 'G', 'GG'],
                colors: [{ name: 'Preto', class: 'bg-dark' }, { name: 'Cinza', class: 'bg-secondary' }, { name: 'Laranja', class: 'bg-primary-orange' }],
                badge: 'NOVO'
            },
            'prod-chrome': {
                name: 'CHROME RUNNER V1',
                price: 459.00,
                category: 'Calçados',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0JXRf-_Cfuq_9I2QwNTDF_KMowLp8eJGYkhvVN71JA6uMZ6gceLCBKwrly_wrKHRKOGkl7pSmAgmyZrqxsdHd713eQxC1zky8PrP5fV2Up2Uf0NTYUXXbcrJ8XQyNmcE3tjM_s18hwb2iZ1hmlzJW91jnV31lJJ47i_cooNZ75F71HFKfE6KTeocje3aji1p_EaVmQqgT6dt0dZkBplX6CuMl2_vqXGcK6n6RkMbFlZm0Fd0kc83R4wtVtsGxnrIiMUJhFu02gIk',
                description: 'O Chrome Runner V1 combina amortecimento responsivo com um design futurista urbano.',
                composition: 'Mesh respirável, solado vulcanizado.',
                sizes: ['36', '37', '38', '39', '40', '41', '42'],
                colors: [{ name: 'Prata', class: 'bg-light' }, { name: 'Preto', class: 'bg-dark' }]
            },
            'prod-core': {
                name: 'CORE TANK TOP',
                price: 89.90,
                category: 'Tops',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxrUPAbHPPiRIRdYX9_qlgsGCKwfXH6AEf4AnJXaxnhYfzHJHFukV0sl0OC2MfFEZ_vIyhWmtWRtDqAJy1MHlrRQmEhY3bxXXF5pDr8NZmx84-UJDcXPOrsxoGudthTNUA-QNspaLZrpBrcvYtmCBJyC22QW6cqc1VPBmcz0s6P8X2-YcpjHcQXPY8yUrbPc7DlgUCYTaW6KVJMZqD_Tj-LDJrFX9oWiNeYD5jx66EdFi8AOblgmn_qDHodEhXdjWOXFb7dxstlbk',
                description: 'Regata essencial com corte ergonômico e tecnologia Dry-Fit.',
                composition: '100% Poliéster de alta performance.',
                sizes: ['P', 'M', 'G', 'GG'],
                colors: [{ name: 'Branco', class: 'bg-white' }, { name: 'Preto', class: 'bg-dark' }],
                badge: 'ESSENCIAL'
            },
            'prod-strike': {
                name: 'STRIKE SHORTS',
                price: 124.90,
                category: 'Leggings',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT-RRx3HHrAmadFVpl5K-vwG7fWtjMJ0aoqAnG0cixRHOj4CZKVWFgTDLQJew4_ZiI-E8UMSx0bkAwAy16cNwdyq5Df1j6V1hxGdkEKKWSPbSdrr5cfxYOQkZLDtjRyVgl_Gf1XFC9_-NfE0Xns2YC4VYFUOtdzGEGvYokMJLpE5bMLeSinpnqQeYYYCA_tKo4kdntX7Jl9NZOm64hkHGe-tG5KAjEPvGh99pfkK2-TBY4SIBPw25deqNgjSrEI4T6b8hHUqhXRQs',
                description: 'Shorts Strike com compressão interna e mobilidade superior.',
                composition: '90% Poliamida, 10% Elastano.',
                sizes: ['P', 'M', 'G', 'GG'],
                colors: [{ name: 'Chumbo', class: 'bg-secondary' }, { name: 'Preto', class: 'bg-dark' }]
            }
        };

        let cart = [
            { id: 1, name: 'KINETIC LEGGINGS', price: 189.90, qty: 1, size: 'M', color: 'Preto', img: productsData['prod-kinetic'].img },
            { id: 2, name: 'CHROME RUNNER V1', price: 459.00, qty: 1, size: '40', color: 'Prata', img: productsData['prod-chrome'].img }
        ];

        let selectedSize = null;
        let selectedColor = null;

        function renderProducts() {
            const grid = document.getElementById('product-grid');
            grid.innerHTML = '';
            for (let id in productsData) {
                const prod = productsData[id];
                grid.innerHTML += `
                    <div class="col-6 col-md-4 col-lg-3 product-card-container" data-category="${prod.category}">
                        <div class="product-card">
                            <div class="product-img-wrapper" onclick="openProductDetail('${id}')">
                                <img src="${prod.img}" alt="${prod.name}">
                                ${prod.badge ? `<span class="badge-new">${prod.badge}</span>` : ''}
                            </div>
                            <div class="p-3">
                                <h6 class="text-uppercase fw-bold text-white text-truncate mb-1" onclick="openProductDetail('${id}')" style="cursor:pointer">${prod.name}</h6>
                                <p class="text-primary-orange fw-black h5 mb-3">R$ ${prod.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
                                <button class="btn btn-premium w-100 d-flex align-items-center justify-content-center gap-2" onclick="openProductDetail('${id}')">
                                    <span class="material-symbols-outlined fs-6">visibility</span> Ver Produto
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        function filterCategory(cat, btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.querySelectorAll('.product-card-container').forEach(card => {
                if (cat === 'TODOS' || card.dataset.category === cat) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function filterFromMenu(cat) {
            const filters = document.getElementById('category-filters');
            const btns = filters.querySelectorAll('button');
            btns.forEach(b => {
                if(b.innerText === cat.toUpperCase()) filterCategory(cat, b);
            });
            bootstrap.Offcanvas.getInstance(document.getElementById('menuDrawer')).hide();
        }

        function openProductDetail(id) {
            const prod = productsData[id];
            selectedSize = null;
            selectedColor = null;
            
            const content = document.getElementById('modal-body-content');
            content.innerHTML = `
                <div class="row g-4">
                    <div class="col-md-6">
                        <img src="${prod.img}" class="img-fluid rounded w-100" style="height: 400px; object-fit: cover;">
                    </div>
                    <div class="col-md-6">
                        <h3 class="fw-black text-primary-orange fst-italic text-uppercase mb-1">${prod.name}</h3>
                        <h4 class="fw-black text-white mb-4">R$ ${prod.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</h4>
                        
                        <div class="mb-4">
                            <label class="small text-secondary fw-bold text-uppercase d-block mb-2">Descrição</label>
                            <p class="small text-light-emphasis">${prod.description}</p>
                        </div>

                        <div class="mb-4">
                            <label class="small text-secondary fw-bold text-uppercase d-block mb-2">Cores</label>
                            <div class="d-flex gap-2">
                                ${prod.colors.map(c => `
                                    <button class="btn border border-secondary rounded-circle ${c.class}" style="width: 30px; height: 30px" onclick="selectColor(this, '${c.name}')"></button>
                                `).join('')}
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="small text-secondary fw-bold text-uppercase d-block mb-2">Tamanho</label>
                            <div class="d-flex flex-wrap gap-2">
                                ${prod.sizes.map(s => `
                                    <button class="btn size-btn" onclick="selectSize(this, '${s}')">${s}</button>
                                `).join('')}
                            </div>
                        </div>

                        <button class="btn btn-premium w-100 py-3 d-flex align-items-center justify-content-center gap-2" onclick="addToCart('${id}')">
                            <span class="material-symbols-outlined">add_shopping_cart</span> Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            `;
            
            const modal = new bootstrap.Modal(document.getElementById('productModal'));
            modal.show();
        }

        function selectSize(btn, size) {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = size;
        }

        function selectColor(btn, color) {
            document.querySelectorAll('.rounded-circle').forEach(b => b.style.outline = 'none');
            btn.style.outline = '2px solid white';
            btn.style.outlineOffset = '2px';
            selectedColor = color;
        }

        function addToCart(id) {
            if(!selectedSize || !selectedColor) {
                alert('Selecione cor e tamanho');
                return;
            }
            const prod = productsData[id];
            const existing = cart.find(i => i.name === prod.name && i.size === selectedSize && i.color === selectedColor);
            
            if(existing) {
                existing.qty++;
            } else {
                cart.push({
                    id: Date.now(),
                    name: prod.name,
                    price: prod.price,
                    qty: 1,
                    size: selectedSize,
                    color: selectedColor,
                    img: prod.img
                });
            }
            
            bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
            renderCart();
            new bootstrap.Offcanvas(document.getElementById('cartDrawer')).show();
        }

        function renderCart() {
            const container = document.getElementById('cart-items-list');
            const totalEl = document.getElementById('cart-total-price');
            const badge = document.getElementById('cart-badge-count');
            
            let total = 0;
            let count = 0;
            container.innerHTML = '';
            
            cart.forEach(item => {
                total += item.price * item.qty;
                count += item.qty;
                container.innerHTML += `
                    <div class="cart-item mb-3 d-flex gap-3 align-items-center">
                        <img src="${item.img}" class="rounded" style="width: 60px; height: 80px; object-fit: cover;">
                        <div class="flex-grow-1">
                            <h6 class="small fw-black text-uppercase mb-0 text-truncate" style="max-width: 150px;">${item.name}</h6>
                            <p class="text-secondary mb-1" style="font-size: 10px;">${item.color} | Tam: ${item.size}</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <span class="text-primary-orange fw-bold">R$ ${item.price.toLocaleString('pt-BR', {minimumFractionDigits:2})}</span>
                                <div class="d-flex align-items-center gap-2 bg-dark rounded border border-secondary px-2">
                                    <button class="btn btn-sm p-0 text-secondary" onclick="updateQty(${item.id}, -1)"><span class="material-symbols-outlined fs-6">remove</span></button>
                                    <span class="small fw-bold px-1">${item.qty}</span>
                                    <button class="btn btn-sm p-0 text-secondary" onclick="updateQty(${item.id}, 1)"><span class="material-symbols-outlined fs-6">add</span></button>
                                </div>
                            </div>
                        </div>
                        <button class="btn p-0 text-secondary" onclick="removeFromCart(${item.id})"><span class="material-symbols-outlined fs-5">delete</span></button>
                    </div>
                `;
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
                msg += `• ${item.qty}x ${item.name} (${item.color} / ${item.size}) - R$ ${(item.price * item.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
                total += item.price * item.qty;
            });
            msg += `\n*TOTAL: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}*`;
            window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(msg)}`, '_blank');
        }

        // Init
        renderProducts();
        renderCart();