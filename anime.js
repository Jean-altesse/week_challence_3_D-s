function rollDice() {
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const result = document.getElementById("result");
  
    // Generate random numbers between 1 and 6
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
  
    // Update the dice with the random numbers
    die1.innerHTML = "";
    for (let i = 0; i < roll1; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      die1.appendChild(dot);
    }
  
    die2.innerHTML = "";
    for (let i = 0; i < roll2; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      die2.appendChild(dot);
    }
  
    // Display the total result
    const total = roll1 + roll2;
    result.innerHTML = `Vous avez obtenu un ${total}.`;
  
    // Update the CSS classes for the dice animation
    die1.classList.remove("roll");
    die2.classList.remove("roll");
    void die1.offsetWidth;
    void die2.offsetWidth;
    die1.classList.add("roll");
    die2.classList.add("roll");
  }
  