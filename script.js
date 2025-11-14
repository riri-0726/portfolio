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

{
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".fadein");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-animated");
        observer.unobserve(entry.target); // 1回だけ発動するならこれでOK
      }
    });
  }, {
    threshold: 0.2 // 20%見えたら発動
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});

}
