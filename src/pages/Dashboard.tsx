import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocumentCard from "@/components/DocumentCard";
import UploadModal from "@/components/UploadModal";
// WalletModal removed; using wallet-adapter UI

const Dashboard = () => {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  // removed custom wallet modal state; use wallet-adapter UI

  const mockDocuments = [
    {
      name: "Bachelor's Degree Certificate",
      issuer: "MIT University",
      timestamp: "2024-01-15",
      status: "active" as const,
      category: "Education",
    },
    {
      name: "Professional Certification",
      issuer: "AWS Training",
      timestamp: "2024-02-20",
      status: "active" as const,
      category: "Certification",
    },
    {
      name: "Identity Document",
      issuer: "Government Authority",
      timestamp: "2023-12-10",
      status: "active" as const,
      category: "Identity",
    },
  ];

  const sharedDocuments = [
    {
      name: "Employment Verification",
      issuer: "Tech Corp Inc",
      timestamp: "2024-03-01",
      status: "active" as const,
      category: "Employment",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">
            Manage and verify your decentralized credentials
          </p>
        </div>

        <Tabs defaultValue="my-documents" className="space-y-6">
          <TabsContent value="my-documents" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDocuments.map((doc, index) => (
                <DocumentCard key={index} {...doc} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shared" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sharedDocuments.map((doc, index) => (
                <DocumentCard key={index} {...doc} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="issued" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDocuments.slice(0, 2).map((doc, index) => (
                <DocumentCard key={index} {...doc} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Button
        size="lg"
        className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-2xl gradient-primary glow-primary"
        onClick={() => setUploadModalOpen(true)}
      >
        <Plus className="h-6 w-6" />
      </Button>

      <Footer />
      <UploadModal open={uploadModalOpen} onOpenChange={setUploadModalOpen} />
      {/* custom wallet modal removed in favor of wallet-adapter UI */}
    </div>
  );
};

export default Dashboard;
