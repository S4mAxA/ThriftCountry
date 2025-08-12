'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      className="card group"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link href={`/produit/${product.slug}`} className="block">
        {/* Placeholder SVG */}
        <div className="aspect-square bg-neutral-100 rounded-t-lg flex items-center justify-center overflow-hidden">
          <svg
            className="w-24 h-24 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Contenu */}
        <div className="p-4">
          <h3 className="font-medium text-neutral-900 mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-neutral-500 text-sm">Prix: À définir</span>
            <span className="text-primary text-sm font-medium">Voir détails →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 