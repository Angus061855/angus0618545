const LANDING_B_FAQS = [
  {
    question: '收入真的有那麼高嗎',
    answer: '每個人的狀況、店型、時段和實際上檯都不同。先用試算工具抓一個大概範圍，再把發薪與扣款規則問清楚，比只看漂亮數字更重要。'
  },
  {
    question: '需要喝酒嗎',
    answer: '不同店型和工作內容不一樣。你可以先把自己能接受與不能接受的界線說清楚，再決定要不要進一步了解。'
  },
  {
    question: '沒有經驗可以嗎',
    answer: '第一次接觸不懂很正常。先把工作內容、流程和你在意的問題了解清楚，不需要因為沒有經驗就急著做決定。'
  },
  {
    question: '一定要簽約嗎',
    answer: 'AS 的原則是不簽合約。詢問、了解或試算，都不代表你要立刻答應任何安排。'
  },
  {
    question: '可以兼職嗎',
    answer: '排班方式會依不同方向與個人時間而不同。先用工具了解，再把你可配合的時間說清楚會比較準。'
  },
  {
    question: '會不會被壓薪水',
    answer: '薪資算法、發薪方式與可能扣款都應該在前面講清楚。看不懂的地方可以先問，不需要急著接受。'
  },
  {
    question: '隱私會不會曝光',
    answer: '隱私與個人界線可以先問清楚。你不需要先公開不必要的個人資料，也可以先匿名使用網站工具。'
  }
];

function trackLandingBEvent(eventName) {
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName);
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName);
  }
}

function renderLandingBFaq() {
  const container = document.querySelector('[data-landing-faq]');
  if (!container) return;

  container.innerHTML = LANDING_B_FAQS.map((item, index) => `
    <article class="landing-b-faq-item">
      <button class="landing-b-faq-question" type="button" aria-expanded="false" aria-controls="landing-b-faq-${index}">
        <span>${item.question}</span><span aria-hidden="true">＋</span>
      </button>
      <div class="landing-b-faq-answer" id="landing-b-faq-${index}"><p>${item.answer}</p></div>
    </article>
  `).join('');

  container.addEventListener('click', event => {
    const button = event.target.closest('.landing-b-faq-question');
    if (!button) return;
    const item = button.closest('.landing-b-faq-item');
    const isOpen = item.classList.contains('open');
    container.querySelectorAll('.landing-b-faq-item').forEach(faq => {
      faq.classList.remove('open');
      faq.querySelector('.landing-b-faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderLandingBFaq();
  document.querySelectorAll('[data-landing-event]').forEach(link => {
    link.addEventListener('click', () => trackLandingBEvent(link.dataset.landingEvent));
  });
});
