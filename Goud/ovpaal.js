// opdracht 1 — array van objecten
let passagiers = [
  { id: 163821, naam: "Leo Daams",    saldo: 34, woonplaats: "Den Bosch",  telefoon: "06-11111111" },
  { id: 145032, naam: "Nicole Hops",  saldo: 18, woonplaats: "Maastricht", telefoon: "06-22222222" }
];

// opdracht 2a — nieuwe passagier toevoegen
function voegToe(id, naam, saldo, woonplaats, telefoon) {
  passagiers.push({ id, naam, saldo, woonplaats, telefoon });
}

// opdracht 2b — inchecken (saldo gaat omlaag) of uitchecken
function checkIn(id, bedrag) {
  const p = passagiers.find(p => p.id === id);
  if (p) p.saldo -= bedrag;
}

// opdracht 2c — passagier verwijderen
function verwijder(id) {
  passagiers = passagiers.filter(p => p.id !== id);
}

// opdracht 2d — lijst tonen
function toonLijst() {
  passagiers.forEach(p => {
    console.log(`${p.naam} | saldo: €${p.saldo} | ${p.woonplaats}`);
  });
}

// testen
voegToe(999999, "Nevio Test", 50, "Roermond", "06-33333333");
checkIn(163821, 4);
toonLijst();
verwijder(145032);
toonLijst();
