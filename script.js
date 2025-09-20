const montantCursor = document.getElementById("amountRange");
const durationCursor = document.getElementById("termRange");
const montantPret = document.getElementById("amountValue");
const remboursementMois = document.getElementById("termValue");
const total = document.getElementById("totalEL");
const paiementMois = document.getElementById("mensuelEL");
const interetTotal = document.getElementById("interetEL");

const formatEUR = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

montantCursor.addEventListener("input", () => {
Number(montantCursor.value);
formatEUR.format(Number(montantCursor.value));
montantPret.textContent = formatEUR.format(Number(montantCursor.value));
recompute();
})

durationCursor.addEventListener("input", () => {
  remboursementMois.textContent = durationCursor.value;
  recompute();
})

recompute();

function recompute() {
  const montant = Number(montantCursor.value);
  const mois = Number(durationCursor.value)

  const interet = montant*0.07;
  const totalCalcule = montant + interet;
  const mensualite = Math.floor(totalCalcule / mois);

  total.textContent = formatEUR.format(totalCalcule);
  interetTotal.textContent = formatEUR.format(interet);
  paiementMois.textContent = formatEUR.format(mensualite);
}






