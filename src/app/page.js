"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen">
      {/* TopNavBar */}
      <nav
        className={`bg-surface dark:bg-inverse-surface w-full fixed top-0 left-0 z-50 border-b-2 border-primary dark:border-primary-fixed flex justify-between items-center px-margin-desktop max-w-full mx-auto transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "py-4"
        }`}
      >
        <div className="text-headline-md font-headline-md text-primary dark:text-primary-fixed tracking-tight cursor-pointer">
          Kookie
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95 cursor-pointer"
            onClick={handleScrollTo("top")}
            href="#"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95 cursor-pointer"
            onClick={handleScrollTo("menu")}
            href="#menu"
          >
            Menu
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95 cursor-pointer"
            onClick={handleScrollTo("reviews")}
            href="#reviews"
          >
            Reviews
          </a>
          <a
            className="text-on-surface-variant dark:text-outline-variant font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95 cursor-pointer"
            onClick={handleScrollTo("footer")}
            href="#footer"
          >
            Locations
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="material-symbols-outlined text-primary dark:text-primary-fixed text-2xl hover:scale-110 transition-transform relative">
            shopping_bag
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-burgundy text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[800px] bg-surface flex items-center px-margin-desktop py-section-padding overflow-hidden pt-[120px] lg:pt-[140px]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col space-y-8">
            <div className="relative">
              <div className="absolute -left-12 top-0 w-24 h-24 opacity-20">
                <span className="material-symbols-outlined text-6xl text-primary">
                  chat_bubble
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary leading-[0.9] uppercase flex items-start">
                <span className="inline-block w-12 h-12 border-2 border-primary mr-4 mt-1.5 shrink-0 rounded-sm"></span>
                <span>
                  Baking <br /> Happiness <br /> For Every <br /> Heart
                </span>
              </h1>
              <p className="font-headline-md text-headline-md text-primary mt-4 uppercase tracking-widest">
                Taste the Joy!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">
                    autorenew
                  </span>
                </div>
                <span className="font-label-md text-primary uppercase leading-tight">
                  No Artificial<br />Colors Added
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">
                    science
                  </span>
                </div>
                <span className="font-label-md text-primary uppercase leading-tight">
                  No Chemicals<br />In Our Bakes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">
                    eco
                  </span>
                </div>
                <span className="font-label-md text-primary uppercase leading-tight">
                  No Artificial<br />Flavors Used
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[600px] flex items-center justify-center">
            {/* Top Right: Sourdough Bread Loaf */}
            <div className="absolute top-0 right-0 w-52 h-52 rotate-12 z-10">
              <img
                alt="Sourdough Loaf"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-primary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN_igRMmxIPUA3ACFf9qceJVh_BCXWdS_wM1Q94yYL99t__D26B_ZJiSz-f8dGvF_kGQfbP04PrD2CbTkdScgLi7gYB_-xnFmf4hFkeyhDFsgK6i2xBwxFROBMG8LqVQ_LD3owAGX11nkux-4lZKs4upfHkhgmup7iW4AeQNqiZmiRUrh3RFo5qJC-BVNszEDNfjRnwmAbsAlUZsswJZ6hH90K1QOafA0rFtSzJsN0Xjkd5lSyg3nPYIQCOckjdC9sKS9XuaLz9w4"
              />
            </div>
            {/* Left Background: Hollow Outline Circle */}
            <div className="absolute top-[28%] left-[5%] w-36 h-36 rounded-full border-2 border-primary bg-transparent z-0"></div>
            
            {/* Center: Croissant on a Plate Card */}
            <div className="relative z-20 w-[320px] h-[320px] bg-[#e6ccb2] rounded-[40px] border-2 border-primary shadow-2xl flex items-center justify-center p-6 rotate-3 hover:scale-105 hover:-translate-y-2 hover:rotate-6 transition-all duration-500 ease-out cursor-pointer">
              <img
                alt="Croissant on Plate"
                className="w-full h-full object-contain"
                src="/croissant_on_plate.png"
              />
            </div>
            {/* Bottom Right: Pink Pill Spacer */}
            <div className="absolute bottom-6 left-[22%] w-64 h-7 bg-pastel-pink border-2 border-primary rounded-full rotate-12 shadow-lg z-0"></div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary text-on-primary py-4 overflow-hidden border-y-2 border-on-primary/20">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center space-x-12 px-6 text-headline-sm font-headline-sm uppercase tracking-widest">
            <span>• VEGAN, EGGLESS OPTIONS AVAILABLE • FREE HOME DELIVERY IN JNX • • FRESHLY BAKED •</span>
            <span>• VEGAN, EGGLESS OPTIONS AVAILABLE • FREE HOME DELIVERY IN JNX • • FRESHLY BAKED •</span>
            <span>• VEGAN, EGGLESS OPTIONS AVAILABLE • FREE HOME DELIVERY IN JNX • • FRESHLY BAKED •</span>
            <span>• VEGAN, EGGLESS OPTIONS AVAILABLE • FREE HOME DELIVERY IN JNX • • FRESHLY BAKED •</span>
          </div>
        </div>
      </div>

      {/* S'mores Please Section */}
      <section id="menu" className="scroll-mt-28 group bg-[#fdf6f0] hover:bg-[#e8d8c8] text-primary transition-colors duration-700 ease-in-out py-24 px-margin-desktop relative overflow-visible min-h-[550px] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text column first (Left) */}
          <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            <h2 className="font-headline-lg text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-wider uppercase">
              S'mores Please
            </h2>
            <p className="font-body-lg text-lg md:text-xl text-primary/80 leading-relaxed max-w-lg uppercase font-bold">
              Vanilla dough packed with premium chocolate chips, crushed graham crackers, gooey melted marshmallows, and topped with a solid Hershey's chocolate bar square.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white hover:bg-opacity-95 hover:scale-105 active:scale-95 transition-all px-12 py-4 rounded-full font-headline-sm text-xl uppercase font-extrabold tracking-wider shadow-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Image column second (Right) */}
          <div className="relative w-full h-[400px] flex items-center justify-center order-1 lg:order-2">
            {/* Background lifestyle image */}
            <div className="absolute right-[5%] top-[10%] w-[280px] h-[280px] rounded-3xl border-2 border-primary shadow-xl overflow-hidden rotate-6 z-0 bg-white">
              <img
                alt="Toasting Marshmallows"
                className="w-full h-full object-cover"
                src="/lifestyle_smores_bg.png"
              />
            </div>
            {/* Foreground close-up image */}
            <div className="absolute left-[5%] bottom-[5%] w-[320px] h-[320px] z-10 -rotate-6 drop-shadow-2xl hover:-rotate-12 hover:scale-110 hover:-translate-y-4 transition-all duration-500 ease-out cursor-pointer">
              <img
                alt="S'mores Please Cookie"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                src="/cookie_smores.png"
              />
            </div>
          </div>
        </div>

        {/* Dripping Chocolate Liquid Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%] z-20 pointer-events-none">
          <svg
            viewBox="0 0 1000 100"
            className="relative block w-full h-[60px] text-[#fdf6f0] group-hover:text-[#e8d8c8] transition-colors duration-700 ease-in-out fill-current"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 L 0 40 Q 20 40 20 65 A 10 10 0 0 0 40 65 Q 40 40 60 40 L 80 40 Q 105 40 105 85 A 15 15 0 0 0 135 85 Q 135 40 160 40 L 190 40 Q 205 40 205 55 A 8 8 0 0 0 221 55 Q 221 40 235 40 L 270 40 Q 295 40 295 95 A 12 12 0 0 0 319 95 Q 319 40 340 40 L 390 40 Q 410 40 410 75 A 12 12 0 0 0 434 75 Q 434 40 455 40 L 500 40 Q 525 40 525 90 A 15 15 0 0 0 555 90 Q 555 40 580 40 L 620 40 Q 635 40 635 60 A 8 8 0 0 0 651 60 Q 651 40 665 40 L 700 40 Q 725 40 725 95 A 12 12 0 0 0 749 95 Q 749 40 770 40 L 810 40 Q 830 40 830 70 A 10 10 0 0 0 850 70 Q 850 40 870 40 L 920 40 Q 945 40 945 85 A 15 15 0 0 0 975 85 Q 975 40 1000 40 L 1000 0 Z" />
          </svg>
        </div>
      </section>

      {/* Reddy n' Cream Section */}
      <section className="group bg-[#7a2021] hover:bg-[#993335] text-white transition-colors duration-700 ease-in-out py-24 px-margin-desktop relative overflow-visible min-h-[550px] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image column first (Left) */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Background lifestyle image */}
            <div className="absolute left-[5%] top-[10%] w-[280px] h-[280px] rounded-3xl border-2 border-primary shadow-xl overflow-hidden -rotate-6 z-0 bg-white">
              <img
                alt="Mixing Velvet Dough"
                className="w-full h-full object-cover"
                src="/lifestyle_redvelvet_bg.png"
              />
            </div>
            {/* Foreground close-up image */}
            <div className="absolute right-[5%] bottom-[5%] w-[320px] h-[320px] z-10 rotate-6 drop-shadow-2xl hover:rotate-12 hover:scale-110 hover:-translate-y-4 transition-all duration-500 ease-out cursor-pointer">
              <img
                alt="Reddy n' Cream Cookie"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                src="/cookie_redvelvet.png"
              />
            </div>
          </div>

          {/* Text column second (Right) */}
          <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start">
            <h2 className="font-headline-lg text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-wider uppercase">
              Reddy n' Cream
            </h2>
            <p className="font-body-lg text-lg md:text-xl text-[#fff8ef]/90 leading-relaxed max-w-lg uppercase font-bold">
              A striking cocoa-hinted red velvet dough loaded with creamy white chocolate chips and an oozing, rich cream cheese frosting filling.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-[#fff8ef] text-[#7a2021] group-hover:text-[#993335] hover:bg-white hover:scale-105 active:scale-95 transition-all px-12 py-4 rounded-full font-headline-sm text-xl uppercase font-extrabold tracking-wider shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Dripping Chocolate Liquid Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%] z-20 pointer-events-none">
          <svg
            viewBox="0 0 1000 100"
            className="relative block w-full h-[60px] text-[#7a2021] group-hover:text-[#993335] transition-colors duration-700 ease-in-out fill-current"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 L 0 40 Q 20 40 20 65 A 10 10 0 0 0 40 65 Q 40 40 60 40 L 80 40 Q 105 40 105 85 A 15 15 0 0 0 135 85 Q 135 40 160 40 L 190 40 Q 205 40 205 55 A 8 8 0 0 0 221 55 Q 221 40 235 40 L 270 40 Q 295 40 295 95 A 12 12 0 0 0 319 95 Q 319 40 340 40 L 390 40 Q 410 40 410 75 A 12 12 0 0 0 434 75 Q 434 40 455 40 L 500 40 Q 525 40 525 90 A 15 15 0 0 0 555 90 Q 555 40 580 40 L 620 40 Q 635 40 635 60 A 8 8 0 0 0 651 60 Q 651 40 665 40 L 700 40 Q 725 40 725 95 A 12 12 0 0 0 749 95 Q 749 40 770 40 L 810 40 Q 830 40 830 70 A 10 10 0 0 0 850 70 Q 850 40 870 40 L 920 40 Q 945 40 945 85 A 15 15 0 0 0 975 85 Q 975 40 1000 40 L 1000 0 Z" />
          </svg>
        </div>
      </section>

      {/* Fudge Me Section */}
      <section className="group bg-[#f7f1eb] hover:bg-[#a88978] text-primary group-hover:text-white transition-colors duration-700 ease-in-out py-24 px-margin-desktop relative overflow-visible min-h-[550px] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text column first (Left) */}
          <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            <h2 className="font-headline-lg text-5xl md:text-6xl font-extrabold text-primary group-hover:text-white transition-colors duration-700 leading-tight tracking-wider uppercase">
              Fudge Me
            </h2>
            <p className="font-body-lg text-lg md:text-xl text-primary/80 group-hover:text-white/90 transition-colors duration-700 leading-relaxed max-w-lg uppercase font-bold">
              The ultimate chocolate overload—combining a rich brownie-cookie hybrid base, deep cocoa dough, and chunks of melting dark chocolate.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white group-hover:bg-[#fff8ef] group-hover:text-primary hover:scale-105 active:scale-95 transition-all duration-700 px-12 py-4 rounded-full font-headline-sm text-xl uppercase font-extrabold tracking-wider shadow-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Image column second (Right) */}
          <div className="relative w-full h-[400px] flex items-center justify-center order-1 lg:order-2">
            {/* Background lifestyle image */}
            <div className="absolute right-[5%] top-[10%] w-[280px] h-[280px] rounded-3xl border-2 border-primary shadow-xl overflow-hidden rotate-6 z-0 bg-white">
              <img
                alt="Melting Chocolate Drip"
                className="w-full h-full object-cover"
                src="/lifestyle_fudge_bg.png"
              />
            </div>
            {/* Foreground close-up image */}
            <div className="absolute left-[5%] bottom-[5%] w-[320px] h-[320px] z-10 -rotate-6 drop-shadow-2xl hover:-rotate-12 hover:scale-110 hover:-translate-y-4 transition-all duration-500 ease-out cursor-pointer">
              <img
                alt="Fudge Me Cookie"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                src="/cookie_fudge.png"
              />
            </div>
          </div>
        </div>

        {/* Dripping Chocolate Liquid Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%] z-20 pointer-events-none">
          <svg
            viewBox="0 0 1000 100"
            className="relative block w-full h-[60px] text-[#f7f1eb] group-hover:text-[#a88978] transition-colors duration-700 ease-in-out fill-current"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 L 0 40 Q 20 40 20 65 A 10 10 0 0 0 40 65 Q 40 40 60 40 L 80 40 Q 105 40 105 85 A 15 15 0 0 0 135 85 Q 135 40 160 40 L 190 40 Q 205 40 205 55 A 8 8 0 0 0 221 55 Q 221 40 235 40 L 270 40 Q 295 40 295 95 A 12 12 0 0 0 319 95 Q 319 40 340 40 L 390 40 Q 410 40 410 75 A 12 12 0 0 0 434 75 Q 434 40 455 40 L 500 40 Q 525 40 525 90 A 15 15 0 0 0 555 90 Q 555 40 580 40 L 620 40 Q 635 40 635 60 A 8 8 0 0 0 651 60 Q 651 40 665 40 L 700 40 Q 725 40 725 95 A 12 12 0 0 0 749 95 Q 749 40 770 40 L 810 40 Q 830 40 830 70 A 10 10 0 0 0 850 70 Q 850 40 870 40 L 920 40 Q 945 40 945 85 A 15 15 0 0 0 975 85 Q 975 40 1000 40 L 1000 0 Z" />
          </svg>
        </div>
      </section>

      {/* Blueberry Cream Cheese Section */}
      <section className="group bg-[#2e2b47] hover:bg-[#4a437a] text-white transition-colors duration-700 ease-in-out py-24 px-margin-desktop relative overflow-visible min-h-[550px] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image column first (Left) */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Background lifestyle image */}
            <div className="absolute left-[5%] top-[10%] w-[280px] h-[280px] rounded-3xl border-2 border-primary shadow-xl overflow-hidden -rotate-6 z-0 bg-white">
              <img
                alt="Blueberry Harvest"
                className="w-full h-full object-cover"
                src="/lifestyle_blueberry_bg.png"
              />
            </div>
            {/* Foreground close-up image */}
            <div className="absolute right-[5%] bottom-[5%] w-[320px] h-[320px] z-10 rotate-6 drop-shadow-2xl hover:rotate-12 hover:scale-110 hover:-translate-y-4 transition-all duration-500 ease-out cursor-pointer">
              <img
                alt="Blueberry Cream Cheese Cookie"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                src="/cookie_blueberry.png"
              />
            </div>
          </div>

          {/* Text column second (Right) */}
          <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start">
            <h2 className="font-headline-lg text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-wider uppercase">
              Blueberry Cream Cheese
            </h2>
            <p className="font-body-lg text-lg md:text-xl text-[#fff8ef]/90 leading-relaxed max-w-lg uppercase font-bold">
              A soft, buttery cookie crust with a vibrant blueberry compote swirling around a rich, velvety cream cheese center.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-[#fff8ef] text-[#2e2b47] group-hover:text-[#4a437a] hover:bg-white hover:scale-105 active:scale-95 transition-all px-12 py-4 rounded-full font-headline-sm text-xl uppercase font-extrabold tracking-wider shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Dripping Chocolate Liquid Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%] z-20 pointer-events-none">
          <svg
            viewBox="0 0 1000 100"
            className="relative block w-full h-[60px] text-[#2e2b47] group-hover:text-[#4a437a] transition-colors duration-700 ease-in-out fill-current"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 L 0 40 Q 20 40 20 65 A 10 10 0 0 0 40 65 Q 40 40 60 40 L 80 40 Q 105 40 105 85 A 15 15 0 0 0 135 85 Q 135 40 160 40 L 190 40 Q 205 40 205 55 A 8 8 0 0 0 221 55 Q 221 40 235 40 L 270 40 Q 295 40 295 95 A 12 12 0 0 0 319 95 Q 319 40 340 40 L 390 40 Q 410 40 410 75 A 12 12 0 0 0 434 75 Q 434 40 455 40 L 500 40 Q 525 40 525 90 A 15 15 0 0 0 555 90 Q 555 40 580 40 L 620 40 Q 635 40 635 60 A 8 8 0 0 0 651 60 Q 651 40 665 40 L 700 40 Q 725 40 725 95 A 12 12 0 0 0 749 95 Q 749 40 770 40 L 810 40 Q 830 40 830 70 A 10 10 0 0 0 850 70 Q 850 40 870 40 L 920 40 Q 945 40 945 85 A 15 15 0 0 0 975 85 Q 975 40 1000 40 L 1000 0 Z" />
          </svg>
        </div>
      </section>

      {/* Cornflake Crunch Section */}
      <section className="group bg-[#fdfcf0] hover:bg-[#e6c387] text-primary transition-colors duration-700 ease-in-out py-24 px-margin-desktop relative overflow-visible min-h-[550px] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text column first (Left) */}
          <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            <h2 className="font-headline-lg text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-wider uppercase">
              Cornflake Crunch
            </h2>
            <p className="font-body-lg text-lg md:text-xl text-primary/80 leading-relaxed max-w-lg uppercase font-bold">
              A playful, sweet-and-salty cookie rolled in crispy, golden toasted cornflakes for an unbelievable crunch with every single bite.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white hover:bg-opacity-95 hover:scale-105 active:scale-95 transition-all px-12 py-4 rounded-full font-headline-sm text-xl uppercase font-extrabold tracking-wider shadow-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Image column second (Right) */}
          <div className="relative w-full h-[400px] flex items-center justify-center order-1 lg:order-2">
            {/* Background lifestyle image */}
            <div className="absolute right-[5%] top-[10%] w-[280px] h-[280px] rounded-3xl border-2 border-primary shadow-xl overflow-hidden rotate-6 z-0 bg-white">
              <img
                alt="Golden Cornflakes"
                className="w-full h-full object-cover"
                src="/lifestyle_cornflake_bg.png"
              />
            </div>
            {/* Foreground close-up image */}
            <div className="absolute left-[5%] bottom-[5%] w-[320px] h-[320px] z-10 -rotate-6 drop-shadow-2xl hover:-rotate-12 hover:scale-110 hover:-translate-y-4 transition-all duration-500 ease-out cursor-pointer">
              <img
                alt="Cornflake Crunch Cookie"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                src="/cookie_cornflake.png"
              />
            </div>
          </div>
        </div>

        {/* Dripping Chocolate Liquid Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%] z-20 pointer-events-none">
          <svg
            viewBox="0 0 1000 100"
            className="relative block w-full h-[60px] text-[#fdfcf0] group-hover:text-[#e6c387] transition-colors duration-700 ease-in-out fill-current"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 L 0 40 Q 20 40 20 65 A 10 10 0 0 0 40 65 Q 40 40 60 40 L 80 40 Q 105 40 105 85 A 15 15 0 0 0 135 85 Q 135 40 160 40 L 190 40 Q 205 40 205 55 A 8 8 0 0 0 221 55 Q 221 40 235 40 L 270 40 Q 295 40 295 95 A 12 12 0 0 0 319 95 Q 319 40 340 40 L 390 40 Q 410 40 410 75 A 12 12 0 0 0 434 75 Q 434 40 455 40 L 500 40 Q 525 40 525 90 A 15 15 0 0 0 555 90 Q 555 40 580 40 L 620 40 Q 635 40 635 60 A 8 8 0 0 0 651 60 Q 651 40 665 40 L 700 40 Q 725 40 725 95 A 12 12 0 0 0 749 95 Q 749 40 770 40 L 810 40 Q 830 40 830 70 A 10 10 0 0 0 850 70 Q 850 40 870 40 L 920 40 Q 945 40 945 85 A 15 15 0 0 0 975 85 Q 975 40 1000 40 L 1000 0 Z" />
          </svg>
        </div>
      </section>

      {/* Classic Chocolate Chip Section */}
      <section className="group bg-[#42342d] hover:bg-[#735c52] text-white transition-colors duration-700 ease-in-out py-24 px-margin-desktop relative overflow-visible min-h-[550px] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image column first (Left) */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Background lifestyle image */}
            <div className="absolute left-[5%] top-[10%] w-[280px] h-[280px] rounded-3xl border-2 border-primary shadow-xl overflow-hidden -rotate-6 z-0 bg-white">
              <img
                alt="Classic Cookie Baking"
                className="w-full h-full object-cover"
                src="/lifestyle_chocolatechip_bg.png"
              />
            </div>
            {/* Foreground close-up image */}
            <div className="absolute right-[5%] bottom-[5%] w-[320px] h-[320px] z-10 rotate-6 drop-shadow-2xl hover:rotate-12 hover:scale-110 hover:-translate-y-4 transition-all duration-500 ease-out cursor-pointer">
              <img
                alt="Classic Chocolate Chip Cookie"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                src="/cookie_chocolatechip.png"
              />
            </div>
          </div>

          {/* Text column second (Right) */}
          <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start">
            <h2 className="font-headline-lg text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-wider uppercase">
              Classic Chocolate Chip
            </h2>
            <p className="font-body-lg text-lg md:text-xl text-[#fff8ef]/90 leading-relaxed max-w-lg uppercase font-bold">
              Our timeless, nostalgic recipe. Golden-brown brown butter dough packed generously with high-quality semi-sweet chocolate pools.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-[#fff8ef] text-[#42342d] group-hover:text-[#735c52] hover:bg-white hover:scale-105 active:scale-95 transition-all px-12 py-4 rounded-full font-headline-sm text-xl uppercase font-extrabold tracking-wider shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Dripping Chocolate Liquid Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] translate-y-[99%] z-20 pointer-events-none">
          <svg
            viewBox="0 0 1000 100"
            className="relative block w-full h-[60px] text-[#42342d] group-hover:text-[#735c52] transition-colors duration-700 ease-in-out fill-current"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 L 0 40 Q 20 40 20 65 A 10 10 0 0 0 40 65 Q 40 40 60 40 L 80 40 Q 105 40 105 85 A 15 15 0 0 0 135 85 Q 135 40 160 40 L 190 40 Q 205 40 205 55 A 8 8 0 0 0 221 55 Q 221 40 235 40 L 270 40 Q 295 40 295 95 A 12 12 0 0 0 319 95 Q 319 40 340 40 L 390 40 Q 410 40 410 75 A 12 12 0 0 0 434 75 Q 434 40 455 40 L 500 40 Q 525 40 525 90 A 15 15 0 0 0 555 90 Q 555 40 580 40 L 620 40 Q 635 40 635 60 A 8 8 0 0 0 651 60 Q 651 40 665 40 L 700 40 Q 725 40 725 95 A 12 12 0 0 0 749 95 Q 749 40 770 40 L 810 40 Q 830 40 830 70 A 10 10 0 0 0 850 70 Q 850 40 870 40 L 920 40 Q 945 40 945 85 A 15 15 0 0 0 975 85 Q 975 40 1000 40 L 1000 0 Z" />
          </svg>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="scroll-mt-28 bg-secondary-container py-section-padding px-margin-desktop overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-display-lg text-headline-lg text-primary mb-16">
            Sweet Words from Happy Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface p-10 rounded-[40px] border-2 border-primary transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex mb-4">
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <p className="italic font-body-lg text-on-surface mb-6">
                "I'm not usually into baking, but The Daily Crumb made me feel
                like a pro. The step-by-step instructions were foolproof and the
                rolls turned out absolutely perfect!"
              </p>
              <p className="font-headline-sm text-primary">Daniel H.</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-surface p-10 rounded-[40px] border-2 border-primary transform rotate-1 hover:rotate-0 transition-transform">
              <div className="flex mb-4">
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <p className="italic font-body-lg text-on-surface mb-6">
                "I've never considered myself much of a baker, but these rolls
                came out perfectly soft and gooey. My whole family couldn't stop
                raving about them!"
              </p>
              <p className="font-headline-sm text-primary">Sarah L.</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface p-10 rounded-[40px] border-2 border-primary transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex mb-4">
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-on-tertiary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <p className="italic font-body-lg text-on-surface mb-6">
                "I couldn't believe how quick and simple it was to make
                bakery-quality cinnamon rolls at home. The all-natural ingredients
                made me feel good about what I was serving."
              </p>
              <p className="font-headline-sm text-primary">Amy J.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="bg-on-tertiary-container/90 py-12">
        <div className="max-w-7xl mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <h2 className="font-headline-lg text-on-tertiary uppercase tracking-wider">
              Check Out Our Socials
            </h2>
            <div className="flex space-x-6">
              <span className="material-symbols-outlined text-on-tertiary text-3xl cursor-pointer hover:scale-125 transition-transform">
                photo_camera
              </span>
              <span className="material-symbols-outlined text-on-tertiary text-3xl cursor-pointer hover:scale-125 transition-transform">
                movie
              </span>
              <span className="material-symbols-outlined text-on-tertiary text-3xl cursor-pointer hover:scale-125 transition-transform">
                share
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-surface border-2 border-primary overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="A lifestyle shot of a happy person holding a warm cinnamon roll"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj0LRy6z-sQMBvj5wLxz-rwySjwVVLXlBcNcbTlvBz4nqT7vvC-Szww-YK2Vmo6TWxmEmuoObLjeBERhuZ1bYt0n6nSB5PoNq3i50TjRPGJklXtqAqlP9xD-QKCipMXDQNcreDrg_rEdN1gB6c79C9Py0L_iFs9NHt5VLEsIOtfA-vY1rtvA3K7hr5dD70iAG6o87HNKL-f2TkfuUfv8CzA71TJmNlGPPXGn35SwDK2cdGjaSOOTtb8g7lqw94hQljarvtAO701Os"
              />
            </div>
            <div className="aspect-square bg-surface border-2 border-primary overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="A top-down aesthetic shot of baking kit contents spread out neatly"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3PrSKqnLuaHufRJtAAbw8Ypgdnz7czP0ta9ls-HHDG0fkLY_KRdbaDK_NgYKz6912zq387mjHNNnzDbDmKl5hvO_OD-81GP3uV6jfqQh7Xg1N74rWhprH0mk4-2tWiv7QTjcF9_Y7hc-59XyZ750McviB-PbWQb9treC2Ui2XH1pLctyrjUZvi1quEVWyy47JoFYog2cvtsoHYPOCwMofTHPZpudkCUK6gvCScL-PztHa9yVpxC4Wo9khOCAa_GXPGgGIyoaAEFE"
              />
            </div>
            <div className="aspect-square bg-surface border-2 border-primary overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="Close up of a hand drizzling white icing over a warm cinnamon roll"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYwP7qo-9i6NNWNWxZ9i0X05q4_lP_CFqDXqiobX6-bL6yXx0XxY6JYuzFj78-okA0xRWYMC3grgvvGN1-WD7fy_MJN5yP8CaLFSlIgv-qt2pzxzRvqJXpraPnoOwFmxOV7112jmdzlLp5B_MksR2MszmyPnD8OBROt5vLEjoWyGIEwerysIfdM-DRAB6vMomWdSX9IHRg0VAcdq8D7IvouLsznpyQUM5TCHvUwesiMr7N3-XoJv2sEJQjLHbLQw-mTAnbf6QhEUY"
              />
            </div>
            <div className="aspect-square bg-surface border-2 border-primary overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="A pile of cinnamon rolls on a wooden serving board"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK69ewg_VT9SQAbWNJqwAOKr3KsCgzhb1uwKlOX4zyS9_liRXdQ9GBxVDn9ty8EtuQghDhxeQt0KjiopbEh8UXAPBZDeTJgtWC_LpQJhxwH6Mzq-KhbVABjkrDoEpbMP_aFl_JEJbCR3aMWQ2WsXHMZ5zHDMQINKu6lLyJGauGXtb1rna96LKPjaRUPF4svj18K0A7YzcqeiqUCbmXandBfVj3Tp_jJFYVtJgN6Hvw-fFm3-LCNBl1qfFg8dKrkbQt50r5HFIyNUM"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="scroll-mt-28 bg-primary-container dark:bg-inverse-surface w-full rounded-t-[40px] mt-section-padding border-t-2 border-primary dark:border-primary-fixed flex flex-col md:flex-row justify-between items-start px-margin-desktop py-section-padding max-w-full mx-auto">
        <div className="w-full md:w-1/3 mb-12 md:mb-0">
          <div className="text-headline-lg font-headline-lg text-on-primary-container dark:text-on-primary-fixed mb-6">
            Kookie
          </div>
          <p className="font-body-md text-body-md text-on-primary-container/80 dark:text-on-primary-fixed/80 max-w-sm mb-8">
            © 2024 Kookie. Freshly baked with love. Bringing artisanal quality to your doorstep, one crumb at a time.
          </p>
          <div className="flex space-x-6">
            <span className="material-symbols-outlined text-on-primary-container cursor-pointer hover:opacity-80 transition-opacity">
              face_nod
            </span>
            <span className="material-symbols-outlined text-on-primary-container cursor-pointer hover:opacity-80 transition-opacity">
              photo_camera
            </span>
            <span className="material-symbols-outlined text-on-primary-container cursor-pointer hover:opacity-80 transition-opacity">
              mail
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-12 md:mb-0">
          <h4 className="font-headline-sm text-on-primary-container mb-6">Quick Links</h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-primary-container/80 dark:text-on-primary-fixed/80">
            <li>
              <a className="hover:opacity-80 transition-opacity hover:underline" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:opacity-80 transition-opacity hover:underline" href="#">
                Menu
              </a>
            </li>
            <li>
              <a className="hover:opacity-80 transition-opacity hover:underline" href="#">
                Reviews
              </a>
            </li>
            <li>
              <a className="hover:opacity-80 transition-opacity hover:underline" href="#">
                Our Story
              </a>
            </li>
            <li>
              <a className="hover:opacity-80 transition-opacity hover:underline" href="#">
                Locations
              </a>
            </li>
            <li>
              <a className="hover:opacity-80 transition-opacity hover:underline" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-headline-sm text-on-primary-container mb-6">
            Join Our Newsletter
          </h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                className="w-full bg-surface-container border-2 border-primary rounded-xl px-4 py-3 focus:ring-0 focus:border-primary placeholder:text-primary/50 text-primary"
                placeholder="NAME:"
                type="text"
              />
            </div>
            <div className="relative">
              <input
                className="w-full bg-surface-container border-2 border-primary rounded-xl px-4 py-3 focus:ring-0 focus:border-primary placeholder:text-primary/50 text-primary"
                placeholder="EMAIL:"
                type="email"
              />
            </div>
            <button
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md sticker-border hover:opacity-90 active:opacity-70 transition-all"
              type="submit"
            >
              JOIN THE SWEETNESS
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
