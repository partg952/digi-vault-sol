import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Eye, Share2, CheckCircle, XCircle } from "lucide-react";

interface DocumentCardProps {
  name: string;
  issuer: string;
  timestamp: string;
  status: "active" | "revoked";
  category?: string;
}

const DocumentCard = ({ name, issuer, timestamp, status, category }: DocumentCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all border-border hover:border-primary/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-lg bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">Issued by {issuer}</p>
          </div>
        </div>
        <Badge
          variant={status === "active" ? "default" : "destructive"}
          className="flex items-center space-x-1"
        >
          {status === "active" ? (
            <CheckCircle className="h-3 w-3 mr-1" />
          ) : (
            <XCircle className="h-3 w-3 mr-1" />
          )}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>

      <div className="space-y-2 mb-4">
        {category && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Category:</span>
            <span className="text-foreground font-medium">{category}</span>
          </div>
        )}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Timestamp:</span>
          <span className="text-foreground">{timestamp}</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="mr-2 h-4 w-4" />
          View
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
        <Button size="sm" className="flex-1 bg-primary">
          Verify
        </Button>
      </div>
    </Card>
  );
};

export default DocumentCard;
