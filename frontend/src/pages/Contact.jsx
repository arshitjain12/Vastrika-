import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="px-4 md:px-0">
      {/* Title Section */}
        <div className="relative text-center pt-16 pb-6 border-t border-amber-100">
             {/* decorative top line */}
             <span
               className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-amber-400 opacity-50"
             />
             <p
               className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-3 font-medium"
               style={{ fontFamily: "'Jost', sans-serif" }}
             >
               See US
             </p>
             <Title text1={"CONTACT"} text2={"US"} />
           </div>

      {/* Main Content */}
      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mb-28">
        
        {/* Left: Image with Hover Zoom Effect */}
        <div className="w-full md:w-1/2 max-w-[500px] overflow-hidden rounded-2xl shadow-lg">
          <img
            className="w-full h-[400px] md:h-[550px] object-cover object-top hover:scale-105 transition-transform duration-700"
            src={assets.vastrikaoutlet}
            alt="Vastrika Store"
          />
        </div>

        {/* Right: Contact Details Section */}
        <div className="flex flex-col justify-center items-start gap-8 w-full md:w-1/2 max-w-[450px]">
          
          {/* Store Info Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 w-full hover:shadow-md transition-shadow duration-300">
            <p className="font-bold text-2xl text-gray-800 mb-5 flex items-center gap-3">
              <span className="w-2 h-6 bg-[#c8a96e] rounded-full"></span>
              Our Store
            </p>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                <strong className="text-gray-800 font-medium">Address:</strong><br />
                Sector 22, MP Nagar, Bhopal,<br /> 
                Madhya Pradesh 462011, India
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-800 font-medium">Contact:</strong><br />
                Tel: +91 8871807465 <br /> 
                Email: Arshitjain7@gmail.com
              </p>
            </div>
          </div>

          {/* Career Info Card */}
          <div className="bg-[#fdfaf7] p-6 md:p-8 rounded-2xl border border-[#e8dcc6] w-full">
            <p className="font-bold text-2xl text-gray-800 mb-3">
              Careers at Vastrika
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join our growing team and help us redefine elegance. Learn more about our open roles and culture.
            </p>
            <button className="border border-black bg-transparent text-black px-8 py-3 text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500 shadow-sm hover:shadow-lg">
              Explore Jobs
            </button>
          </div>

        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;