const rText = document.getElementById("r-text");
const mText = document.getElementById("m-text");
const veText = document.getElementById("ve-text");
const viText = document.getElementById("vi-text");

const rScore = document.getElementById("r-score");
const mScore = document.getElementById("m-score");
const veScore = document.getElementById("ve-score");
const viScore = document.getElementById("vi-score");

const iconReaction = document.getElementById("icon-reaction");
const iconMemory = document.getElementById("icon-memory");
const iconVerbal = document.getElementById("icon-verbal");
const iconVisual = document.getElementById("icon-visual");

const fetchData = fetch("/data.json");

fetchData
  .then((request) => {
    if (!request.ok) {
      console.log("Oops! Something went wrong.");
      return null;
    }

    return request.json();
  })
  .then((data) => {
    //sumary texts
    rText.textContent = data[0]["category"];
    mText.textContent = data[1]["category"];
    veText.textContent = data[2]["category"];
    viText.textContent = data[3]["category"];

    //summary scores
    rScore.textContent = data[0]["score"];
    mScore.textContent = data[1]["score"];
    veScore.textContent = data[2]["score"];
    viScore.textContent = data[3]["score"];

    //summary images
    iconReaction.setAttribute("src", data[0]["icon"]);
    iconReaction.setAttribute("alt", data[0]["category"]);
    iconMemory.setAttribute("src", data[1]["icon"]);
    iconMemory.setAttribute("alt", data[1]["category"]);
    iconVerbal.setAttribute("src", data[2]["icon"]);
    iconVerbal.setAttribute("alt", data[2]["category"]);
    iconVisual.setAttribute("src", data[3]["icon"]);
    iconVisual.setAttribute("alt", data[3]["category"]);

    const totalScore =
      data[0]["score"] + data[1]["score"] + data[2]["score"] + data[3]["score"];
    const overallTotalScore = Math.round((totalScore / 400) * 100);

    const overallScore = document.getElementById("overall-score");
    overallScore.textContent = overallTotalScore;
  });
