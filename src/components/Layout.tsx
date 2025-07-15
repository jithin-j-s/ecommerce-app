import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  user: string;
  onLogout: () => void;
  cartItemCount: number;
}

export default function Layout({ children, user, onLogout, cartItemCount }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header user={user} onLogout={onLogout} cartItemCount={cartItemCount} />
      <Box sx={{ flex: 1, py: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}