/**
 * Interfaz que define la estructura de las estadísticas del texto.
 */
// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
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
const stopWords = new Set(stryMutAct_9fa48("0") ? [] : (stryCov_9fa48("0"), [stryMutAct_9fa48("1") ? "" : (stryCov_9fa48("1"), "el"), stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), "la"), stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), "los"), stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), "las"), stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), "un"), stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), "una"), stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), "unos"), stryMutAct_9fa48("8") ? "" : (stryCov_9fa48("8"), "unas"), stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), "y"), stryMutAct_9fa48("10") ? "" : (stryCov_9fa48("10"), "o"), stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), "a"), stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), "de"), stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), "en"), stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), "con"), stryMutAct_9fa48("15") ? "" : (stryCov_9fa48("15"), "por"), stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), "para"), stryMutAct_9fa48("17") ? "" : (stryCov_9fa48("17"), "es"), stryMutAct_9fa48("18") ? "" : (stryCov_9fa48("18"), "que"), stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), "se"), stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), "no"), stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), "al"), stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), "lo"), stryMutAct_9fa48("23") ? "" : (stryCov_9fa48("23"), "su"), stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), "del"), stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), "como"), stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), "más"), stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), "pero"), stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), "ya"), stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), "le"), stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), "sí"), stryMutAct_9fa48("31") ? "" : (stryCov_9fa48("31"), "sus"), stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), "u"), stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), "e")]));

/**
 * Analiza el texto dado y devuelve estadísticas.
 * @param {string} text - El texto para analizar.
 * @returns {TextStatistics} - Un objeto que contiene varias estadísticas del texto.
 */
export function analyzeText(text: string): TextStatistics {
  if (stryMutAct_9fa48("34")) {
    {}
  } else {
    stryCov_9fa48("34");
    const characterCount = text.length;
    const characterCountNoSpaces = text.replace(stryMutAct_9fa48("35") ? /\S/g : (stryCov_9fa48("35"), /\s/g), stryMutAct_9fa48("36") ? "Stryker was here!" : (stryCov_9fa48("36"), "")).length;
    const words = stryMutAct_9fa48("39") ? text.toLowerCase().match(/\b\w+\b/g) && [] : stryMutAct_9fa48("38") ? false : stryMutAct_9fa48("37") ? true : (stryCov_9fa48("37", "38", "39"), (stryMutAct_9fa48("40") ? text.toUpperCase().match(/\b\w+\b/g) : (stryCov_9fa48("40"), text.toLowerCase().match(stryMutAct_9fa48("42") ? /\b\W+\b/g : stryMutAct_9fa48("41") ? /\b\w\b/g : (stryCov_9fa48("41", "42"), /\b\w+\b/g)))) || (stryMutAct_9fa48("43") ? ["Stryker was here"] : (stryCov_9fa48("43"), [])));
    const wordCount = words.length;
    const sentences = stryMutAct_9fa48("44") ? text.split(/[.!?]+/) : (stryCov_9fa48("44"), text.split(stryMutAct_9fa48("46") ? /[^.!?]+/ : stryMutAct_9fa48("45") ? /[.!?]/ : (stryCov_9fa48("45", "46"), /[.!?]+/)).filter(stryMutAct_9fa48("47") ? () => undefined : (stryCov_9fa48("47"), s => stryMutAct_9fa48("51") ? s.trim().length <= 0 : stryMutAct_9fa48("50") ? s.trim().length >= 0 : stryMutAct_9fa48("49") ? false : stryMutAct_9fa48("48") ? true : (stryCov_9fa48("48", "49", "50", "51"), (stryMutAct_9fa48("52") ? s.length : (stryCov_9fa48("52"), s.trim().length)) > 0))));
    const sentenceCount = sentences.length;
    const paragraphs = stryMutAct_9fa48("53") ? text.split(/\n{2,}/) : (stryCov_9fa48("53"), text.split(stryMutAct_9fa48("54") ? /\n/ : (stryCov_9fa48("54"), /\n{2,}/)).filter(stryMutAct_9fa48("55") ? () => undefined : (stryCov_9fa48("55"), p => stryMutAct_9fa48("59") ? p.trim().length <= 0 : stryMutAct_9fa48("58") ? p.trim().length >= 0 : stryMutAct_9fa48("57") ? false : stryMutAct_9fa48("56") ? true : (stryCov_9fa48("56", "57", "58", "59"), (stryMutAct_9fa48("60") ? p.length : (stryCov_9fa48("60"), p.trim().length)) > 0))));
    const paragraphCount = paragraphs.length;
    const totalWordLength = words.reduce(stryMutAct_9fa48("61") ? () => undefined : (stryCov_9fa48("61"), (sum, word) => stryMutAct_9fa48("62") ? sum - word.length : (stryCov_9fa48("62"), sum + word.length)), 0);
    const averageWordLength = (stryMutAct_9fa48("66") ? wordCount <= 0 : stryMutAct_9fa48("65") ? wordCount >= 0 : stryMutAct_9fa48("64") ? false : stryMutAct_9fa48("63") ? true : (stryCov_9fa48("63", "64", "65", "66"), wordCount > 0)) ? stryMutAct_9fa48("67") ? totalWordLength * wordCount : (stryCov_9fa48("67"), totalWordLength / wordCount) : 0;
    const averageSentenceLength = (stryMutAct_9fa48("71") ? sentenceCount <= 0 : stryMutAct_9fa48("70") ? sentenceCount >= 0 : stryMutAct_9fa48("69") ? false : stryMutAct_9fa48("68") ? true : (stryCov_9fa48("68", "69", "70", "71"), sentenceCount > 0)) ? stryMutAct_9fa48("72") ? wordCount * sentenceCount : (stryCov_9fa48("72"), wordCount / sentenceCount) : 0;
    const wordFrequency = new Map<string, number>();
    for (const word of words) {
      if (stryMutAct_9fa48("73")) {
        {}
      } else {
        stryCov_9fa48("73");
        const count = stryMutAct_9fa48("76") ? wordFrequency.get(word) && 0 : stryMutAct_9fa48("75") ? false : stryMutAct_9fa48("74") ? true : (stryCov_9fa48("74", "75", "76"), wordFrequency.get(word) || 0);
        wordFrequency.set(word, stryMutAct_9fa48("77") ? count - 1 : (stryCov_9fa48("77"), count + 1));
      }
    }
    const topKeywords = stryMutAct_9fa48("80") ? Array.from(wordFrequency.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([word]) => word) : stryMutAct_9fa48("79") ? Array.from(wordFrequency.entries()).filter(([word]) => !stopWords.has(word)).slice(0, 5).map(([word]) => word) : stryMutAct_9fa48("78") ? Array.from(wordFrequency.entries()).filter(([word]) => !stopWords.has(word)).sort((a, b) => b[1] - a[1]).map(([word]) => word) : (stryCov_9fa48("78", "79", "80"), Array.from(wordFrequency.entries()).filter(stryMutAct_9fa48("81") ? () => undefined : (stryCov_9fa48("81"), ([word]) => stryMutAct_9fa48("82") ? stopWords.has(word) : (stryCov_9fa48("82"), !stopWords.has(word)))).sort(stryMutAct_9fa48("83") ? () => undefined : (stryCov_9fa48("83"), (a, b) => stryMutAct_9fa48("84") ? b[1] + a[1] : (stryCov_9fa48("84"), b[1] - a[1]))).slice(0, 5).map(stryMutAct_9fa48("85") ? () => undefined : (stryCov_9fa48("85"), ([word]) => word)));
    const uniqueWordCount = wordFrequency.size;
    return stryMutAct_9fa48("86") ? {} : (stryCov_9fa48("86"), {
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
    });
  }
}