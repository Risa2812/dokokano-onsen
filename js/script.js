const items = document.querySelectorAll('.r-photo');

const options = {
  threshold: 0.1 // 要素が10%見えたら発火
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;

      const keyframes = {
        opacity: [0, 1]
      };
      const animationOptions = {
        duration: 900,
        delay: i * 400,
        fill: 'forwards'
      };

      el.animate(keyframes, animationOptions);

      observer.unobserve(el); // 1回だけアニメーションしたい場合
    }
  });
}, options);

// 監視を開始
items.forEach((item) => {
  observer.observe(item);
});

//メニュースライド
//すべての画像要素取得
const images = document.querySelectorAll('.marquee-m img');
const marqueeInners = document.querySelectorAll('.marquee-m');

// 各画像にホバーイベントを追加
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    // すべての .marquee-inner-stop のアニメーションを停止
    marqueeInners.forEach(marqueeInner => {
      marqueeInner.classList.add('marquee-paused');
    });
  });

  img.addEventListener('mouseleave', () => {
    // すべての .marquee-inner-stop のアニメーションを再開
    marqueeInners.forEach(marqueeInner => {
      marqueeInner.classList.remove('marquee-paused');
    });
  });
});

//ハンバーガー開閉
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});