 document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope");
  const openButton = document.querySelector("#openEnvelope");
  const letter = document.querySelector(".letter");
  const closeButtons = document.querySelectorAll(".closeLetter");

  /* ===== OUVERTURE ===== */
  openButton.addEventListener("click", () => {
    // Ouvre l’enveloppe
    envelope.classList.add("active");

    // Passe la lettre au premier plan
    letter.style.zIndex = "20";

    // Sortie de la lettre (encore pliée)
    setTimeout(() => {
      letter.classList.remove("folded");
      letter.classList.add("out");
    }, 600);

    // Dépliage carte
    setTimeout(() => {
      letter.classList.add("open");
    }, 1400);
  });

  /* ===== FERMETURE ===== */
  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Replie la carte
      letter.classList.remove("open");

      // Rentre la lettre dans l’enveloppe
      setTimeout(() => {
        letter.classList.remove("out");
        letter.classList.add("folded");
      }, 600);

      // Referme l’enveloppe
      setTimeout(() => {
        envelope.classList.remove("active");
        letter.style.zIndex = "5";
      }, 1200);
    });
  });
});