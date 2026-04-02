import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />

      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <Button asChild className="w-full" variant="hero">
          <Link to="/contact">Register Interest</Link>
        </Button>
      </div>
    </div>
  );
}
