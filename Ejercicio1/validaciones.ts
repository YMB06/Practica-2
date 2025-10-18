// FutureDevFormValidation.ts
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form") as HTMLFormElement;
  const password = document.getElementById("password") as HTMLInputElement;
  const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
  const ticketTypeRadios = document.querySelectorAll<HTMLInputElement>('input[name="ticketType"]');
  const studentProof = document.getElementById("studentProof") as HTMLInputElement;
  const termsCheckbox = document.createElement("input");
  termsCheckbox.type = "checkbox";
  termsCheckbox.id = "terms";
  termsCheckbox.required = true;
  form.appendChild(termsCheckbox);

  const errorMessages: Record<string, string> = {
    passwordMismatch: "Las contraseñas no coinciden.",
    termsMissing: "Debes aceptar los términos y condiciones.",
    studentProofMissing: "Debes subir un comprobante si eres estudiante.",
  };

  function showError(input: HTMLElement, message: string) {
    input.classList.add("error");
    let error = input.nextElementSibling as HTMLElement;
    if (!error || !error.classList.contains("error-message")) {
      error = document.createElement("div");
      error.className = "error-message";
      input.insertAdjacentElement("afterend", error);
    }
    error.textContent = message;
  }

  function clearErrors() {
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
    document.querySelectorAll(".error-message").forEach(el => el.remove());
  }

  form.addEventListener("submit", (e) => {
    clearErrors();
    let valid = true;

    // Confirmación de contraseña
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, errorMessages.passwordMismatch);
      valid = false;
    }

    // Términos y condiciones
    if (!termsCheckbox.checked) {
      showError(termsCheckbox, errorMessages.termsMissing);
      valid = false;
    }

    // Comprobante obligatorio si es estudiante
    const selectedType = Array.from(ticketTypeRadios).find(r => r.checked)?.value;
    if (selectedType === "Estudiante" && !studentProof.value) {
      showError(studentProof, errorMessages.studentProofMissing);
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    }
  });
});
