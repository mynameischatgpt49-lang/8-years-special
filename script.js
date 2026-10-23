/**
 * EIGHT YEARS OF LOVE - 16 LOVE LETTERS
 * Interactive Experience & Romantic Audio Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initAnniversaryCounter();
  initLettersGrid();
  initRosePetalsCanvas();
  initRomanticAudioEngine();
  initModalInteractions();
  initLightboxInteractions();
  initSecretNotesBox();
  initKeyboardNav();
});

/* ==========================================================================
   LETTERS DATA STORE (16 Unique Romantic Letters)
   ========================================================================== */
const LETTERS_DATA = [
  {
    id: 1,
    num: "Letter I",
    roman: "I",
    date: "September 29, 2025",
    category: "romantic",
    aspect: "portrait",
    image: "images/20250929_095951.jpg",
    caption: "In the glow of celebrations, you are my only festival.",
    salutation: "My Dearest Love,",
    title: "The Colors of the World Fade Beside You",
    preview: "Amidst the grand celebrations, the rhythmic drumbeats, and the golden lights all around us, my eyes never wandered from you. Standing beside you in front of that mirror...",
    fullLetter: [
      "Amidst the grand celebrations, the rhythmic drumbeats, and the golden lights all around us, my eyes never wandered from you. Standing beside you in front of that mirror, framed by crimson and art, I saw our whole journey reflected back at me.",
      "The world was busy celebrating, but my quiet celebration was right there—having your shoulder brushing mine, seeing that subtle, precious smile that you reserve only for me. You looked breathtaking in that purple dupatta and maroon, glowing brighter than any chandelier.",
      "Eight years ago, our love began like a spark. Standing beside you here, that spark has become an eternal sanctuary. In every crowd, in every city, in every lifetime, you will always be the only one I see."
    ],
    signoff: "Forever Yours in Every Crowd,",
    author: "Dip"
  },
  {
    id: 2,
    num: "Letter II",
    roman: "II",
    date: "October 20, 2025",
    category: "romantic",
    aspect: "landscape",
    image: "images/20251020_231418.jpg",
    caption: "Your hand over my heart, where you have always belonged.",
    salutation: "My Sweetest Heart,",
    title: "Wrapped in Tradition, Anchored in Your Touch",
    preview: "It was late in the evening when the rest of the world had gone quiet. You draped yourself in that elegant red and charcoal saree, and in that moment, time simply stopped...",
    fullLetter: [
      "It was late in the evening when the rest of the world had gone quiet. You draped yourself in that elegant red and charcoal saree, and in that moment, time simply stopped.",
      "When you placed your hand tenderly against my chest, right over my heartbeat, I felt an overwhelming wave of gratitude. Every beat beneath your fingertips belongs to you, beating to the rhythm of the promises we’ve kept across eight beautiful years.",
      "Thank you for being my anchor, my gentle warmth, and the most radiant grace in my life. Loving you is as effortless as breathing."
    ],
    signoff: "Beating Only for You,",
    author: "Dip"
  },
  {
    id: 3,
    num: "Letter III",
    roman: "III",
    date: "October 23, 2025",
    category: "milestone",
    aspect: "landscape",
    image: "images/20251023_125538.jpg",
    caption: "October 23rd: Every step with you is my favorite journey.",
    salutation: "My Beautiful Companion,",
    title: "Walking Down the Road of Our Forever",
    preview: "October 23rd has forever rewritten the calendar of my soul. Walking down that sun-dappled lane with you, beneath the whispering green leaves, I realized something so simple yet so profound...",
    fullLetter: [
      "October 23rd has forever rewritten the calendar of my soul. Walking down that sun-dappled lane with you, beneath the whispering green canopy, I realized something so simple yet so profound: there is no road on this Earth I wouldn't walk, as long as your hand is in mine.",
      "You were glowing in crimson, the midday sun kissing your cheeks, and your smile made the whole world feel light. We have walked through rain and sunshine, through quiet whispers and triumphant milestones.",
      "Here we are, celebrating yet another milestone of us. With every step we take together, tomorrow looks even brighter than today."
    ],
    signoff: "Walking Beside You Always,",
    author: "Dip"
  },
  {
    id: 4,
    num: "Letter IV",
    roman: "IV",
    date: "February 14, 2026",
    category: "playful",
    aspect: "landscape",
    image: "images/20260214_144247.jpg",
    caption: "Riverside breezes, a playful wink, and endless laughter.",
    salutation: "My Valentine, Today and Forever,",
    title: "The Sunshine in Your Playful Wink",
    preview: "The river flowed gently behind us, carrying with it the afternoon breeze, but all the warmth came from your smile. You gave that adorable wink and peace sign...",
    fullLetter: [
      "The river flowed gently behind us, carrying with it the afternoon breeze, but all the warmth came from your smile. You gave that adorable wink and peace sign, and in an instant, you reminded me why loving you is the greatest joy of my life.",
      "You bring such effortless fun, joy, and light into every single day. Even when life gets noisy, a single playful glance from you can dissolve every ounce of worry in my chest.",
      "Valentine’s Day isn’t just once a year for us; every single day spent by your side is filled with love, laughter, and romance."
    ],
    signoff: "Eternally Charmed by You,",
    author: "Dip"
  },
  {
    id: 5,
    num: "Letter V",
    roman: "V",
    date: "February 14, 2026",
    category: "playful",
    aspect: "landscape",
    image: "images/20260214_161946.jpg",
    caption: "Neon hearts, cafe corners, and the cutest scrunch of your nose.",
    salutation: "My Darling Girl,",
    title: "The Little Expressions I Fall For Every Day",
    preview: "There were neon hearts glowing in the cafe window, but nothing was brighter than your mischievous smile. The way you scrunched your nose at me is etched forever into my memory...",
    fullLetter: [
      "There were neon hearts glowing in the cafe window, but nothing was brighter than your mischievous smile. The way you scrunched your nose at me is etched forever into my memory.",
      "It’s these little, candid quirks that make you so uniquely, undeniably you. In eight years, I have memorized the thousands of expressions you make—when you're excited, when you're laughing at a silly joke, when you're playfully teasing me.",
      "And the truth is, I fall in love with you all over again with each and every one of them."
    ],
    signoff: "Your Biggest Admirer,",
    author: "Dip"
  },
  {
    id: 6,
    num: "Letter VI",
    roman: "VI",
    date: "February 14, 2026",
    category: "romantic",
    aspect: "portrait",
    image: "images/20260214_162031.jpg",
    caption: "Two pairs of hands, crafting one indivisible heart.",
    salutation: "To My Soulmate,",
    title: "A Heart Shaped by Our Own Hands",
    preview: "We brought our fingers together, curving them until they formed the shape of a heart against the cafe facade. It took two of us to complete the frame...",
    fullLetter: [
      "We brought our fingers together, curving them until they formed the shape of a heart against the cafe facade. It took two of us to complete the frame, just as it takes both of our souls to complete this wonderful love story.",
      "Love isn’t something that happens by accident; it is something we have built together with patience, understanding, late-night conversations, and unwavering loyalty across 2,922 days.",
      "Whenever our fingers touch, everything feels complete. You are the missing piece I never have to look for again."
    ],
    signoff: "Interlocked with You Forever,",
    author: "Dip"
  },
  {
    id: 7,
    num: "Letter VII",
    roman: "VII",
    date: "February 22, 2026",
    category: "cozy",
    aspect: "portrait",
    image: "images/20260222_154405.jpg",
    caption: "Resting on my shoulder, breathing in the quiet peace of us.",
    salutation: "My Sweet Sanctuary,",
    title: "Where the Whole World Falls Silent",
    preview: "On a quiet afternoon, you laid your head upon my shoulder, closed your eyes, and let out a gentle sigh of complete contentment. In that stillness, I felt the purest form of peace...",
    fullLetter: [
      "On a quiet afternoon, you laid your head upon my shoulder, closed your eyes, and let out a gentle sigh of complete contentment. In that stillness, I felt the purest form of peace.",
      "The world outside can rush, the days can be loud, but right here against my shoulder, you are safe. And having you resting on me makes me feel like the strongest, luckiest man alive.",
      "Home isn't a place or four walls; home is whenever you rest your head against me and we breathe the same peaceful air. I promise to always be the shoulder you can lean on, through every storm and every sunset."
    ],
    signoff: "Your Safe Haven,",
    author: "Dip"
  },
  {
    id: 8,
    num: "Letter VIII",
    roman: "VIII",
    date: "April 26, 2026",
    category: "playful",
    aspect: "landscape",
    image: "images/20260426_135905.jpg",
    caption: "Blue windows, bright sunlight, and dreams as vast as the sky.",
    salutation: "My Constant Dreamer,",
    title: "Dreaming Big Because I Dream With You",
    preview: "Sitting by that vibrant Mediterranean blue window, with white brick walls and warm daylight washing over us, I looked at you and knew that our future holds infinite magic...",
    fullLetter: [
      "Sitting by that vibrant Mediterranean blue window, with white brick walls and warm daylight washing over us, I looked at you and knew that our future holds infinite magic.",
      "My shirt that day said 'Dream Big, Make It Happen', but the truth is, having you by my side is what gives me the courage to dream in the first place. You believe in me even when I doubt myself. You turn every challenge into an adventure.",
      "Whatever tomorrow brings, whatever cities we explore or dreams we chase, doing it with you makes the whole universe feel wide open and beautiful."
    ],
    signoff: "Dreaming with You Always,",
    author: "Dip"
  },
  {
    id: 9,
    num: "Letter IX",
    roman: "IX",
    date: "May 1, 2026",
    category: "romantic",
    aspect: "portrait",
    image: "images/20260501_193928.jpg",
    caption: "A rose crafted loop by loop, never destined to wither.",
    salutation: "My Everlasting Blossom,",
    title: "A Love That Outlasts the Seasons",
    preview: "Fresh garden roses are lovely, but their petals eventually scatter with the autumn wind. This handcrafted crochet rose, wrapped in gold and midnight ribbon, holds a deeper secret...",
    fullLetter: [
      "Fresh garden roses are lovely, but their petals eventually scatter with the autumn wind. This handcrafted crochet rose, wrapped in gold and midnight ribbon, holds a deeper secret: it was made loop by loop, with care and infinite patience.",
      "It represents our eight years together—a love that doesn't fade when the weather changes, a flower that never wilts no matter how many years slip by on the calendar.",
      "Every stitch is a memory of us: a shared meal, a quiet embrace, an inside joke, a tear wiped away. Our love is evergreen, crafted to endure through a lifetime of tomorrows."
    ],
    signoff: "Forever Blooming for You,",
    author: "Dip"
  },
  {
    id: 10,
    num: "Letter X",
    roman: "X",
    date: "July 6, 2026",
    category: "cozy",
    aspect: "landscape",
    image: "images/20260706_215535.jpg",
    caption: "Summer night breeze, warm streetlights, and everyday magic.",
    salutation: "My Sweet Companion,",
    title: "The Magic Hidden in the Ordinary",
    preview: "It was a simple July evening. The air was warm, the gate lights cast long golden shadows, and we were just being us. Yet in that simple moment, my heart was overflowing...",
    fullLetter: [
      "It was a simple July evening. The air was warm, the gate lights cast long golden shadows, and we were just being us. Yet in that simple moment, my heart was overflowing.",
      "People search their entire lives for fireworks and dramatic spectacles, but the greatest miracle of our eight years is how extraordinary the ordinary feels when we're together. An evening walk, leaning against the gate, talking about our day—it is all pure poetry.",
      "Thank you for making everyday life feel like a fairytale. I wouldn't trade our simplest night for anything in this world."
    ],
    signoff: "In Love with Every Ordinary Day,",
    author: "Dip"
  },
  {
    id: 11,
    num: "Letter XI",
    roman: "XI",
    date: "October 16, 2026",
    category: "milestone",
    aspect: "landscape",
    image: "images/20261016_210759.jpg",
    caption: "Two watches measuring time, but our love stands timeless.",
    salutation: "To the Keeper of My Time,",
    title: "When Time Stands Still Across the Table",
    preview: "Across that rustic wooden table, our hands reached out and clasped together. On our wrists, the watches kept ticking off seconds and minutes, but between our fingers, time vanished...",
    fullLetter: [
      "Across that rustic wooden table, our hands reached out and clasped together. On our wrists, the watches kept ticking off seconds and minutes, but between our fingers, time vanished completely.",
      "Your delicate golden watch and bracelet, my black watch—they count 8 years, 96 months, 2,922 days. Yet whenever you hold my hand, it feels like the very first spark, fresh and electric and full of wonder.",
      "Clocks will continue to tick, seasons will continue to turn, but the promise sealed between our hands will remain untouched by time. You are my forever."
    ],
    signoff: "Holding You Through Eternity,",
    author: "Dip"
  },
  {
    id: 12,
    num: "Letter XII",
    roman: "XII",
    date: "October 16, 2026",
    category: "romantic",
    aspect: "landscape",
    image: "images/20261016_214344.jpg",
    caption: "Surrounded by leaves and fairy lights, you are my blooming flower.",
    salutation: "My Breathtaking Love,",
    title: "An Autumn Evening in Full Bloom",
    preview: "Sitting nestled amidst the lush green cafe plants and fairy lights, you took my breath away. In that golden mustard outfit with your dark hair cascading down, you were mesmerizing...",
    fullLetter: [
      "Sitting nestled amidst the lush green cafe plants and fairy lights, you took my breath away. In that golden mustard outfit with your dark hair cascading down, you looked utterly mesmerizing.",
      "I found myself staring across the table, wondering what wonderful karma brought you into my life. Eight years together, and I still get butterflies looking into those deep, kind eyes of yours.",
      "You make every place we visit feel romantic, every dinner feel like a royal feast, and every moment feel like a cherished memory."
    ],
    signoff: "Hopelessly in Love with You,",
    author: "Dip"
  },
  {
    id: 13,
    num: "Letter XIII",
    roman: "XIII",
    date: "October 16, 2026",
    category: "cozy",
    aspect: "landscape",
    image: "images/20261016_214352.jpg",
    caption: "Cheek to cheek, smiling like we hold the sweetest secret in the world.",
    salutation: "My Sweetest Darling,",
    title: "The Warmth of Your Cheek Against Mine",
    preview: "When you leaned in close, pressing your cheek right against mine, the whole cafe disappeared. There was only the sound of your soft laugh and the warmth of your skin...",
    fullLetter: [
      "When you leaned in close, pressing your cheek right against mine, the whole cafe disappeared. There was only the sound of your soft laugh and the warmth of your skin.",
      "We were smiling like two people who hold the sweetest secret in the world—and perhaps we do. The secret is knowing that whatever comes our way, we will face it side-by-side, cheek-to-cheek, heart-to-heart.",
      "Thank you for your warmth, your gentleness, and the unconditional love you give me every single day. You are the greatest gift I could ever ask for."
    ],
    signoff: "Held Close to Your Heart,",
    author: "Dip"
  },
  {
    id: 14,
    num: "Letter XIV",
    roman: "XIV",
    date: "October 21, 2026",
    category: "romantic",
    aspect: "portrait",
    image: "images/20261021_215050.jpg",
    caption: "Cascading golden lights above us, but you outshine them all.",
    salutation: "My Guiding Star,",
    title: "A Waterfall of Lights, A Sea of Stars",
    preview: "Golden fairy lights cascaded down through the atrium like glowing waterfalls of stardust. We stood there together in front of the glass, our reflection shimmering in the glow...",
    fullLetter: [
      "Golden fairy lights cascaded down through the atrium like glowing waterfalls of stardust. We stood there together in front of the glass, our reflection shimmering in the glow.",
      "People were walking past us in every direction, but for me, the universe narrowed down to just you and me. Your head leaned gently against mine, your hand in my arm.",
      "No matter how bright the city lights shine, they are dim compared to the light you bring into my soul. You are my compass, my sparkle, and my brightest dream."
    ],
    signoff: "Forever Shined Upon by You,",
    author: "Dip"
  },
  {
    id: 15,
    num: "Letter XV",
    roman: "XV",
    date: "October 21, 2026",
    category: "cozy",
    aspect: "landscape",
    image: "images/20261021_220839.jpg",
    caption: "Under the glowing palms, your arms around my neck.",
    salutation: "My Precious Angel,",
    title: "Wrapped in the Warmth of Your Hug",
    preview: "Stepping outside into the night breeze beneath the illuminated palm trees, you wrapped your arm around my neck and pulled me close. Every cold breeze in the world melted away...",
    fullLetter: [
      "Stepping outside into the night breeze beneath the illuminated palm trees, you wrapped your arm around my neck and pulled me close. Every cold breeze in the world melted away in an instant.",
      "There is no armor stronger than your embrace, no place warmer than inside your hug. Across these eight years, your embrace has celebrated my victories, comforted my worries, and reminded me of who I am.",
      "I love the way we fit together. I love the way you hold on. And I promise to hold you just as tightly for all the years ahead."
    ],
    signoff: "Safe in Your Arms Always,",
    author: "Dip"
  },
  {
    id: 16,
    num: "Letter XVI",
    roman: "XVI",
    date: "October 21, 2026",
    category: "milestone",
    aspect: "landscape",
    image: "images/20261021_220845.jpg",
    caption: "Eight years down, an eternity of tomorrows to go.",
    salutation: "To My One and Only Love,",
    title: "Eight Years Down, An Eternity of Tomorrows",
    preview: "Cupping my chin, laughing under the golden lights, your eyes sparkling with pure affection. Looking back on 8 years, 2,922 days, and countless memories...",
    fullLetter: [
      "Cupping my chin with your hand, laughing under the golden lights, your eyes sparkling with pure affection. Looking back on 8 years, 2,922 days, and countless memories, my heart is bursting with love.",
      "We have grown together, learned together, laughed together, and built a love so profound that words can barely capture it. You are my best friend, my soulmate, my greatest blessing, and my favorite adventure.",
      "Today, on our 8th anniversary, I don't just celebrate where we have been—I celebrate everywhere we are yet to go. To every sunrise we will watch, every road we will travel, and every hand we will hold: Happy 8th Anniversary, my love. Forever is just getting started."
    ],
    signoff: "With All My Heart, Soul, and Being,",
    author: "Dip"
  }
];

let currentLetterIdx = 0;

/* ==========================================================================
   ANNIVERSARY MILESTONES COUNTER
   ========================================================================== */
function initAnniversaryCounter() {
  // Relationship began October 23, 2018
  const startDate = new Date(2018, 9, 23); // Month is 0-indexed: 9 = October
  const now = new Date();
  
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30.4375);
  const diffHours = diffDays * 24;
  
  const daysEl = document.getElementById('count-days');
  const monthsEl = document.getElementById('count-months');
  const hoursEl = document.getElementById('count-hours');
  
  if (daysEl) animateNumber(daysEl, diffDays);
  if (monthsEl) animateNumber(monthsEl, diffMonths);
  if (hoursEl) animateNumber(hoursEl, diffHours);
}

function animateNumber(element, target) {
  let start = 0;
  const duration = 1800;
  const stepTime = 30;
  const steps = duration / stepTime;
  const increment = target / steps;
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, stepTime);
}

/* ==========================================================================
   LETTERS EXHIBITION GRID RENDERER
   ========================================================================== */
function initLettersGrid() {
  const gridContainer = document.getElementById('letters-grid-container');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  LETTERS_DATA.forEach((letter, idx) => {
    const card = document.createElement('article');
    card.className = 'letter-card';
    card.dataset.id = letter.id;
    card.dataset.category = letter.category;
    card.dataset.aspect = letter.aspect;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Read ${letter.num}: ${letter.title}`);

    card.innerHTML = `
      <div class="stationery-header">
        <div class="letter-ordinal">
          <span class="ordinal-tag">${letter.num}</span>
          <span class="letter-date-stamp">${letter.date}</span>
        </div>
        <div class="postal-decorations">
          <div class="circular-postmark">
            <span>ANNIV</span>
            <span>23 OCT</span>
            <span>2018-26</span>
          </div>
          <div class="postage-stamp">
            <div class="stamp-inner">
              <span class="stamp-heart-icon">♥</span>
              <span class="stamp-val">8 YRS</span>
            </div>
          </div>
        </div>
      </div>

      <div class="keepsake-photo-frame">
        <div class="washi-tape"></div>
        <div class="keepsake-photo-container">
          <img src="${letter.image}" alt="Memory: ${letter.title}" class="keepsake-img" loading="lazy" />
        </div>
        <div class="photo-caption-handwritten">${letter.caption}</div>
      </div>

      <div class="letter-content">
        <div class="letter-salutation">${letter.salutation}</div>
        <h3 class="letter-title">${letter.title}</h3>
        <p class="letter-body">${letter.preview}</p>
        <div class="letter-signoff">
          <div class="signoff-handwriting">
            <span class="signoff-phrase">${letter.signoff}</span>
            <span class="signoff-author">${letter.author}</span>
          </div>
          <div class="wax-seal-button" title="Click to Read Full Letter">
            <span>${letter.roman}</span>
          </div>
        </div>
      </div>
    `;

    // Click handler to open letter modal
    card.addEventListener('click', () => {
      openLetterModal(idx);
      triggerHeartBurstAtCard(card);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLetterModal(idx);
      }
    });

    gridContainer.appendChild(card);
  });

  // Filter buttons interaction
  const filterBtns = document.querySelectorAll('.nav-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      const cards = document.querySelectorAll('.letter-card');
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   MODAL READING EXPERIENCE
   ========================================================================== */
function initModalInteractions() {
  const modal = document.getElementById('letter-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const prevBtn = document.getElementById('modal-nav-prev');
  const nextBtn = document.getElementById('modal-nav-next');
  const heartActionBtn = document.getElementById('modal-heart-action');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLetterModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLetterModal();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateModal(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateModal(1);
    });
  }

  if (heartActionBtn) {
    heartActionBtn.addEventListener('click', (e) => {
      spawnFloatingHearts(e.clientX, e.clientY, 12);
      playChimeSound();
    });
  }

  // Envelope Hero Button Click
  const heroBtn = document.getElementById('hero-open-letters-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      const exhibition = document.getElementById('exhibition-section');
      if (exhibition) {
        exhibition.scrollIntoView({ behavior: 'smooth' });
        // Automatically open Letter 1 after smooth scroll
        setTimeout(() => {
          openLetterModal(0);
        }, 700);
      }
    });
  }
}

function openLetterModal(index) {
  currentLetterIdx = index;
  const letter = LETTERS_DATA[index];
  const modal = document.getElementById('letter-modal');
  if (!modal || !letter) return;

  document.getElementById('modal-img').src = letter.image;
  document.getElementById('modal-caption').textContent = letter.caption;
  document.getElementById('modal-letter-num').textContent = `${letter.num} • Anniversary Keepsake`;
  document.getElementById('modal-date').textContent = letter.date;
  document.getElementById('modal-salutation').textContent = letter.salutation;
  document.getElementById('modal-title').textContent = letter.title;
  
  // Format letter paragraphs
  const bodyContainer = document.getElementById('modal-body-container');
  bodyContainer.innerHTML = letter.fullLetter.map(p => `<p>${p}</p>`).join('');

  document.getElementById('modal-signoff-phrase').textContent = letter.signoff;
  document.getElementById('modal-signoff-author').textContent = letter.author;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  playLetterSound();
}

function closeLetterModal() {
  const modal = document.getElementById('letter-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function navigateModal(direction) {
  let newIdx = currentLetterIdx + direction;
  if (newIdx < 0) newIdx = LETTERS_DATA.length - 1;
  if (newIdx >= LETTERS_DATA.length) newIdx = 0;
  openLetterModal(newIdx);
}

function initLightboxInteractions() {
  const modalImg = document.getElementById('modal-img');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  if (modalImg && lightbox && lightboxImg) {
    modalImg.addEventListener('click', () => {
      const letter = LETTERS_DATA[currentLetterIdx];
      if (!letter) return;
      lightboxImg.src = letter.image;
      lightboxCaption.textContent = letter.caption;
      lightbox.classList.add('open');
    });

    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', () => {
        lightbox.classList.remove('open');
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('open');
      }
    });
  }
}

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox && lightbox.classList.contains('open')) {
      if (e.key === 'Escape') {
        lightbox.classList.remove('open');
        return;
      }
    }

    const modal = document.getElementById('letter-modal');
    if (!modal || !modal.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeLetterModal();
    } else if (e.key === 'ArrowRight') {
      navigateModal(1);
    } else if (e.key === 'ArrowLeft') {
      navigateModal(-1);
    }
  });
}

/* ==========================================================================
   ROMANTIC PIANO SOUND ENGINE (Web Audio API)
   Generates a peaceful, ethereal ambient piano chord progression
   ========================================================================== */
let audioCtx = null;
let isPlayingMusic = false;
let musicTimer = null;
let currentChordIdx = 0;

// Gentle romantic chords in C major / A minor (peaceful, emotive)
const ROMANTIC_CHORDS = [
  // Cmaj9 (C, E, G, B, D)
  [261.63, 329.63, 392.00, 493.88, 587.33],
  // Am9 (A, C, E, G, B)
  [220.00, 261.63, 329.63, 392.00, 493.88],
  // Fmaj7 (F, A, C, E)
  [174.61, 220.00, 261.63, 329.63, 440.00],
  // Gsus4 -> G (G, C, D, G, B)
  [196.00, 261.63, 293.66, 392.00, 493.88]
];

function initRomanticAudioEngine() {
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  if (!musicToggleBtn) return;

  musicToggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (isPlayingMusic) {
      stopRomanticMusic();
      musicToggleBtn.classList.remove('active', 'playing');
      musicToggleBtn.querySelector('.btn-label').textContent = 'Play Our Song';
    } else {
      startRomanticMusic();
      musicToggleBtn.classList.add('active', 'playing');
      musicToggleBtn.querySelector('.btn-label').textContent = 'Music Playing';
    }
  });
}

function startRomanticMusic() {
  isPlayingMusic = true;
  playNextChord();
}

function stopRomanticMusic() {
  isPlayingMusic = false;
  if (musicTimer) clearTimeout(musicTimer);
}

function playNextChord() {
  if (!isPlayingMusic || !audioCtx) return;

  const chord = ROMANTIC_CHORDS[currentChordIdx];
  currentChordIdx = (currentChordIdx + 1) % ROMANTIC_CHORDS.length;

  chord.forEach((freq, noteIdx) => {
    // Gentle staggered arpeggio effect
    setTimeout(() => {
      if (isPlayingMusic) playPianoNote(freq, 3.8);
    }, noteIdx * 120);
  });

  // Next chord every 4.2 seconds
  musicTimer = setTimeout(playNextChord, 4200);
}

function playPianoNote(frequency, duration = 3.5) {
  if (!audioCtx) return;
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  // Warm low-pass filter
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1200, audioCtx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + duration);

  // Natural piano envelope
  gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// Gentle letter open sound (parchment rustle / soft chime)
function playLetterSound() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') return;

  playPianoNote(523.25, 1.2); // C5
  setTimeout(() => playPianoNote(659.25, 1.5), 100); // E5
  setTimeout(() => playPianoNote(783.99, 1.8), 200); // G5
}

function playChimeSound() {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') return;
  playPianoNote(880.00, 1.2); // A5
  setTimeout(() => playPianoNote(1046.50, 1.5), 80); // C6
}

/* ==========================================================================
   ROSE PETALS CANVAS ANIMATION & CURSOR INTERACTION
   ========================================================================== */
function initRosePetalsCanvas() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = 38;
  const petals = [];
  let petalsActive = true;

  // Toggle petals button
  const petalsToggleBtn = document.getElementById('petals-toggle-btn');
  if (petalsToggleBtn) {
    petalsToggleBtn.addEventListener('click', () => {
      petalsActive = !petalsActive;
      petalsToggleBtn.classList.toggle('active', petalsActive);
      petalsToggleBtn.querySelector('.btn-label').textContent = petalsActive ? 'Petals: On' : 'Petals: Off';
    });
  }

  // Mouse interaction
  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -30;
      this.size = Math.random() * 14 + 10;
      this.speedY = Math.random() * 1.4 + 0.8;
      this.speedX = Math.random() * 1.2 - 0.6;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.5;
      this.opacity = Math.random() * 0.4 + 0.45;
      this.swing = Math.random() * 2;
      this.swingStep = Math.random() * 0.05;
      // Rose petal color variations
      const hues = [
        'rgba(197, 43, 76, ',
        'rgba(226, 141, 153, ',
        'rgba(168, 35, 72, ',
        'rgba(244, 185, 196, '
      ];
      this.colorBase = hues[Math.floor(Math.random() * hues.length)];
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.swing) * 0.8;
      this.swing += this.swingStep;
      this.rotation += this.rotationSpeed;

      // Mouse repulsion
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        this.x += (dx / dist) * force * 5;
        this.y += (dy / dist) * force * 3;
      }

      if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = `${this.colorBase}${this.opacity})`;
      ctx.beginPath();
      // Draw organic petal curvature
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, this.size / 2, this.size);
      ctx.bezierCurveTo(0, this.size, -this.size / 2, this.size / 2, 0, 0);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < petalsCount; i++) {
    petals.push(new Petal());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    if (petalsActive) {
      petals.forEach(p => {
        p.update();
        p.draw();
      });
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   FLOATING HEARTS BURST
   ========================================================================== */
function triggerHeartBurstAtCard(cardElement) {
  const rect = cardElement.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  spawnFloatingHearts(x, y, 6);
}

function spawnFloatingHearts(x, y, count = 8) {
  const hearts = ['♥', '💖', '✨', '🌹', '💌'];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart-burst';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.setProperty('--x-drift', `${(Math.random() - 0.5) * 160}px`);
    heart.style.setProperty('--rot', `${(Math.random() - 0.5) * 60}deg`);
    heart.style.fontSize = `${Math.random() * 18 + 18}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1800);
  }
}

/* ==========================================================================
   SECRET LOVE NOTES BOX (Local Storage Persistence)
   ========================================================================== */
function initSecretNotesBox() {
  const noteInput = document.getElementById('secret-note-input');
  const sealBtn = document.getElementById('seal-secret-btn');
  const notesContainer = document.getElementById('saved-notes-container');

  if (!sealBtn || !noteInput || !notesContainer) return;

  // Load existing notes
  loadSavedNotes();

  sealBtn.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (!noteText) return;

    const savedNotes = JSON.parse(localStorage.getItem('anniv_secret_notes') || '[]');
    savedNotes.unshift({
      text: noteText,
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });

    localStorage.setItem('anniv_secret_notes', JSON.stringify(savedNotes));
    noteInput.value = '';

    // Play chime sound & spawn hearts
    playChimeSound();
    const btnRect = sealBtn.getBoundingClientRect();
    spawnFloatingHearts(btnRect.left + btnRect.width / 2, btnRect.top, 10);

    loadSavedNotes();
  });

  function loadSavedNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('anniv_secret_notes') || '[]');
    notesContainer.innerHTML = '';

    if (savedNotes.length === 0) {
      notesContainer.innerHTML = `<div style="text-align: center; color: #a48c97; font-style: italic; font-size: 0.95rem;">No sealed notes yet. Type a sweet secret note to Dip above to seal it forever.</div>`;
      return;
    }

    savedNotes.forEach(note => {
      const item = document.createElement('div');
      item.className = 'saved-note-item';
      item.innerHTML = `
        <div style="font-size: 0.75rem; color: #dfba73; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px;">Sealed with love • ${note.timestamp}</div>
        <div>"${note.text}"</div>
      `;
      notesContainer.appendChild(item);
    });
  }
}
