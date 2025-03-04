const today = new Date();
const date = document.querySelector(".weather-container-date");
const background = document.querySelector(".blur-layer");

if (!background) {
  console.error("Элемент не найден");
} else {
  const hour = today.getHours();

  const morning = hour >= 6 && hour < 12;
  const afternoon = hour >= 12 && hour < 18;
  const evening = hour >= 18 && hour < 24;
  const night = hour >= 0 && hour < 6;

  const formatNumber = (num) => {
    return num < 10 ? "0" + num : num;
  };

  if (date) {
    date.innerHTML = `${formatNumber(today.getDate())}.${formatNumber(
      today.getMonth() + 1
    )}.${today.getFullYear()}`;
  }

  const changeBackground = () => {
    background.classList.remove("morning", "afternoon", "evening", "night");

    const timeOfDay = morning
      ? "morning"
      : afternoon
      ? "afternoon"
      : evening
      ? "evening"
      : "night";

    background.classList.add(timeOfDay);
  };

  changeBackground();
}
