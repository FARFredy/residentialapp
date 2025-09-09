const PhoneLayout = ({ children, currentUser, onUserChange }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-black rounded-3xl p-3 shadow-2xl">
        <div className="bg-white rounded-2xl overflow-hidden h-screen max-h-[600px] flex flex-direction-column">
          {/* Status Bar */}
          <div className="bg-white px-4 py-2 flex justify-between items-center text-sm border-b border-gray-100">
            <span className="font-medium">9:41</span>
            <div className="flex items-center space-x-1">
              <i className="fas fa-signal text-xs"></i>
              <i className="fas fa-wifi text-xs"></i>
              <i className="fas fa-battery-full text-xs"></i>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>
          
          {/* User Selector */}
          <div className="bg-white border-t border-gray-100 p-2">
            <div className="flex justify-center space-x-2">
              <button 
                onClick={() => onUserChange('resident')}
                className={`px-3 py-1 rounded text-xs font-medium ${currentUser === 'resident' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                Residente
              </button>
              <button 
                onClick={() => onUserChange('porter')}
                className={`px-3 py-1 rounded text-xs font-medium ${currentUser === 'porter' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                Portero
              </button>
              <button 
                onClick={() => onUserChange('admin')}
                className={`px-3 py-1 rounded text-xs font-medium ${currentUser === 'admin' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLayout;