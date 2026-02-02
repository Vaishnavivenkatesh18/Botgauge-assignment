import { useState } from 'react';
import SelectionModal from './Selectionmodal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (selectedItems) => {
    console.log('Saved items:', selectedItems);
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1>React Selection Modal Assignment</h1>
        <button 
          className="open-modal-button"
          onClick={() => setIsModalOpen(true)}
        >
          Open Selection Modal
        </button>

        <SelectionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}

export default App;