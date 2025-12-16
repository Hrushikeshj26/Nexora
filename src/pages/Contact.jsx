function Contact() {
  return (
    <div className="min-h-screen w-full bg-(--color-bg-card) flex flex-col items-center px-6 py-16 rounded-2xl mt-10">

      {/* Heading */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-(--color-text-main)">Contact Us</h1>
        <p className="text-(--color-text-subtle) mt-3 text-lg">
          Have questions about smartphones, orders or support? We're here to help!
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-10">

        {/* Left Contact Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-(--color-border)">

          <h2 className="text-2xl font-bold text-(--color-text-main)">Get in Touch</h2>

          <p className="text-gray-600">
            Our support team will respond within 24 hours.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-(--color-text-subtle)">Phone</h3>
              <p className="text-gray-700">+91 8882224456</p>
            </div>

            <div>
              <h3 className="font-semibold text-(--color-text-subtle)">Email</h3>
              <p className="text-gray-700">support@nexora.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-(--color-text-subtle)">Address</h3>
              <p className="text-gray-700">
                Nexora HQ,<br /> Mumbai, Maharashtra 400001
              </p>
            </div>
          </div>

        </div>

        {/* Right Contact Form */}
        <form className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-(--color-border)">

          <h2 className="text-2xl font-bold text-(--color-text-main)">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-(-color-border) focus:border-(--color-primary) outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-(-color-border) focus:border-(--color-primary) outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-lg border border-(-color-border) focus:border-(--color-primary) outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-lg border border-(-color-border) focus:border-(--color-primary) outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-(--color-primary) hover:bg-(--color-primary-hover) text-white hover:scale-95 font-semibold py-3 rounded-lg text-lg transition-all"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;
