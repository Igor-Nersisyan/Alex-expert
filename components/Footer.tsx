import React, { useState } from 'react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{title: string, content: React.ReactNode} | null>(null);

  const openPrivacyPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Политика конфиденциальности',
      content: (
        <>
          <p><strong>1. Введение</strong><br/>Мы уважаем вашу конфиденциальность и стремимся защищать ваши персональные данные. Настоящая Политика описывает, как мы собираем, используем и защищаем вашу информацию.</p>
          <p><strong>2. Сбор данных</strong><br/>Мы собираем только ту информацию, которая необходима для предоставления наших услуг: имя, контактный email и телефон, указанные вами в форме обратной связи.</p>
          <p><strong>3. Использование информации</strong><br/>Ваши данные используются исключительно для связи с вами по вопросам сотрудничества и предоставления услуг.</p>
          <p><strong>4. Защита данных</strong><br/>Мы принимаем все необходимые технические меры для защиты ваших данных от несанкционированного доступа.</p>
          <p><strong>5. Связь с нами</strong><br/>Если у вас есть вопросы по поводу этой политики, пожалуйста, свяжитесь с нами через форму на сайте.</p>
        </>
      )
    });
    setModalOpen(true);
  };

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Условия использования',
      content: (
        <>
          <p><strong>1. Общие положения</strong><br/>Используя этот сайт, вы соглашаетесь с данными Условиями использования. Если вы не согласны, пожалуйста, не используйте наш сайт.</p>
          <p><strong>2. Интеллектуальная собственность</strong><br/>Весь контент на этом сайте (тексты, дизайн, код) является собственностью владельца сайта и защищен законами об авторском праве.</p>
          <p><strong>3. Ограничение ответственности</strong><br/>Мы не несем ответственности за любой ущерб, прямой или косвенный, возникший в результате использования или невозможности использования данного сайта.</p>
          <p><strong>4. Изменения условий</strong><br/>Мы оставляем за собой право обновлять эти условия в любое время. Продолжение использования сайта означает ваше согласие с новыми условиями.</p>
        </>
      )
    });
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Alex.Dev. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={openPrivacyPolicy} 
              className="text-slate-500 hover:text-white transition-colors text-sm bg-transparent border-none cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={openTerms} 
              className="text-slate-500 hover:text-white transition-colors text-sm bg-transparent border-none cursor-pointer focus:outline-none"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      {modalContent && (
        <LegalModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          title={modalContent.title} 
          content={modalContent.content} 
        />
      )}
    </>
  );
};

export default Footer;