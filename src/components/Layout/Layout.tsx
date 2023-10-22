import { CssBaseline, Container } from '@mui/material';
import './Layout.css';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Container style={{ padding: '0', maxWidth: '1280px' }} sx={{ maxWidth: { xl: 1280 } }}>
        <main className="content">{children}</main>
      </Container>
    </>
  );
};

export interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
