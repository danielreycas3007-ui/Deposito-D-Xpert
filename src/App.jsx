import React, { useState } from "react";
import "./App.css";
import logoImage from "./logo.png";

// Importaciones de tus imágenes reales desde la carpeta src
import abreBocas3PzasImage from "./Abre bocas con 3 piezas.png";
import acentadorBandasArainImage from "./acentador de bandas arain.png";
import acetatoRigido080Image from "./Acetato rigido .080.png";
import acidoGrabadorImage from "./acido grabador.png";
import adhesivoSingleBondImage from "./Adhesivo single bond.png";
import agujaCortaImage from "./Aguja corta.png";
import agujaExtraCortaImage from "./Aguja extra corta.png";
import alginoplastImage from "./Alginoplast.png";
import anestesiaImage from "./anestesia.png";
import antibenzilImage from "./Antibenzil 3.750.png";
import arcoStripingImage from "./Arco striping.png";
import biogelImage from "./Biogel.png";
import blancoDeEspanaImage from "./Blanco de españa.png";
import bolsaParaEsterilizarImage from "./bolsa para esterilizar.png";
import cadenaLongImage from "./Cadena long.png";
import cajaOrthoPlasticoAnelsamImage from "./caja ortho plastico anelsam.png";
import cajaOrthoPlasticoItalyImage from "./caja ortho plastico Italy.png";
import camposanelsamImage from "./camposanelsam.png";
import camposborgattaImage from "./camposborgatta.png";
import cavexCa37Image from "./Cavex CA37.png";
import cepilloOralBImage from "./Cepillo Oral B.png";
import ceraDeOrtodonciaImage from "./Cera de ortodoncia.png";
import ceraParaModelarImage from "./Cera para modelar.png";
import charolaDePlasticoImage from "./charola de plastico.png";
import cintaTestigoImage from "./cinta testigo.png";
import clinproImage from "./clinpro.png";
import conformadorDeRodilloImage from "./conformador de rodillo.png";
import coronasAnterioresImage from "./Coronas anteriores.png";
import cubrebocasAnelsamImage from "./cubrebocas anelsam.png";
import cubrebocasUnimaskImage from "./cubrebocas unimask.png";
import cucharillasParcialesImage from "./Cucharillas parciales.png";
import detectorDeCariesImage from "./detector de caries.png";
import diqueMaxsafe5x5VerdeImage from "./dique maxsafe 5x5 verde.png";
import diqueMaxsafe6x6RosaImage from "./dique maxsafe 6x6 rosa.png";
import diqueNictone5x5Image from "./dique nictone 5x5.png";
import discoDeCarburoImage from "./disco de carburo.png";
import discosShofuImage from "./discos shofu.png";
import dowelPinRojoImage from "./dowel pin rojo.png";
import espatulaPlasticoAlginatoImage from "./espatula de plastico alginato.png";
import espatulaDobleCementoArainImage from "./espatula doble cemento arain.png";
import espatulaParaCementoImage from "./espatula para cemento.png";
import espejp5ArainImage from "./espejp #5 arain.png";
import everXPosteriorImage from "./everX posterior.png";
import eyectoresAzulesImage from "./eyectores azules.png";
import eyectoresBorgattaImage from "./eyectores borgatta.png";
import eyectoresSencillosImage from "./eyectores sencillos.png";
import eyectoresUnisealImage from "./eyectoresuniseal.png";
import fixodentPlusImage from "./fixodent plus.png";
import flux20grsImage from "./flux 20grs.png";
import fresaCarburoHp703lImage from "./fresa de carburo hp703l.png";
import fresaDoradaCorteMetalImage from "./fresa dorada corte metal y porcelana.png";
import freseroMetalicoImage from "./fresero metalico.png";
import fujiPlusMiniIonomeroImage from "./fuji plus mini ionomero.png";
import gasButanoImage from "./gas butano.png";
import gasasImage from "./gasas.png";
import glassionImage from "./glassion.png";
import godeteDeSiliconImage from "./godete de silicon.png";
import godeteDeVidrioImage from "./godete de vidrio.png";
import guantesDeNitriloImage from "./guantes de nitrilo.png";
import gutapercga2daImage from "./gutapercga 2da.png";
import gutapercha1eraImage from "./gutapercha 1era.png";
import miPastePlusImage from "./Mi paste plus.png";
import topicainaImage from "./topicaina.png";
import zkInaImage from "./ZK-ina.png";

const products = [
  { id: 1, name: "Abre bocas con 3 pzas", price: 35, category: "Instrumental", desc: "Abre bocas para procedimientos clínicos.", image: abreBocas3PzasImage },
  { id: 2, name: "Acentador de bandas Arain", price: 70, category: "Instrumental", desc: "Instrumental de alta calidad para ortodoncia.", image: acentadorBandasArainImage },
  { id: 3, name: "Acetato rigido .080", price: 22, category: "Laboratorio", desc: "Acetato rígido para férulas.", image: acetatoRigido080Image },
  { id: 4, name: "Acetato rigido .060", price: 18, category: "Laboratorio", desc: "Acetato para trabajos de laboratorio dental.", image: acetatoRigido080Image },
  { id: 5, name: "Ácido grabador", price: 58, category: "Restaurativa", desc: "Ácido grabador dental profesional.", image: acidoGrabadorImage },
  { id: 6, name: "Adhesivo Single Bon", price: 955, category: "Adhesivos", desc: "Adhesivo dental de alta fuerza de unión.", image: adhesivoSingleBondImage },
  { id: 7, name: "Aguja corta", price: 130, category: "Anestesia", desc: "Agujas dentales esterilizadas.", image: agujaCortaImage },
  { id: 8, name: "Aguja extra corta", price: 130, category: "Anestesia", desc: "Agujas dentales para anestesia local.", image: agujaExtraCortaImage },
  { id: 9, name: "Alginoplast", price: 216, category: "Impresión", desc: "Alginato de alta precisión.", image: alginoplastImage },
  { id: 10, name: "Antibenzil 3.750", price: 90, category: "Anestesia", desc: "Anestésico tópico profesional.", image: antibenzilImage },
  { id: 11, name: "Arco Striping", price: 55, category: "Ortodoncia", desc: "Arco para tiras de stripping.", image: arcoStripingImage },
  { id: 12, name: "Biogel", price: 98, category: "Desechables", desc: "Gel protector y lubricante dental.", image: biogelImage },
  { id: 13, name: "Blanco de España", price: 36, category: "Laboratorio", desc: "Material para pulido y laboratorio.", image: blancoDeEspanaImage },
  { id: 14, name: "Bolsa para esterilizar 2 1/4", price: 60, category: "Esterilización", desc: "Bolsas grado médico para esterilización.", image: bolsaParaEsterilizarImage },
  { id: 15, name: "Bolsa para esterilizar 3 1/2", price: 138, category: "Esterilización", desc: "Bolsas de esterilización tamaño grande.", image: bolsaParaEsterilizarImage },
  { id: 16, name: "Cadena long", price: 340, category: "Ortodoncia", desc: "Cadena elástica para ortodoncia.", image: cadenaLongImage },
  { id: 17, name: "Caja ortho plastico Anelsam", price: 10, category: "Ortodoncia", desc: "Caja para aparatos de ortodoncia.", image: cajaOrthoPlasticoAnelsamImage },
  { id: 18, name: "Caja ortho plastico Italy", price: 12, category: "Ortodoncia", desc: "Caja protectora para retenedores.", image: cajaOrthoPlasticoItalyImage },
  { id: 19, name: "Campos Anelsam", price: 52, category: "Desechables", desc: "Campos dentales desechables.", image: camposanelsamImage },
  { id: 20, name: "Campos Borgatta", price: 68, category: "Desechables", desc: "Campos para uso profesional.", image: camposborgattaImage },
  { id: 21, name: "Cavex CA37", price: 182, category: "Impresión", desc: "Alginato elástico de gran precisión.", image: cavexCa37Image },
  { id: 22, name: "Cepillo Oral B", price: 25, category: "Higiene", desc: "Cepillo dental para pacientes.", image: cepilloOralBImage },
  { id: 23, name: "Cera de ortodoncia", price: 14, category: "Ortodoncia", desc: "Cera de alivio para brackets.", image: ceraDeOrtodonciaImage },
  { id: 24, name: "Cera para modelar", price: 69, category: "Laboratorio", desc: "Cera para trabajos de laboratorio.", image: ceraParaModelarImage },
  { id: 25, name: "Charola de plastico", price: 37, category: "Instrumental", desc: "Charola organizadora para instrumental.", image: charolaDePlasticoImage },
  { id: 26, name: "Cinta testigo", price: 75, category: "Esterilización", desc: "Cinta autoclave indicador de esterilización.", image: cintaTestigoImage },
  { id: 27, name: "Clinpro", price: 58, category: "Preventiva", desc: "Barniz fluorado profesional.", image: clinproImage },
  { id: 28, name: "Conformador de rodillo", price: 14, category: "Laboratorio", desc: "Conformador para rodetes de cera.", image: conformadorDeRodilloImage },
  { id: 29, name: "Coronas anteriores", price: 84, category: "Restaurativa", desc: "Coronas temporales anteriores.", image: coronasAnterioresImage },
  { id: 30, name: "Cubrebocas Anelsam", price: 58, category: "Desechables", desc: "Cubrebocas plisado tricapa.", image: cubrebocasAnelsamImage },
  { id: 31, name: "Cubrebocas Unimask 3", price: 110, category: "Desechables", desc: "Caja de cubrebocas Unimask alta protección.", image: cubrebocasUnimaskImage },
  { id: 32, name: "Cubrebocas Unimask 4", price: 110, category: "Desechables", desc: "Cubrebocas profesional alta calidad.", image: cubrebocasUnimaskImage },
  { id: 33, name: "Cucharillas parciales", price: 36, category: "Impresión", desc: "Cucharillas metálicas para impresión.", image: cucharillasParcialesImage },
  { id: 34, name: "Detector de caries", price: 165, category: "Restaurativa", desc: "Revelador de caries profesional.", image: detectorDeCariesImage },
  { id: 35, name: "Dique Maxsafe 5x5 verde", price: 275, category: "Endodoncia", desc: "Dique de hule látex verde.", image: diqueMaxsafe5x5VerdeImage },
  { id: 36, name: "Dique Maxsafe 6x6 rosa", price: 290, category: "Endodoncia", desc: "Dique de hule látex rosa.", image: diqueMaxsafe6x6RosaImage },
  { id: 37, name: "Dique Nictone 5x5", price: 310, category: "Endodoncia", desc: "Dique de alta resistencia.", image: diqueNictone5x5Image },
  { id: 38, name: "Disco de carburo", price: 5, category: "Laboratorio", desc: "Disco para corte de materiales.", image: discoDeCarburoImage },
  { id: 39, name: "Discos Shofu", price: 70, category: "Laboratorio", desc: "Discos de pulido y acabado.", image: discosShofuImage },
  { id: 40, name: "Dowel pin rojo o verde", price: 3.5, category: "Laboratorio", desc: "Pines metálicos para modelos de trabajo.", image: dowelPinRojoImage },
  { id: 41, name: "Espátula de plástico alginato", price: 10, category: "Instrumental", desc: "Espátula para mezclar alginato.", image: espatulaPlasticoAlginatoImage },
  { id: 42, name: "Espátula doble cemento Arain", price: 35, category: "Instrumental", desc: "Espátula metálica para cemento.", image: espatulaDobleCementoArainImage },
  { id: 43, name: "Espátula Normar Arain", price: 35, category: "Instrumental", desc: "Espátula profesional para resinas/cemento.", image: espatulaDobleCementoArainImage },
  { id: 44, name: "Espátula para cemento", price: 5, category: "Instrumental", desc: "Espátula económica para mezcla.", image: espatulaParaCementoImage },
  { id: 45, name: "Espejo #5 Arain", price: 16, category: "Instrumental", desc: "Espejo dental número 5.", image: espejp5ArainImage },
  { id: 46, name: "EverX Posterior", price: 96, category: "Restaurativa", desc: "Resina reforzada con fibra.", image: everXPosteriorImage },
  { id: 47, name: "Fixodent Plus", price: 90, category: "Higiene", desc: "Adhesivo para prótesis dental.", image: fixodentPlusImage },
  { id: 48, name: "Flux 20grs", price: 30, category: "Laboratorio", desc: "Fundente para soldadura dental.", image: flux20grsImage },
  { id: 49, name: "Fresa de carburo HP703L", price: 45, category: "Rotatorios", desc: "Fresa de carburo de alta duración.", image: fresaCarburoHp703lImage },
  { id: 50, name: "Fresa dorada corte metal y porcelana", price: 84, category: "Rotatorios", desc: "Fresa especial para corte de coronas.", image: fresaDoradaCorteMetalImage },
  { id: 51, name: "Fresero metalico", price: 90, category: "Instrumental", desc: "Organizador de fresas metálico.", image: freseroMetalicoImage },
  { id: 52, name: "Fuji Plus Mini Ionomero", price: 850, category: "Restaurativa", desc: "Ionómero de vidrio para cementación.", image: fujiPlusMiniIonomeroImage },
  { id: 53, name: "Gas butano", price: 45, category: "Laboratorio", desc: "Gas para soplete de laboratorio.", image: gasButanoImage },
  { id: 54, name: "Gasa hemostatica S-99", price: 185, category: "Cirugía", desc: "Gasa hemostática quirúrgica.", image: gasasImage },
  { id: 55, name: "Gasas", price: 28, category: "Desechables", desc: "Gasas absorbentes para procedimientos.", image: gasasImage },
  { id: 56, name: "Glassion", price: 610, category: "Restaurativa", desc: "Ionómero restaurador.", image: glassionImage },
  { id: 57, name: "Godete de silicon", price: 10, category: "Laboratorio", desc: "Godete flexible para mezcla.", image: godeteDeSiliconImage },
  { id: 58, name: "Godete de vidrio", price: 12, category: "Laboratorio", desc: "Godete de vidrio pesado.", image: godeteDeVidrioImage },
  { id: 59, name: "Guante de nitrilo metalicos", price: 138, category: "Desechables", desc: "Guantes de nitrilo color especial.", image: guantesDeNitriloImage },
  { id: 60, name: "Guantes de Nitrilo", price: 140, category: "Desechables", desc: "Caja con 100 piezas. Selecciona tu talla.", image: guantesDeNitriloImage, sizes: ["XS", "X", "M"] },
  { id: 61, name: "Gutapercha #15-40 1era", price: 88, category: "Endodoncia", desc: "Conos de gutapercha primera serie.", image: gutapercha1eraImage },
  { id: 62, name: "Gutapercha #45-80 2da", price: 88, category: "Endodoncia", desc: "Conos de gutapercha segunda serie.", image: gutapercga2daImage },
  { id: 63, name: "Mi Paste Plus", price: 350, category: "Preventiva", desc: "Crema dental con recaldent y flúor.", image: miPastePlusImage },
  { id: 64, name: "Anestesia FD", price: 550, category: "Anestesia", desc: "Anestésico dental con epinefrina.", image: anestesiaImage },
  { id: 65, name: "Topicaina", price: 98, category: "Anestesia", desc: "Anestésico tópico en gel.", image: topicainaImage },
  { id: 66, name: "ZK-ina", price: 214, category: "Anestesia", desc: "Anestésico dental profesional.", image: zkInaImage },
  { id: 67, name: "Eyectores Uniseal", price: 90, category: "Desechables", desc: "Eyectores de saliva Uniseal x 100 pzas.", image: eyectoresUnisealImage },
  { id: 68, name: "Eyectores Borgatta", price: 100, category: "Desechables", desc: "Eyectores de saliva Borgatta.", image: eyectoresBorgattaImage },
  { id: 69, name: "Eyectores Sencillos", price: 60, category: "Desechables", desc: "Eyectores de saliva económicos.", image: eyectoresSencillosImage },
  { id: 70, name: "Eyectores Azules", price: 80, category: "Desechables", desc: "Eyectores de saliva color azul.", image: eyectoresAzulesImage }
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
      text: "Hola, Doctor. Soy el asistente D-Xpert. Puedo ayudarle a encontrar insumos, consultar precios del catálogo y orientarle con su pedido.",
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
    "Endodoncia",
    "Ortodoncia",
    "Laboratorio",
    "Cirugía",
    "Impresión",
    "Higiene",
    "Rotatorios",
    "Instrumental"
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
        "Claro, Doctor. Puedo ayudarle a encontrar el insumo que necesita dentro del catálogo completo D-Xpert.";

      if (text.includes("guante")) {
        response =
          "Contamos con guantes de nitrilo a $140 MXN (tallas XS, X, M).";
      }

      if (
        text.includes("eyector") ||
        text.includes("eyectores")
      ) {
        response =
          "Tenemos eyectores Uniseal ($90), Borgatta ($100), sencillos ($60) y azules ($80).";
      }

      if (
        text.includes("anestesia") ||
        text.includes("topicaina") ||
        text.includes("zk")
      ) {
        response =
          "Encontrará Anestesia FD ($550), Topicaina ($98), ZK-ina ($214) y Agujas dentales en la sección correspondiente.";
      }

      if (
        text.includes("pedido") ||
        text.includes("comprar")
      ) {
        response =
          "Agregue los productos al carrito y seleccione 'Continuar pedido' para indicar sus datos de entrega.";
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
                          <strong>
                            $
                            {product.price.toLocaleString(
                              "es-MX"
                            )}
                            <small> MXN</small>
                          </strong>
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
        {/* MODAL TALLAS */}
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
                          ${item.price} MXN c/u
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
                        ${(
                          item.price *
                          item.qty
                        ).toLocaleString(
                          "es-MX"
                        )} MXN
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
          ©️ 2026 D-Xpert. Todos los derechos reservados.
        </small>

      </footer>

    </div>
  );
}

export default App;