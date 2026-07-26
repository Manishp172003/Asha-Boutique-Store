import { Instagram, Facebook, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const Footer = ({ onScrollToSection, trendingRef, styleEditRef, atelierRef, heroRef, onBookingOpen }) => {
  return (
    <footer className="py-16 px-6 lg:px-12 bg-[#2B1E1A] text-[#F6F2EE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Get the lookbook in your inbox.
            </h3>
            <div className="flex flex-wrap gap-3">
              <Input 
                type="email" 
                placeholder="Email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-6 max-w-xs"
              />
              <Button 
                onClick={() => toast.success('Subscribed successfully!')}
                className="bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full"
              >
                Subscribe
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onScrollToSection(trendingRef)} className="text-white/70 hover:text-white transition-colors">Shop</button></li>
              <li><button onClick={() => onScrollToSection(styleEditRef)} className="text-white/70 hover:text-white transition-colors">Lookbook</button></li>
              <li><button onClick={() => onScrollToSection(atelierRef)} className="text-white/70 hover:text-white transition-colors">Atelier</button></li>
              <li><button onClick={() => onScrollToSection(heroRef)} className="text-white/70 hover:text-white transition-colors">Visit</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>+91 97 6790 7469</li>
              <li>hello@ashaboutique.com</li>
              <li>Maharashtra Nagpur, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            © 2026 Asha Boutique Store. Crafted in Nagpur.
          </p>
          <div className="flex gap-4">
            <button className="text-white/70 hover:text-white transition-colors">
              <Instagram size={20} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              <Facebook size={20} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
