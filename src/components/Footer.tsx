import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body1">
            © 2025 E-Commerce Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}