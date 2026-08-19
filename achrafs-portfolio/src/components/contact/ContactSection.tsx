import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch(
        "https://portfolio-website-iiqs.onrender.com/sendContactFormSubmission",
        {
          method: "POST",
          body: JSON.stringify(formState),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      className="w-full flex justify-center items-center py-16 md:py-36"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto"
      >
        {/* Card Container matching project cards */}
        <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-8 border border-surface-raised/50 shadow-xl">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Mail className="w-6 h-6 text-accent-soft" />
            </div>
            <h2 className="text-3xl font-bold text-fg">Contact Me</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-fg-muted" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="form-input pl-11 pr-4 py-3"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-danger"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-fg-muted" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="form-input pl-11 pr-4 py-3"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-danger"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MessageSquare className="w-5 h-5 text-fg-muted" />
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="form-input pl-11 pr-4 py-3"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-danger"
                >
                  {errors.subject}
                </motion.p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="form-input p-4 resize-none"
                placeholder="Your message here..."
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-danger"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 
                       bg-accent-strong hover:bg-accent 
                       rounded-lg font-medium text-fg
                       transition-colors duration-200
                       shadow-lg shadow-accent/25"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
