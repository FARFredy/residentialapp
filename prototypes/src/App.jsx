import { useState } from 'react';
import PhoneLayout from './components/PhoneLayout';
import ResidentHome from './pages/ResidentHome';
import PorterHome from './pages/PorterHome';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [currentUser, setCurrentUser] = useState('resident');

  const renderCurrentView = () => {
    switch (currentUser) {
      case 'resident':
        return <ResidentHome />;
      case 'porter':
        return <PorterHome />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <ResidentHome />;
    }
  };

  return (
    <PhoneLayout 
      currentUser={currentUser} 
      onUserChange={setCurrentUser}
    >
      {renderCurrentView()}
    </PhoneLayout>
  );
}

export default App;