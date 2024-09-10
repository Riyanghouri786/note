document.getElementById("saveBtn").addEventListener("click", async () => {
  const noteContent = document.getElementById("note").value;
  if (!noteContent) return;

  try {
    const response = await fetch("/api/saveNote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: noteContent }),
    });

    if (response.ok) {
      alert("Note saved successfully!");
    } else {
      alert("Failed to save note.");
    }
  } catch (error) {
    console.error("Error saving note:", error);
    alert("Error saving note.");
  }
});

document.getElementById("loadBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("/api/getNote");
    const data = await response.json();

    if (data.content) {
      document.getElementById("note").value = data.content;
    } else {
      alert("No note found.");
    }
  } catch (error) {
    console.error("Error loading note:", error);
    alert("Error loading note.");
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("note").value = "";
});
