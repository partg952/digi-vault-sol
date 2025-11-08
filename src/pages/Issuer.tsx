import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Upload, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletModal from "@/components/WalletModal";

const Issuer = () => {
  const [issueModalOpen, setIssueModalOpen] = useState(false);
  const [walletModalOpen, setWalletModalOpen] = useState(false);

  const issuedDocuments = [
    {
      name: "Academic Transcript",
      recipient: "5FHne...8xqD",
      timestamp: "2024-03-15",
      hash: "Qm...a1b2c3",
    },
    {
      name: "Graduation Certificate",
      recipient: "8KLpo...3mwX",
      timestamp: "2024-03-10",
      hash: "Qm...d4e5f6",
    },
    {
      name: "Professional License",
      recipient: "2BMxy...7gkL",
      timestamp: "2024-03-05",
      hash: "Qm...g7h8i9",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onConnectWallet={() => setWalletModalOpen(true)} isWalletConnected />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Issuer Dashboard</h1>
          <p className="text-muted-foreground">
            Issue and manage verified credentials to your recipients
          </p>
        </div>

        <div className="mb-6">
          <Button
            size="lg"
            className="gradient-primary glow-primary"
            onClick={() => setIssueModalOpen(true)}
          >
            <Send className="mr-2 h-5 w-5" />
            Issue New Document
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Issued Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issuedDocuments.map((doc, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-success/10">
                      <CheckCircle className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{doc.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Recipient: {doc.recipient}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Issued:</span>
                    <span className="text-foreground">{doc.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Hash:</span>
                    <span className="text-foreground font-mono">{doc.hash}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  View on Explorer
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Issue Document Modal */}
      <Dialog open={issueModalOpen} onOpenChange={setIssueModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Issue New Document</DialogTitle>
            <DialogDescription>
              Issue a verified credential to a recipient's wallet address
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Wallet Address</Label>
              <Input
                id="recipient"
                placeholder="e.g., 5FHneW7giQFo3vGMA..."
                className="font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Document File</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload certificate
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter document details..."
                rows={3}
              />
            </div>

            <Button className="w-full gradient-primary">
              <Send className="mr-2 h-4 w-4" />
              Issue Document
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <WalletModal open={walletModalOpen} onOpenChange={setWalletModalOpen} />
    </div>
  );
};

export default Issuer;
