import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "25tuybj3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface BlogPostPreview {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: any;
  seoTitle?: string;
  seoDescription?: string;
  noIndex?: boolean;
}

export interface BlogPost extends BlogPostPreview {
  body: any[];
  _updatedAt?: string;
}

export async function getAllPosts(): Promise<BlogPostPreview[]> {
  return sanityClient.fetch<BlogPostPreview[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, coverImage, seoTitle, seoDescription, noIndex
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch<BlogPost | null>(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, _updatedAt, excerpt, coverImage, body, seoTitle, seoDescription, noIndex
    }`,
    { slug }
  );
}

export async function getMorePosts(currentSlug: string): Promise<BlogPostPreview[]> {
  return sanityClient.fetch<BlogPostPreview[]>(
    `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0..2] {
      _id, title, slug, publishedAt, excerpt, coverImage
    }`,
    { slug: currentSlug }
  );
}

export async function getAllPostMeta(): Promise<{ slug: string; publishedAt: string; updatedAt: string }[]> {
  return sanityClient.fetch(
    `*[_type == "post" && (noIndex != true)] | order(publishedAt desc) {
      "slug": slug.current, publishedAt, "updatedAt": _updatedAt
    }`
  );
}
