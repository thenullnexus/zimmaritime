import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AudioProvider } from '@/context/AudioContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AudioProvider>
      <div className="dark min-h-screen flex flex-col bg-background text-foreground transition-colors duration-500">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </AudioProvider>
  );
};

export default Layout;
