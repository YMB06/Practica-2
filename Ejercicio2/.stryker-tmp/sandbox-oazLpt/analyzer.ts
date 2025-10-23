/**
 * Interfaz que define la estructura de las estadísticas del texto.
 */
// @ts-nocheck

export interface TextStatistics {
  /**
   * Número total de caracteres en el texto.
   */
  characterCount: number;
  /**
   * Número de caracteres excluyendo espacios.
   */
  characterCountNoSpaces: number;
  /**
   * Número total de palabras en el texto.
   */
  wordCount: number;
  /**
   * Número total de oraciones en el texto.
   */
  sentenceCount: number;
  /**
   * Número total de párrafos en el texto.
   */
  paragraphCount: number;
  /**
   * Longitud promedio de las palabras en el texto.
   */
  averageWordLength: number;
  /**
   * Número promedio de palabras por oración.
   */
  averageSentenceLength: number;
  /**
   * Frecuencia de cada palabra en el texto.
   */
  wordFrequency: Map<string, number>;
  /**
   * Palabras clave principales en el texto.
   */
  topKeywords: string[];
  /**
   * Número de palabras únicas en el texto.
   */
  uniqueWordCount: number;
}

const stopWords = new Set([
  "el", "la", "los", "las", "un", "una", "unos", "unas", "y", "o", "a", "de", "en", "con", "por", "para", "es", "que", "se", "no", "al", "lo", "su", "del", "como", "más", "pero", "ya", "le", "sí", "sus", "u", "e"
]);

/**
 * Analiza el texto dado y devuelve estadísticas.
 * @param {string} text - El texto para analizar.
 * @returns {TextStatistics} - Un objeto que contiene varias estadísticas del texto.
 */
export function analyzeText(text: string): TextStatistics {
  const characterCount = text.length;
  const characterCountNoSpaces = text.replace(/\s/g, "").length;

  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const wordCount = words.length;

  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const sentenceCount = sentences.length;

  const paragraphs = text.split(/\n{2,}/).filter(p => p.trim().length > 0);
  const paragraphCount = paragraphs.length;

  const totalWordLength = words.reduce((sum, word) => sum + word.length, 0);
  const averageWordLength = wordCount > 0 ? totalWordLength / wordCount : 0;
  const averageSentenceLength = sentenceCount > 0 ? wordCount / sentenceCount : 0;

  const wordFrequency = new Map<string, number>();
  for (const word of words) {
    const count = wordFrequency.get(word) || 0;
    wordFrequency.set(word, count + 1);
  }

  const topKeywords = Array.from(wordFrequency.entries())
    .filter(([word]) => !stopWords.has(word))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word);

  const uniqueWordCount = wordFrequency.size;

  return {
    characterCount,
    characterCountNoSpaces,
    wordCount,
    sentenceCount,
    paragraphCount,
    averageWordLength,
    averageSentenceLength,
    wordFrequency,
    topKeywords,
    uniqueWordCount
  };
}