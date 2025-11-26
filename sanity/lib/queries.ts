import { groq } from 'next-sanity'

// Obtener todos los posts publicados
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "author": author->{
      name,
      image
    },
    "categories": categories[]->{
      _id,
      title
    }
  }
`

// Obtener un post por slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body,
    "author": author->{
      name,
      image,
      bio
    },
    "categories": categories[]->{
      _id,
      title
    }
  }
`

// Obtener todos los slugs (para generateStaticParams)
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`

// Obtener posts por categoría
export const postsByCategoryQuery = groq`
  *[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "author": author->{
      name,
      image
    }
  }
`