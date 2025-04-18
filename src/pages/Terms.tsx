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
          <p>Refunds
Refunds are only given if there was a mistake made by FLIGHT-RADAR.

Purchases are non-refundable.

If you believe your situation warrants an exception, you can submit your account for review through our Discord server.

Game Accounts
FLIGHT-RADAR does not take responsibility for any bans that can occur using our client. You are solely responsible for your online activities. We always make sure our software is not detected by Valve Anti-Cheat but nothing can be 100% undetected forever.
Site Terms of Use Modifications
FLIGHT-RADAR may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.

Governing Law
Any claim relating to this website shall be governed by the laws of Finland without regard to its conflict of law provisions.

If you do not agree with these terms, please do not use the site. Use of the site constitutes acceptance of these terms. If you wish to close your account, please contact us.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
