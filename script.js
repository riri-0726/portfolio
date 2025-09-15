"use strict";

{
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // ページトップ (#) のリンクは除外
      if (targetId === "#") return;

      e.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

{
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

{
  // ページトップへ戻る
  const pageTopBtn = document.querySelector('#page-top a');
  pageTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

}

{
  document.addEventListener("DOMContentLoaded", () => {
    const text = "SCROLL DOWN ";
    const repeatedText = text.repeat(2);
    const circleText = document.querySelector(".circle-text_01");
    const totalChars = repeatedText.length;
    const anglePerChar = 360 / totalChars;

    for (let i = 0; i < totalChars; i++) {
      const span = document.createElement("span");
      span.textContent = repeatedText[i];
      span.style.transform = `rotate(${i * anglePerChar}deg)`;
      circleText.appendChild(span);
    }
  });
}

