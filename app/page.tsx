import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Тренировки слепой печати",
    description: "Короткие упражнения с подсветкой ошибок и мягкой статистикой."
  },
  {
    title: "Антистресс-сессии",
    description: "Тихие интервалы для свободного набора текста без оценок."
  },
  {
    title: "Персональный ритм",
    description: "Настройка темпа, длины фраз и уровня сложности."
  }
];

const cases = [
  {
    title: "Домашняя практика",
    description: "10 минут в день — и руки уверенно находят клавиши."
  },
  {
    title: "Офисные команды",
    description: "Снижение ошибок в переписке и рост скорости на задачах."
  },
  {
    title: "Обучение детей",
    description: "Короткие игры-упражнения без лишнего стресса."
  }
];

const reviews = [
  {
    name: "Мария",
    role: "контент-менеджер",
    quote: "Удобно, спокойно и без давления. Делаю разминку каждый день."
  },
  {
    name: "Илья",
    role: "студент",
    quote: "Понравился режим антистресса — просто печатаю и выдыхаю."
  },
  {
    name: "Даша",
    role: "UX-дизайнер",
    quote: "Чистый интерфейс, ничего не отвлекает от практики."
  }
];

const faqs = [
  {
    question: "Нужно ли регистрироваться?",
    answer: "Нет, можно сразу открыть сайт и начать тренировку."
  },
  {
    question: "Есть ли таймер и статистика?",
    answer: "Да, доступны WPM, точность и динамика ошибок."
  },
  {
    question: "Можно ли использовать на телефоне?",
    answer: "Да, интерфейс адаптирован под мобильные устройства."
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="container-default flex items-center justify-between py-5">
          <div className="text-lg font-semibold">Typing Calm</div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#services">
              Услуги
            </a>
            <a className="hover:text-slate-900" href="#cases">
              Кейсы
            </a>
            <a className="hover:text-slate-900" href="#reviews">
              Отзывы
            </a>
            <a className="hover:text-slate-900" href="#faq">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="container-default grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              спокойная практика печати
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Тренируйте скорость печати и снимайте стресс в одном месте
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Чистый интерфейс, мягкие подсказки и режим антистресса — просто
              печатайте и наблюдайте прогресс.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button>Начать тренировку</Button>
              <Button variant="outline">Открыть демо</Button>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <div className="text-2xl font-semibold">+24%</div>
                <p className="text-sm text-slate-500">рост скорости за месяц</p>
              </div>
              <div>
                <div className="text-2xl font-semibold">5 минут</div>
                <p className="text-sm text-slate-500">минимум для прогресса</p>
              </div>
              <div>
                <div className="text-2xl font-semibold">100%</div>
                <p className="text-sm text-slate-500">без шума и рекламы</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">Мини-тренировка</h2>
            <p className="mt-2 text-sm text-slate-500">
              Наберите фразу и смотрите подсветку символов. Стресс исчезает,
              концентрация растёт.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <p className="text-slate-400">Фраза для набора</p>
              <p className="mt-2 font-medium text-slate-800">
                Спокойный ритм помогает печатать уверенно.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-slate-200 p-4">
              <p className="text-xs uppercase text-slate-400">поле ввода</p>
              <div className="mt-2 h-12 rounded-lg border border-dashed border-slate-300 bg-white" />
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
              <span>WPM: 42</span>
              <span>Точность: 96%</span>
              <span>Ошибки: 2</span>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-16">
          <div className="container-default">
            <h2 className="section-title">Услуги</h2>
            <p className="section-subtitle">
              Всё для спокойной и устойчивой практики печати.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="card">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="py-16">
          <div className="container-default">
            <h2 className="section-title">Кейсы</h2>
            <p className="section-subtitle">
              Примеры того, как сервис помогает разным людям.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {cases.map((item) => (
                <div key={item.title} className="card">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-slate-50 py-16">
          <div className="container-default">
            <h2 className="section-title">Отзывы</h2>
            <p className="section-subtitle">
              Люди отмечают спокойствие и ощутимый прогресс.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.name} className="card">
                  <p className="text-sm text-slate-600">“{review.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-slate-800">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="container-default">
            <h2 className="section-title">FAQ</h2>
            <p className="section-subtitle">
              Короткие ответы на частые вопросы.
            </p>
            <div className="mt-10 grid gap-4">
              {faqs.map((item) => (
                <div key={item.question} className="card">
                  <h3 className="text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="container-default flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-semibold">Готовы попробовать?</h2>
              <p className="mt-2 text-sm text-slate-300">
                Запустите тренировку и почувствуйте спокойный ритм.
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-white text-slate-900 hover:bg-slate-100">
                Начать сейчас
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Задать вопрос
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="container-default flex flex-col gap-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2024 Typing Calm. Спокойная практика печати.</span>
          <div className="flex gap-4">
            <a className="hover:text-slate-700" href="mailto:hello@typingcalm.ru">
              hello@typingcalm.ru
            </a>
            <a className="hover:text-slate-700" href="#faq">
              Помощь
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
