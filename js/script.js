let cart = [];

    const productsData = {
      'prod-kinetic': {
        name: 'KINETIC LEGGINGS',
        price: 189.90,
        category: 'Leggings',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsF7AKM5Ep5XizHkC12Ii3gza6_gGEuem7Thv22_JJdnAMOhEuuYnNISutpW6_CkfUSWcP-zpjuuI6SN3tbHzcFR6Ks-wCIQNbcLsHER8HqVTtejuiDyXJW2z0IRhZbe_cK5NiIVxY0a3uvxZw14u5AfIq4MxhTlwxbqsWexvP9fBdG72WKr45n9TVAK2lb4PsyLuPyFcJULE1ajb-vghPOgChzDlJ7vcZTIuGxJ-6Gn_AwJ20jD-VssriU4nSySLQR2YAy8PglUw',
        description: 'Desenvolvida com tecnologia de compressão avançada, a Kinetic Leggings oferece suporte muscular total e liberdade de movimento para treinos de alta intensidade.',
        composition: '88% Poliamida, 12% Elastano. Tecido com proteção UV50+.',
        sizes: ['P', 'M', 'G', 'GG'],
        colors: [
          { name: 'Preto', class: 'bg-black' },
          { name: 'Cinza', class: 'bg-neutral-600' },
          { name: 'Laranja', class: 'bg-primary' }
        ]
      },
      'prod-chrome': {
        name: 'CHROME RUNNER V1',
        price: 459.00,
        category: 'Calçados',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0JXRf-_Cfuq_9I2QwNTDF_KMowLp8eJGYkhvVN71JA6uMZ6gceLCBKwrly_wrKHRKOGkl7pSmAgmyZrqxsdHd713eQxC1zky8PrP5fV2Up2Uf0NTYUXXbcrJ8XQyNmcE3tjM_s18hwb2iZ1hmlzJW91jnV31lJJ47i_cooNZ75F71HFKfE6KTeocje3aji1p_EaVmQqgT6dt0dZkBplX6CuMl2_vqXGcK6n6RkMbFlZm0Fd0kc83R4wtVtsGxnrIiMUJhFu02gIk',
        description: 'O Chrome Runner V1 combina amortecimento responsivo com um design futurista. Ideal para corridas urbanas e performance em esteira.',
        composition: 'Mesh respirável de alta densidade, solado em borracha vulcanizada.',
        sizes: ['36', '37', '38', '39', '40', '41', '42'],
        colors: [
          { name: 'Prata', class: 'bg-neutral-300' },
          { name: 'Preto', class: 'bg-black' }
        ]
      },
      'prod-core': {
        name: 'CORE TANK TOP',
        price: 89.90,
        category: 'Tops',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxrUPAbHPPiRIRdYX9_qlgsGCKwfXH6AEf4AnJXaxnhYfzHJHFukV0sl0OC2MfFEZ_vIyhWmtWRtDqAJy1MHlrRQmEhY3bxXXF5pDr8NZmx84-UJDcXPOrsxoGudthTNUA-QNspaLZrpBrcvYtmCBJyC22QW6cqc1VPBmcz0s6P8X2-YcpjHcQXPY8yUrbPc7DlgUCYTaW6KVJMZqD_Tj-LDJrFX9oWiNeYD5jx66EdFi8AOblgmn_qDHodEhXdjWOXFb7dxstlbk',
        description: 'Regata essencial com corte ergonômico. Tecnologia Dry-Fit que mantém o corpo seco durante todo o treino.',
        composition: '100% Poliéster de alta performance.',
        sizes: ['P', 'M', 'G', 'GG'],
        colors: [
          { name: 'Branco', class: 'bg-white' },
          { name: 'Preto', class: 'bg-black' },
          { name: 'Marinho', class: 'bg-blue-900' }
        ]
      },
      'prod-strike': {
        name: 'STRIKE SHORTS',
        price: 124.90,
        category: 'Leggings',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT-RRx3HHrAmadFVpl5K-vwG7fWtjMJ0aoqAnG0cixRHOj4CZKVWFgTDLQJew4_ZiI-E8UMSx0bkAwAy16cNwdyq5Df1j6V1hxGdkEKKWSPbSdrr5cfxYOQkZLDtjRyVgl_Gf1XFC9_-NfE0Xns2YC4VYFUOtdzGEGvYokMJLpE5bMLeSinpnqQeYYYCA_tKo4kdntX7Jl9NZOm64hkHGe-tG5KAjEPvGh99pfkK2-TBY4SIBPw25deqNgjSrEI4T6b8hHUqhXRQs',
        description: 'Shorts Strike com compressão interna. Mobilidade superior para agachamentos e movimentos explosivos.',
        composition: '90% Poliamida, 10% Elastano.',
        sizes: ['P', 'M', 'G', 'GG'],
        colors: [
          { name: 'Chumbo', class: 'bg-neutral-800' },
          { name: 'Preto', class: 'bg-black' }
        ]
      }
    };

    let selectedSize = null;
    let selectedColor = null;

    function toggleDrawer() {
      const drawer = document.getElementById('navigation-drawer');
      const overlay = document.getElementById('overlay');
      drawer.classList.toggle('open');
      overlay.classList.toggle('visible');
    }

    function toggleCart() {
      const cartPanel = document.getElementById('cart-panel');
      const overlay = document.getElementById('overlay');
      cartPanel.classList.toggle('open');
      overlay.classList.toggle('visible');
    }

    function closeAllPanels() {
      document.getElementById('navigation-drawer').classList.remove('open');
      document.getElementById('cart-panel').classList.remove('open');
      document.getElementById('overlay').classList.remove('visible');
    }

    function filterFromMenu(category) {
      const btnMap = {
        'TODOS': 'cat-todos',
        'Leggings': 'cat-leggings',
        'Tops': 'cat-tops',
        'Calçados': 'cat-calcados',
        'Acessórios': 'cat-acessorios'
      };
      const targetBtn = document.getElementById(btnMap[category]);
      filterCategory(category, targetBtn);
      closeAllPanels();
      document.getElementById('product-grid').scrollIntoView({ behavior: 'smooth' });
    }

    function filterCategory(category, btn) {
      if(btn) {
        const container = btn.parentElement;
        const buttons = container.querySelectorAll('button');
        buttons.forEach(b => {
          b.classList.remove('bg-primary', 'text-on-primary', 'font-black');
          b.classList.add('bg-neutral-900', 'text-on-surface-variant', 'font-bold');
        });
        btn.classList.remove('bg-neutral-900', 'text-on-surface-variant', 'font-bold');
        btn.classList.add('bg-primary', 'text-on-primary', 'font-black');
      }

      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        if (category === 'TODOS' || card.getAttribute('data-category') === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function addToCartAnimate(event, name, price, img, elementId) {
      if (!selectedSize || !selectedColor) {
        alert("Por favor, selecione Tamanho e Cor antes de adicionar ao carrinho.");
        return;
      }

      const btn = event.currentTarget;
      const btnRect = btn.getBoundingClientRect();
      const cartIcon = document.getElementById('cart-badge');
      const cartRect = cartIcon.getBoundingClientRect();

      const flyer = document.createElement('div');
      flyer.className = 'fly-to-cart';
      flyer.style.left = `${btnRect.left + btnRect.width / 2}px`;
      flyer.style.top = `${btnRect.top + btnRect.height / 2}px`;
      document.body.appendChild(flyer);

      flyer.offsetHeight;

      flyer.style.left = `${cartRect.left + cartRect.width / 2}px`;
      flyer.style.top = `${cartRect.top + cartRect.height / 2}px`;
      flyer.style.transform = 'scale(0.2)';
      flyer.style.opacity = '0';

      setTimeout(() => flyer.remove(), 800);

      addToCart(name, price, img, elementId, selectedSize, selectedColor);
      
      const icon = document.getElementById('cart-icon-btn');
      icon.classList.add('scale-125', 'text-white');
      setTimeout(() => icon.classList.remove('scale-125', 'text-white'), 300);
      closeModal();
    }

    function addToCart(name, price, img, elementId, size, color) {
      const existingItem = cart.find(item => item.name === name && item.size === size && item.color === color);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ id: Date.now(), name, price, img, quantity: 1, elementId, size, color });
      }
      renderCart();
    }

    function updateQuantity(id, change) {
      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          removeFromCart(id);
        } else {
          renderCart();
        }
      }
    }

    function removeFromCart(id) {
      cart = cart.filter(item => item.id !== id);
      renderCart();
    }

    function navigateToProduct(elementId) {
      closeAllPanels();
      const element = document.getElementById(elementId);
      if (element) {
        const category = element.getAttribute('data-category');
        filterCategory(category, document.getElementById(`cat-${category.toLowerCase()}`));
        
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-4', 'ring-primary', 'ring-offset-4', 'ring-offset-black');
          setTimeout(() => element.classList.remove('ring-4', 'ring-primary', 'ring-offset-4', 'ring-offset-black'), 2500);
        }, 300);
      }
    }

    function openProductDetail(prodId) {
      const data = productsData[prodId];
      if(!data) return;

      selectedSize = null;
      selectedColor = null;

      const modal = document.getElementById('product-modal');
      const content = document.getElementById('modal-content');

      content.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-1/2">
            <img src="${data.img}" class="w-full h-80 md:h-[450px] object-cover rounded-md shadow-xl border border-neutral-800" />
          </div>
          <div class="md:w-1/2 flex flex-col">
            <h2 class="text-2xl md:text-3xl font-black text-primary italic font-lexend mb-1 uppercase">${data.name}</h2>
            <p class="text-2xl font-black text-white font-lexend mb-6">R$ ${data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            
            <div class="space-y-6 flex-grow">
              <div>
                <h4 class="text-xs font-black text-neutral-500 tracking-[0.2em] mb-2 uppercase">Descrição</h4>
                <p class="text-neutral-300 text-sm leading-relaxed">${data.description}</p>
              </div>

              <div>
                <h4 class="text-xs font-black text-neutral-500 tracking-[0.2em] mb-3 uppercase">Cores</h4>
                <div class="flex gap-4">
                  ${data.colors.map(c => `
                    <button onclick="selectColor(this, '${c.name}')" 
                            class="color-btn w-8 h-8 rounded-full border border-white/20 transition-all ${c.class}" 
                            title="${c.name}"></button>
                  `).join('')}
                </div>
              </div>

              <div>
                <h4 class="text-xs font-black text-neutral-500 tracking-[0.2em] mb-3 uppercase">Tamanho</h4>
                <div class="flex flex-wrap gap-2">
                  ${data.sizes.map(s => `
                    <button onclick="selectSize(this, '${s}')" 
                            class="size-btn min-w-[40px] h-10 px-2 border border-neutral-700 flex items-center justify-center text-xs font-black hover:border-primary hover:text-primary transition-all rounded-sm">
                      ${s}
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="pt-4 border-t border-neutral-800">
                <h4 class="text-xs font-black text-neutral-500 tracking-[0.2em] mb-2 uppercase">Composição</h4>
                <p class="text-neutral-300 text-sm leading-relaxed">${data.composition}</p>
              </div>
            </div>

            <button class="w-full btn-premium-orange text-on-primary font-black py-4 mt-8 rounded-sm tracking-widest text-sm flex items-center justify-center gap-2" 
                    onclick="addToCartAnimate(event, '${data.name}', ${data.price}, '${data.img}', '${prodId}')">
              <span class="material-symbols-outlined">add_shopping_cart</span> ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>
      `;

      modal.classList.remove('pointer-events-none', 'opacity-0');
      modal.classList.add('opacity-100');
    }

    function selectSize(btn, size) {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = size;
    }

    function selectColor(btn, color) {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedColor = color;
    }

    function closeModal() {
      const modal = document.getElementById('product-modal');
      modal.classList.add('opacity-0');
      setTimeout(() => modal.classList.add('pointer-events-none'), 300);
    }

    function renderCart() {
      const cartItemsContainer = document.getElementById('cart-items-container');
      const cartBadge = document.getElementById('cart-badge');
      const cartPanelTotal = document.getElementById('cart-panel-total');

      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartBadge.innerText = totalItems;

      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="flex gap-4 items-center group bg-neutral-900/40 p-3 rounded-sm border border-neutral-900">
          <div class="w-16 h-20 bg-neutral-900 rounded overflow-hidden flex-shrink-0 cursor-pointer active:scale-95 transition-transform border border-neutral-800" onclick="navigateToProduct('${item.elementId}')">
            <img alt="item" class="w-full h-full object-cover" src="${item.img}"/>
          </div>
          <div class="flex-grow">
            <h4 class="text-[10px] font-black uppercase cursor-pointer hover:text-primary transition-colors tracking-widest" onclick="navigateToProduct('${item.elementId}')">${item.name}</h4>
            <p class="text-[9px] text-neutral-500 font-bold mt-0.5 uppercase tracking-tighter">Cor: ${item.color} | Tam: ${item.size}</p>
            <p class="text-primary font-lexend font-black mb-2 mt-1">R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <div class="flex items-center gap-3">
              <div class="flex items-center bg-neutral-900 rounded border border-neutral-800">
                <button class="px-2 py-1 text-neutral-400 hover:text-white" onclick="updateQuantity(${item.id}, -1)">
                  <span class="material-symbols-outlined text-sm">remove</span>
                </button>
                <span class="text-[10px] font-black w-14 text-center">${item.quantity} ${item.quantity === 1 ? 'peça' : 'peças'}</span>
                <button class="px-2 py-1 text-neutral-400 hover:text-white" onclick="updateQuantity(${item.id}, 1)">
                  <span class="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
          </div>
          <span class="material-symbols-outlined text-neutral-600 text-sm cursor-pointer hover:text-red-500 sm:opacity-0 group-hover:opacity-100 transition-opacity" onclick="removeFromCart(${item.id})">delete</span>
        </div>
      `).join('');

      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const formattedTotal = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      cartPanelTotal.innerText = formattedTotal;
    }

    function finalizeWhatsApp() {
      if (cart.length === 0) return alert("Seu carrinho está vazio!");
      let message = "Olá Grow Up! Gostaria de finalizar meu pedido:\n\n";
      cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} (${item.color} / ${item.size}) - R$ ${(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      });
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      message += `\n*TOTAL: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}*`;
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/5500000000000?text=${encoded}`, '_blank');
    }

    // Initial products
    cart = [
      {
        id: 1,
        name: 'KINETIC LEGGINGS',
        price: 189.90,
        quantity: 1,
        size: 'M',
        color: 'Preto',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsF7AKM5Ep5XizHkC12Ii3gza6_gGEuem7Thv22_JJdnAMOhEuuYnNISutpW6_CkfUSWcP-zpjuuI6SN3tbHzcFR6Ks-wCIQNbcLsHER8HqVTtejuiDyXJW2z0IRhZbe_cK5NiIVxY0a3uvxZw14u5AfIq4MxhTlwxbqsWexvP9fBdG72WKr45n9TVAK2lb4PsyLuPyFcJULE1ajb-vghPOgChzDlJ7vcZTIuGxJ-6Gn_AwJ20jD-VssriU4nSySLQR2YAy8PglUw',
        elementId: 'prod-kinetic'
      },
      {
        id: 2,
        name: 'CHROME RUNNER V1',
        price: 459.00,
        quantity: 1,
        size: '40',
        color: 'Prata',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0JXRf-_Cfuq_9I2QwNTDF_KMowLp8eJGYkhvVN71JA6uMZ6gceLCBKwrly_wrKHRKOGkl7pSmAgmyZrqxsdHd713eQxC1zky8PrP5fV2Up2Uf0NTYUXXbcrJ8XQyNmcE3tjM_s18hwb2iZ1hmlzJW91jnV31lJJ47i_cooNZ75F71HFKfE6KTeocje3aji1p_EaVmQqgT6dt0dZkBplX6CuMl2_vqXGcK6n6RkMbFlZm0Fd0kc83R4wtVtsGxnrIiMUJhFu02gIk',
        elementId: 'prod-chrome'
      }
    ];

    renderCart();