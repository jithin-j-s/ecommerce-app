import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  IconButton,
  TextField,
  Divider,
  Paper,
  Avatar,
  Chip
} from '@mui/material';
import { 
  Add, 
  Remove, 
  Delete, 
  ShoppingBag, 
  ArrowBack,
  ShoppingCartCheckout 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export default function Cart({ cartItems, onUpdateQuantity, onRemoveFromCart }: CartProps) {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <ShoppingBag sx={{ fontSize: 80, color: 'grey.400' }} />
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Your Cart is Empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Looks like you haven't added any items to your cart yet.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<ArrowBack />}
            onClick={() => navigate('/products')}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Shopping Cart
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {cartItems.map((item) => (
              <Card
                key={item.id}
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  },
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid size={{ xs: 12, sm: 3 }}>
                      <Avatar
                        src={item.image}
                        alt={item.name}
                        variant="rounded"
                        sx={{ 
                          width: { xs: 80, sm: 100 }, 
                          height: { xs: 80, sm: 100 },
                          mx: 'auto'
                        }}
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 5 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                      <Chip
                        label={`$${item.price.toFixed(2)}`}
                        color="primary"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 2 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          gap: 1
                        }}
                      >
                        <IconButton
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          size="small"
                          sx={{ 
                            bgcolor: 'grey.100',
                            '&:hover': { bgcolor: 'grey.200' }
                          }}
                        >
                          <Remove />
                        </IconButton>
                        
                        <TextField
                          value={item.quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 1;
                            onUpdateQuantity(item.id, value);
                          }}
                          size="small"
                          sx={{ 
                            width: 60,
                            '& input': { textAlign: 'center', fontWeight: 'bold', p: 0 }
                          }}
                          inputProps={{ min: 1 }}
                        />
                        
                        <IconButton
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          size="small"
                          sx={{ 
                            bgcolor: 'grey.100',
                            '&:hover': { bgcolor: 'grey.200' }
                          }}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 2 }}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                        <IconButton
                          onClick={() => onRemoveFromCart(item.id)}
                          color="error"
                          sx={{
                            bgcolor: 'error.50',
                            '&:hover': { bgcolor: 'error.100' }
                          }}
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              position: 'sticky',
              top: 100
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Order Summary
            </Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1">Subtotal:</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                ${total.toFixed(2)}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1">Shipping:</Typography>
              <Typography variant="body1" color="success.main" sx={{ fontWeight: 'bold' }}>
                Free
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1">Tax:</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                ${(total * 0.1).toFixed(2)}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Total:
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                ${(total * 1.1).toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              size="large"
              startIcon={<ShoppingCartCheckout />}
              onClick={() => alert('Order placed successfully!')}
              sx={{
                mb: 2,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #4caf50 30%, #66bb6a 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #388e3c 30%, #4caf50 90%)',
                }
              }}
            >
              Checkout
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<ArrowBack />}
              onClick={() => navigate('/products')}
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontWeight: 'bold',
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.50',
                  borderColor: 'primary.main',
                }
              }}
            >
              Continue Shopping
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}