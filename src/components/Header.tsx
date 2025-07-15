import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  Box,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { ShoppingCart, Store, Logout, Home } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  user: string;
  onLogout: () => void;
  cartItemCount: number;
}

export default function Header({ user, onLogout, cartItemCount }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar>
        <Store sx={{ mr: 2 }} />
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            fontWeight: 'bold',
            display: { xs: 'none', sm: 'block' },
            cursor: 'pointer'
          }}
          onClick={() => navigate('/products')}
        >
          E-Commerce Store
        </Typography>

        {!isMobile && (
          <Typography variant="body1" sx={{ mr: 3 }}>
            Welcome, {user}!
          </Typography>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            color="inherit"
            onClick={() => navigate('/products')}
            sx={{
              bgcolor: isActive('/products') ? 'rgba(255,255,255,0.2)' : 'transparent',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
            }}
          >
            <Home />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={() => navigate('/cart')}
            sx={{
              bgcolor: isActive('/cart') ? 'rgba(255,255,255,0.2)' : 'transparent',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
            }}
          >
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton
            color="inherit"
            onClick={onLogout}
            sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
          >
            <Logout />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}