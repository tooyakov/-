const services = [
  {
    title: "MVP за 4-6 недель",
    desc: "Быстрый запуск прототипа, чтобы проверить идею и выйти на рынок.",
  },
  {
    title: "Мобильные приложения",
    desc: "React Native и Flutter: iOS + Android с одним кодом.",
  },
  {
    title: "Web-продукты",
    desc: "Лендинги, личные кабинеты и SaaS-платформы.",
  },
  {
    title: "Поддержка и рост",
    desc: "Аналитика, улучшения UX и развитие продукта после релиза.",
  },
];

const projects = [
  {
    name: "FoodFlow",
    desc: "Доставка здорового питания с подпиской и умным подбором меню.",
    tag: "Mobile + Admin",
  },
  {
    name: "CityPass",
    desc: "Цифровой абонемент для городских сервисов и событий.",
    tag: "Web + Mobile",
  },
  {
    name: "Tutorly",
    desc: "Платформа для онлайн-обучения с видеоуроками и оплатой.",
    tag: "SaaS",
  },
];

const steps = [
  "Созвон и разбор идеи",
  "Прототип и план работ",
  "Дизайн и разработка",
  "Тестирование и запуск",
];

export default function Home() {
  return (
    <div>
      <header className="container header">
        <div className="logo">APP.STUDIO</div>
        <nav className="nav">
          <a href="#services">Услуги</a>
          <a href="#portfolio">Проекты</a>
          <a href="#process">Процесс</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <span className="badge">🚀 Продаю разработку приложений</span>
            <h1>Создаю мобильные и веб-приложения, которые приносят продажи</h1>
            <p>
              Я помогаю компаниям запускать цифровые продукты: от MVP до
              масштабирования. Работаю на React, React Native и Node.js.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#contact">
                Обсудить проект
              </a>
              <a className="button ghost" href="#portfolio">
                Смотреть кейсы
              </a>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>20+</strong>
                <div>релизов</div>
              </div>
              <div className="stat">
                <strong>5 лет</strong>
                <div>опыт в разработке</div>
              </div>
              <div className="stat">
                <strong>14 дней</strong>
                <div>первый демо-результат</div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Что получите</h3>
            <ul>
              <li>Четкий план и прозрачные сроки.</li>
              <li>Современный UI/UX и понятная аналитика.</li>
              <li>Техническое сопровождение после релиза.</li>
              <li>Готовность быстро масштабироваться.</li>
            </ul>
          </div>
        </section>

        <section id="services">
          <div className="section-title">Услуги</div>
          <div className="grid services">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio">
          <div className="section-title">Проекты</div>
          <div className="grid portfolio">
            {projects.map((project) => (
              <div className="card project" key={project.name}>
                <span className="tag">{project.tag}</span>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <span>Результат: рост заявок +32%</span>
              </div>
            ))}
          </div>
        </section>

        <section id="process">
          <div className="section-title">Процесс работы</div>
          <div className="grid services">
            {steps.map((step, index) => (
              <div className="card" key={step}>
                <h3>0{index + 1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="contact">
            <div>
              <h2>Готовы запустить ваше приложение?</h2>
              <p>
                Напишите мне, я подготовлю план и стоимость уже в течение 48
                часов.
              </p>
            </div>
            <div className="cta-row">
              <a className="button primary" href="mailto:hello@appstudio.dev">
                hello@appstudio.dev
              </a>
              <a className="button ghost" href="tel:+77001234567">
                +7 (700) 123-45-67
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        © 2024 APP.STUDIO. Сделано на Next.js для учебного теста.
      </footer>
    </div>
  );
}
