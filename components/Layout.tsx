import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
