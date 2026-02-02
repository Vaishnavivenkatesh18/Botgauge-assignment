import { useState } from 'react';
import { ITEMS, CATEGORIES } from './constants';
import './Modal.css';

const SelectionModal = ({ isOpen, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState(CATEGORIES.FRUITS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState({
    fruits: [],
    vegetables: []
  });

  if (!isOpen) return null;

  const handleItemToggle = (itemId) => {
    setSelectedItems(prev => {
      const currentCategory = prev[activeTab];
      const isSelected = currentCategory.includes(itemId);

      return {
        ...prev,
        [activeTab]: isSelected
          ? currentCategory.filter(id => id !== itemId)
          : [...currentCategory, itemId]
      };
    });
  };

  // Filter items based on search term
  const getFilteredItems = () => {
    const items = ITEMS[activeTab];
    if (!searchTerm) return items;

    return items.filter(item =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Handle save
  const handleSave = () => {
    const result = {
      fruits: ITEMS.fruits.filter(item => selectedItems.fruits.includes(item.id)),
      vegetables: ITEMS.vegetables.filter(item => selectedItems.vegetables.includes(item.id))
    };
    console.log('Selected Items:', result);
    onSave(result);
  };

  // Handle cancel
  const handleCancel = () => {
    setSelectedItems({ fruits: [], vegetables: [] });
    setSearchTerm('');
    setActiveTab(CATEGORIES.FRUITS);
    onClose();
  };

  // Check if item is selected
  const isItemSelected = (itemId) => {
    return selectedItems[activeTab].includes(itemId);
  };

  // Get total selected count
  const getTotalSelected = () => {
    return selectedItems.fruits.length + selectedItems.vegetables.length;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* We'll add Header, Content, and Footer components here in next steps */}
        <div className="modal-header">
          <div className="modal-header-top">
            <h2 className="modal-title">Add Items</h2>
            <button className="close-button" onClick={handleCancel}>
              ✕
            </button>
          </div>

          <div className="tabs-container">
            <button
              className={`tab-button ${activeTab === CATEGORIES.VEGETABLES ? 'active' : ''}`}
              onClick={() => setActiveTab(CATEGORIES.VEGETABLES)}
            >
              Vegetables
              <span className="tab-count">({selectedItems.vegetables.length})</span>
            </button>
            <button
              className={`tab-button ${activeTab === CATEGORIES.FRUITS ? 'active' : ''}`}
              onClick={() => setActiveTab(CATEGORIES.FRUITS)}
            >
              Fruits
              <span className="tab-count">({selectedItems.fruits.length})</span>
            </button>
          </div>
        </div>

        <div className="modal-content">
          <h3 className="content-title">
            Select {activeTab === CATEGORIES.FRUITS ? 'Fruits' : 'Vegetables'}
          </h3>

          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="items-list">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <label key={item.id} className="item-checkbox">
                  <input
                    type="checkbox"
                    checked={isItemSelected(item.id)}
                    onChange={() => handleItemToggle(item.id)}
                  />
                  <span className="item-label">{item.label}</span>
                </label>
              ))
            ) : (
              <div className="empty-state">
                No items found
              </div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="footer-button cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="footer-button save-button"
            onClick={handleSave}
            disabled={getTotalSelected() === 0}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionModal;