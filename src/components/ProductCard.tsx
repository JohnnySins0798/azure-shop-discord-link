
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  salePrice?: string;
  duration: string;
  isSale?: boolean;
  isFeatured?: boolean;
  releaseDate: string;
  systemRequirements: string[];
  features: string[];
}

export function ProductCard({
  title,
  description,
  price,
  salePrice,
  duration,
  isSale,
  isFeatured,
  releaseDate,
  systemRequirements,
  features,
}: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePurchase = () => {
    // Replace this with your Discord webhook URL
    const discordUrl = "YOUR_DISCORD_WEBHOOK_URL";
    window.open(discordUrl, "_blank");
    toast.success("Redirecting to purchase...");
  };

  return (
    <Card className="w-full bg-[#0A1627] border-blue-900/30 relative overflow-hidden hover:border-blue-500/50 transition-all">
      {isSale && (
        <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-1 rotate-[-45deg] translate-x-[-30%] translate-y-[60%]">
          SALE
        </div>
      )}
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rotate-[45deg] translate-x-[30%] translate-y-[60%]">
          FEATURED
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:text-blue-400"
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        <CardDescription className="text-gray-400">{duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Release date:</p>
              <p className="text-sm text-white">{releaseDate}</p>
            </div>
            <div className="text-right">
              {salePrice ? (
                <div>
                  <p className="text-lg line-through text-gray-500">{price}</p>
                  <p className="text-2xl font-bold text-blue-500">{salePrice}</p>
                </div>
              ) : (
                <p className="text-2xl font-bold text-white">{price}</p>
              )}
            </div>
          </div>

          {isExpanded && (
            <div className="space-y-4 mt-4 border-t border-blue-900/30 pt-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Description</h3>
                <p className="text-gray-300">{description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">System Requirements</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {systemRequirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Features</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <Button 
            onClick={handlePurchase}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            Purchase
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
