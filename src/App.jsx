import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  User,
  ShoppingBag,
  ArrowRight,
  Menu,
  X,
  Star,
  Check,
  Globe,
  ArrowUp,
  Leaf,
  Sparkles,
  Clock,
  Heart
} from "lucide-react";

// Social SVG Icons
const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const PinterestIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="9" x2="12" y2="21"></line>
    <path d="M8 12a4 4 0 1 1 8 0c0 3-2 5-4 5s-2-2-2-4"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

// Diamond Line Art Icon
const DiamondIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3h12l4 6-10 12L2 9z"></path>
    <path d="M2 9h20"></path>
    <path d="M10 3l-2 6 4 12 4-12-2-6"></path>
  </svg>
);

const MailIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPinIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [notification, setNotification] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Story section reveal on scroll
  const storyRef = useRef(null);
  const [storyVisible, setStoryVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
        }
      },
      { threshold: 0.12 }
    );
    if (storyRef.current) {
      observer.observe(storyRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      id: "eclat-noir",
      name: "ÉCLAT NOIR",
      notes: "Amber · Oud · Vanilla",
      price: 120,
      quantity: 1,
      image: "/assets/prod_eclat_noir.jpg"
    }
  ]);

  const products = [
    {
      id: "eclat-noir",
      name: "ÉCLAT NOIR",
      notes: "Amber · Oud · Vanilla",
      price: 120,
      image: "/assets/prod_eclat_noir.jpg",
      tag: "Signature"
    },
    {
      id: "lumiere",
      name: "LUMIÈRE",
      notes: "Jasmine · Bergamot · Musk",
      price: 110,
      image: "/assets/prod_lumiere.jpg",
      tag: "Best Seller"
    },
    {
      id: "bois-sauvage",
      name: "BOIS SAUVAGE",
      notes: "Cedar · Vetiver · Leather",
      price: 115,
      image: "/assets/prod_bois_sauvage.jpg",
      tag: "Artisanal"
    },
    {
      id: "rose-imperial",
      name: "ROSÉ IMPÉRIAL",
      notes: "Rose · Peony · Sandalwood",
      price: 105,
      image: "/assets/prod_rose_imperial.jpg",
      tag: "Prestige"
    }
  ];

  const collections = [
    {
      id: "floral",
      name: "FLORAL",
      tagline: "Soft. Elegant. Timeless.",
      image: "/assets/col_floral.jpg"
    },
    {
      id: "woody",
      name: "WOODY",
      tagline: "Bold. Warm. Powerful.",
      image: "/assets/col_woody.jpg"
    },
    {
      id: "citrus",
      name: "CITRUS",
      tagline: "Fresh. Vibrant. Uplifting.",
      image: "/assets/col_citrus.jpg"
    },
    {
      id: "oriental",
      name: "ORIENTAL",
      tagline: "Rich. Sensual. Unforgettable.",
      image: "/assets/col_oriental.jpg"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "“Vélora’s fragrances are pure luxury. Éclat Noir is my signature scent now.”",
      name: "Ayesha R.",
      role: "Verified Buyer",
      avatar: "/assets/avatar_ayesha.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "“The quality is unmatched. Every scent feels unique and lasts all day.”",
      name: "Bilal K.",
      role: "Connoisseur",
      avatar: "/assets/avatar_bilal.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "“Absolutely stunning. The packaging, the scent, everything is perfection.”",
      name: "Sara M.",
      role: "Verified Buyer",
      avatar: "/assets/avatar_sara.jpg",
      rating: 5
    }
  ];

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setNotification(`${product.name} added to your shopping bag`);
    setTimeout(() => setNotification(""), 3200);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#EDE8DF] selection:bg-[#C59B27]/30 selection:text-[#FFF8E7] font-['Inter'] relative overflow-x-hidden">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 bg-[#161616] border border-[#C5A059]/60 text-white px-5 py-3 rounded-sm shadow-2xl flex items-center gap-3 animate-fade-in text-xs tracking-wider">
          <Check size={16} className="text-[#C5A059]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="relative w-full max-w-md bg-[#0D0D0E] border-l border-white/10 h-full p-6 sm:p-8 flex flex-col justify-between z-10 animate-fade-in shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <h3 className="font-serif text-2xl text-white">Your Shopping Bag</h3>
                <button onClick={() => setCartOpen(false)} className="text-white/60 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="mt-6 space-y-4 max-h-[55vh] overflow-y-auto pr-2">
                {cartItems.length === 0 ? (
                  <p className="text-white/40 text-sm py-12 text-center">Your shopping bag is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-[#141416] p-3 rounded border border-white/5">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded bg-[#F5F2EB]" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-serif tracking-wider text-white truncate">{item.name}</h4>
                        <p className="text-xs text-white/50 truncate">{item.notes}</p>
                        <p className="text-xs text-[#C5A059] mt-1">${item.price} × {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => setCartItems((prev) => prev.filter((i) => i.id !== item.id))}
                        className="text-white/30 hover:text-red-400 text-xs px-2 py-1 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4">
              <div className="flex justify-between text-sm text-white/80">
                <span>Subtotal</span>
                <span className="font-medium text-white">${totalCartPrice}</span>
              </div>
              <p className="text-[11px] text-white/40">Complimentary signature gift box & carbon-neutral delivery included.</p>
              <button
                onClick={() => {
                  alert("Proceeding to checkout...");
                  setCartOpen(false);
                }}
                className="w-full bg-[#C5A059] hover:bg-[#D4AF37] text-black font-medium tracking-[0.2em] text-xs py-3.5 uppercase transition-all duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-xl bg-[#111113] border border-[#C5A059]/30 rounded-lg p-6 relative shadow-2xl">
            <button onClick={() => setSearchOpen(false)} className="absolute top-5 right-5 text-white/50 hover:text-white">
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 border-b border-white/20 pb-3">
              <Search size={20} className="text-[#C5A059]" />
              <input
                type="text"
                placeholder="Search notes, collections, fragrances..."
                autoFocus
                className="bg-transparent w-full text-white placeholder-white/30 text-sm focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <p className="text-[11px] uppercase tracking-widest text-[#C5A059]/80 font-medium">Suggested Discoveries</p>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {["Éclat Noir", "Oud Royal", "Lumière", "Rose Impérial", "Amber Resin", "Bois Sauvage"].map((term) => (
                  <span
                    key={term}
                    onClick={() => setSearchOpen(false)}
                    className="text-xs px-3 py-1 rounded bg-white/5 hover:bg-[#C5A059]/20 hover:text-[#C5A059] text-white/70 cursor-pointer border border-white/10 transition-colors"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Full-bleed cinematic hero background image in Ultra-HD brilliance */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero_bg.jpg"
            alt="Vélora Fragrance Sunset Coast Background"
            className="w-full h-full object-cover object-center brightness-100 contrast-[1.04] saturate-[1.08]"
          />
          {/* Subtle directional gradient on left for typography readability without dulling the golden sunset */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
        </div>

        {/* TOP NAVBAR (TRANSPARENT) */}
        <header className="relative z-30 w-full pt-7 sm:pt-9 px-6 sm:px-12 lg:px-16 flex items-center justify-between bg-transparent">
          {/* Brand Logo */}
          <a
            href="#"
            className="font-serif tracking-[0.25em] text-2xl sm:text-3xl text-white font-medium hover:opacity-90 transition-opacity drop-shadow-md"
          >
            VÉLORA
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {["Home", "Shop", "About", "Journal"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveTab(item)}
                className={`text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 relative py-1 drop-shadow-md ${
                  activeTab === item
                    ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#C5A059]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Icon Actions */}
          <div className="flex items-center gap-6 sm:gap-7">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search Fragrances"
              className="text-white hover:text-white transition-transform hover:scale-110 drop-shadow-md"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => alert("Vélora VIP Members Lounge")}
              aria-label="Account Login"
              className="text-white hover:text-white transition-transform hover:scale-110 drop-shadow-md"
            >
              <User size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Shopping Bag"
              className="text-white hover:text-white transition-transform hover:scale-110 relative drop-shadow-md"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#C5A059] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-white p-1 drop-shadow-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden animate-fade-in">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-7 right-7 text-white/60 hover:text-white"
            >
              <X size={26} />
            </button>
            <span className="font-serif tracking-[0.3em] text-3xl text-white font-medium mb-4">VÉLORA</span>
            {["Home", "Shop", "About", "Journal", "Collections", "Philosophy"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-white/80 hover:text-[#C5A059] tracking-wider transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}

        {/* HERO MAIN BODY: Left Typography with Natural Right Atmosphere */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 flex-1 flex flex-col justify-center pt-8 pb-16 sm:py-20">
          <div className="max-w-xl text-left overflow-hidden sm:overflow-visible">
            <p className="text-[11px] sm:text-xs tracking-[0.25em] text-[#C5A059] uppercase font-medium mb-4 sm:mb-6 drop-shadow-md animate-slide-left delay-hero-1">
              LUXURY FRAGRANCES
            </p>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[74px] font-normal leading-[1.08] tracking-tight text-white mb-6 drop-shadow-lg animate-slide-left delay-hero-2">
              More Than a Scent
              <br />
              It’s a <span className="italic font-normal font-serif text-[#F2E8D5]">Feeling</span>
            </h1>

            <p className="text-white/90 text-xs sm:text-sm font-light leading-relaxed max-w-md mb-8 sm:mb-10 drop-shadow-md animate-slide-left delay-hero-3">
              At Vélora, we craft timeless fragrances for those who leave a lasting impression.
            </p>

            <div className="animate-slide-left delay-hero-4">
              <a
                href="#shop"
                className="inline-flex items-center gap-3 border border-white/60 hover:border-[#C5A059] hover:bg-[#C5A059]/20 text-white text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 transition-all duration-300 group backdrop-blur-[4px] shadow-lg"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-[#C5A059]" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Pill Indicator at Bottom */}
        <div className="relative z-20 pb-8 flex justify-center">
          <a
            href="#story"
            className="w-5 h-9 rounded-full border border-white/40 flex items-start justify-center p-1 hover:border-[#C5A059] transition-colors"
            aria-label="Scroll to Our Story"
          >
            <div className="w-1 h-2 bg-[#C5A059] rounded-full animate-bounce mt-1" />
          </a>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. OUR STORY SECTION */}
      {/* ========================================================================= */}
      <section
        id="story"
        ref={storyRef}
        className={`relative py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#070707] overflow-hidden transition-all duration-1000 ease-out ${
          storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Model Photography */}
          <div
            className={`flex justify-center md:justify-start w-full transition-all duration-1000 ease-out ${
              storyVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            {/* Clean container without any protruding lines */}
            <div className="overflow-hidden shadow-2xl max-w-lg w-full rounded-sm border border-white/10 group bg-[#111112]">
              <img
                src="/assets/story_model.jpg"
                alt="Vélora Heritage Craftsmanship Model Holding Perfume"
                className="w-full h-auto object-cover brightness-100 contrast-[1.05] saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-105 block"
              />
            </div>
          </div>

          {/* Right: Story Text */}
          <div
            className={`md:pl-4 transition-all duration-1000 delay-200 ease-out ${
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[11px] tracking-[0.25em] text-[#C5A059] uppercase font-medium mb-3">
              OUR STORY
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-white mb-6">
              A Heritage of
              <br />
              <span className="italic text-[#EDE0CB]">Timeless Elegance</span>
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-lg">
              Vélora was born from a simple belief — that fragrance is more than a scent, it’s a signature. Inspired by nature, art and emotion, we create perfumes that tell your story, without saying a word.
            </p>
            <a
              href="#philosophy"
              className="inline-flex items-center gap-3 border border-white/40 hover:border-[#C5A059] hover:bg-[#C5A059]/15 text-white text-[11px] uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 group"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 text-[#C5A059]" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE COLLECTIONS SECTION */}
      {/* ========================================================================= */}
      <section id="collections" className="relative py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#0B0B0C] border-t border-white/5 overflow-hidden">
        {/* Full-bleed atmospheric background image in vivid dynamic range */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/collections_bg.jpg"
            alt="Vélora Botanical Sunset Water with White Flowers"
            className="w-full h-full object-cover object-center brightness-100 contrast-[1.03] saturate-[1.08]"
          />
          {/* Subtle balanced gradient overlay to preserve rich colors, petals and water reflections */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-black/45 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/80 via-transparent to-[#070707]/80 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.25em] text-[#C5A059] uppercase font-medium mb-3">
              THE COLLECTIONS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-white mb-6 drop-shadow-sm">
              Fragrances for
              <br />
              <span className="italic text-[#EDE0CB]">Every Chapter</span>
            </h2>
            <p className="text-white/85 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-sm drop-shadow-sm">
              From fresh beginnings to bold statements, our collections are designed to move with you through every moment.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-3 border border-white/40 hover:border-[#C5A059] text-white text-[11px] uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 group backdrop-blur-[2px] bg-black/25"
            >
              <span>EXPLORE ALL</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 text-[#C5A059]" />
            </a>
          </div>

          {/* Right 4 Collection Cards with Ultra-Vivid Objects */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {collections.map((col) => (
              <div
                key={col.id}
                className="group relative overflow-hidden rounded-sm aspect-[9/16] cursor-pointer border border-white/10 hover:border-[#C5A059]/60 transition-all duration-500 shadow-2xl"
              >
                {/* Background Image in full crisp vibrancy */}
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-100 contrast-[1.05] saturate-[1.12]"
                />

                {/* Gentle bottom shadow for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent group-hover:from-black/80 transition-colors" />

                {/* Card Content at Bottom */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-center items-center">
                  <h3 className="text-white font-serif text-sm sm:text-base tracking-[0.18em] uppercase font-medium mb-1 drop-shadow-sm">
                    {col.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-white/80 font-light tracking-wide mb-3 drop-shadow-sm">
                    {col.tagline}
                  </p>
                  <span className="text-[#C5A059] text-xs transform group-hover:translate-y-[-2px] transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED / SIGNATURE SCENTS SECTION (WARM CREAM / LINEN PALETTE) */}
      {/* ========================================================================= */}
      <section id="shop" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#F6F4EE] text-[#121212]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-[#8C7A58] uppercase font-semibold mb-2">
                FEATURED
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616]">
                Signature Scents
              </h2>
            </div>
            <div>
              <a
                href="#all-products"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#161616] hover:text-[#8C7A58] font-medium transition-colors group"
              >
                <span>VIEW ALL PRODUCTS</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* 4 Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col justify-between bg-transparent transition-all duration-300"
              >
                <div>
                  {/* Product Image Frame in Clean Studio HD */}
                  <div className="relative overflow-hidden aspect-[4/3] mb-5 bg-[#FAF8F5] border border-[#E8E2D5] rounded-sm flex items-center justify-center p-2 shadow-sm group-hover:shadow-lg transition-shadow">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover brightness-100 contrast-[1.04] saturate-[1.08] transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle Badge */}
                    <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest text-[#161616] bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-sm shadow-xs border border-black/5 font-medium">
                      {prod.tag}
                    </span>
                  </div>

                  {/* Product Meta */}
                  <h3 className="font-serif text-sm font-semibold tracking-[0.15em] text-[#161616] mb-1 uppercase">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-[#6E6B64] font-light mb-2 tracking-wide">
                    {prod.notes}
                  </p>
                  <p className="text-sm font-medium text-[#161616] mb-5">
                    $ {prod.price}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(prod)}
                  className="w-full border border-[#161616]/30 hover:border-[#161616] hover:bg-[#161616] hover:text-white text-[#161616] text-[11px] uppercase tracking-[0.18em] font-medium py-3 px-4 transition-all duration-300 text-center active:scale-[0.98]"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY VÉLORA / CRAFTED WITH PURPOSE */}
      {/* ========================================================================= */}
      <section id="philosophy" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#070707] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.25em] text-[#C5A059] uppercase font-medium mb-3">
              WHY VÉLORA
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-white mb-6">
              Crafted with Purpose
            </h2>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-md">
              Every bottle tells a story of craftsmanship, quality and passion. We use the finest ingredients and time-honored techniques to create fragrances that stand the test of time.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-3 border border-white/30 hover:border-[#C5A059] text-white text-[11px] uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 group"
            >
              <span>OUR PHILOSOPHY</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 text-[#C5A059]" />
            </a>
          </div>

          {/* Right Column: 4 Feature Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {/* Pillar 1 */}
            <div className="flex flex-col items-start space-y-3 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
                <Leaf size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                PREMIUM INGREDIENTS
              </h3>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Sourced from the world’s finest regions.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-start space-y-3 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
                <DiamondIcon size={18} />
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                TIMELESS CRAFTSMANSHIP
              </h3>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Blended by master perfumers with generations of expertise.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-start space-y-3 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
                <Clock size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                LONG LASTING
              </h3>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Fragrances that stay with you, all day.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-col items-start space-y-3 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
                <Globe size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                SUSTAINABLE LUXURY
              </h3>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Thoughtful practices for a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHAT OUR CUSTOMERS SAY / LOVED BY MANY (CREAM PALETTE) */}
      {/* ========================================================================= */}
      <section id="reviews" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-[#F6F4EE] text-[#121212]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12 sm:mb-16">
            <p className="text-[11px] tracking-[0.25em] text-[#8C7A58] uppercase font-semibold mb-2">
              WHAT OUR CUSTOMERS SAY
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161616]">
              Loved by Many
            </h2>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-[#ECE8DE] p-7 sm:p-8 rounded-sm flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-light text-xs sm:text-sm text-[#222222] leading-relaxed mb-6 italic">
                  {test.quote}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[#D9D4C7]">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-[#8C7A58]/30"
                  />
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider text-[#161616]">
                      {test.name}
                    </h4>
                    <div className="flex items-center gap-0.5 text-[#C59B27] mt-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. NEWSLETTER SECTION: BE THE FIRST TO KNOW */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-16 px-6 sm:px-12 lg:px-16 bg-[#111112] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-1.5">
              Be the First to Know
            </h3>
            <p className="text-white/60 text-xs sm:text-sm font-light">
              Get exclusive offers, new launches and fragrance tips.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto gap-3 items-stretch">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="bg-black/60 border border-white/20 focus:border-[#C5A059] px-5 py-3 text-xs text-white placeholder-white/40 focus:outline-none min-w-[280px] sm:min-w-[320px] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#D1C2A7] hover:bg-[#DFCFA8] text-black font-medium uppercase text-xs tracking-[0.18em] px-7 py-3 transition-colors shrink-0"
            >
              {subscribed ? "WELCOME ✓" : "SUBSCRIBE"}
            </button>
          </form>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FOOTER WITH FLOWER & ESSENTIAL OIL BACKGROUND */}
      {/* ========================================================================= */}
      <footer className="relative bg-[#070707] text-white pt-20 pb-12 px-6 sm:px-12 lg:px-16 border-t border-white/10 overflow-hidden">
        {/* Full-bleed background image of blooming jasmine flower, petals and golden amber oil on dark water */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/footer_flower_oil.jpg"
            alt="Vélora Botanical Flower & Essential Oil Background"
            className="w-full h-full object-cover object-right md:object-center brightness-[0.78] contrast-[1.10] saturate-[1.15]"
          />
          {/* Subtle multi-stop gradient overlays to maintain luxury contrast and text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/90 via-[#070707]/75 to-[#070707]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* Main Footer Grid: 5 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Column 1: Brand & Socials (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-5">
              <a href="#" className="font-serif tracking-[0.25em] text-3xl text-white font-medium inline-block hover:opacity-90 transition-opacity">
                VÉLORA
              </a>
              <p className="text-xs text-white/60 font-light leading-relaxed max-w-sm">
                Haute Parfumerie & Botanical Alchemy. We blend rare organic florals, precious aged woods, and raw resins to compose scents that tell your story.
              </p>

              {/* Social Icons with Luxury Circular Rings */}
              <div className="pt-2">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
                  Follow Our Maison
                </p>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: InstagramIcon, href: "#instagram", label: "Instagram" },
                    { Icon: FacebookIcon, href: "#facebook", label: "Facebook" },
                    { Icon: TwitterIcon, href: "#twitter", label: "X (Twitter)" },
                    { Icon: PinterestIcon, href: "#pinterest", label: "Pinterest" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-black text-white/80 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links - Collections (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-medium">
                Collections
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-light">
                {["Floral Essence", "Woody & Oud", "Citrus & Bergamot", "Oriental Resins", "Signature Discovery", "Private Reserve"].map((item) => (
                  <li key={item}>
                    <a href="#shop" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links - The Maison (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-medium">
                The Maison
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-light">
                {["Our Heritage", "Master Perfumers", "Botanical Sourcing", "Art of Fragrance", "Journal & Stories", "Sustainability"].map((item) => (
                  <li key={item}>
                    <a href="#about" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us Details (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-medium">
                Contact & Boutiques
              </h4>
              
              <div className="space-y-3.5 text-xs text-white/75 font-light">
                {/* Boutique Address */}
                <div className="flex items-start gap-3">
                  <div className="text-[#C5A059] mt-0.5 shrink-0">
                    <MapPinIcon size={16} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Flagship Paris</p>
                    <p className="text-white/60">14 Rue Saint-Honoré, 75001 Paris, France</p>
                  </div>
                </div>

                {/* Email Concierge */}
                <div className="flex items-center gap-3">
                  <div className="text-[#C5A059] shrink-0">
                    <MailIcon size={16} />
                  </div>
                  <div>
                    <a href="mailto:concierge@velora-parfums.com" className="hover:text-[#C5A059] text-white/80 transition-colors">
                      concierge@velora-parfums.com
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-center gap-3">
                  <div className="text-[#C5A059] shrink-0">
                    <PhoneIcon size={16} />
                  </div>
                  <div>
                    <a href="tel:+33142685500" className="hover:text-[#C5A059] text-white/80 transition-colors">
                      +33 (0)1 42 68 55 00
                    </a>
                  </div>
                </div>

                {/* Boutique Hours */}
                <div className="pt-2 text-[11px] text-white/50 border-t border-white/10">
                  <p>Mon – Sat: 10:00 – 19:30 CET</p>
                  <p>Sunday: By Private VIP Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Legal, Currency & Back to Top */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-white/50 font-light">
            <div className="flex flex-wrap items-center gap-6">
              <p>© 2025 Vélora Parfums. All rights reserved.</p>
              <div className="hidden sm:flex items-center gap-4 text-white/40">
                <a href="#privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#terms" className="hover:text-white/70 transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#cookies" className="hover:text-white/70 transition-colors">Cookie Preferences</a>
              </div>
            </div>

            <div className="flex items-center gap-7">
              <div className="flex items-center gap-1.5 hover:text-white/80 cursor-pointer transition-colors">
                <Globe size={13} className="text-[#C5A059]" />
                <span>Global / USD ($)</span>
              </div>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors uppercase tracking-widest text-[11px]"
                aria-label="Back to Top"
              >
                <span>TOP</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
