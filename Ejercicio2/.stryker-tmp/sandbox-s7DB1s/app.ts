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
import { analyzeText, TextStatistics } from "./analyzer.ts";
document.addEventListener(stryMutAct_9fa48("87") ? "" : (stryCov_9fa48("87"), "DOMContentLoaded"), () => {
  if (stryMutAct_9fa48("88")) {
    {}
  } else {
    stryCov_9fa48("88");
    const textInput = document.getElementById("textInput") as HTMLTextAreaElement;
    const analyzeButton = document.getElementById("analyzeButton") as HTMLButtonElement;
    const resultsContainer = document.getElementById("results") as HTMLDivElement;

    // Función para mostrar los resultados en la interfaz de usuario
    function displayResults(stats: TextStatistics) {
      if (stryMutAct_9fa48("89")) {
        {}
      } else {
        stryCov_9fa48("89");
        resultsContainer.innerHTML = stryMutAct_9fa48("90") ? `` : (stryCov_9fa48("90"), `
            <div class="card">
                <h3>Conteo de Caracteres</h3>
                <p>${stats.characterCount}</p>
            </div>
            <div class="card">
                <h3>Conteo de Caracteres (Sin Espacios)</h3>
                <p>${stats.characterCountNoSpaces}</p>
            </div>
            <div class="card">
                <h3>Conteo de Palabras</h3>
                <p>${stats.wordCount}</p>
            </div>
            <div class="card">
                <h3>Conteo de Oraciones</h3>
                <p>${stats.sentenceCount}</p>
            </div>
            <div class="card">
                <h3>Conteo de Párrafos</h3>
                <p>${stats.paragraphCount}</p>
            </div>
            <div class="card">
                <h3>Longitud Promedio de Palabras</h3>
                <p>${stats.averageWordLength.toFixed(2)}</p>
            </div>
            <div class="card">
                <h3>Longitud Promedio de Oraciones</h3>
                <p>${stats.averageSentenceLength.toFixed(2)}</p>
            </div>
            <div class="card">
                <h3>Conteo de Palabras Únicas</h3>
                <p>${stats.uniqueWordCount}</p>
            </div>
            <div class="card">
                <h3>Palabras Clave Principales</h3>
                <ol>
                    ${stats.topKeywords.map(stryMutAct_9fa48("91") ? () => undefined : (stryCov_9fa48("91"), keyword => stryMutAct_9fa48("92") ? `` : (stryCov_9fa48("92"), `<li>${keyword}</li>`))).join(stryMutAct_9fa48("93") ? "Stryker was here!" : (stryCov_9fa48("93"), ""))}
                </ol>
            </div>
        `);
      }
    }

    // Evento al hacer clic en el botón de analizar
    analyzeButton.addEventListener(stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), "click"), () => {
      if (stryMutAct_9fa48("95")) {
        {}
      } else {
        stryCov_9fa48("95");
        const text = textInput.value;
        const stats = analyzeText(text);
        displayResults(stats);
      }
    });

    // Actualización en tiempo real para el conteo de caracteres y palabras
    textInput.addEventListener(stryMutAct_9fa48("96") ? "" : (stryCov_9fa48("96"), "input"), () => {
      if (stryMutAct_9fa48("97")) {
        {}
      } else {
        stryCov_9fa48("97");
        const text = textInput.value;
        const wordCount = (stryMutAct_9fa48("100") ? text.trim() !== "" : stryMutAct_9fa48("99") ? false : stryMutAct_9fa48("98") ? true : (stryCov_9fa48("98", "99", "100"), (stryMutAct_9fa48("101") ? text : (stryCov_9fa48("101"), text.trim())) === (stryMutAct_9fa48("102") ? "Stryker was here!" : (stryCov_9fa48("102"), "")))) ? 0 : stryMutAct_9fa48("103") ? text.split(/\s+/).length : (stryCov_9fa48("103"), text.trim().split(stryMutAct_9fa48("105") ? /\S+/ : stryMutAct_9fa48("104") ? /\s/ : (stryCov_9fa48("104", "105"), /\s+/)).length);
        const characterCount = text.length;
        // Puedes mostrar estas estadísticas en tiempo real en la interfaz si quieres
        console.log(stryMutAct_9fa48("106") ? "" : (stryCov_9fa48("106"), "Conteo de Caracteres:"), characterCount, stryMutAct_9fa48("107") ? "" : (stryCov_9fa48("107"), "Conteo de Palabras:"), wordCount);
      }
    });
  }
});