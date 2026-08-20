import { useState } from "react";
import { API_BASE } from "../../config/api";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

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

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || status === "submitting") return;

    setStatus("submitting");
    try {
      const response = await fetch(`${API_BASE}/sendContactFormSubmission`, {
        method: "POST",
        body: JSON.stringify(formState),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error();
      setFormState({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (status === "success" || status === "error") setStatus("idle");
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      className="flex flex-col items-center gap-12 mt-16 md:mt-36"
      id="contact"
    >
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-5xl font-semibold text-fg mb-12 text-center">
          Contact
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="form-input px-4 py-3"
                placeholder="Name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-danger">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="form-input px-4 py-3"
                placeholder="Email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-danger">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              className="form-input p-4 resize-none"
              placeholder="Message"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-danger">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 px-6 bg-accent-strong hover:bg-accent rounded-lg font-medium text-fg transition-colors duration-200 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send"}
          </button>
          {status === "success" && (
            <p className="text-sm text-fg-secondary">Message sent.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-danger">
              Couldn't send. Try again or email me.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
