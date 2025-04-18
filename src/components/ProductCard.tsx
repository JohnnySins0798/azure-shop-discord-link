
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

  const handlePurchase = async () => {
    try {
      const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your Discord webhook URL
      const message = {
        content: `New Purchase!\nProduct: ${title}\nPrice: ${salePrice || price}\nDuration: ${duration}`,
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });

      toast.success("Purchase successful! Check Discord for confirmation.");
    } catch (error) {
      toast.error("Failed to process purchase. Please try again.");
    }
  };

  return (
    <Card className="w-full max-w-md bg-secondary border-gray-800 relative overflow-hidden">
      {isSale && (
        <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-1 rotate-[-45deg] translate-x-[-30%] translate-y-[60%]">
          SALE
        </div>
      )}
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rotate-[45deg] translate-x-[30%] translate-y-[60%]">
          FEATURED
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary"
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
                  <p className="text-2xl font-bold text-green-500">{salePrice}</p>
                </div>
              ) : (
                <p className="text-2xl font-bold text-white">{price}</p>
              )}
            </div>
          </div>

          {isExpanded && (
            <div className="space-y-4 mt-4 border-t border-gray-800 pt-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Description</h3>
                <p className="text-gray-300">{description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">System Requirements</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {systemRequirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Features</h3>
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
            className="w-full bg-primary hover:bg-primary/80 text-white"
          >
            Purchase
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
