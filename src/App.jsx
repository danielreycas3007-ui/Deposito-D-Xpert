import React, { useState } from 'react';

// Catálogo de productos de D-Xpert con imágenes y descripciones profesionales
const initialProducts = [
  { id: 1, name: 'Resina Fotopolimerizable A2', price: 450, category: 'Restaurativa', desc: 'Resina compuesta de alta estética y durabilidad.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Adhesivo Dentinario V Gen', price: 680, category: 'Adhesivos', desc: 'Adhesivo fotopolimerizable de frasco único.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Clorhexidina al 2% Solución', price: 180, category: 'Endodoncia', desc: 'Agente irrigador y desinfectante cavitario.', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Caja de Guantes de Nitrilo (100 pzs)', price: 220, category: 'Descartables', desc: 'Guantes libres de látex, alta resistencia y sensibilidad.', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Lámpara de Fotocurado LED Inalámbrica', price: 1950, category: 'Equipamiento', desc: 'Diseño ergonómico con alta potencia de polimerización.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Alginato de Alta Precisión Cromat', price: 290, category: 'Ortodoncia', desc: 'Impresión dental de fraguado rápido y cambio de color.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce6395?auto=format&fit=crop&q=80&w=400' }
];

export default function App() {
  const [view, setView] = useState('shop'); // 'shop', 'cart', 'checkout', 'chat'
  const [cart, setCart] = useState([]);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: '¡Hola! Soy el asistente virtual de D-Xpert. ¿En qué material, resina o equipo dental te puedo apoyar hoy?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Funciones del carrito
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Asistente AI Inteligente
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    const newMessages = [...chatMessages, { sender: 'user', text: userText }];
    setChatMessages(newMessages);
    setInputMessage('');

    setTimeout(() => {
      let aiReply = "Entiendo perfectamente doctor. Contamos con ese insumo en stock con envío inmediato a toda la zona metropolitana.";
      const lower = userText.toLowerCase();
      if (lower.includes('resina') || lower.includes('color')) {
        aiReply = "Manejamos resinas estéticas en tonos A1, A2 y A3 de marcas líderes en el mercado con excelente pulido.";
      } else if (lower.includes('pago') || lower.includes('tarjeta')) {
        aiReply = "Aceptamos transferencias, pagos con tarjeta mediante terminal y Mercado Pago de forma segura.";
      } else if (lower.includes('envio') || lower.includes('entrega')) {
        aiReply = "Los pedidos se procesan de inmediato y se despachan para entrega rápida en su clínica.";
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 800);
  };

  const filteredProducts = initialProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b' }}>
      
      {/* Barra de Navegación Superior Elegante */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => setView('shop')}>
            <div style={{ backgroundColor: '#0ea5e9', color: '#fff', padding: '0.5rem 0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.25rem' }}>DX</div>
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>D-Xpert</h1>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>Depósito Dental Inteligente</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={() => setView('shop')}
              style={{ background: view === 'shop' ? '#e0f2fe' : 'transparent', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '500', cursor: 'pointer', color: view === 'shop' ? '#0369a1' : '#475569' }}>
              Catálogo
            </button>
            <button 
              onClick={() => setView('chat')}
              style={{ background: view === 'chat' ? '#e0f2fe' : 'transparent', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '500', cursor: 'pointer', color: view === 'chat' ? '#0369a1' : '#475569' }}>
              🤖 Asistente IA
            </button>
            <button 
              onClick={() => setView('cart')}
              style={{ position: 'relative', backgroundColor: '#0ea5e9', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🛒 Carrito {totalCartItems > 0 && <span style={{ backgroundColor: '#ef4444', borderRadius: '50%', padding: '0.1rem 0.5rem', fontSize: '0.75rem' }}>{totalCartItems}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        
        {/* VISTA 1: TIENDA / CATÁLOGO */}
        {view === 'shop' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>Insumos y Materiales Dentales</h2>
                <p style={{ color: '#64748b', margin: '0.25rem 0 0 0' }}>Calidad profesional garantizada para su clínica dental.</p>
              </div>
              <input 
                type="text" 
                placeholder="Buscar por insumo o categoría..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '0.75rem 1rem', width: '300px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.95rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {filteredProducts.map(product => (
                <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', color: '#475569', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: '600' }}>{product.category}</span>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0.5rem 0 0.25rem 0', color: '#1e293b' }}>{product.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: '1.4' }}>{product.desc}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0369a1' }}>${product.price} MXN</span>
                      <button 
                        onClick={() => addToCart(product)}
                        style={{ backgroundColor: '#0ea5e9', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }}>
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA 2: CARRITO DE COMPRAS CON BOTONES DE RETORNO */}
        {view === 'cart' && (
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: 0 }}>Tu Carrito de Insumos</h2>
              <button 
                onClick={() => setView('shop')}
                style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', color: '#334155' }}>
                ← Seguir Comprando
              </button>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b' }}>
                <p style={{ fontSize: '1.2rem' }}>Tu carrito está vacío.</p>
                <button 
                  onClick={() => setView('shop')}
                  style={{ marginTop: '1rem', backgroundColor: '#0ea5e9', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                  Ver Catálogo Dental
                </button>
              </div>
            ) : (
              <div>
                {cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>{item.name}</h4>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>${item.price} MXN c/u</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '6px', overflow: 'hidden' }}>
                        <button onClick={() => updateQty(item.id, -1)} style={{ padding: '0.25rem 0.75rem', background: '#f8fafc', border: 'none', cursor: 'pointer' }}>-</button>
                        <span style={{ padding: '0 0.75rem', fontWeight: '600' }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} style={{ padding: '0.25rem 0.75rem', background: '#f8fafc', border: 'none', cursor: 'pointer' }}>+</button>
                      </div>
                      <span style={{ fontWeight: 'bold', width: '90px', textAlign: 'right' }}>${item.price * item.qty} MXN</span>
                    </div>
                  </div>
                ))}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '2px solid #e2e8f0' }}>
                  <button 
                    onClick={() => setView('shop')}
                    style={{ background: 'transparent', border: '1px solid #cbd5e1', color: '#475569', padding: '0.75rem 1.25rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                    ← Regresar al Catálogo
                  </button>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '1.25rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>Total a Pagar: <span style={{ color: '#0369a1' }}>${totalPrice} MXN</span></p>
                    <button 
                      onClick={() => setView('checkout')}
                      style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '0.75rem 2rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                      Proceder al Pago →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VISTA 3: CHECKOUT / PAGO */}
        {view === 'checkout' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Finalizar Pedido</h2>
              <button 
                onClick={() => setView('cart')}
                style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', color: '#334155' }}>
                ← Regresar al Carrito
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('¡Pedido registrado con éxito! Gracias por su compra en D-Xpert.'); setView('shop'); setCart([]); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nombre del Doctor / Clínica</label>
                <input type="text" required placeholder="Dr. Juan Pérez / Clínica Sonrisas" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Dirección de Entrega</label>
                <input type="text" required placeholder="Calle, Número, Colonia, C.P." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Teléfono de Contacto</label>
                <input type="tel" required placeholder="55 1234 5678" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '8px', margin: '0.5rem 0' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Total a cubrir: ${totalPrice} MXN</p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>Pago contra entrega / Terminal Mercado Pago / Transferencia</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button 
                  type="button" 
                  onClick={() => setView('cart')}
                  style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1', padding: '0.75rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                  Regresar
                </button>
                <button 
                  type="submit" 
                  style={{ flex: 2, backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Confirmar Pedido
                </button>
              </div>
            </form>
          </div>
        )}

        {/* VISTA 4: ASISTENTE VIRTUAL IA */}
        {view === 'chat' && (
          <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ backgroundColor: '#0ea5e9', color: '#fff', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Asistente Virtual D-Xpert (IA)</h3>
                <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.9 }}>Soporte técnico y asesoría en insumos dentales</p>
              </div>
              <button 
                onClick={() => setView('shop')}
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                Regresar al Catálogo
              </button>
            </div>

            <div style={{ height: '400px', padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#f8fafc' }}>
              {chatMessages.map((msg, index) => (
                <div key={index} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
                  <div style={{ 
                    backgroundColor: msg.sender === 'user' ? '#0ea5e9' : '#ffffff', 
                    color: msg.sender === 'user' ? '#ffffff' : '#1e293b', 
                    padding: '0.75rem 1rem', 
                    borderRadius: '12px', 
                    border: msg.sender === 'ai' ? '1px solid #e2e8f0' : 'none',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.4' }}>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} style={{ display: 'flex', padding: '1rem', backgroundColor: '#fff', borderTop: '1px solid #e2e8f0', gap: '0.75rem' }}>
              <input 
                type="text" 
                placeholder="Pregunta sobre resinas, precios o métodos de pago..." 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
              />
              <button 
                type="submit" 
                style={{ backgroundColor: '#0ea5e9', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                Enviar
              </button>
            </form>
          </div>
        )}

      </main>

      {/* Pie de página */}
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#64748b', fontSize: '0.85rem', borderTop: '1px solid #e2e8f0', marginTop: '3rem' }}>
        <p style={{ margin: 0 }}>© 2026 D-Xpert - Depósito Dental Profesional. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}