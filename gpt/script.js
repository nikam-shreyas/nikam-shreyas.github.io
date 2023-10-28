const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");
const loader = document.getElementById("loader");

async function sendMessage() {
  const message = userInput.value;
  if (message.trim() !== "") {
    // Disable input and show loader
    userInput.disabled = true;
    sendButton.style.display = "none";
    loader.style.display = "inline-block";

    try {
      // Add user message to chat
      appendMessage("user", message);

      userInput.value = "Getting response...";
      // Simulate API call (replace with actual API call)
      const response = await simulateAPIResponse(message);

      // Simulated response from the API
      appendMessage("bot", response);

      // Clear input
      userInput.value = "";
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    } finally {
      // Enable input and hide loader
      userInput.disabled = false;
      sendButton.style.display = "inline-block";
      loader.style.display = "none";
    }
  }
}

async function simulateAPIResponse(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response =
        "This is a response from the API. This is a response from the API. This is a response from the API. ";
      resolve(response);
    }, 1000); // Simulating a 2-second API response time
  });
}

function appendMessage(sender, message) {
  const messageDiv = document.createElement("div");

  const logo = document.createElement("img");
  const messageContent = document.createElement("div");
  messageContent.textContent = message;
  if (sender === "user") {
    logo.src = "../images/guest-user.png";
    logo.alt = "guest-logo";
    logo.classList.add("logo");
  } else {
    logo.src = "../images/profile-pic-1.png";
    logo.alt = "user-logo";
    logo.classList.add("logo");
    messageContent.classList.add("typewriter");
  }
  messageDiv.appendChild(logo);
  messageDiv.classList.add(sender);
  messageDiv.appendChild(messageContent);
  messageContent.classList.add("message");
  chatMessages.appendChild(messageDiv);

  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
}
