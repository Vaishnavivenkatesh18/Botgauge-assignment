# Botgauge-assignment
# React Selection Modal Assignment

A reusable React modal component for selecting items (Fruits & Vegetables) with independent category management.

## Features

- ✅ Two independent categories: Fruits and Vegetables
- ✅ Real-time search filtering (case-insensitive)
- ✅ Selection persistence when switching tabs
- ✅ Dynamic count badges on category tabs
- ✅ Disabled save button when nothing is selected
- ✅ Clean and responsive UI

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── App.css                 # App styling
├── SelectionModal.jsx      # Modal component with all logic
├── Modal.css               # Modal styling
├── constants.jsx           # Data structure (fruits & vegetables)
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Component Architecture

### SelectionModal.jsx
The main modal component handles all the logic:
- **State Management**: Uses `useState` hooks for active tab, search term, and selected items
- **Independent Selection**: Each category maintains its own selection state
- **Search Functionality**: Filters items in real-time based on search input
- **Persistent Selection**: Selections are preserved when switching between tabs

### Key State Variables
- `activeTab`: Tracks currently active category (fruits/vegetables)
- `searchTerm`: Stores search input for filtering
- `selectedItems`: Object storing selected IDs for both categories

## How It Works

1. **Tab Switching**: Click on Vegetables or Fruits tabs to switch categories
2. **Search**: Type in the search box to filter items in the active category
3. **Selection**: Check/uncheck items - selections persist when switching tabs
4. **Save**: Click Save to log selected items to console (disabled if nothing selected)
5. **Cancel**: Click Cancel or ✕ to close modal and reset selections

## Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Technical Decisions

- **Functional Components**: Used React hooks for clean, modern code
- **State Management**: Simple `useState` - no Redux needed for this scope
- **Component Design**: Single modal component with clear separation of concerns
- **CSS**: Vanilla CSS for simplicity and maintainability
- **Data Structure**: Separate arrays for fruits and vegetables with unique IDs

## Future Enhancements

- Debounced search for better performance
- Select all / Deselect all option
- Keyboard navigation support
- Accessibility improvements (ARIA labels)
