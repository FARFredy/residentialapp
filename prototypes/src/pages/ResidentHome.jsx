const ResidentHome = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="p-4 space-y-4">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl p-5 text-white">
          <h1 className="text-xl font-bold mb-1">¡Bienvenido, Carlos!</h1>
          <p className="text-sm opacity-90">Torre A - Apartamento 501</p>
        </div>
        
        {/* Payment Status */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-gray-800">Estado de cuenta</h2>
            <span className="text-sm text-indigo-600 font-medium">Ver todo</span>
          </div>
          
          <div className="bg-pink-50 rounded-lg p-3 mb-3 border border-pink-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Cuota de administración</p>
                <p className="font-semibold text-gray-800">$320,000 COP</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Vence en</p>
                <p className="text-red-500 font-semibold">3 días</p>
              </div>
            </div>
          </div>
          
          <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Pagar ahora
          </button>
        </div>
        
        {/* Quick Access */}
        <div>
          <h2 className="font-bold text-gray-700 mb-3">Acceso rápido</h2>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: 'phone-alt', label: 'Citófono' },
              { icon: 'calendar-alt', label: 'Reservas' },
              { icon: 'box', label: 'Paquetes' },
              { icon: 'bullhorn', label: 'Comunicados' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-3 shadow-sm text-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className={`fas fa-${item.icon} text-indigo-600`}></i>
                </div>
                <span className="text-xs text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* MVP Badge */}
        <div className="text-center mt-8">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
            🚀 MVP - Aplicación Propiedad Horizontal
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResidentHome;