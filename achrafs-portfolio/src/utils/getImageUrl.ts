export function getImageUrl(imageName: string) {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
}
