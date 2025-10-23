// @ts-nocheck
import { analyzeText } from "./analyzer.js";

describe("Pruebas de conteo de caracteres", () => {
  it("Texto vacío", () => {
    const stats = analyzeText("");
    expect(stats.characterCount).toBe(0);
    expect(stats.characterCountNoSpaces).toBe(0);
  });

  it("Texto con espacios", () => {
    const stats = analyzeText("     ");
    expect(stats.characterCount).toBe(5);
    expect(stats.characterCountNoSpaces).toBe(0);
  });

  it("Texto con caracteres especiales", () => {
    const stats = analyzeText("!@#$%^&*()");
    expect(stats.characterCount).toBe(10);
    expect(stats.characterCountNoSpaces).toBe(10);
  });
});

describe("Pruebas de conteo de palabras", () => {
  it("Texto simple", () => {
    const stats = analyzeText("Hola mundo");
    expect(stats.wordCount).toBe(2);
  });

  it("Texto con guiones", () => {
    const stats = analyzeText("hola-mundo");
    expect(stats.wordCount).toBe(1);
  });

  it("Texto con mayúsculas y minúsculas", () => {
    const stats = analyzeText("Hola hola HOLA");
    expect(stats.wordFrequency.get("hola")).toBe(3);
  });

  it("Texto con números", () => {
    const stats = analyzeText("uno 2 tres 45 seis");
    expect(stats.wordCount).toBe(5);
  });

  it("Texto con comas", () => {
    const stats = analyzeText("manzana, pera, plátano");
    expect(stats.wordCount).toBe(3);
  });
});

describe("Pruebas de oraciones y párrafos", () => {
  it("Texto con signos de puntuación", () => {
    const stats = analyzeText("Hola. ¿Cómo estás? ¡Bien!");
    expect(stats.sentenceCount).toBe(3);
  });

  it("Texto con saltos de línea", () => {
    const stats = analyzeText("Primer párrafo.\n\nSegundo párrafo.");
    expect(stats.paragraphCount).toBe(2);
  });

  it("Texto con múltiples espacios y saltos de línea", () => {
    const stats = analyzeText("  Primer párrafo.  \n\n  Segundo párrafo.  ");
    expect(stats.paragraphCount).toBe(2);
  });

  it("Un párrafo con varias oraciones", () => {
    const stats = analyzeText("Esta es la primera oración. Esta es la segunda oración.");
    expect(stats.sentenceCount).toBe(2);
    expect(stats.paragraphCount).toBe(1);
  });
});

describe("Pruebas de promedios", () => {
  it("Promedio de longitud de palabras", () => {
    const stats = analyzeText("Hola mundo");
    expect(stats.averageWordLength).toBeCloseTo(4.5);
  });

  it("Promedio de palabras por oración", () => {
    const stats = analyzeText("Hola mundo. Esto es una prueba.");
    expect(stats.averageSentenceLength).toBeCloseTo(3);
  });

  it("Promedio con una sola palabra", () => {
    const stats = analyzeText("Palabra");
    expect(stats.averageWordLength).toBeCloseTo(7);
    expect(stats.averageSentenceLength).toBeCloseTo(1);
  });

  it("Promedio con oraciones vacías", () => {
    const stats = analyzeText(". . .");
    expect(stats.averageSentenceLength).toBeCloseTo(0);
  });
});

describe("Pruebas de palabras clave y únicas", () => {
  it("Top keywords excluye stop words", () => {
    const stats = analyzeText("el el el mundo mundo mundo mundo");
    expect(stats.topKeywords).toEqual(["mundo"]);
  });

  it("Cuenta de palabras únicas", () => {
    const stats = analyzeText("uno dos tres tres dos uno cuatro");
    expect(stats.uniqueWordCount).toBe(4);
  });

  it("Top keywords con varias palabras", () => {
    const stats = analyzeText("manzana banana manzana pera banana banana");
    expect(stats.topKeywords).toEqual(["banana", "manzana"]);
  });

  it("Cuenta de palabras únicas con stop words", () => {
    const stats = analyzeText("el uno y el dos");
    expect(stats.uniqueWordCount).toBe(4);
  });
});