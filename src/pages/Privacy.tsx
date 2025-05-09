
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <header className="py-4 px-4 bg-[#0A1627] border-b border-blue-900/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-blue-500 hover:text-blue-400">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold">Privacy Policy</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2>Privacy Policy</h2>
          <p>VanityCheats
Privacy policy

Help pages
We are FLIGHT-RADAR ("we", "our", "us"). We’re committed to protecting and respecting your privacy. If you have questions about your personal information please contact us.

What information we hold about you
The type of data that we collect and process includes:

Your name or username.
Your email address.
Your IP address.
Your HWID Address
Further data may be collected if you choose to share it, such as if you fill out fields on your profile.

We collect some or all of this information in the following cases:

•How your personal information is used
•We may use your personal information in the following ways:

Your IP address is recorded when you perform certain actions on our site. Your IP address is never publicly visible.
Other ways we may use your personal information.
In addition to notifying you of activity on our site which may be relevant to you, from time to time we may wish to communicate with all members any important information such as newsletters or announcements by email. You can opt-in to or opt-out of such emails in your profile.

We may collect non-personally identifiable information about you in the course of your interaction with our site. This information may include technical information about the browser or type of device you're using. This information will be used purely for the purposes of analytics and tracking the number of visitors to our site.

Keeping your data secure
We are committed to ensuring that any information you provide to us is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable measures and procedures to safeguard and secure the information that we collect.

Cookie policy
Cookies are small text files which are set by us on your computer which allow us to provide certain functionality on our site, such as being able to log in, or remembering certain preferences.

We have a detailed cookie policy and more information about the cookies that we set on this page.

Rights
You have a right to access the personal data we hold about you or obtain a copy of it. To do so please contact us. If you believe that the information we hold for you is incomplete or inaccurate, you may contact us to ask us to complete or correct that information.

You also have the right to request the erasure of your personal data. Please contact us if you would like us to remove your personal data.

Acceptance of this policy
Continued use of our site signifies your acceptance of this policy. If you do not accept the policy then please do not use this site. When registering we will further request your explicit acceptance of the privacy policy.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
