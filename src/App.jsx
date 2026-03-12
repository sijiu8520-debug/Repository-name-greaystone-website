export default function App() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about-intro" },
    { label: "Products", href: "#products" },
    { label: "Factory", href: "#factory" },
    { label: "Projects", href: "#projects" },
    { label: "Custom Work", href: "#custom-work" },
    { label: "Contact", href: "#contact" }
  ];

  const stats = [
    { value: "8+", label: "Years of Stone Experience" },
    { value: "300+", label: "Orders Supported" },
    { value: "20+", label: "Material Styles" },
    { value: "100%", label: "Practical Quality Focus" }
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
      desc: "Custom carved stone sink fabrication with clean finishing details and natural stone appeal.",
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

  const projectItems = [
    {
      title: "Villa Exterior Stone",
      desc: "Premium stone solutions for private villa exteriors and facade applications.",
      image: "/hero.jpg"
    },
    {
      title: "Custom Granite Fabrication",
      desc: "Processed granite pieces for hardscape, municipal, and outdoor projects.",
      image: "/products/granite1.jpg"
    },
    {
      title: "Interior Marble Application",
      desc: "Decorative and functional marble selections for interior spaces.",
      image: "/products/samplewall.jpg"
    },
    {
      title: "Bathroom Stone Product",
      desc: "Custom sink and bathroom stone fabrication with natural pattern appeal.",
      image: "/products/sink.jpg"
    }
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

  return (
    <div className="site-shell">
      <header className="site-header site-header-overlay">
        <div className="container header-inner">
          <a href="#home" className="brand brand-reference">
            <img src="/logo.png" alt="GREAYSTONE logo" className="brand-logo logo-natural" />
            <div className="brand-text">
              <div className="brand-name brand-name-light">GREAYSTONE</div>
              <div className="brand-subtitle brand-subtitle-light">
                STONE PROCESSING & SUPPLY
              </div>
            </div>
          </a>

          <nav className="desktop-nav desktop-nav-light">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="header-btn hero-header-btn">
            Get Quote
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero-clean-section">
          <img src="/hero.jpg" alt="Luxury stone villa project" className="hero-bg" />
          <div className="hero-clean-overlay" />
        </section>

        <section id="about-intro" className="intro-panel-wrap">
          <div className="container">
            <div className="intro-panel">
              <div className="intro-panel-left">
                <div className="hero-badge intro-badge">
                  Crafted Stone. Reliable Supply.
                </div>

                <h1 className="intro-title">
                  Your Trusted Partner
                  <span>in Building Materials</span>
                </h1>

                <div className="intro-title-line"></div>

                <p className="intro-description">
                  Quality stone solutions and factory-supported supply for builders,
                  wholesalers, designers, and project buyers. We specialize in granite,
                  marble, custom fabrication, and dependable project support.
                </p>

                <div className="hero-actions">
                  <a href="#contact" className="primary-btn">
                    Get a Quote
                  </a>
                  <a href="#products" className="secondary-btn secondary-btn-dark">
                    View Products
                  </a>
                </div>
              </div>

              <div className="intro-panel-right">
                <div className="stats-grid">
                  {[
                    { value: "8+", label: "Years of Stone Experience" },
                    { value: "300+", label: "Orders Supported" },
                    { value: "20+", label: "Material Styles" },
                    { value: "100%", label: "Practical Quality Focus" }
                  ].map((stat) => (
                    <div className="intro-stat-card" key={stat.label}>
                      <div className="intro-stat-value">{stat.value}</div>
                      <div className="intro-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="floating-strip-wrap clean-strip-wrap">
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

            <div className="product-showcase-grid">
              {products.map((item) => (
                <article className="product-card product-card-enhanced" key={item.title}>
                  <div className="product-image-wrap">
                    <img src={item.image} alt={item.title} className="product-image" />
                    <div className="product-tag">{item.tag}</div>
                  </div>

                  <div className="product-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>

                    <div className="product-meta">
                      <span>Custom Support</span>
                      <span>Project Supply</span>
                    </div>

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

            <div className="factory-featured">
              <div className="factory-featured-image">
                <img src="/factory/factory1.jpg" alt="Factory featured view" />
              </div>

              <div className="factory-featured-text">
                <div className="factory-mini-label">Production Capability</div>
                <h3>From slab storage to machine processing, we work with real resources.</h3>
                <p>
                  Our website uses real workshop and warehouse photos to reflect the
                  actual operating condition behind our supply. That matters for buyers
                  who value consistency, production support, and practical execution.
                </p>

                <div className="factory-points">
                  <div className="factory-point">Stone slab inventory support</div>
                  <div className="factory-point">CNC and cutting capability</div>
                  <div className="factory-point">Workshop-based custom fabrication</div>
                  <div className="factory-point">Project-oriented material handling</div>
                </div>
              </div>
            </div>

            <div className="factory-gallery-grid">
              {factoryItems.map((item) => (
                <div className="factory-card refined-factory-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div className="factory-card-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section white-section">
          <div className="container">
            <div className="section-head split-head">
              <div>
                <div className="section-label">Project Case</div>
                <h2>Stone applications that reflect practical project capability.</h2>
                <p>
                  We support project-oriented supply with materials and fabrication
                  suited for architectural, interior, and outdoor stone applications.
                </p>
              </div>

              <a href="#contact" className="text-link">
                Ask about your project →
              </a>
            </div>

            <div className="project-grid">
              {projectItems.map((item) => (
                <article className="project-card" key={item.title}>
                  <div className="project-image-wrap">
                    <img src={item.image} alt={item.title} className="project-image" />
                  </div>

                  <div className="project-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href="#contact" className="text-link small-link">
                      Discuss this type of project →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-banner-section">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-text">
                <div className="section-label gold-label">Quick Project Inquiry</div>
                <h2>Need granite, marble, or custom fabrication support?</h2>
                <p>
                  Contact us for specifications, quotations, custom requests, and
                  project-based supply support.
                </p>
              </div>

              <div className="cta-banner-actions">
                <a href="#contact" className="primary-btn dark-btn">
                  Request a Quote
                </a>
                <a
                  href="https://wa.me/12137920548?text=Hello%20I%20am%20interested%20in%20your%20stone%20products.%20Could%20you%20please%20share%20more%20details%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="outline-btn cta-outline-btn"
                >
                  WhatsApp Us
                </a>
              </div>
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
                value="https://repository-name-greaystone-website.vercel.app/thank-you.html"
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
          href="https://wa.me/12137920548?text=Hello%20I%20am%20interested%20in%20your%20stone%20products.%20Could%20you%20please%20share%20more%20details%3F"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float whatsapp-float-enhanced"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="whatsapp-icon-wrap">
            <svg viewBox="0 0 32 32" className="whatsapp-icon" aria-hidden="true">
              <path d="M19.11 17.33c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.09-.16.19-.32.21-.6.07-.28-.14-1.16-.43-2.21-1.37-.82-.73-1.38-1.62-1.54-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.33s1.01 2.68 1.15 2.86c.14.19 1.97 3 4.77 4.2.67.29 1.2.46 1.61.59.68.22 1.29.19 1.78.12.54-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33Z" />
              <path d="M16.01 3.2c-7.07 0-12.8 5.72-12.8 12.77 0 2.24.59 4.43 1.71 6.35L3.1 28.8l6.65-1.74a12.82 12.82 0 0 0 6.25 1.61h.01c7.06 0 12.79-5.72 12.79-12.77 0-3.42-1.34-6.64-3.75-9.05A12.72 12.72 0 0 0 16.01 3.2Zm0 23.31h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.95 1.03 1.06-3.84-.25-.39a10.58 10.58 0 0 1-1.63-5.67c0-5.9 4.82-10.7 10.74-10.7 2.87 0 5.57 1.11 7.59 3.12a10.6 10.6 0 0 1 3.15 7.58c0 5.9-4.82 10.69-10.86 10.69Z" />
            </svg>
          </span>

          <span className="whatsapp-text-group">
            <strong>WhatsApp</strong>
            <small>Chat with us now</small>
          </span>

          <span className="whatsapp-badge">Online</span>
        </a>
      </main>

      <footer className="site-footer">
        © 2026 GREAYSTONE Stone Processing & Construction Materials. All rights reserved.
      </footer>
    </div>
  );
}
