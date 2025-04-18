
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    title: "Premium Plan - 3 Months",
    description: "Get access to all premium features for 3 months. Includes priority support and exclusive content.",
    price: "€15.75",
    salePrice: "€13.12",
    duration: "3 Months",
    isSale: true,
    isFeatured: true,
    releaseDate: "Jun 27, 2021",
    systemRequirements: [
      "Windows 10/11 - 64-Bit",
      "Latest Drivers",
      "Active Internet Connection"
    ],
    features: [
      "24/7 Priority Support",
      "Exclusive Content Access",
      "Premium Features",
      "Regular Updates"
    ]
  },
  {
    title: "Premium Plan - Lifetime",
    description: "Lifetime access to all premium features. Best value for dedicated users.",
    price: "€99.99",
    duration: "Lifetime",
    isFeatured: true,
    releaseDate: "Mar 15, 2021",
    systemRequirements: [
      "Windows 10/11 - 64-Bit",
      "Latest Drivers",
      "Active Internet Connection"
    ],
    features: [
      "Lifetime Updates",
      "VIP Support",
      "All Premium Features",
      "Early Access to New Features"
    ]
  },
  {
    title: "Premium Plan - Monthly",
    description: "Try out all premium features with our monthly subscription plan.",
    price: "€7.99",
    duration: "1 Month",
    isSale: true,
    releaseDate: "Mar 15, 2021",
    systemRequirements: [
      "Windows 10/11 - 64-Bit",
      "Latest Drivers",
      "Active Internet Connection"
    ],
    features: [
      "Basic Support",
      "All Premium Features",
      "Monthly Updates"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 px-4 bg-secondary border-b border-gray-800">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-primary">Premium Store</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
