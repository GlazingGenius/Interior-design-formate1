import { useState } from "react";
import { Menu, X, Home, Briefcase, Image, Phone, Users, DollarSign, Clock } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl text-rose-600">Interior Design</div>
          
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollTo("home")} className="text-gray-700 hover:text-rose-600 transition">Home</button>
            <button onClick={() => scrollTo("services")} className="text-gray-700 hover:text-rose-600 transition">Services</button>
            <button onClick={() => scrollTo("gallery")} className="text-gray-700 hover:text-rose-600 transition">Gallery</button>
            <button onClick={() => scrollTo("contact")} className="text-gray-700 hover:text-rose-600 transition">Contact</button>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-white border-t px-6 py-4 space-y-3">
            <button onClick={() => scrollTo("home")} className="block w-full text-left py-2 text-gray-700">Home</button>
            <button onClick={() => scrollTo("services")} className="block w-full text-left py-2 text-gray-700">Services</button>
            <button onClick={() => scrollTo("gallery")} className="block w-full text-left py-2 text-gray-700">Gallery</button>
            <button onClick={() => scrollTo("contact")} className="block w-full text-left py-2 text-gray-700">Contact</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
                Design Your <span className="text-rose-600">Dream</span> Space
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your home into a beautiful sanctuary with our expert interior design services. We create spaces that reflect your personality and lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollTo("contact")}
                  className="bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition shadow-lg"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollTo("gallery")}
                  className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition"
                >
                  View Projects
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1628744876525-f2678d8af47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2NDc2MTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Beautiful living room"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl mb-1 text-rose-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive interior design solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 bg-rose-600 rounded-full flex items-center justify-center mb-6">
                <Home className="text-white" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Residential Design</h3>
              <p className="text-gray-600">Complete home interior design from concept to completion</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Commercial Spaces</h3>
              <p className="text-gray-600">Professional office and retail interior solutions</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Image className="text-white" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Space Planning</h3>
              <p className="text-gray-600">Optimize your space with smart layout planning</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-rose-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 bg-rose-600 rounded-full flex items-center justify-center mb-6">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Consultation</h3>
              <p className="text-gray-600">Expert advice and personalized design guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our stunning portfolio of completed interior design projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzQ2MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern home"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Modern Living Room</h3>
                  <p className="text-white/80">Contemporary design with clean lines</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ2ODQ0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cozy bedroom"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Cozy Bedroom</h3>
                  <p className="text-white/80">Warm and inviting sleeping space</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588796460733-82d656bfbc49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjQ3NjE0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Stylish kitchen"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Stylish Kitchen</h3>
                  <p className="text-white/80">Functional and beautiful cooking space</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758977405163-f2595de08dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjQ3NDI2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dining room"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Elegant Dining</h3>
                  <p className="text-white/80">Perfect space for gatherings</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707376519357-b53e370384fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZGVjb3J8ZW58MXx8fHwxNzY0NjYxNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury decor"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Luxury Decor</h3>
                  <p className="text-white/80">Premium finishes and details</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628744876525-f2678d8af47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2NDc2MTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beautiful living"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl mb-1">Beautiful Living</h3>
                  <p className="text-white/80">Sophisticated and comfortable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your space? Contact us today for a free consultation
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-rose-600 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-rose-600 focus:outline-none transition"
              />
            </div>
            
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-rose-600 focus:outline-none transition"
            />
            
            <textarea
              placeholder="Tell us about your project..."
              rows={6}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-rose-600 focus:outline-none transition resize-none"
            />
            
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-4 rounded-xl hover:bg-rose-700 transition shadow-lg text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading interior design services in New York with 15+ years of experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl mb-3 text-rose-600">300+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3 text-rose-600">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3 text-rose-600">100%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3 text-rose-600">50+</div>
              <div className="text-gray-700">Design Awards</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl border border-rose-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 text-center">Expert Designers</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Certified interior designers with creativity and expertise for stunning results
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl border border-amber-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 text-center">Affordable Pricing</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Premium design services at competitive prices with flexible packages
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 text-center">Timely Delivery</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Projects completed on time and within budget without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-2xl text-rose-400 mb-4">Interior Design</div>
            <p className="text-gray-400 mb-8">Creating beautiful spaces that inspire</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="text-rose-400 mb-2">📧 Email</div>
              <div className="text-gray-300">hello@interiordesign.com</div>
            </div>
            <div>
              <div className="text-rose-400 mb-2">📞 Phone</div>
              <div className="text-gray-300">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-rose-400 mb-2">📍 Location</div>
              <div className="text-gray-300">New York, NY</div>
            </div>
          </div>

          <div className="text-gray-500 text-sm text-center border-t border-gray-800 pt-8">
            © 2025 Interior Design. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
