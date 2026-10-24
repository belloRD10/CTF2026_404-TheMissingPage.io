const packets = {
  quarantineAlpha: [
    99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
    52, 48, 52, 95, 49, 115, 95, 106, 117, 115, 116, 95, 52, 95, 110, 117,
    109, 98, 51, 114, 125
  ],
  quarantineBeta: [
    99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
    108, 111, 115, 116, 95, 98, 117, 116, 95, 110, 48, 116, 95, 103, 48,
    110, 51, 125
  ],
  quarantineGamma: [
    99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
    116, 104, 51, 95, 112, 52, 103, 51, 95, 116, 104, 52, 116, 95, 119, 52,
    115, 110, 116, 95, 116, 104, 51, 114, 51, 125
  ],
  quarantineDelta: [
    99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
    115, 104, 51, 108, 102, 95, 98, 51, 116, 119, 51, 51, 110, 95, 115, 104,
    51, 108, 118, 51, 115, 125
  ],
  survivor: [
    99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
    112, 52, 103, 51, 95, 110, 48, 116, 95, 102, 48, 117, 110, 100, 95, 98,
    117, 116, 95, 102, 108, 52, 103, 95, 102, 48, 117, 110, 100, 125
  ]
};

const decodePacket = (packet) =>
  packet.map((value) => String.fromCharCode(value)).join("");

const recoveredFlag = decodePacket(packets.survivor);
const secret = document.getElementById("secret");
const status = document.getElementById("signal-status");
const noise = "░▒▓█<>/\\|01";
let progress = 0;

function renderSignal() {
  if (!secret) {
    return;
  }

  if (progress > recoveredFlag.length + 3) {
    secret.textContent = recoveredFlag;

    if (status) {
      status.textContent = "SIGNAL VERIFIED";
    }

    return;
  }

  secret.textContent = recoveredFlag
    .split("")
    .map((character, index) => {
      if (index < progress) {
        return character;
      }

      return noise[Math.floor(Math.random() * noise.length)];
    })
    .join("");

  progress += 1;
  window.setTimeout(renderSignal, 42);
}

if (secret) {
  window.setTimeout(renderSignal, 320);
}
