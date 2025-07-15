import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Person, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

interface LoginProps {
  onLogin: (username: string, password: string) => boolean;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate loading
    setTimeout(() => {
      const success = onLogin(username, password);
      if (!success) {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
              color: 'white',
              textAlign: 'center',
              py: 4
            }}
          >
            <Typography variant="h3" component="h1" fontWeight="bold">
              Welcome
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, opacity: 0.9 }}>
              Sign in to your account
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976d2 30%, #1ba3d1 90%)',
                  }
                }}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Box>

            <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                Demo Credentials:
              </Typography>
              <Typography variant="body2" align="center" sx={{ fontWeight: 'bold' }}>
                Username: user | Password: 123456
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}