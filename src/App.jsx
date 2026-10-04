import React, { useState } from 'react';
import './App.css';

const productosIniciales = [
  { id: 1, nombre: 'Cepillos para Profilaxis (Caja con 100)', precio: 350, categoria: 'Descartables', stock: 15, imagen: '🦷' },
  { id: 2, nombre: 'Resina Fotopolimerizable A2', precio: 480, categoria: 'Restauración', stock: 8, imagen: '✨' },
  { id: 3, nombre: 'Guantes de Nitrilo (Caja 100 pzas)', precio: 220, categoria: 'Protección', stock: 25, imagen: '🧤' },
  { id: 4, nombre: 'Alginato para Impresión Cromat', precio: 190, categoria: 'Ortodoncia', stock: 12, imagen: '🟢' },
];

export default function App() {
  const [carrito, setCarrito] = useState([]);
  const [vista, setVista] = useState('catalogo');
  const [datosEnvio, setDatosEnvio] = useState({ nombre: '', direccion: '', telefono: '', tipoEnvio: 'domicilio' });
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensajesChat, setMensajesChat] = useState([
    { remitente: 'ia', texto: '¡Hola! Soy tu asistente virtual dental. ¿Tienes dudas sobre algún insumo, precios o disponibilidad?' }
  ]);
  const [inputChat, setInputChat] = useState('');

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
      setCarrito(carrito.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const totalPagar = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  const enviarMensajeIA = (e) => {
    e.preventDefault();
    if (!inputChat.trim()) return;

    const nuevosMensajes = [...mensajesChat, { remitente: 'usuario', texto: inputChat }];
    setMensajesChat(nuevosMensajes);
    setInputChat('');

    setTimeout(() => {
      let respuestaIA = "Contamos con stock disponible para envíos inmediatos a todo México. ¿Te puedo ayudar a agregar algo al carrito?";
      const textoMin = inputChat.toLowerCase();
      if (textoMin.includes('cepillo') || textoMin.includes('profilaxis')) {
        respuestaIA = "Sí tenemos cepillos para profilaxis en existencia (cajas con 100 piezas).";
      } else if (textoMin.includes('envio') || textoMin.includes('entrega')) {
        respuestaIA = "Hacemos envíos a domicilio o puedes pasar a recoger directamente en el depósito.";
      } else if (textoMin.includes('pago') || textoMin.includes('tarjeta')) {
        respuestaIA = "Aceptamos pagos con tarjeta y transferencia de forma segura.";
      }
      setMensajesChat(prev => [...prev, { remitente: 'ia', texto: respuestaIA }]);
    }, 1000);
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#f0f4f8', minHeight: '100vh', paddingBottom: '50px' }}>
      <header style={{ backgroundColor: '#0284c7', color: 'white', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>🦷 Depósito Dental Xpert</h1>
        <div>
          <button onClick={() => setVista('catalogo')} style={{ background: 'none', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer', marginRight: '20px', fontSize: '1rem' }}>Catálogo</button>
          <button onClick={() => setVista('checkout')} style={{ backgroundColor: '#0369a1', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            🛒 Carrito ({carrito.reduce((acc, item) => acc + item.cantidad, 0)})
          </button>
        </div>
      </header>

      <main style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 20px' }}>
        {vista === 'catalogo' && (
          <div>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Insumos y Materiales Disponibles</h2>
              <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '5px 10px', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 'bold' }}>🟢 Atención 24/7 Activa</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {productosIniciales.map(prod => (
                <div key={prod.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{prod.imagen}</div>
                  <h3 style={{ fontSize: '1.1rem', color: '#334155', height: '40px' }}>{prod.nombre}</h3>
                  <p style={{ color: '#0284c7', fontWeight: 'bold', fontSize: '1.2rem' }}>${prod.precio} MXN</p>
                  <p style={{ fontSize: '0.85rem', color: prod.stock > 5 ? '#16a34a' : '#dc2626' }}>Disponibilidad: {prod.stock} unidades</p>
                  <button onClick={() => agregarAlCarrito(prod)} style={{ backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', width: '100%', marginTop: '10px', fontWeight: 'bold' }}>
                    Agregar al Pedido
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {vista === 'checkout' && (
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h2>Finalizar Pedido</h2>
            {carrito.length === 0 ? (
              <p>Tu carrito está vacío. <button onClick={() => setVista('catalogo')} style={{ color: '#0284c7', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Volver al catálogo</button></p>
            ) : (
              <div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                  {carrito.map(item => (
                    <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e2e8f0' }}>
                      <span>{item.nombre} (x{item.cantidad})</span>
                      <span style={{ fontWeight: 'bold' }}>${item.precio * item.cantidad} MXN</span>
                    </li>
                  ))}
                </ul>
                <h3>Total a Pagar: ${totalPagar} MXN</h3>

                <h3 style={{ marginTop: '20px' }}>Datos del Doctor / Envío</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
                  <input type="text" placeholder="Nombre completo del Doctor(a)" value={datosEnvio.nombre} onChange={e => setDatosEnvio({...datosEnvio, nombre: e.target.value})} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e1' }} />
                  <input type="text" placeholder="Dirección del consultorio / clínica" value={datosEnvio.direccion} onChange={e => setDatosEnvio({...datosEnvio, direccion: e.target.value})} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e1' }} />
                  <input type="text" placeholder="Teléfono de contacto" value={datosEnvio.telefono} onChange={e => setDatosEnvio({...datosEnvio, telefono: e.target.value})} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e1' }} />
                  
                  <label style={{ fontSize: '0.9rem', marginTop: '5px' }}>Tipo de Entrega:</label>
                  <select value={datosEnvio.tipoEnvio} onChange={e => setDatosEnvio({...datosEnvio, tipoEnvio: e.target.value})} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e1' }}>
                    <option value="domicilio">Envío a Domicilio (Consultorio)</option>
                    <option value="sucursal">Recoger en Depósito Dental</option>
                  </select>

                  <button onClick={() => { alert('¡Pedido registrado con éxito!'); setCarrito([]); setVista('catalogo'); }} style={{ backgroundColor: '#16a34a', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
                    Proceder al Pago Seguro
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        {!chatAbierto ? (
          <button onClick={() => setChatAbierto(true)} style={{ backgroundColor: '#0284c7', color: 'white', border: 'none', borderRadius: '50px', padding: '12px 20px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            💬 Asistente IA 24/7
          </button>
        ) : (
          <div style={{ width: '320px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '400px' }}>
            <div style={{ backgroundColor: '#0284c7', color: 'white', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>Asistente Dental Virtual</span>
              <button onClick={() => setChatAbierto(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>✕</button>
            </div>
            
            <div style={{ flex: 1, padding: '10px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#f8fafc' }}>
              {mensajesChat.map((msg, index) => (
                <div key={index} style={{ alignSelf: msg.remitente === 'usuario' ? 'flex-end' : 'flex-start', backgroundColor: msg.remitente === 'usuario' ? '#bae6fd' : '#e2e8f0', padding: '8px 12px', borderRadius: '8px', maxWidth: '80%', fontSize: '0.9rem' }}>
                  {msg.texto}
                </div>
              ))}
            </div>

            <form onSubmit={enviarMensajeIA} style={{ display: 'flex', borderTop: '1px solid #e2e8f0' }}>
              <input type="text" placeholder="Escribe tu duda..." value={inputChat} onChange={e => setInputChat(e.target.value)} style={{ flex: 1, padding: '10px', border: 'none', outline: 'none', fontSize: '0.9rem' }} />
              <button type="submit" style={{ backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '0 15px', cursor: 'pointer', fontWeight: 'bold' }}>Enviar</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}