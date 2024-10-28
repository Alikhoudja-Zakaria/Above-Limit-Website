
// Resource Search Functionality
function searchResources() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const resources = document.querySelectorAll("#directory li");
    
    resources.forEach(resource => {
      if (resource.textContent.toLowerCase().includes(searchQuery)) {
        resource.style.display = "block";
      } else {
        resource.style.display = "none";
      }
    });
  }
  
  // AI Chatbot Placeholder (For actual implementation, integrate an API)
  function sendMessage() {
    const userMessage = document.getElementById("userMessage").value;
    const chatBox = document.getElementById("chat-box");
  
    if (userMessage.trim() !== "") {
      const userChat = document.createElement("p");
      userChat.innerHTML = `<strong>You:</strong> ${userMessage}`;
      chatBox.appendChild(userChat);
  
      const botResponse = document.createElement("p");
      botResponse.innerHTML = `<strong>Bot:</strong> Sorry, I am still learning. Please try again later.`;
      chatBox.appendChild(botResponse);
  
      document.getElementById("userMessage").value = ""; // Clear input
    }
  }
  
  // Accessibility Features

// Initialize font size and contrast state
let currentFontSize = 16;
let isHighContrast = false;

// Function to increase text size
function increaseTextSize() {
  currentFontSize += 2;
  document.body.style.fontSize = currentFontSize + "px";
}

// Function to decrease text size
function decreaseTextSize() {
  if (currentFontSize > 10) {
    currentFontSize -= 2;
    document.body.style.fontSize = currentFontSize + "px";
  }
}

// Function to toggle high contrast mode
function toggleContrast() {
  isHighContrast = !isHighContrast;
  if (isHighContrast) {
    document.body.classList.add("high-contrast");
  } else {
    document.body.classList.remove("high-contrast");
  }
}

// Function to toggle card expansion
function toggleCard(cardElement) {
  // Close other cards if one is already open
  document.querySelectorAll('.feature-card').forEach(card => {
    if (card !== cardElement) {
      card.classList.remove('active');
    }
  });
  cardElement.classList.toggle('active'); // Toggle expansion of clicked card
}

// Function to toggle details section in square cards
function toggleDetails(cardElement) {
  // Close other cards if one is already open
  document.querySelectorAll('.square-card').forEach(card => {
    if (card !== cardElement) {
      card.classList.remove('active');
    }
  });
  
  cardElement.classList.toggle('active');
}

