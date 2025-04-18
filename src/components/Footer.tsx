
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-blue-900/30 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-sm text-gray-400">© 2025 FLIGHT-RADAR.cc made by <span className="text-blue-500">YourName</span></p>
        </div>
      </div>
    </footer>
  );
}
