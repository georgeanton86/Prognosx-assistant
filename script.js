import { OPENAI_API_KEY } from './config.js';

async function askProgno() {
  const userInput = document.getElementById('userInput').value;
  const responseElement = document.getElementById('response');

  responseElement.textContent = "Thinking...";

  try {
    const completion = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: userInput }]
      })
    });

    const data = await completion.json();
    responseElement.textContent = data.choices?.[0]?.message?.content || "No response.";
  } catch (error) {
    responseElement.textContent = "Error: " + error.message;
  }
}
window.askProgno = askProgno;