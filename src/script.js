function convertHoursToSeconds(event) {
  event.preventDefault();
  const hours = document.getElementById("hours").value;
  const seconds = hours * 3600;
  alert(hours + " годин - це " + seconds + " секунд.");
}
