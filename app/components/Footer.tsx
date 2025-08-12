export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-primary text-xs font-bold">TC</span>
              </div>
              <span className="text-secondary font-bold text-lg">Thrift Country</span>
            </div>
            <p className="text-neutral-300 text-sm">
              Mode éthique et seconde main de qualité. Style unique, impact positif.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-neutral-300 hover:text-secondary transition-colors">Accueil</a></li>
              <li><a href="/catalogue" className="text-neutral-300 hover:text-secondary transition-colors">Catalogue</a></li>
              <li><a href="/about" className="text-neutral-300 hover:text-secondary transition-colors">À propos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-neutral-300">contact@thriftcountry.com</li>
              <li className="text-neutral-300">Support disponible</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Thrift Country. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
} 