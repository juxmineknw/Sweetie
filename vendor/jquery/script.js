const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const h3Text = document.querySelector("h3");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Just Kidding";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnJpbDRkczZwZGkycXJ5a2J0NWcwc2g0dG05Mm9sMWJpeDZhMmZkdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WTL02R1L7YCGUEunFy/giphy.gif";

  yesBtn.innerHTML = "Yes";
  noBtn.innerHTML = "No";
  
  h3Text.innerHTML = "Now, try clicking 'YES' again";

  yesBtn.addEventListener("click", () => {
    window.location.href = "homepage_1.html";
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute'; 
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
