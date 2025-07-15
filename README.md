# E-Commerce Store

A modern, responsive e-commerce application built with React, TypeScript, and Material-UI.

## Features

- **Authentication System**: Secure login with static credentials
- **Product Catalog**: Browse products with beautiful card layouts
- **Shopping Cart**: Add, remove, and manage cart items with quantity controls
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Persistent State**: Cart and login state persist across browser sessions
- **Modern UI**: Clean, gradient-based design with smooth animations

## Tech Stack

- **Frontend**: React 19 + TypeScript 5.8
- **Styling**: Material-UI (MUI) v7
- **Routing**: React Router v7
- **Build Tool**: Vite v7
- **State Management**: React Context + Custom Hooks

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Login Credentials

- **Username**: admin
- **Password**: 123456

## Project Structure

```
src/
├── components/          # React components
│   ├── Cart.tsx        # Shopping cart component
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Layout.tsx      # Layout wrapper
│   ├── Login.tsx       # Login form
│   └── ProductList.tsx # Product catalog
├── context/            # React context providers
│   └── AppContext.tsx  # Global app state
├── data/              # Static data
│   └── mockData.ts    # Products and credentials
├── hooks/             # Custom React hooks
│   ├── useAuth.ts     # Authentication logic
│   └── useCart.ts     # Cart management
├── types/             # TypeScript type definitions
│   └── index.ts       # App interfaces
├── App.tsx            # Main app component
└── main.tsx          # App entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features Overview

### Authentication
- Secure login system with form validation
- Persistent login state using localStorage
- Automatic redirect to login on unauthorized access

### Product Management
- Grid-based product display
- Product cards with images, descriptions, and prices
- Responsive layout adapting to screen size

### Shopping Cart
- Add products to cart with quantity management
- Update quantities or remove items
- Real-time cart total calculation
- Cart state persistence across sessions

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
