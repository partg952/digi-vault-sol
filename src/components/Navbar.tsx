import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Wallet } from "lucide-react";

interface NavbarProps {
  onConnectWallet?: () => void;
  isWalletConnected?: boolean;
}

const Navbar = ({ onConnectWallet, isWalletConnected = false }: NavbarProps) => {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-gradient">Dokchain</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/issuer" className="text-foreground hover:text-primary transition-colors">
              Issuer
            </Link>
            <Link to="/verify" className="text-foreground hover:text-primary transition-colors">
              Verify
            </Link>
          </div>

          <Button onClick={onConnectWallet} className="gradient-primary">
            <Wallet className="mr-2 h-4 w-4" />
            {isWalletConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
