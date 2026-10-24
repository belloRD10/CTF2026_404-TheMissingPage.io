const fragments = {
  echo: [
    99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
    112, 52, 103, 51, 95, 51, 99, 104, 48, 95, 110, 51, 118, 51, 114, 95,
    100, 49, 51, 115, 125
  ],
  void: [
    99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
    118, 48, 49, 100, 95, 119, 52, 108, 107, 51, 114, 95, 52, 48, 52, 125
  ],
  zero: [
    99, 121, 98, 101, 114, 115, 117, 114, 102, 101, 114, 67, 84, 70, 123,
    122, 51, 114, 48, 95, 112, 52, 103, 51, 95, 99, 104, 51, 99, 107, 115,
    117, 109, 125
  ]
};

const fragmentName = document.body.dataset.fragment;
const packet = fragments[fragmentName] || fragments.echo;
const decodeFragment = (values) =>
  values.map((value) => String.fromCharCode(value)).join("");
const secret = document.getElementById("secret");

if (secret) {
  secret.textContent = decodeFragment(packet);
}
