
async function sendToBackend() {
  const input = document.getElementById("user-input").value;
  const res = await fetch("/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: [{ role: "user", content: input }] })
  });
  const data = await res.json();
  document.getElementById("response").innerText =
    data?.choices?.[0]?.message?.content || "No response";
}
