// JSON con los productos
const products = [
    {
      "title": "Pin de dinosaurio",
      "description": "Un lindo pin de un dinosaurio blanco.",
      "price": 4.99,
      "image": "https://i.pinimg.com/736x/86/d8/af/86d8afef3e596e06c3225a597dd740f1.jpg"
    },
    {
      "title": "Pin de Calavera",
      "description": "Un brillante pin de calavera, hermoso.",
      "price": 2.00,
      "image": "https://i.pinimg.com/736x/cf/1a/5b/cf1a5b077cac189eae646ca5d8aa0409.jpg"
    },
    {
        "title": "Pin de Tiburon astronauta",
        "description": "Explora el mar con este pin.",
        "price": 3.00,
        "image": "https://i.pinimg.com/736x/f9/a7/82/f9a78218bdba9ad33c49b1e0fa4b9a2f.jpg"
    },
    {
        "title": "Pin de Maincra",
        "description": "Pin de maincra pero es una abeja bien god.",
        "price": 4.00,
        "image": "https://i.pinimg.com/736x/b4/ff/d3/b4ffd387bf9cac15e6453850f98e8854.jpg"
    },
    {
      "title": "Proximamente más pineeees",
      "description": "proximamente mas diseños!",
      "price": 0,
      "image": "https://i.pinimg.com/736x/52/ca/05/52ca05f4af47659dc04097cefb45256c.jpg"
    }
  ];

  // Función para cargar los productos dinámicamente
  function loadProducts() {
    const container = document.getElementById('cards-container');
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      card.innerHTML = `
      <div class="card-img">
          <img src="${product.image}" alt="${product.title}" width="150px">
        </div>
        <div class="card-title">${product.title}</div>
        <div class="card-subtitle">${product.description}</div>
        <hr class="card-divider">
        <div class="card-footer">
          <div class="card-price"><span>$</span>${product.price.toFixed(2)}</div>
          <button class="card-btn" onclick="sendWhatsAppMessage('${product.title}', '${product.description}', ${product.price}, '${product.image}')">Comprar</button>
        </div>
      `;
      
      container.appendChild(card);
    });
  }

  // Función para enviar mensaje por WhatsApp
  function sendWhatsAppMessage(title, description, price, image) {
    // Mostrar mensaje de confirmación
    const confirmationMessage = `Se va a reenviar el siguiente mensaje de compra: "¡Hola! Estoy interesado en el pin "${title}" por $${price.toFixed(2)}. ${description}. Está disponible."`;
    alert(confirmationMessage); // Se puede reemplazar con otro tipo de notificación si prefieres algo más estilizado
    
    // Luego de la confirmación, abrir WhatsApp con el mensaje
    const whatsappNumber = "1234567890"; // Cambia esto por tu número de WhatsApp
    const message = `¡Hola! Estoy interesado en el pin "${title}" que cuesta $${price.toFixed(2)}. ${description}. Está disponible.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  }
 
  // Cargar los productos al cargar la página
  window.onload = loadProducts;