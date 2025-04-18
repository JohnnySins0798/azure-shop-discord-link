
import { ProductCard } from "@/components/ProductCard";
import { ChevronDown } from "lucide-react";

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
    <div className="min-h-screen bg-[#020817] text-white">
      <header className="py-4 px-4 bg-[#0A1627] border-b border-blue-900/30">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 font-bold text-2xl">P</span>
            <h1 className="text-xl font-bold">PREMIUM STORE</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">BUY</a>
            <a href="#" className="text-gray-400 hover:text-white">FEATURES</a>
            <a href="#" className="text-gray-400 hover:text-white">DOWNLOAD</a>
            <a href="#" className="text-gray-400 hover:text-white">FORUM</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <div className="h-[500px] bg-gradient-to-b from-[#0A1627] to-[#020817] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl font-bold mb-2">PREMIUM STORE</h2>
          <p className="text-gray-400 text-lg mb-8">one step ahead of your spread</p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600">
              MORE
            </button>
            <button className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600">
              BUY
            </button>
          </div>
          <ChevronDown className="absolute bottom-8 text-blue-500 animate-bounce" size={32} />
        </div>

        <section className="container mx-auto py-16 px-4">
          <h3 className="text-center mb-12">
            <span className="text-gray-400">OUR</span>{" "}
            <span className="text-blue-500">PRODUCTS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
