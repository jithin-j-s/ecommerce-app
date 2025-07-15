import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 4 }}>
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
          Our Products
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover amazing products at great prices
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
                sx={{ 
                  objectFit: 'cover',
                  borderRadius: '12px 12px 0 0'
                }}
              />
              
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  {product.name}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ mb: 2, lineHeight: 1.6 }}
                >
                  {product.description}
                </Typography>
                
                <Chip
                  label={`$${product.price.toFixed(2)}`}
                  color="primary"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    height: 32,
                    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                  }}
                />
              </CardContent>
              
              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<AddShoppingCart />}
                  onClick={() => onAddToCart(product)}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976d2 30%, #1ba3d1 90%)',
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}