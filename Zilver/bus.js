// herbruikbare functie om de array te tonen (de "Programmeertip")
function toonPassagiers(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// opdracht 1 — 10 namen
const bus = ["Ali", "Emma", "Noah", "Sara", "Liam", "Mia", "Tom", "Jade", "Lucas", "Sophie"];
toonPassagiers(bus);

// opdracht 2 — iemand stapt in
bus.push("Daan");
toonPassagiers(bus);

// opdracht 3 — vijfde persoon stapt uit (index 4)
bus.splice(4, 1);
toonPassagiers(bus);

// opdracht 4 — shuffelen (Fisher-Yates algoritme)
for (let i = bus.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [bus[i], bus[j]] = [bus[j], bus[i]];
}
toonPassagiers(bus);

// opdracht 5 — passagiers stappen één voor één uit
while (bus.length > 0) {
  bus.shift(); // verwijdert de eerste persoon
  console.log("Nog " + bus.length + " passagiers in de bus");
}
