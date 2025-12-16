import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full min-h-screen mt-10 rounded-2xl">

      {/* HERO SECTION */}
      <section className="w-full py-20 bg-(--color-secondary) text-(--color-text-main) rounded-2xl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">About Nexora</h1>
          <p className="mt-4 text-lg md:text-xl text-(--color-text-subtle) max-w-3xl mx-auto">
            Your trusted destination for the latest smartphones, unbeatable prices,
            and premium customer service.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-main)">Our Story</h2>
          <p className="mt-4 leading-relaxed">
            Nexora began with a simple mission: make premium smartphones affordable
            and accessible to everyone. What started as a small online store quickly
            became one of India's most trusted smartphone e-commerce platforms.
          </p>
          <p className="mt-4 leading-relaxed">
            We believe buying a smartphone should be easy, transparent, and stress-free.
            That's why we offer original products, lightning-fast delivery, and
            responsive customer support—so you always get the best shopping experience.
          </p>
        </div>

        <img
          src='/images/about.jpg'
          alt="Our Story"
          className="rounded-2xl shadow-xl object-cover w-full h-80"
        />
      </section>

      {/* MISSION & VISION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-(--color-bg-card) p-8 rounded-2xl shadow-lg border border-(--color-border)">
            <h3 className="text-2xl font-bold text-(--color-text-subtle)">Our Mission</h3>
            <p className="mt-3 leading-relaxed">
              To bring the latest smartphone technology to customers at honest prices
              while providing unmatched service and support.
            </p>
          </div>

          <div className="bg-(--color-bg-card) p-8 rounded-2xl shadow-lg border border-(--color-border)">
            <h3 className="text-2xl font-bold text-(--color-text-subtle)">Our Vision</h3>
            <p className="mt-3 leading-relaxed">
              To become India’s most loved online smartphone store by focusing on
              quality, affordability, and innovation.
            </p>
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="p-8 rounded-2xl shadow-lg border border-(--color-border) bg-(--color-bg-card)">
            <h2 className="text-4xl font-extrabold text-(--color-text-subtle)">5+</h2>
            <p className="mt-2">Years of Service</p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border border-(--color-border) bg-(--color-bg-card)">
            <h2 className="text-4xl font-extrabold text-(--color-text-subtle)">50K+</h2>
            <p className="mt-2">Happy Customers</p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border border-(--color-border) bg-(--color-bg-card)">
            <h2 className="text-4xl font-extrabold text-(--color-text-subtle)">5000+</h2>
            <p className="mt-2">Smartphones Sold</p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border border-(--color-border) bg-(--color-bg-card)">
            <h2 className="text-4xl font-extrabold text-(--color-text-subtle)">4.9★</h2>
            <p className="mt-2">Customer Rating</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-(--color-secondary) rounded-2xl">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-main) text-center">
            Why Customers Love Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-(--color-bg-card) p-8 rounded-2xl shadow-lg border border-(--color-border)">
              <h3 className="text-xl font-bold text-(--color-text-subtle)">✔ 100% Original Products</h3>
              <p className="mt-3">We sell only brand-authorized original smartphones.</p>
            </div>

            <div className="bg-(--color-bg-card) p-8 rounded-2xl shadow-lg border border-(--color-border)">
              <h3 className="text-xl font-bold text-(--color-text-subtle)">✔ Fast & Safe Shipping</h3>
              <p className="mt-3">Your smartphone reaches you within days, safely packed.</p>
            </div>

            <div className="bg-(--color-bg-card) p-8 rounded-2xl shadow-lg border border-(--color-border)">
              <h3 className="text-xl font-bold text-(--color-text-subtle)">✔ 24/7 Friendly Support</h3>
              <p className="mt-3">We are always available to solve your queries.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="mt-3 text-(--color-text-subtle)">The people who make everything possible.</p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">

            {/* Member */}
            <div className="bg-(--color-bg-card) p-6 rounded-2xl shadow-lg border border-(--color-border)">
              <img
                src="https://txcdn-prod-a1art.xiaopiu.com/assets/images/app_1780115811506135041/1780115811510329346/ecabd66d-a7ba-4251-a43e-5e854a933c64.jpeg"
                className="w-full h-65 object-top rounded-xl"
                alt=""
              />
              <h3 className="text-xl font-bold text-(--color-text-subtle mt-4">Jhon</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
            </div>

            <div className="bg-(--color-bg-card) p-6 rounded-2xl shadow-lg border border-(--color-border)">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDp8vM4inq5nY4oFUBQ0sC_3uZJI-2ye5X9Q&s"
                className="w-full h-65 object-cover rounded-xl"
                alt=""
              />
              <h3 className="text-xl font-bold text-(--color-text-subtle) mt-4">Robort</h3>
              <p className="text-sm text-gray-600">Product Manager</p>
            </div>

            <div className="bg-(--color-bg-card) p-6 rounded-2xl shadow-lg border border-(--color-border)">
              <img
                src="https://static.vecteezy.com/ti/photos-gratuite/t1/36111268-ai-genere-beau-attrayant-europeen-homme-sur-isole-contexte-photo.jpg"
                className="w-full h-65 object-cover rounded-xl"
                alt=""
              />
              <h3 className="text-xl font-bold text-(--color-text-subtle) mt-4">Ben</h3>
              <p className="text-sm text-gray-600">Costomer Care</p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-main) text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-(--color-bg-card) p-8 rounded-2xl shadow-lg border border-(--color-border)">
              <h3 className="text-xl font-bold text-(--color-text-subtle)">Trust</h3>
              <p className="mt-3">We believe in honesty, transparency, and long-term relationships.</p>
            </div>

            <div className="bg-(--color-bg-card) p-8 rounded-2xl shadow-lg border border-(--color-border)">
              <h3 className="text-xl font-bold text-(--color-text-subtle)">Innovation</h3>
              <p className="mt-3">We constantly bring the latest smartphone technology to customers.</p>
            </div>

            <div className="bg-(--color-bg-card) p-8 rounded-2xl shadow-lg border border-(--color-border)">
              <h3 className="text-xl font-bold text-(--color-text-subtle)">Customer First</h3>
              <p className="mt-3">Every decision we make starts with customer satisfaction.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-(--color-secondary) rounded-2xl text-(--color-text-main) text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Join Over 50,000+ Happy Customers</h2>
        <p className="mt-4 mb-6 text-(--color-text-subtle) text-lg max-w-2xl mx-auto px-2">
          Get the latest smartphones, exclusive deals, and the best support in India.
        </p>
        <Link to='/products' className="bg-(--color-bg-page) text-(--color-text-subtle) font-semibold px-10 py-4 rounded-xl text-lg shadow-lg hover:scale-95 transition-all cursor-pointer">
          Shop Now
        </Link>
      </section>

    </div>
  );
}

export default About;
