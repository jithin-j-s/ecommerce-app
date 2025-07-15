import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box, CircularProgress } from "@mui/material";
import Login from "./components/Login";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import { Product, CartItem } from "./types";
import { VALID_CREDENTIALS, products } from "./data/mockData";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function AppContent() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [user, setUser] = useState<string>(() => {
    return localStorage.getItem("user") || "";
  });
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = (username: string, password: string) => {
    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setUser(username);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", username);
      navigate("/products");
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
    setCartItems([]);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("cartItems");
    navigate("/login");
  };

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Initialize app and check authentication
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <CircularProgress size={60} sx={{ color: "white" }} />
      </Box>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/products" replace />}
      />
      <Route path="/" element={isLoggedIn ? <Navigate to="/products" replace /> : <Navigate to="/login" replace />} />
      <Route
        path="/products"
        element={
          isLoggedIn ? (
            <Layout user={user} onLogout={handleLogout} cartItemCount={cartItemCount}>
              <ProductList products={products} onAddToCart={addToCart} />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/cart"
        element={
          isLoggedIn ? (
            <Layout user={user} onLogout={handleLogout} cartItemCount={cartItemCount}>
              <Cart cartItems={cartItems} onUpdateQuantity={updateCartQuantity} onRemoveFromCart={removeFromCart} />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="*" element={<Navigate to={isLoggedIn ? "/products" : "/login"} replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
