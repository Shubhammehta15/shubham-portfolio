// ---- Custom cursor dot (desktop only) ----
const cursorDot = document.getElementById('cursorDot');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .chip, .pin-card').forEach((el) => {
    el.addEventListener('mouseenter', () => cursorDot.classList.add('active'));
    el.addEventListener('mouseleave', () => cursorDot.classList.remove('active'));
  });
}

// ---- Mobile nav ----
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- Hero typing effect (runs once) ----
const typedEl = document.getElementById('typedRole');
const phrase = 'Python. Java. JavaScript. Whatever the project needs.';
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  typedEl.textContent = phrase;
} else {
  let i = 0;
  function typeNext() {
    if (i <= phrase.length) {
      typedEl.textContent = phrase.slice(0, i);
      i++;
      setTimeout(typeNext, 35);
    }
  }
  typeNext();
}

// ---- Profile photo fallback ----
const profileImg = document.getElementById('profileImg');
const avatarFallback = document.getElementById('avatarFallback');
profileImg.addEventListener('error', () => {
  profileImg.style.display = 'none';
  avatarFallback.style.display = 'flex';
});

// ---- Contact form (front-end only) ----
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    status.textContent = 'Fill in every field first, then I promise it works.';
    return;
  }
  status.textContent = `Thanks, ${name}! This form isn't wired to a server yet — email mehtashubham704@gmail.com directly for now.`;
  form.reset();
});

// ---- Chatbot ----
const chatbot = document.getElementById('chatbot');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotForm = document.getElementById('chatbotForm');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotChips = document.getElementById('chatbotChips');

function addMessage(text, from) {
  const div = document.createElement('div');
  div.className = 'msg ' + (from === 'bot' ? 'msg-bot' : 'msg-user');
  div.textContent = text;
  chatbotMessages.appendChild(div);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

let greeted = false;
function openChat() {
  chatbot.classList.add('open');
  chatbotToggle.setAttribute('aria-expanded', 'true');
  if (!greeted) {
    greeted = true;
    addMessage("Hey! I'm ShubBot 🤖 — a tiny script Shubham wrote so you can ask about his skills, projects, experience, or how to reach him. Try a button below, or just type.", 'bot');
  }
  chatbotInput.focus();
}
function closeChat() {
  chatbot.classList.remove('open');
  chatbotToggle.setAttribute('aria-expanded', 'false');
}

chatbotToggle.addEventListener('click', () => {
  chatbot.classList.contains('open') ? closeChat() : openChat();
});
chatbotClose.addEventListener('click', closeChat);

const responses = [
  {
    keys: ['hi', 'hello', 'hey', 'yo'],
    reply: "Hey there! Ask me about Shubham's skills, projects, experience, education, or how to contact him.",
  },
  {
    keys: ['skill', 'stack', 'tech'],
    reply: "He works with Python, Java, JavaScript, HTML/CSS, and Git/GitHub — plus Java Swing for desktop GUI apps.",
  },
  {
    keys: ['project', 'built', 'portfolio', 'work you'],
    reply: "Five so far: a gym website (HTML/CSS/JS), a Python 2048 game, and three Java Swing apps — a racing game, an expense tracker, and a student management system. Scroll up to the projects section for live links.",
  },
  {
    keys: ['experience', 'job', 'work at', 'career'],
    reply: "He's co-founder & web developer at GM Teach Solutions (part-time, since April 2026), and technical support executive at EChartered System (since June 2026), where he also reproduces and verifies fixes for software bugs.",
  },
  {
    keys: ['educat', 'college', 'degree', 'study'],
    reply: "BSc IT from KES Shroff College, Mumbai (completed 2026), after HSC at Reen Mehta Jr. College and SSC at Shanti Nagar High School.",
  },
  {
    keys: ['certificat'],
    reply: "Four so far, all from KES Shroff College: Web Design & Development, Arduino Programming, Ethical Hacking, and Generative AI / Prompt Engineering.",
  },
  {
    keys: ['contact', 'email', 'reach', 'hire', 'available'],
    reply: "Best way is email: mehtashubham704@gmail.com — or just use the contact form on this page.",
  },
  {
    keys: ['python'],
    reply: "Python's one of his main languages — check out the 2048 game project for a working example.",
  },
  {
    keys: ['java'],
    reply: "Three of his five projects are Java Swing desktop apps: a racing game, an expense tracker, and a student management system.",
  },
  {
    keys: ['who are you', 'what are you', 'are you ai', 'are you real'],
    reply: "I'm ShubBot — a small rule-based script, not a real AI. Shubham wrote my responses by hand, same as everything else on this site.",
  },
  {
    keys: ['joke'],
    reply: "Why do programmers prefer dark mode? Because light attracts bugs. 🐛",
  },
  {
    keys: ['thank'],
    reply: "Anytime! 🎉",
  },
];

function getReply(input) {
  const text = input.toLowerCase();
  for (const r of responses) {
    if (r.keys.some((k) => text.includes(k))) return r.reply;
  }
  return "I don't have a canned answer for that one — but Shubham does. Email him at mehtashubham704@gmail.com and ask directly!";
}

chatbotChips.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const q = btn.dataset.q;
    addMessage(btn.textContent, 'user');
    setTimeout(() => addMessage(getReply(q), 'bot'), 300);
  });
});

chatbotForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = chatbotInput.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  chatbotInput.value = '';
  setTimeout(() => addMessage(getReply(text), 'bot'), 300);
});
