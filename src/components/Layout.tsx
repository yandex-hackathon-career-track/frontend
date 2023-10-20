import { CssBaseline, Container } from '@mui/material';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Container sx={{ maxWidth: { xl: 1280 } }}>
        <main className="content">{children}</main>
      </Container>
    </>
  );
};

export interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
