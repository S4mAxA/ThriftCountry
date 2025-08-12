export interface Product {
  slug: string
  name: string
  description: string
}

export const products: Product[] = [
  {
    slug: 'article-test-1',
    name: 'article test 1',
    description: 'Description générique pour article test 1. Qualité et simplicité au rendez-vous.',
  },
  {
    slug: 'article-test-2',
    name: 'article test 2',
    description: 'Description générique pour article test 2. Design épuré et fonctionnel.',
  },
  {
    slug: 'article-test-3',
    name: 'article test 3',
    description: 'Description générique pour article test 3. Style intemporel et élégant.',
  },
  {
    slug: 'article-test-4',
    name: 'article test 4',
    description: 'Description générique pour article test 4. Confort et durabilité.',
  },
  {
    slug: 'article-test-5',
    name: 'article test 5',
    description: 'Description générique pour article test 5. Matériaux de qualité.',
  },
  {
    slug: 'article-test-6',
    name: 'article test 6',
    description: 'Description générique pour article test 6. Finition soignée.',
  },
  {
    slug: 'article-test-7',
    name: 'article test 7',
    description: 'Description générique pour article test 7. Polyvalence au quotidien.',
  },
  {
    slug: 'article-test-8',
    name: 'article test 8',
    description: 'Description générique pour article test 8. Adaptabilité parfaite.',
  },
  {
    slug: 'article-test-9',
    name: 'article test 9',
    description: 'Description générique pour article test 9. Esthétique raffinée.',
  },
  {
    slug: 'article-test-10',
    name: 'article test 10',
    description: 'Description générique pour article test 10. Harmonie des formes.',
  },
  {
    slug: 'article-test-11',
    name: 'article test 11',
    description: 'Description générique pour article test 11. Équilibre parfait.',
  },
  {
    slug: 'article-test-12',
    name: 'article test 12',
    description: 'Description générique pour article test 12. Excellence dans les détails.',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
} 