import { useState } from "react";
import { portfolioData } from "../data/portfolio";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="w-full py-20 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Accelerate your vision. At speed and with precision.
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Let's work together to bring your ideas to life. I'm always looking for
          interesting projects and partnerships.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-teal-400 hover:text-teal-300 transition"
              >
                {portfolioData.personal.email}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <a href={`tel:${portfolioData.personal.phone}`} className="text-teal-400 hover:text-teal-300 transition">
                {portfolioData.personal.phone}
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Connect</h3>
              <div className="space-y-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal-400 hover:text-teal-300 transition"
                >
                  GitHub →
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal-400 hover:text-teal-300 transition"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-teal-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-teal-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-500 text-black font-bold rounded hover:bg-teal-400 transition"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-teal-400 text-center">Message sent successfully! 🎉</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
