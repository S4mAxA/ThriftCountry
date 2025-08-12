import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from './components/Section'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="gradient-hero text-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mode Éthique
            <br />
            <span className="text-neutral-300">Style Unique</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez notre sélection de vêtements de seconde main. 
            Mode durable, style intemporel, impact positif.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/catalogue" className="btn-primary text-lg px-8 py-4">
              Découvrir le catalogue
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Bénéfices Section */}
      <Section className="gradient-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Pourquoi choisir Thrift Country ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Qualité et simplicité au rendez-vous. Découvrez notre approche unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bénéfice 1 */}
            <motion.div 
              className="text-center p-6"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Qualité</h3>
              <p className="text-neutral-600">
                Chaque article est soigneusement sélectionné pour sa qualité et son style.
              </p>
            </motion.div>

            {/* Bénéfice 2 */}
            <motion.div 
              className="text-center p-6"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Durabilité</h3>
              <p className="text-neutral-600">
                Contribuez à un mode de consommation plus responsable et éthique.
              </p>
            </motion.div>

            {/* Bénéfice 3 */}
            <motion.div 
              className="text-center p-6"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Style Unique</h3>
              <p className="text-neutral-600">
                Trouvez des pièces uniques qui reflètent votre personnalité.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-900 text-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à découvrir notre collection ?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Explorez notre catalogue et trouvez des pièces qui vous ressemblent.
          </p>
          <Link href="/catalogue" className="btn-secondary">
            Voir le catalogue
          </Link>
        </div>
      </Section>
    </>
  )
} 