import { analyzeText, TextStatistics } from "./analyzer.ts";

document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput") as HTMLTextAreaElement;
    const analyzeButton = document.getElementById("analyzeButton") as HTMLButtonElement;
    const resultsContainer = document.getElementById("results") as HTMLDivElement;

    // Función para mostrar los resultados en la interfaz de usuario
    function displayResults(stats: TextStatistics) {
        resultsContainer.innerHTML = `
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
                    ${stats.topKeywords.map(keyword => `<li>${keyword}</li>`).join("")}
                </ol>
            </div>
        `;
    }

    // Evento al hacer clic en el botón de analizar
    analyzeButton.addEventListener("click", () => {
        const text = textInput.value;
        const stats = analyzeText(text);
        displayResults(stats);
    });

    // Actualización en tiempo real para el conteo de caracteres y palabras
    textInput.addEventListener("input", () => {
        const text = textInput.value;
        const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
        const characterCount = text.length;
        // Puedes mostrar estas estadísticas en tiempo real en la interfaz si quieres
        console.log("Conteo de Caracteres:", characterCount, "Conteo de Palabras:", wordCount);
    });
});