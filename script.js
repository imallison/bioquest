document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("questForm");
  const questList = document.getElementById("questList");

  function addQuestToList(quest) {
    // Append element to questList
  }

  // Load existing quests
  fetch("/get_quests")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((quest) => addQuestToList(quest));
    });

  // Form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      questName: form.questName.value,
      difficultyLevel: form.difficultyLevel.value,
      rewardPoints: form.rewardPoints.value,
    };

    fetch("/add_quest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        addQuestToList(data);
        form.reset();
      })
      .catch((error) => console.error("Error:", error));
  });
});
