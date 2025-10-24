export default function Home() {
  return (
    <main className="min-h-screen bg-[#EBEBEB]">
      {/* Hero Section de Prueba */}
      <section className="bg-gradient-primary text-dark py-20">
        <div className="container-custom text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            ⭐ ABC Kids
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Centro de educación infantil donde los pequeños aprenden y crecen felices
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">
              📞 Contactar
            </button>
            <button className="btn-secondary">
              📚 Ver Programas
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Prueba de Colores */}
      <section className="container-custom py-16">
        <h2 className="text-4xl font-display font-semibold text-center mb-12 text-navy">
          🎨 Paleta de Colores ABC Kids
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Navy 900 */}
          <div className="card">
            <div className="w-full h-32 bg-navy rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Navy 900</h3>
            <p className="text-gray-600 text-sm mb-2">#001D3D</p>
            <p className="text-gray-600">Header / Footer</p>
          </div>

          {/* Blue 800 */}
          <div className="card">
            <div className="w-full h-32 bg-[#003566] rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Blue 800</h3>
            <p className="text-gray-600 text-sm mb-2">#003566</p>
            <p className="text-gray-600">Acentos profundos</p>
          </div>

          {/* Accent */}
          <div className="card">
            <div className="w-full h-32 bg-accent rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Accent</h3>
            <p className="text-gray-600 text-sm mb-2">#FFC300</p>
            <p className="text-gray-600">CTA principal ⭐</p>
          </div>

          {/* Accent 2 */}
          <div className="card">
            <div className="w-full h-32 bg-[#FFD60A] rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Accent 2</h3>
            <p className="text-gray-600 text-sm mb-2">#FFD60A</p>
            <p className="text-gray-600">Hover suave</p>
          </div>

          {/* Danger */}
          <div className="card">
            <div className="w-full h-32 bg-danger rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Danger</h3>
            <p className="text-gray-600 text-sm mb-2">#DC562E</p>
            <p className="text-gray-600">Errores / alertas</p>
          </div>

          {/* Background */}
          <div className="card">
            <div className="w-full h-32 bg-bg border border-gray-300 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Background</h3>
            <p className="text-gray-600 text-sm mb-2">#EBEBEB</p>
            <p className="text-gray-600">Fondo de página</p>
          </div>

          {/* Surface */}
          <div className="card border border-gray-300">
            <div className="w-full h-32 bg-surface border border-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Surface</h3>
            <p className="text-gray-600 text-sm mb-2">#FFFFFF</p>
            <p className="text-gray-600">Tarjetas / cards</p>
          </div>

          {/* Text */}
          <div className="card">
            <div className="w-full h-32 bg-navy rounded-xl mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">Aa</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Textos</h3>
            <p className="text-gray-600 text-sm mb-1">Dark: #0B1220</p>
            <p className="text-gray-600 text-sm">Light: #FFFFFF</p>
          </div>
        </div>
      </section>

      {/* Sección de Tipografía */}
      <section className="container-custom py-16">
        <h2 className="text-4xl font-display font-semibold text-center mb-12 text-navy">
          ✍️ Tipografía
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-3xl font-display font-bold mb-4 text-accent">Fredoka</h3>
            <p className="text-gray-600 mb-4 font-sans">
              Fuente decorativa y amigable para títulos principales.
              Perfecta para captar la atención de padres y transmitir calidez.
            </p>
            <div className="space-y-3 p-4 bg-bg rounded-lg">
              <p className="font-display text-4xl font-bold text-navy">¡Aprende jugando!</p>
              <p className="font-display text-3xl font-semibold text-blue-800">Un lugar feliz</p>
              <p className="font-display text-2xl font-medium text-accent">ABC Kids ⭐</p>
              <p className="font-display text-xl font-normal text-gray-700">Educación infantil</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-3xl font-sans font-semibold mb-4 text-blue-800">Poppins</h3>
            <p className="text-gray-600 mb-4 font-sans">
              Fuente limpia y moderna para el cuerpo de texto.
              Fácil de leer en todos los dispositivos.
            </p>
            <div className="space-y-2 p-4 bg-bg rounded-lg">
              <p className="font-sans font-light text-lg text-gray-700">Texto ligero (300)</p>
              <p className="font-sans font-normal text-lg text-gray-700">Texto normal (400)</p>
              <p className="font-sans font-medium text-lg text-gray-700">Texto medium (500)</p>
              <p className="font-sans font-semibold text-lg text-gray-700">Texto semibold (600)</p>
              <p className="font-sans font-bold text-lg text-gray-700">Texto bold (700)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Componentes */}
      <section className="container-custom py-16">
        <h2 className="text-4xl font-display font-semibold text-center mb-12 text-navy">
          🧩 Componentes Reutilizables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Botones */}
          <div className="card">
            <h3 className="text-2xl font-display font-semibold mb-4 text-navy">Botones</h3>
            <div className="space-y-4">
              <button className="btn-primary w-full">Botón Primario</button>
              <button className="btn-secondary w-full">Botón Secundario</button>
            </div>
          </div>

          {/* Badges */}
          <div className="card">
            <h3 className="text-2xl font-display font-semibold mb-4 text-navy">Badges</h3>
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <span className="badge-danger">¡Nuevo!</span>
                <span className="bg-accent text-navy px-3 py-1 rounded-full text-sm font-semibold">
                  Destacado
                </span>
                <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="card bg-gradient-accent">
            <h3 className="text-2xl font-display font-semibold mb-4 text-navy">Cards</h3>
            <p className="text-navy/80">
              Las tarjetas son perfectas para mostrar programas, testimonios y galería.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Responsive */}
      <section className="container-custom py-16">
        <h2 className="text-4xl font-display font-semibold text-center mb-12 text-navy">
          📱 Diseño Responsive
        </h2>
        <div className="card gradient-primary text-white">
          <div className="text-center space-y-4">
            <p className="text-2xl font-display font-bold">
              ¡Diseño adaptable!
            </p>
            <p className="text-lg font-medium">
              Este diseño se adapta a móvil 📱, tablet 💻 y escritorio 🖥️
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold">Móvil</p>
                <p className="text-sm">{"< 640px"}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold">Tablet</p>
                <p className="text-sm">640px - 1024px</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold">Laptop</p>
                <p className="text-sm">1024px - 1280px</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold">Desktop</p>
                <p className="text-sm">{"> 1280px"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer de Prueba */}
      <footer className="bg-navy text-white py-12 mt-16">
        <div className="container-custom text-center space-y-4">
          <div className="inline-block">
            <span className="text-6xl">⭐</span>
          </div>
          <p className="font-display text-3xl font-bold">ABC Kids</p>
          <p className="font-medium text-accent">✅ Paleta de colores configurada</p>
          <p className="text-white/70 text-sm max-w-2xl mx-auto">
            Navy 900 (#001D3D) • Blue 800 (#003566) • Accent (#FFC300) • Accent 2 (#FFD60A) • 
            Danger (#DC562E) • Background (#EBEBEB) • Surface (#FFFFFF)
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="btn-primary">Contactar</button>
            <button className="btn-secondary">Más información</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
