
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <header className="py-4 px-4 bg-[#0A1627] border-b border-blue-900/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-blue-500 hover:text-blue-400">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold">Terms of Service</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>Terms of Service</h2>
          <p>Your terms of service content here...</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
