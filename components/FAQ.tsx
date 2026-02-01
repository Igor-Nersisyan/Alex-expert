import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "Насколько сложно поддерживать внедренные AI-решения?",
    answer: "Я создаю решения по принципу 'поставил и забыл'. Большинство автоматизаций работают автономно. Если требуется обновление моделей или логики, я предоставляю техническую поддержку по выбранному тарифу."
  },
  {
    question: "Как соблюдается 152-ФЗ о персональных данных?",
    answer: "Мы строго соблюдаем законодательство РФ. Вся инфраструктура и базы данных разворачиваются исключительно на серверах, расположенных на территории России (Yandex Cloud, Selectel, Timeweb). Персональные данные ваших клиентов не покидают пределы страны, что гарантирует полную юридическую безопасность."
  },
  {
    question: "Мои данные в безопасности при использовании нейросетей?",
    answer: "Абсолютно. Мы подписываем NDA. Для корпоративных клиентов я использую Enterprise API (OpenAI/Azure), где данные не используются для обучения моделей. Также возможна локальная установка Open-Source LLM (Llama 3, Mistral) непосредственно на ваши защищенные сервера."
  },
  {
    question: "Сколько времени занимает разработка MVP?",
    answer: "В среднем 5-7 дней. Мой подход основан на использовании готовых модулей и low-code инструментов для бэкенда, что ускоряет процесс в 3-4 раза по сравнению с классической разработкой."
  },
  {
    question: "Что если мне не понравится результат?",
    answer: "Мы работаем итерациями (спринтами). Вы видите прогресс каждые 3-4 дня и можете вносить коррективы. Оплата разбита на этапы, так что риски сведены к минимуму."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Частые вопросы</h2>
          <p className="text-slate-400 text-xl">
            Всё, что вы хотели узнать перед стартом работы.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-slate-900 border rounded-2xl transition-all duration-300 ${
                openIndex === index ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/10' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-xl font-medium transition-colors ${
                  openIndex === index ? 'text-white' : 'text-slate-300'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full transition-colors ${
                  openIndex === index ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500'
                }`}>
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden min-h-0">
                  <div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;