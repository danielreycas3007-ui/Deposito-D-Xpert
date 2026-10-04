import React, { useState } from "react";
import "./App.css";
import logoImage from "./logo.png";

const products = [
  {
    id: 1,
    name: "Resina Fotopolimerizable A2",
    price: 450,
    category: "Restaurativa",
    desc: "Resina compuesta de alta estética y excelente durabilidad.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700",
  },

  {
    id: 2,
    name: "Adhesivo Dentinario V Gen",
    price: 680,
    category: "Adhesivos",
    desc: "Adhesivo fotopolimerizable de frasco único.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700",
  },

  {
    id: 3,
    name: "Anestesia FD",
    price: 0,
    category: "Anestesia",
    desc: "Anestésico dental para uso profesional.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 4,
    name: "Topicaina",
    price: 0,
    category: "Anestesia",
    desc: "Producto para uso odontológico profesional.",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 5,
    name: "ZK-ina",
    price: 0,
    category: "Anestesia",
    desc: "Producto odontológico para profesionales.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 6,
    name: "Guantes de Nitrilo",
    price: 220,
    category: "Desechables",
    desc: "Caja con 100 piezas. Selecciona tu talla.",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700",
    sizes: ["XS", "X", "M"],
  },

  {
    id: 7,
    name: "Campos Borgatta",
    price: 0,
    category: "Desechables",
    desc: "Campos para uso profesional odontológico.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 8,
    name: "Campos Anelsam",
    price: 0,
    category: "Desechables",
    desc: "Campos para procedimientos odontológicos.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 9,
    name: "Eyectores Uniseal",
    price: 0,
    category: "Desechables",
    desc: "Eyectores para uso odontológico.",
    image:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 10,
    name: "Eyectores Borgatta",
    price: 0,
    category: "Desechables",
    desc: "Eyectores de uso profesional.",
    image:
      "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 11,
    name: "Eyectores Sencillos",
    price: 0,
    category: "Desechables",
    desc: "Eyectores desechables para clínica dental.",
    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 12,
    name: "Eyectores Azules",
    price: 0,
    category: "Desechables",
    desc: "Eyectores azules para uso odontológico.",
    image:
      "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 13,
    name: "Bolsas para Esterilizar",
    price: 0,
    category: "Esterilización",
    desc: "Bolsas para esterilización de instrumental.",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 14,
    name: "Cubrebocas",
    price: 0,
    category: "Desechables",
    desc: "Cubrebocas para protección profesional.",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },

  {
    id: 15,
    name: "Gasas",
    price: 0,
    category: "Desechables",
    desc: "Gasas para procedimientos odontológicos.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700",
    consultPrice: true,
  },
];

function App() {
  const [view, setView] = useState("shop");

  const [cart, setCart] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [selectedSize, setSelectedSize] = useState("");

  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      text: "Hola, Doctor. Soy el asistente D-Xpert. Puedo ayudarle a encontrar insumos, consultar productos y orientarle con su pedido.",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const categories = [
    "Todos",
    "Restaurativa",
    "Anestesia",
    "Adhesivos",
    "Desechables",
    "Esterilización",
  ];

  // -----------------------------
  // CARRITO
  // -----------------------------

  const addToCart = (product, size = null) => {
    if (product.sizes && !size) {
      setSelectedProduct(product);
      setSelectedSize("");
      return;
    }

    const cartId = size ? `${product.id}-${size}` : `${product.id}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartId === cartId);

      if (existing) {
        return prev.map((item) =>
          item.cartId === cartId
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: 1,
          size,
          cartId,
        },
      ];
    });

    setSelectedProduct(null);
    setSelectedSize("");
  };

  const updateQty = (cartId, amount) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.qty + amount;

            if (newQty <= 0) return null;

            return {
              ...item,
              qty: newQty,
            };
          }

          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (cartId) => {
    setCart((prev) =>
      prev.filter((item) => item.cartId !== cartId)
    );
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );

  // -----------------------------
  // PRODUCTOS FILTRADOS
  // -----------------------------

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // -----------------------------
  // ASISTENTE IA
  // -----------------------------

  const sendMessage = (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const message = inputMessage;

    setChatMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setInputMessage("");

    setTimeout(() => {
      const text = message.toLowerCase();

      let response =
        "Claro, Doctor. Puedo ayudarle a encontrar el producto que necesita dentro del catálogo D-Xpert.";

      if (text.includes("guante")) {
        response =
          "Contamos con guantes de nitrilo en tallas XS, X y M. Puede seleccionar la talla directamente desde el producto.";
      }

      if (
        text.includes("eyector") ||
        text.includes("eyectores")
      ) {
        response =
          "Tenemos eyectores Uniseal, Borgatta, sencillos y azules disponibles dentro de la categoría Desechables.";
      }

      if (
        text.includes("anestesia") ||
        text.includes("topicaina") ||
        text.includes("zk")
      ) {
        response =
          "Puede consultar nuestra sección de Anestesia, donde encontrará Anestesia FD, Topicaina y ZK-ina.";
      }

      if (
        text.includes("pedido") ||
        text.includes("comprar")
      ) {
        response =
          "Agregue los productos al carrito y después seleccione 'Continuar pedido'. Ahí podrá indicar sus datos y dirección de entrega.";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response,
        },
      ]);
    }, 700);
  };

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">

        <div
          className="logo-container"
          onClick={() => setView("shop")}
        >
          <img
            src={logoImage}
            alt="D-Xpert"
            className="logo"
          />
        </div>

        <nav className="nav">

          <button
            className={view === "shop" ? "nav-active" : ""}
            onClick={() => setView("shop")}
          >
            Catálogo
          </button>

          <button
            className={view === "chat" ? "nav-active" : ""}
            onClick={() => setView("chat")}
          >
            ✨ Asistente
          </button>

          <button
            className="cart-button"
            onClick={() => setView("cart")}
          >
            🛒 Carrito

            {totalItems > 0 && (
              <span className="cart-counter">
                {totalItems}
              </span>
            )}
          </button>

        </nav>

      </header>

      {/* CONTENIDO */}

      <main>

        {/* ========================= */}
        {/* TIENDA */}
        {/* ========================= */}

        {view === "shop" && (
          <>

            {/* HERO */}

            <section className="hero">

              <div className="hero-content">

                <span className="hero-label">
                  DEPÓSITO DENTAL PROFESIONAL
                </span>

                <h1>
                  Todo lo que tu clínica necesita,
                  <span> en un solo lugar.</span>
                </h1>

                <p>
                  Insumos dentales seleccionados para
                  profesionales que buscan calidad,
                  confianza y servicio.
                </p>

                <div className="hero-search">

                  <span>⌕</span>

                  <input
                    type="text"
                    placeholder="¿Qué estás buscando, Doctor?"
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />

                </div>

              </div>

            </section>

            {/* CATEGORIAS */}

            <section className="categories">

              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category
                      ? "category-active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </section>

            {/* PRODUCTOS */}

            <section className="catalog-section">

              <div className="section-title">

                <div>
                  <span>CATÁLOGO D-XPERT</span>

                  <h2>
                    Insumos para profesionales
                  </h2>
                </div>

                <p>
                  {filteredProducts.length} productos
                </p>

              </div>

              <div className="products-grid">

                {filteredProducts.map((product) => (

                  <article
                    className="product-card"
                    key={product.id}
                  >

                    <div className="product-image-container">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />

                      <span className="product-category">
                        {product.category}
                      </span>

                    </div>

                    <div className="product-info">

                      <h3>
                        {product.name}
                      </h3>

                      <p>
                        {product.desc}
                      </p>

                      {product.sizes && (
                        <div className="size-preview">
                          XS · X · M
                        </div>
                      )}

                      <div className="product-bottom">

                        <div>

                          {product.consultPrice ? (
                            <strong>
                              Consultar
                            </strong>
                          ) : (
                            <strong>
                              $
                              {product.price.toLocaleString(
                                "es-MX"
                              )}
                              <small> MXN</small>
                            </strong>
                          )}

                        </div>

                        <button
                          className="add-button"
                          onClick={() =>
                            addToCart(product)
                          }
                        >
                          Agregar
                        </button>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            </section>

          </>
        )}

        {/* ========================= */}
        {/* MODAL GUANTES */}
        {/* ========================= */}

        {selectedProduct && (

          <div
            className="modal-overlay"
            onClick={() =>
              setSelectedProduct(null)
            }
          >

            <div
              className="product-modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedProduct(null)
                }
              >
                ×
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

              <div className="modal-info">

                <span>
                  {selectedProduct.category}
                </span>

                <h2>
                  {selectedProduct.name}
                </h2>

                <p>
                  {selectedProduct.desc}
                </p>

                <h4>
                  Selecciona la talla
                </h4>

                <div className="sizes">

                  {selectedProduct.sizes.map(
                    (size) => (

                      <button
                        key={size}
                        className={
                          selectedSize === size
                            ? "size-selected"
                            : ""
                        }
                        onClick={() =>
                          setSelectedSize(size)
                        }
                      >
                        {size}
                      </button>

                    )
                  )}

                </div>

                <div className="modal-price">
                  $
                  {selectedProduct.price.toLocaleString(
                    "es-MX"
                  )}
                  MXN
                </div>

                <button
                  className="modal-add"
                  disabled={!selectedSize}
                  onClick={() =>
                    addToCart(
                      selectedProduct,
                      selectedSize
                    )
                  }
                >
                  🛒 Agregar al carrito
                </button>

              </div>

            </div>

          </div>

        )}

        {/* ========================= */}
        {/* CARRITO */}
        {/* ========================= */}

        {view === "cart" && (

          <section className="page-container">

            <div className="page-header">

              <div>
                <span>D-XPERT</span>

                <h1>
                  Tu carrito
                </h1>
              </div>

              <button
                className="secondary-button"
                onClick={() => setView("shop")}
              >
                ← Seguir comprando
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="empty-cart">

                <div className="empty-icon">
                  🛒
                </div>

                <h2>
                  Tu carrito está vacío
                </h2>

                <p>
                  Agrega los insumos que necesitas
                  para tu clínica.
                </p>

                <button
                  className="primary-button"
                  onClick={() => setView("shop")}
                >
                  Explorar catálogo
                </button>

              </div>

            ) : (

              <div className="cart-layout">

                <div className="cart-products">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.cartId}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">

                        <h3>
                          {item.name}
                        </h3>

                        {item.size && (
                          <span>
                            Talla: {item.size}
                          </span>
                        )}

                        <p>
                          {item.consultPrice
                            ? "Precio por confirmar"
                            : `$${item.price} MXN c/u`}
                        </p>

                      </div>

                      <div className="quantity">

                        <button
                          onClick={() =>
                            updateQty(
                              item.cartId,
                              -1
                            )
                          }
                        >
                          −
                        </button>

                        <strong>
                          {item.qty}
                        </strong>

                        <button
                          onClick={() =>
                            updateQty(
                              item.cartId,
                              1
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                      <strong className="item-total">

                        {item.consultPrice
                          ? "Consultar"
                          : `$${(
                              item.price *
                              item.qty
                            ).toLocaleString(
                              "es-MX"
                            )} MXN`}

                      </strong>

                      <button
                        className="remove-button"
                        onClick={() =>
                          removeItem(item.cartId)
                        }
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

                <aside className="summary">

                  <span>
                    RESUMEN
                  </span>

                  <h2>
                    Tu pedido
                  </h2>

                  <div className="summary-row">
                    <span>
                      Productos
                    </span>

                    <strong>
                      {totalItems}
                    </strong>
                  </div>

                  <div className="summary-row">
                    <span>
                      Subtotal
                    </span>

                    <strong>
                      $
                      {totalPrice.toLocaleString(
                        "es-MX"
                      )}{" "}
                      MXN
                    </strong>
                  </div>

                  <div className="summary-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      $
                      {totalPrice.toLocaleString(
                        "es-MX"
                      )}{" "}
                      MXN
                    </strong>

                  </div>

                  <button
                    className="checkout-button"
                    onClick={() =>
                      setView("checkout")
                    }
                  >
                    Continuar pedido →
                  </button>

                </aside>

              </div>

            )}

          </section>

        )}

        {/* ========================= */}
        {/* CHECKOUT */}
        {/* ========================= */}

        {view === "checkout" && (

          <section className="page-container">

            <div className="checkout">

              <div className="page-header">

                <div>
                  <span>FINALIZAR PEDIDO</span>

                  <h1>
                    Datos de entrega
                  </h1>
                </div>

              </div>

              <form
                className="checkout-form"
                onSubmit={(e) => {
                  e.preventDefault();

                  alert(
                    "Pedido registrado correctamente. Esta parte posteriormente se conectará a la base de datos y al sistema de pagos."
                  );
                }}
              >

                <div className="form-section">

                  <h3>
                    Información del doctor
                  </h3>

                  <div className="form-grid">

                    <div className="form-group">

                      <label>
                        Nombre del doctor
                      </label>

                      <input
                        required
                        placeholder="Dr. Juan Pérez"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Clínica
                      </label>

                      <input
                        required
                        placeholder="Clínica Dental"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Teléfono
                      </label>

                      <input
                        required
                        type="tel"
                        placeholder="55 1234 5678"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Correo electrónico
                      </label>

                      <input
                        required
                        type="email"
                        placeholder="doctor@email.com"
                      />

                    </div>

                  </div>

                </div>

                <div className="form-section">

                  <h3>
                    Dirección de entrega
                  </h3>

                  <div className="form-group">

                    <label>
                      Dirección completa
                    </label>

                    <input
                      required
                      placeholder="Calle, número, colonia..."
                    />

                  </div>

                  <div className="form-grid">

                    <div className="form-group">

                      <label>
                        Código postal
                      </label>

                      <input
                        required
                        placeholder="54770"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Referencias
                      </label>

                      <input
                        placeholder="Entre calles..."
                      />

                    </div>

                  </div>

                </div>

                <div className="form-section">

                  <h3>
                    Entrega
                  </h3>

                  <div className="form-grid">

                    <div className="form-group">

                      <label>
                        Fecha solicitada
                      </label>

                      <input
                        required
                        type="date"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Horario preferente
                      </label>

                      <input
                        required
                        type="time"
                      />

                    </div>

                  </div>

                </div>

                <div className="order-total">

                  <span>
                    Total del pedido
                  </span>

                  <strong>
                    $
                    {totalPrice.toLocaleString(
                      "es-MX"
                    )}{" "}
                    MXN
                  </strong>

                </div>

                <div className="checkout-actions">

                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() =>
                      setView("cart")
                    }
                  >
                    ← Regresar
                  </button>

                  <button
                    type="submit"
                    className="checkout-button"
                  >
                    Confirmar pedido →
                  </button>

                </div>

              </form>

            </div>

          </section>

        )}

        {/* ========================= */}
        {/* ASISTENTE */}
        {/* ========================= */}

        {view === "chat" && (

          <section className="page-container">

            <div className="ai-container">

              <div className="ai-header">

                <div className="ai-avatar">
                  ✦
                </div>

                <div>
                  <span>
                    D-XPERT AI
                  </span>

                  <h2>
                    Asistente dental
                  </h2>

                  <small>
                    En línea
                  </small>
                </div>

              </div>

              <div className="chat-area">

                {chatMessages.map(
                  (message, index) => (

                    <div
                      key={index}
                      className={
                        message.sender === "user"
                          ? "message user-message"
                          : "message ai-message"
                      }
                    >
                      {message.text}
                    </div>

                  )
                )}

              </div>

              <form
                className="chat-form"
                onSubmit={sendMessage}
              >

                <input
                  value={inputMessage}
                  onChange={(e) =>
                    setInputMessage(
                      e.target.value
                    )
                  }
                  placeholder="Escribe tu pregunta..."
                />

                <button>
                  ↑
                </button>

              </form>

            </div>

          </section>

        )}

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <img
          src={logoImage}
          alt="D-Xpert"
        />

        <p>
          D-Xpert · Depósito Dental Profesional
        </p>

        <span>
          Calidad · Confianza · Servicio
        </span>

        <small>
          © 2026 D-Xpert. Todos los derechos reservados.
        </small>

      </footer>

    </div>
  );
}

export default App;