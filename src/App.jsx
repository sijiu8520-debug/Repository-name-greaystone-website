export default function App() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Factory", href: "#factory" },
    { label: "Custom Work", href: "#custom-work" },
    { label: "Contact", href: "#contact" }
  ];

  const products = [
    {
      title: "Stone Sample Collection",
      desc: "A rich material library covering marble, granite, and decorative selections for residential and commercial projects.",
      image: "/products/samplewall.jpg",
      tag: "Material Library"
    },
    {
      title: "Stone Bathroom Sink",
      desc: "Custom carved stone sink fabrication with a strong visual character and clean finishing details.",
      image: "/products/sink.jpg",
      tag: "Custom Product"
    },
    {
      title: "Granite Engineering Stone",
      desc: "Durable granite pieces suitable for outdoor paving, construction support, and engineering use.",
      image: "/products/granite1.jpg",
      tag: "Granite Works"
    },
    {
      title: "Granite Structural Blocks",
      desc: "Processed granite blocks and shaped components built for practical site applications and custom orders.",
      image: "/products/granite2.jpg",
      tag: "Fabrication"
    }
  ];

  const factoryItems = [
    { title: "Warehouse Space", image: "/factory/factory1.jpg" },
    { title: "Stone Inventory", image: "/factory/factory2.jpg" },
    { title: "CNC Equipment", image: "/factory/machine.jpg" },
    { title: "Slab Storage", image: "/factory/factory3.jpg" }
  ];

  const customItems = [
    {
      title: "Curved Granite Pieces",
      desc: "Custom curved stone components for outdoor, municipal, and architectural applications.",
      image: "/products/granite2.jpg"
    },
    {
      title: "Granite Structural Units",
      desc: "Processed granite units for engineering and hardscape requirements.",
      image: "/products/granite1.jpg"
    },
    {
      title: "Bathroom Stone Products",
      desc: "Stone sink and bathroom fabrication with expressive natural patterning.",
      image: "/products/sink.jpg"
    },
    {
      title: "Selection & Matching",
      desc: "A broad stone sample system for design matching and client selection support.",
      image: "/products/samplewall.jpg"
    }
  ];

  const strengths = [
    {
      title: "Processing Knowledge",
      desc: "We understand stone fabrication from the workshop side, including edge work, shaping, finishing, and packing."
    },
    {
      title: "Reliable Delivery",
      desc: "We focus on stable timelines, practical communication, and repeatable supply quality."
    },
    {
      title: "Custom Project Support",
      desc: "From sinks to curved granite pieces, we support custom fabrication with a flexible and factory-minded approach."
    }
  ];

  const stats = [
    { value: "8+", label: "Years of Stone Experience" },
    { value: "300+", label: "Orders Supported" },
    { value: "20+", label: "Material Styles" },
    { value: "100%", label: "Practical Quality Focus" }
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand">
            <img src="/logo.png" alt="GREAYSTONE logo" className="brand-logo" />
            <div className="brand-text">
              <div className="brand-name">GREAYSTONE</div>
              <div className="brand-subtitle">Stone Processing & Supply</div>
            </div>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="header-btn">
            Get Quote
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <img src="/hero.jpg" alt="Stone building project" className="hero-bg" />
          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-left">
              <div className="hero-badge">Crafted Stone. Reliable Supply.</div>

              <h1>
                Your Trusted Partner
                <span>in Stone Processing</span>
              </h1>

              <p>
                GREAYSTONE is a practical stone processing and supply company built
                on real factory experience. We specialize in custom fabrication,
                marble and granite products, project-based support, and dependable
                service for builders, designers, and wholesalers.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-btn">
                  Request a Quote
                </a>
                <a href="#products" className="secondary-btn">
                  Explore Products
                </a>
              </div>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="floating-strip-wrap">
          <div className="container">
            <div className="floating-strip">
              <div className="strip-card">
                Stone processing backed by factory-side experience
              </div>
              <div className="strip-card">
                Custom fabrication for practical project needs
              </div>
              <div className="strip-card">
                Direct contact via Email, Phone, and WhatsApp
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="container two-col">
            <div className="image-panel large-panel">
              <img src="/products/samplewall.jpg" alt="Stone sample wall" />
              <div className="image-note">
                <div className="image-note-title">Material Selection</div>
                <div className="image-note-text">Rich stone patterns and finishes</div>
              </div>
            </div>

            <div className="text-panel">
              <div className="section-label">About GreatStone</div>
              <h2>Built by workshop experience, shaped for real business.</h2>
              <p>
                Our founder comes from China’s stone processing sector, with years
                of familiarity in slab selection, surface finishing, cutting,
                shaping, edge work, packing, and factory coordination.
              </p>
              <p>
                We present ourselves as a capable, growing supplier operating at a
                realistic several-million-dollar business scale. Not a giant
                corporate group, and not a template-only trading profile either.
                Just a reliable company that knows the product and respects the work.
              </p>

              <div className="feature-grid">
                <div className="feature-chip">Stone processing expertise</div>
                <div className="feature-chip">Clear factory-side communication</div>
                <div className="feature-chip">Export packaging awareness</div>
                <div className="feature-chip">Long-term partnership mindset</div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="content-section white-section">
          <div className="container">
            <div className="section-head split-head">
              <div>
                <div className="section-label">Our Products</div>
                <h2>Stone products designed for real-world use.</h2>
                <p>
                  We support project buyers, contractors, wholesalers, and
                  design-driven clients with carefully matched stone products and
                  fabrication options.
                </p>
              </div>

              <a href="#contact" className="text-link">
                Contact for more products →
              </a>
            </div>

            <div className="card-grid four-grid">
              {products.map((item) => (
                <article className="product-card" key={item.title}>
                  <div className="product-image-wrap">
                    <img src={item.image} alt={item.title} className="product-image" />
                    <div className="product-tag">{item.tag}</div>
                  </div>
                  <div className="product-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href="#contact" className="text-link small-link">
                      Ask for details →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="factory" className="content-section">
          <div className="container">
            <div className="section-head">
              <div className="section-label">Factory & Production</div>
              <h2>Real workshop capability, shown with real images.</h2>
              <p>
                We show actual processing and storage photos because credibility
                matters. Our supply ability comes from material handling and
                production reality, not just polished words.
              </p>
            </div>

            <div className="card-grid factory-grid">
              {factoryItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`factory-card ${index === 0 ? "factory-card-wide" : ""}`}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="factory-card-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="custom-work" className="content-section dark-section">
          <div className="container">
            <div className="section-head">
              <div className="section-label gold-label">Custom Fabrication</div>
              <h2>Cut-to-size, curved pieces, and project-based stone work.</h2>
              <p>
                Beyond standard slabs, we support practical custom fabrication for
                construction and landscaping projects, including edge processing,
                shaped pieces, structural granite components, and selected custom
                stone products.
              </p>
            </div>

            <div className="card-grid four-grid">
              {customItems.map((item) => (
                <article className="dark-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div className="dark-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="strength-panel">
              <div className="section-label gold-label">Why Choose Us</div>
              <h2>We understand material, fabrication, and trade execution.</h2>

              <div className="strength-grid">
                {strengths.map((item, index) => (
                  <div className="strength-card" key={item.title}>
                    <div className="strength-number">0{index + 1}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section white-section">
          <div className="container two-col secondary-two-col">
            <div className="text-panel">
              <div className="section-label">Working Style</div>
              <h2>Professional sourcing with a straightforward mindset.</h2>
              <p>
                In stone supply and fabrication, reliability is the real luxury.
                Beautiful samples mean little if follow-up is weak, packaging fails,
                or timing slips. We focus on the details that keep projects moving
                and help clients buy with confidence.
              </p>
            </div>

            <div className="work-grid">
              <div className="work-card">Sample support for buyers</div>
              <div className="work-card">Factory coordination on specifications</div>
              <div className="work-card">Packaging and loading awareness</div>
              <div className="work-card">Responsive communication during orders</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-overlay" />
          <div className="container contact-grid">
            <div className="contact-left">
              <div className="section-label gold-label">Contact Us</div>
              <h2>Let’s discuss your material needs.</h2>
              <p>
                Contact us directly by email, phone, or WhatsApp for product
                details, custom fabrication, quotations, and shipment discussions.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-label">Email</div>
                  <a href="mailto:Jerry6854916@outlook.com">
                    Jerry6854916@outlook.com
                  </a>
                </div>

                <div className="contact-card">
                  <div className="contact-card-label">WhatsApp</div>
                  <a href="https://wa.me/12137920548" target="_blank" rel="noreferrer">
                    +1 213 792 0548
                  </a>
                </div>

                <div className="contact-card">
                  <div className="contact-card-label">Phone</div>
                  <a href="tel:17472728014">+1 747 272 8014</a>
                </div>
              </div>
            </div>

            <form
              action="https://formsubmit.co/Jerry6854916@outlook.com"
              method="POST"
              className="inquiry-form"
            >
              <input type="hidden" name="_subject" value="New Inquiry from GREAYSTONE Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input
                type="hidden"
                name="_next"
                value="https://your-vercel-domain.vercel.app/"
              />

              <div className="form-head">
                <div className="form-label">Quick Inquiry</div>
                <div className="form-title">Tell us what you need</div>
              </div>

              <div className="form-row">
                <input type="text" name="name" required placeholder="Your Name" />
                <input type="email" name="email" required placeholder="Email Address" />
              </div>

              <div className="form-row">
                <input type="text" name="phone" placeholder="Phone Number" />
                <input type="text" name="product_interest" placeholder="Product Interest" />
              </div>

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell us what materials you need, project size, destination, or custom fabrication requirements..."
              />

              <div className="form-actions">
                <button type="submit" className="primary-btn dark-btn">
                  Send Inquiry
                </button>
                <a
                  href="https://wa.me/12137920548"
                  target="_blank"
                  rel="noreferrer"
                  className="outline-btn"
                >
                  WhatsApp Direct
                </a>
              </div>
            </form>
          </div>
        </section>

        <a
          href="https://wa.me/12137920548"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          WhatsApp Us
        </a>
      </main>

      <footer className="site-footer">
        © 2026 GREAYSTONE Stone Processing & Construction Materials. All rights reserved.
      </footer>
    </div>
  );
}
