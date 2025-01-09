// Auto-resize textarea
document.getElementById("chat-input").addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";

  if (this.value === "") {
    this.style.height = "60px";
  }

  if (this.scrollHeight > 150) {
    this.style.height = "150px";
  }
});

// Submit on Ctrl/Cmd + Enter
document.getElementById("chat-input").addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    document.getElementById("send-message").click();
  }
});

// Auto scroll to bottom when new messages arrive
function scrollToBottom() {
  const chatMessages = document.getElementById("chat-messages");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Call scrollToBottom when page loads and when new messages are added
window.onload = scrollToBottom;
// You should also call scrollToBottom whenever a new message is added
