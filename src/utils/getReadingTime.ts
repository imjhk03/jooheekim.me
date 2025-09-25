/**
 * Calculate reading time for blog post content
 * @param content - The blog post content (markdown or HTML)
 * @returns Reading time string (e.g., "4 min read" or "< 1 min read")
 */
export function getReadingTime(content: string): string {
  if (!content || content.trim().length === 0) {
    return "< 1 min read";
  }

  // Remove code blocks (both ``` and single backticks)
  let cleanContent = content.replace(/```[\s\S]*?```/g, ' ');
  cleanContent = cleanContent.replace(/`[^`]*`/g, ' ');

  // Remove HTML tags
  cleanContent = cleanContent.replace(/<[^>]*>/g, ' ');

  // Remove markdown syntax
  cleanContent = cleanContent.replace(/#{1,6}\s/g, ''); // Headers
  cleanContent = cleanContent.replace(/\*\*([^*]+)\*\*/g, '$1'); // Bold
  cleanContent = cleanContent.replace(/\*([^*]+)\*/g, '$1'); // Italic
  cleanContent = cleanContent.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Links
  cleanContent = cleanContent.replace(/!\[([^\]]*)\]\([^)]+\)/g, ''); // Images

  // Remove extra whitespace and split into words
  const words = cleanContent
    .replace(/\s+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);

  const wordCount = words.length;

  // Calculate reading time (average reading speed: 225 words per minute)
  const readingTimeMinutes = Math.ceil(wordCount / 225);

  if (readingTimeMinutes < 1) {
    return "< 1 min read";
  }

  return `${readingTimeMinutes} min read`;
}