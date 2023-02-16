function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "롱초이 킹갓제네럴 쌉 ㅈ도리뱅뱅 사랑해요!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
