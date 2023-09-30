import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: "r8fa7k7e",
  dataset: "production",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);