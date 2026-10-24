const archivedChecksum = [
  99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
  116, 104, 51, 95, 112, 52, 103, 51, 95, 116, 104, 52, 116, 95, 119, 52,
  115, 110, 116, 95, 116, 104, 51, 114, 51, 125
];

const dormantSignal = [
  99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
  115, 104, 51, 108, 102, 95, 98, 51, 116, 119, 51, 51, 110, 95, 115, 104,
  51, 108, 118, 51, 115, 125
];

const recoveredChecksum = archivedChecksum
  .map((value) => String.fromCharCode(value))
  .join("");

const dormantPayload = dormantSignal
  .map((value) => String.fromCharCode(value))
  .join("");

function findPage() {
  const button = document.getElementById("find-page");
  const message = document.getElementById("message");

  if (!button || !message || button.dataset.revealed === "true") {
    return;
  }

  button.dataset.revealed = "true";
  button.disabled = true;
  button.setAttribute("aria-busy", "true");
  button.classList.add("is-loading");

  const label = button.querySelector(".search-button__label");

  if (label) {
    label.textContent = "TRACING ROUTE";
  }

  message.classList.add("is-visible");
  message.innerHTML =
    '<p class="response-kicker">SCANNING ARCHIVE...</p>' +
    '<p class="response-route">following the signal through 1,048,576 empty shelves.</p>';

  const clue = [112, 97, 103, 101, 95, 103, 104, 111, 115, 116];

  const page = clue
    .map((number) => String.fromCharCode(number))
    .join("");

  window.setTimeout(() => {
    button.classList.remove("is-loading");
    button.classList.add("is-complete");
    button.removeAttribute("aria-busy");

    if (label) {
      label.textContent = "ROUTE RECOVERED";
    }

    message.innerHTML =
      '<p class="response-kicker">QUERY COMPLETE</p>' +
      '<p class="response-route">Try visiting: <span class="route">/' +
      page +
      "</span></p>" +
      '<p class="response-note">the page kept its old name.</p>';
  }, 1100);
}

const findButton = document.getElementById("find-page");

if (findButton) {
  findButton.addEventListener("click", findPage);
}
