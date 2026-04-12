function goTo(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
  }
  
  /* Actions */
  function sendHug() {
    show("Big warm hug 🤗💖");
    hearts();
  }
  
  function foreheadKiss() {
    show("Soft forehead kiss 😘🤍");
    hearts();
  }
  
  function giveChocolate() {
    show("Chocolate rain 🍫😋");
  
    for (let i = 0; i < 15; i++) {
      let c = document.createElement("div");
      c.innerText = "🍫";
      c.classList.add("chocolate");
  
      c.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(c);
  
      setTimeout(() => c.remove(), 3000);
    }
  }
  
  function show(text) {
    document.getElementById("response").innerText = text;
  }
  
  /* Hearts */
  function hearts() {
    for (let i = 0; i < 10; i++) {
      let h = document.createElement("div");
      h.innerText = "💖";
      h.classList.add("heart");
  
      h.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(h);
  
      setTimeout(() => h.remove(), 3000);
    }
  }
  
  /* Gifts */
  function surprise(type) {
    const area = document.getElementById("giftArea");
  
    if (type === "flowers") {
      area.innerText = "🌸🌸🌸 A bouquet just for you 💐";
    } 
    else if (type === "teddy") {
      area.innerText = "🧸 A soft teddy to hug you because i am not there";
    } 
    else {
      area.innerText = "💌 I love you betu more than words can say ❤️";
    }
  }
  
  /* Notes */
  function newNote() {
    const notes = [
      "You're the strongest person I know 💪",
      "I'm always with you, no matter the distance ❤️",
      "You deserve all the love and comfort 💕",
      "This pain will pass, but my love stays 🫶",
      "You mean everything to me 💖"
    ];
  
    document.getElementById("noteText").innerText =
      notes[Math.floor(Math.random() * notes.length)];
  }