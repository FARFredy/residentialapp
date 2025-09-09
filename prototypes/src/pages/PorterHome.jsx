const PorterHome = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Portería</h1>
            <p className="text-sm text-gray-500">Torre Principal</p>
          </div>
          <div className="relative">
            <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-bell text-gray-600"></i>
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </div>
        </div>
        
        {/* Status Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <i className="fas fa-user-check text-green-600 text-xl"></i>
            </div>
            <div className="flex-1">
              <h2 className="font-medium text-gray-800">Juan Pérez</h2>
              <p className="text-sm text-gray-600">En turno: 6:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-xl font-bold text-indigo-600">12</p>
              <p className="text-xs text-gray-600">Visitantes hoy</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-amber-600">5</p>
              <p className="text-xs text-gray-600">Paquetes pendientes</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-green-600">43</p>
              <p className="text-xs text-gray-600">Residentes presentes</p>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-3">Acciones rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: 'user-plus', label: 'Registrar visitante', color: 'blue' },
              { icon: 'phone-alt', label: 'Llamar residente', color: 'green' },
              { icon: 'box', label: 'Registrar paquete', color: 'amber' },
              { icon: 'exclamation-triangle', label: 'Reportar incidente', color: 'red' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm text-center">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <i className={`fas fa-${item.icon} text-${item.color}-600 text-xl`}></i>
                </div>
                <span className="text-sm font-medium text-gray-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorterHome;