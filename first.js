// Select all image buttons
const choices = document.querySelectorAll(".imageButton img");
const resultButton = document.getElementById("but");

// Store choices
const options = ["rock", "paper", "scissors"];

// Function to get computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to decide winner
function getResult(user, computer) {
  if (user === computer) {
    return "It's a Draw 🤝";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win 🎉";
  } else {
    return "Computer Wins 😢";
  }
}

// Add click event to each image
choices.forEach((img) => {
  img.addEventListener("click", () => {
    const userChoice = img.src.split("/").pop().split(".")[0]; 
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    resultButton.innerText = 
      `You: ${userChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()} → ${result}`;
  });
});
