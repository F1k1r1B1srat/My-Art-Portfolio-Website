// Art Portfolio JavaScript - Handles all interactions and animations

// Gallery data - 40 art pieces as requested
const artworks = [
  {
    id: 1,
    title: "Dreaming Queen",
    category: "paintings",
    medium: "Acrylic on Paper",
    description: "A dreamy portrait with glowing planets and vibrant surreal elements.",
    image: "asset/1.jpg",
  },
  {
    id: 2,
    title: "Cosmic Soul",
    category: "paintings",
    medium: "Acrylic on Paper",
    description: "Faces merge with swirling sun and cosmic energy in psychedelic colors.",
    image: "asset/2.jpg",
  },
  {
    id: 3,
    title: "Rainbow Giraffe",
    category: "paintings",
    medium: "Markers & Acrylic",
    description: "A colorful stylized giraffe in playful neon shades.",
    image: "asset/3.jpg",
  },
  {
    id: 4,
    title: "Thor’s Gaze",
    category: "sketches",
    medium: "Marker & Ink",
    description: "Bold comic-style portrait of Thor with dramatic lighting.",
    image: "asset/4.jpg",
  },
  {
    id: 5,
    title: "Serenity",
    category: "sketches",
    medium: "Graphite & Charcoal",
    description: "Minimalist shaded portrait of a woman in peaceful reflection.",
    image: "asset/5.jpg",
  },
  {
    id: 6,
    title: "Street Lamps",
    category: "paintings",
    medium: "Watercolor",
    description: "Elegant lampposts glowing against a dreamy purple-blue background.",
    image: "asset/6.jpg",
  },
  {
    id: 7,
    title: "Regal Beauty",
    category: "paintings",
    medium: "Acrylic",
    description: "Bold portrait of a woman with a vibrant African headwrap.",
    image: "asset/7.jpg",
  },
  {
    id: 8,
    title: "Life in a Fruit",
    category: "paintings",
    medium: "Mixed Media",
    description: "A surreal apple core containing tiny worlds and figures.",
    image: "asset/8.jpg",
  },
  {
    id: 9,
    title: "Star Archer",
    category: "paintings",
    medium: "Neon Markers",
    description: "A fiery-haired figure shooting arrows across the cosmos.",
    image: "asset/9.jpg",
  },
  {
    id: 10,
    title: "Heart in Colors",
    category: "paintings",
    medium: "Acrylic & Ink",
    description: "A human heart painted with abstract colorful strokes.",
    image: "asset/10.jpg",
  },
  {
    id: 11,
    title: "Classical Bust",
    category: "sketches",
    medium: "Charcoal",
    description: "A realistic sketch of a Greek sculpture bust in grayscale.",
    image: "asset/11.PNG",
  },
  {
    id: 12,
    title: "Mechanical Heart",
    category: "paintings",
    medium: "Mixed Media",
    description: "A surreal biological heart fused with pipes and machinery.",
    image: "asset/12.jpg",
  },
  {
    id: 13,
    title: "Psychedelic Homer",
    category: "paintings",
    medium: "Markers",
    description: "A Simpsons character warped in neon surreal psychedelic art.",
    image: "asset/13.jpg",
  },
  {
    id: 14,
    title: "Neon City",
    category: "canvas",
    medium: "Acrylic on Paper",
    description: "Geometric neon-style skyscrapers glowing like a futuristic cityscape.",
    image: "asset/14.PNG",
  },
  {
    id: 15,
    title: "Mind of Machines",
    category: "sketches",
    medium: "Pen & Ink",
    description: "Surreal portrait with intricate gears and machinery emerging from hair.",
    image: "asset/15.jpg",
  },
  {
    id: 16,
    title: "Skeleton Woman",
    category: "sketches",
    medium: "Pen & Ink",
    description: "Anatomical sketch of a skeleton figure with a haunting aura.",
    image: "asset/16.jpg",
  },
  {
    id: 17,
    title: "Earth in Balance",
    category: "paintings",
    medium: "Acrylic",
    description: "Whimsical Earth painting with plants and vines forming harmony.",
    image: "asset/17.jpg",
  },
  {
    id: 18,
    title: "Geometric Form",
    category: "3d",
    medium: "Paper Sculpture",
    description: "3D paper art of a precise geometric polyhedron with shading.",
    image: "asset/18.jpg",
  },
  {
    id: 19,
    title: "Glass Study",
    category: "sketches",
    medium: "Pencil",
    description: "Realistic pencil sketch of a glass of water on a table.",
    image: "asset/19.jpg",
  },
  {
    id: 20,
    title: "Cosmic Orbs",
    category: "paintings",
    medium: "Mixed Media",
    description: "Colorful circular abstractions against black space-like textures.",
    image: "asset/20.jpg",
  },
  {
    id: 21,
    title: "Harpist",
    category: "sketches",
    medium: "Pencil",
    description: "Quick sketch of a woman playing a harp on toned paper.",
    image: "asset/21.jpg",
  },
  {
    id: 22,
    title: "Abstract Faces",
    category: "sketches",
    medium: "Ink",
    description: "Faces overlapping in abstract surreal flowing patterns.",
    image: "asset/22.jpg",
  },
  {
    id: 23,
    title: "Colorful Van",
    category: "paintings",
    medium: "Acrylic",
    description: "Vibrant Volkswagen van with patterns and surreal details.",
    image: "asset/23.jpg",
  },
  {
    id: 24,
    title: "Siblings",
    category: "paintings",
    medium: "Pencil & Acrylic",
    description: "Two siblings painted with warm tones and subtle sketch lines.",
    image: "asset/24.jpg",
  },
  {
    id: 25,
    title: "Luffy",
    category: "paintings",
    medium: "Markers",
    description: "Anime fanart of Monkey D. Luffy with bold colors.",
    image: "asset/25.jpg",
  },
  {
    id: 26,
    title: "Pattern Study",
    category: "paintings",
    medium: "Markers",
    description: "Repeating geometric organic patterns in warm earthy tones.",
    image: "asset/26.jpg",
  },
  {
    id: 27,
    title: "Naruto",
    category: "paintings",
    medium: "Markers",
    description: "Anime fanart of Naruto with vibrant comic style.",
    image: "asset/27.jpg",
  },
  {
    id: 28,
    title: "Warriors’ Parade",
    category: "paintings",
    medium: "Watercolor & Ink",
    description: "Colorful Ethiopian warriors and horses in traditional attire.",
    image: "asset/28.jpg",
  },
  {
    id: 29,
    title: "Battle Scene",
    category: "paintings",
    medium: "Watercolor",
    description: "Dynamic cultural battle procession with shields and spears.",
    image: "asset/29.jpg",
  },
  {
    id: 30,
    title: "Supergirl",
    category: "paintings",
    medium: "Markers & Acrylic",
    description: "Comic fanart of Supergirl in bold colors with a space backdrop.",
    image: "asset/30.jpg",
  },
  {
    id: 31,
    title: "Double Face",
    category: "sketches",
    medium: "Ink",
    description: "Surreal dual faces blending into abstract textures.",
    image: "asset/31.jpg",
  },
  {
    id: 32,
    title: "Dot Portrait",
    category: "sketches",
    medium: "Stippling (Ink Dots)",
    description: "Detailed stippled portrait showing texture through dots.",
    image: "asset/32.jpg",
  },
  {
    id: 33,
    title: "Fish Study",
    category: "paintings",
    medium: "Markers",
    description: "Bright colorful cartoon-style fish with bold outlines.",
    image: "asset/33.jpg",
  },
  {
    id: 34,
    title: "Cow Sketch",
    category: "sketches",
    medium: "Pencil",
    description: "Simple realistic pencil sketch of a cow grazing.",
    image: "asset/34.jpg",
  },
  {
    id: 35,
    title: "Hands",
    category: "sketches",
    medium: "Pencil",
    description: "Gesture drawing of two hands intertwined in line art.",
    image: "asset/35.jpg",
  },
  {
    id: 36,
    title: "Cerberus",
    category: "paintings",
    medium: "Markers & Ink",
    description: "Dark surreal three-headed creature in fiery red tones.",
    image: "asset/36.jpg",
  },
  {
    id: 37,
    title: "Lighthouse Dream",
    category: "paintings",
    medium: "Acrylic",
    description: "Surreal lighthouse by the sea with colorful skies and whimsical architecture.",
    image: "asset/37.JPG",
  },
  {
    id: 38,
    title: "Floral Overlay",
    category: "canvas",
    medium: "Acrylic & Ink",
    description: "Delicate white flowers layered over warm-toned tribal and abstract patterns.",
    image: "asset/38.JPG",
  },
  {
    id: 39,
    title: "Pyramids & Swirls",
    category: "canvas",
    medium: "Acrylic & Ink",
    description: "Colorful pyramids rise amid swirling patterns and hills on a warm-toned canvas.",
    image: "asset/39.JPG",
  },
  {
    id: 40,
    title: "Yellow Beetle",
    category: "canvas",
    medium: "Acrylic & Ink",
    description: "A bright yellow car under swirling skies, drawn in a whimsical style.",
    image: "asset/40.JPG",
  },
  {
    id: 41,
    title: "Lighthouse Lane",
    category: "canvas",
    medium: "Acrylic & Ink",
    description: "A surreal lane with a lighthouse and yellow car, dreamy colors and spirals.",
    image: "asset/41.JPG",
  },
  {
    id: 42,
    title: "Golden Wheels",
    category: "canvas",
    medium: "Acrylic & Ink",
    description: "Close-up of a yellow car's wheel over a decorative golden spiral pattern.",
    image: "asset/42.JPG",
  },
]

// Synesthesia data with multiple images per song
const synesthesiaData = {
  syn1: {
    title: "Time (Ben Walter Remix) – Hans Zimmer",
    images: ["asset/syn1.jpg", "asset/1.jpg"],
    audio: "asset/time-ben-walter-remix.mp3",
    description: "Painted Wed, Jan 20 2021 while immersed in melodic dubstep.",
  },
  syn2: {
    title: "Spider-Man: Into the Spider-Verse – Scared of the Dark",
    images: ["asset/syn2.jpg", "asset/2.jpg"],
    audio: "asset/spiderman-scared-dark.mp3",
    description: "Energetic bursts inspired by the movie clip's intensity.",
  },
  syn3: {
    title: "Olivia Rodrigo – Drivers License",
    images: ["asset/syn3.jpg", "asset/3.jpg"],
    audio: "asset/olivia-drivers-license.mp3",
    description: "Gentle crimson branches reflecting the song's bittersweet mood.",
  },
}

const synOrder = ["syn1", "syn2", "syn3"]

let currentSynId = null
let currentImageIndex = 0

// DOM Elements
const nav = document.getElementById("navbar")
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const galleryGrid = document.getElementById("gallery-grid")
const filterBtns = document.querySelectorAll(".filter-btn")
const loadMoreBtn = document.getElementById("load-more")
const contactForm = document.getElementById("contact-form")
const modal = document.getElementById("gallery-modal")
const modalImage = document.getElementById("modal-image")
const modalTitle = document.getElementById("modal-title")
const modalDescription = document.getElementById("modal-description")
const modalMedium = document.getElementById("modal-medium")
const modalYear = document.getElementById("modal-year")
const modalClose = document.querySelector(".modal-close")
const modalPrev = document.getElementById("modal-prev")
const modalNext = document.getElementById("modal-next")
const languageSelect = document.getElementById("language-select")
const themeToggle = document.getElementById("theme-toggle")
const synItems = document.querySelectorAll(".syn-item")
const synModal = document.getElementById("syn-modal")
const synModalClose = document.getElementById("syn-modal-close")
const synNextBtn = document.getElementById("syn-next-btn")
const synAudio = document.getElementById("syn-audio")
const musicVisualizer = document.getElementById("music-visualizer")

// State
let currentFilter = "all"
let displayedItems = 12
let currentModalIndex = 0
let filteredArtworks = [...artworks]

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  initializeGallery()
  initializeModal()
  initializeContactForm()
  initializeScrollEffects()
  initializeAnimations()
  initializeLanguageSwitcher()
  initializeThemeToggle()
  initializeSynesthesiaModal() // Added synesthesia modal
})

// Navigation functionality
function initializeNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
  })

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")

      // Update active link
      navLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
    })
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const navHeight = nav.offsetHeight
        const targetPosition = target.offsetTop - navHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  const sections = document.querySelectorAll("section[id]")

  function updateActiveSection() {
    const scrollPos = window.scrollY + nav.offsetHeight + 50

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove("active"))
        if (correspondingLink) {
          correspondingLink.classList.add("active")
        }
      }
    })
  }

  window.addEventListener("scroll", debounce(updateActiveSection, 100), { passive: true })
}

// Gallery functionality
function initializeGallery() {
  renderGallery()

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active filter button
      filterBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      // Update filter and reset display count
      currentFilter = this.dataset.filter
      displayedItems = 12

      // Filter artworks
      if (currentFilter === "all") {
        filteredArtworks = [...artworks]
      } else {
        filteredArtworks = artworks.filter((artwork) => artwork.category === currentFilter)
      }

      renderGallery()
    })
  })

  // Load more button
  loadMoreBtn.addEventListener("click", () => {
    displayedItems += 12
    renderGallery()
  })
}

function renderGallery() {
  const itemsToShow = filteredArtworks.slice(0, displayedItems)

  galleryGrid.innerHTML = ""

  itemsToShow.forEach((artwork, index) => {
    const galleryItem = createGalleryItem(artwork, index)
    galleryGrid.appendChild(galleryItem)
  })

  // Show/hide load more button
  if (displayedItems >= filteredArtworks.length) {
    loadMoreBtn.style.display = "none"
  } else {
    loadMoreBtn.style.display = "inline-flex"
  }

  setTimeout(() => {
    const items = galleryGrid.querySelectorAll(".gallery-item")
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1"
        item.style.transform = "translateY(0)"
      }, index * 50)
    })
  }, 50)
}

function createGalleryItem(artwork, index) {
  const item = document.createElement("div")
  item.className = "gallery-item"
  item.dataset.category = artwork.category
  item.style.animationDelay = `${index * 0.1}s`

  item.innerHTML = `
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy" onerror="this.src='/placeholder.svg?height=280&width=320&text=Image+Not+Found'">
        <div class="gallery-item-overlay">
            <div class="gallery-item-info">
                <h3>${artwork.title}</h3>
                <p>${artwork.medium} • ${artwork.year}</p>
            </div>
        </div>
    `

  // Add click event for modal
  item.addEventListener("click", () => {
    openModal(artwork)
  })

  return item
}

// Modal functionality
function initializeModal() {
  modalClose.addEventListener("click", closeModal)
  modalPrev.addEventListener("click", showPrevious)
  modalNext.addEventListener("click", showNext)

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active")) {
      switch (e.key) {
        case "Escape":
          closeModal()
          break
        case "ArrowLeft":
          showPrevious()
          break
        case "ArrowRight":
          showNext()
          break
      }
    }
  })
}

function openModal(artwork) {
  currentModalIndex = filteredArtworks.findIndex((item) => item.id === artwork.id)
  updateModalContent(artwork)
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modal.classList.remove("active")
  document.body.style.overflow = ""
}

function showPrevious() {
  currentModalIndex = (currentModalIndex - 1 + filteredArtworks.length) % filteredArtworks.length
  updateModalContent(filteredArtworks[currentModalIndex])
}

function showNext() {
  currentModalIndex = (currentModalIndex + 1) % filteredArtworks.length
  updateModalContent(filteredArtworks[currentModalIndex])
}

function updateModalContent(artwork) {
  modalImage.src = artwork.image
  modalImage.alt = artwork.title
  modalTitle.textContent = artwork.title
  modalDescription.textContent = artwork.description
  modalMedium.textContent = artwork.medium
  modalYear.textContent = artwork.year

  // Add error handling for modal image
  modalImage.onerror = function () {
    this.src = "/placeholder.svg?height=400&width=600&text=Image+Not+Found"
  }
}

// Contact form functionality
function initializeContactForm() {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const data = Object.fromEntries(formData)

    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.")
      this.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

function initializeScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  const animateElements = document.querySelectorAll(".section-title, .about-description, .contact-description")
  animateElements.forEach((el) => observer.observe(el))

  let ticking = false

  function updateScrollEffects() {
    const scrolled = window.pageYOffset
    const heroImage = document.querySelector(".hero-image")
    const hero = document.querySelector(".hero")

    // Enhanced navigation scroll transformation - only on desktop
    if (scrolled > 100) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }

    // Parallax effects only on desktop
    if (window.innerWidth > 1024) {
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`
      }

      if (hero) {
        hero.style.backgroundPositionY = `${scrolled * 0.3}px`
      }
    }

    // Additional scroll-based animations
    const scrollProgress = Math.min(scrolled / window.innerHeight, 1)

    if (nav) {
      const opacity = Math.min(scrollProgress * 1.2, 1)
      nav.style.setProperty("--nav-opacity", opacity)
    }

    ticking = false
  }

  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestScrollUpdate, { passive: true })

  updateScrollEffects()
}

// Initialize animations
function initializeAnimations() {
  // Add CSS for scroll animations
  const style = document.createElement("style")
  style.textContent = `
        .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `
  document.head.appendChild(style)
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Performance optimization
function lazyLoadImages() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src || img.src
          img.classList.remove("loading")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages)

// Smooth scroll polyfill for older browsers
if (!("scrollBehavior" in document.documentElement.style)) {
  const smoothScrollPolyfill = document.createElement("script")
  smoothScrollPolyfill.src = "https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js"
  document.head.appendChild(smoothScrollPolyfill)
}

// Enhanced error handling for images
document.addEventListener(
  "error",
  (e) => {
    if (e.target.tagName === "IMG") {
      e.target.src = "/placeholder.svg?height=280&width=320&text=Image+Not+Found"
    }
  },
  true,
)

function initializeLanguageSwitcher() {
  const languageSelect = document.getElementById("language-select")

  if (languageSelect) {
    // Set default language
    const savedLanguage = localStorage.getItem("preferred-language") || "en"
    languageSelect.value = savedLanguage
    switchLanguage(savedLanguage)

    languageSelect.addEventListener("change", (e) => {
      const selectedLanguage = e.target.value
      switchLanguage(selectedLanguage)
      localStorage.setItem("preferred-language", selectedLanguage)
    })
  }
}

function switchLanguage(language) {
  const elements = document.querySelectorAll("[data-en]")

  elements.forEach((element) => {
    const text = element.getAttribute(`data-${language}`)
    if (text) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = text
      } else if (element.tagName === "OPTION") {
        element.textContent = text
      } else {
        element.textContent = text
      }
    }
  })

  // Update document language
  document.documentElement.lang = language === "am" ? "am" : language
}

function initializeThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = themeToggle.querySelector(".theme-icon")

  if (themeToggle) {
    // Set default theme
    const savedTheme = localStorage.getItem("preferred-theme") || "light"
    document.body.setAttribute("data-theme", savedTheme)
    updateThemeIcon(savedTheme, themeIcon)

    themeToggle.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme")
      const newTheme = currentTheme === "light" ? "dark" : "light"

      document.body.setAttribute("data-theme", newTheme)
      localStorage.setItem("preferred-theme", newTheme)
      updateThemeIcon(newTheme, themeIcon)

      // Add transition effect
      document.body.style.transition = "all 0.3s ease"
      setTimeout(() => {
        document.body.style.transition = ""
      }, 300)
    })
  }
}

function updateThemeIcon(theme, iconElement) {
  if (iconElement) {
    iconElement.textContent = theme === "light" ? "🌙" : "☀️"
  }
}

// Synesthesia modal functionality with music visualization
function initializeSynesthesiaModal() {
  // Open modal when clicking syn-item
  synItems.forEach((item) => {
    item.addEventListener("click", function () {
      const synId = this.dataset.synId
      openSynModal(synId)
    })
  })

  // Close modal and stop music
  synModalClose.addEventListener("click", closeSynModal)

  // Close on background click
  synModal.addEventListener("click", (e) => {
    if (e.target === synModal) {
      closeSynModal()
    }
  })

  // Next button - cycle through all synesthesia pieces
  synNextBtn.addEventListener("click", () => {
    if (currentSynId) {
      // Find current synesthesia index
      const currentIndex = synOrder.indexOf(currentSynId)
      // Move to next synesthesia piece (cycle back to first after last)
      const nextIndex = (currentIndex + 1) % synOrder.length
      const nextSynId = synOrder[nextIndex]

      // Close current and open next synesthesia piece
      const synAudio = document.getElementById("syn-audio")
      const musicVisualizer = document.getElementById("music-visualizer")

      // Fade out current
      musicVisualizer.classList.remove("playing")
      synAudio.pause()

      // Open next synesthesia piece after brief transition
      setTimeout(() => {
        openSynModal(nextSynId)
      }, 300)
    }
  })

  // Handle audio play/pause for visualizer
  synAudio.addEventListener("play", () => {
    musicVisualizer.classList.add("playing")
  })

  synAudio.addEventListener("pause", () => {
    musicVisualizer.classList.remove("playing")
  })

  synAudio.addEventListener("ended", () => {
    musicVisualizer.classList.remove("playing")
  })

  // Keyboard controls
  document.addEventListener("keydown", (e) => {
    if (synModal.classList.contains("active")) {
      if (e.key === "Escape") {
        closeSynModal()
      } else if (e.key === "ArrowRight") {
        synNextBtn.click()
      }
    }
  })
}

function openSynModal(synId) {
  currentSynId = synId
  currentImageIndex = 0

  const data = synesthesiaData[synId]
  const synModal = document.getElementById("syn-modal")
  const synModalBg = document.getElementById("syn-modal-bg")
  const synAudio = document.getElementById("syn-audio")
  const musicVisualizer = document.getElementById("music-visualizer")

  // Set background image
  updateSynModalImage(data.images[currentImageIndex])

  // Set audio source and play
  synAudio.src = data.audio
  synAudio.play()

  // Show modal
  synModal.classList.add("active")
  document.body.style.overflow = "hidden"

  // Show visualizer
  setTimeout(() => {
    musicVisualizer.classList.add("playing")
  }, 300)
}

function updateSynModalImage(imageSrc) {
  const synModalBg = document.getElementById("syn-modal-bg")
  synModalBg.style.backgroundImage = `url('${imageSrc}')`
}

function closeSynModal() {
  const synModal = document.getElementById("syn-modal")
  const synAudio = document.getElementById("syn-audio")
  const musicVisualizer = document.getElementById("music-visualizer")

  // Stop music
  synAudio.pause()
  synAudio.currentTime = 0

  // Hide visualizer
  musicVisualizer.classList.remove("playing")

  // Close modal
  synModal.classList.remove("active")
  document.body.style.overflow = ""

  // Reset
  currentSynId = null
  currentImageIndex = 0
}

// Console message for developers
console.log(`
🎨 Fikir Bisrat Art Portfolio
Built with vanilla HTML, CSS, and JavaScript
Features: Responsive design, smooth animations, gallery filtering, modal lightbox
Total artworks: ${artworks.length}
`)
