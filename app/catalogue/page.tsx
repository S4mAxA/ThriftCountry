import { products } from '@/lib/products'
import ProductCard from '../components/ProductCard'
import Section from '../components/Section'

export default function CataloguePage() {
  return (
    <Section className="gradient-section py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Notre Catalogue
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Découvrez notre sélection de vêtements de seconde main. 
            Chaque pièce a été soigneusement choisie pour sa qualité et son style.
          </p>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Info */}
        <div className="text-center mt-16">
          <p className="text-neutral-600">
            Tous nos articles sont en stock limité. 
            N'hésitez pas à nous contacter pour plus d'informations.
          </p>
        </div>
      </div>
    </Section>
  )
} 