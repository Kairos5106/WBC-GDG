export default function slugify(text: string): string {
  return text
    .replace(/\s+/g, "+")         // Replace spaces with +
}