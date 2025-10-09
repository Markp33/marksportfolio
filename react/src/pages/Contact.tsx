import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-screen">
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get In Touch<span className="text-purple-600">.</span>
        </h2>
        <p className="text-lg text-gray-600 mt-6">
          Looking to partner or work together? Reach out through the form and
          I'll get back to you in the next 48 hours.
        </p>

        <div className="mt-10 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 border rounded-full">
              <Mail className="text-gray-700" />
            </div>
            <span className="text-gray-700 text-lg">markptr700@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 border rounded-full">
              <Phone className="text-gray-700" />
            </div>
            <span className="text-gray-700 text-lg">+31 6 45890954</span>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-0">
        <div className="w-104 h-104 rounded-full border-2 border-purple-400 p-2 animate-float">
          <img
            src="/img/me.jpg"
            alt="Mark"
            className="w-full h-full object-cover rounded-full drag-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
