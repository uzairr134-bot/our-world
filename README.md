<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uzair & Tamveel</title>
    <meta
      name="description"
      content="A romantic space for our memories, photos, location, and special days."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="topbar">
        <div class="brand">Uzair & Tamveel</div>
        <nav class="nav">
          <a href="#home">Home</a>
          <a href="#story">Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#moments">Moments</a>
          <a href="#location">Location</a>
        </nav>
      </header>

      <main>
        <section class="hero" id="home">
          <div class="hero__text">
            <p class="eyebrow">Made with love</p>
            <h1>Hello, this is our world</h1>
            <p class="hero__lead">
              A little space made only for us — full of our favorite photos,
              sweet memories, beautiful places, and every moment that made our
              love feel like home.
            </p>
            <div class="hero__actions">
              <a class="button button--primary" href="#gallery">See our gallery</a>
              <a class="button button--secondary" href="#location">Pin our place</a>
            </div>
          </div>

          <div class="hero__card">
            <div class="hero__photo-frame">
              <img
                src="UZAIR23.jpeg"
                alt="Couple together"
              />
            </div>
            <div class="hero__mini-stats">
              <div>
                <span>Photos</span>
                <strong>∞</strong>
              </div>
              <div>
                <span>Memories</span>
                <strong>❤</strong>
              </div>
              <div>
                <span>Forever</span>
                <strong>Us</strong>
              </div>
            </div>
          </div>
        </section>

        <section class="story" id="story">
          <div class="section-heading">
            <p class="eyebrow">Our story</p>
            <h2>Every chapter feels like a love letter.</h2>
          </div>

          <div class="story__layout">
            <div class="story__text">
              <p>
                From the first hello to the many little moments in between, you
                have made my world softer, brighter, and more beautiful. This is
                a place for all the quiet glances, warm smiles, and unforgettable
                memories that only we understand.
              </p>
              <p>
                Every photo here is a reminder that love grows in the details —
                the laughter, the comfort, the shared dreams and the places where
                our hearts always seem to find each other.
              </p>
            </div>

            <div class="story__card">
              <p class="quote-mark">“</p>
              <p>
                I love the way life feels easier, kinder, and more beautiful
                when you are in it.
              </p>
              <span>— Uzair & Tamveel</span>
            </div>
          </div>
        </section>

        <section class="gallery section" id="gallery">
          <div class="section-heading">
            <p class="eyebrow">Our gallery</p>
            <h2>Snapshots of us.</h2>
          </div>
          <div class="gallery-grid" id="gallery-grid"></div>
        </section>

        <section class="moments section" id="moments">
          <div class="section-heading">
            <p class="eyebrow">Pinned memories</p>
            <h2>Our favorite days stay close to my heart.</h2>
          </div>
          <div class="timeline" id="timeline"></div>
        </section>

        <section class="location section" id="location">
          <div class="section-heading">
            <p class="eyebrow">Where we are</p>
            <h2>Always together, no matter where life takes us.</h2>
          </div>

          <div class="location__layout">
            <div class="map-card">
              <div class="map-card__badge">Our place</div>
              <div class="map-view">
                <div class="pin"></div>
              </div>
              <div class="location__meta">
                <strong>Home is where we are</strong>
                <p>City: Srinagar, Jammu & Kashmir</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Srinagar+Jammu+and+Kashmir"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open map
                </a>
              </div>
            </div>

            <div class="location__info">
              <p>
                Some days are about the places we visit, and some are about the
                feeling of being safe and happy in each other’s company. That’s
                the real magic of us, and Srinagar feels like one of those memories
                we will always carry in our hearts.
              </p>
              <ul>
                <li>Lake walks and calm evenings</li>
                <li>Beautiful streets and cozy moments</li>
                <li>Late-night talks and morning smiles</li>
                <li>Dreams we have yet to live together</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="note section">
          <div class="note__card">
            <p class="eyebrow">A little note</p>
            <h2>To my love, Tamveel</h2>
            <p>
              You are my favorite person, my sweetest comfort, and my most
              treasured forever. This world is beautiful because you are in it.
            </p>
          </div>
        </section>
      </main>

      <footer class="footer">
        <p>Made with love for Uzair & Tamveel • <span id="year"></span></p>
      </footer>
    </div>

    <script src="script.js"></script>
  </body>
</html>
