const AdminDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Panel Administrador</h1>
            <p className="text-sm text-gray-500">Conjunto Residencial Las Palmas</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-bell text-gray-600"></i>
            </button>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-gray-500"></i>
            </div>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: 'users', label: 'Residentes', value: '126', color: 'blue' },
            { icon: 'home', label: 'Apartamentos', value: '75', color: 'green' },
            { icon: 'calendar-alt', label: 'Reservas activas', value: '8', color: 'amber' },
            { icon: 'exclamation-triangle', label: 'Reportes pendientes', value: '3', color: 'red' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm flex items-center">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mr-3`}>
                <i className={`fas fa-${stat.icon} text-${stat.color}-600 text-xl`}></i>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">{stat.label}</h3>
                <p className="text-xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Financial Summary */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">Resumen financiero</h2>
            <button className="text-indigo-600 text-sm font-medium">Ver detalle</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm text-gray-500">Cuotas recaudadas (mes)</h3>
              <p className="text-xl font-bold text-green-600">$8,750,000</p>
            </div>
            <div className="text-right">
              <h3 className="text-sm text-gray-500">Pagos pendientes</h3>
              <p className="text-xl font-bold text-red-600">$2,100,000</p>
            </div>
          </div>
          
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-xs font-semibold inline-block text-indigo-600">81% recaudado</span>
              <span className="text-xs font-semibold inline-block text-gray-600">Meta: $10,850,000</span>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-100">
              <div style={{width: '81%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;