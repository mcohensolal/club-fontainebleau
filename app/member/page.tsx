'use client';

import { useState } from 'react';
import Link from 'next/link'

type Language = 'fr' | 'en';

type ContentType = {
  [key in Language]: {
    title: string;
    subtitle: string;
    form: {
      email: string;
      password: string;
      submit: string;
      forgotPassword: string;
    };
    backHome: string;
  };
};

const content: ContentType = {
  fr: {
    title: 'Espace Membre',
    subtitle: 'Accédez à votre espace personnel',
    form: {
      email: 'Email',
      password: 'Mot de passe',
      submit: 'Se connecter',
      forgotPassword: 'Mot de passe oublié ?'
    },
    backHome: 'Retour à l\'accueil'
  },
  en: {
    title: 'Member Area',
    subtitle: 'Access your personal space',
    form: {
      email: 'Email',
      password: 'Password',
      submit: 'Sign in',
      forgotPassword: 'Forgot password?'
    },
    backHome: 'Back to home'
  }
};

export default function MemberLogin() {
  const [language, setLanguage] = useState<Language>('fr');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion à implémenter
  };

  return (
    <main className="min-h-screen bg-[rgb(24,24,24)] flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="px-3 py-1 border border-[rgba(182,155,116,0.3)] rounded text-[rgb(182,155,116)] hover:bg-[rgba(182,155,116,0.1)] transition-all duration-300"
            >
              {language === 'fr' ? 'ENGLISH' : 'FRANÇAIS'}
            </button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-['Libre_Baskerville'] text-[rgb(255,255,255)] mb-4">
              {content[language].title}
            </h1>
            <p className="text-[rgb(180,180,180)]">
              {content[language].subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[rgb(182,155,116)] mb-2">
                {content[language].form.email}
              </label>
              <input
                type="email"
                required
                className="w-full bg-[rgb(32,32,32)] border border-[rgba(182,155,116,0.2)] rounded-md px-4 py-3 text-[rgb(255,255,255)] focus:outline-none focus:border-[rgb(182,155,116)]"
              />
            </div>
            <div>
              <label className="block text-[rgb(182,155,116)] mb-2">
                {content[language].form.password}
              </label>
              <input
                type="password"
                required
                className="w-full bg-[rgb(32,32,32)] border border-[rgba(182,155,116,0.2)] rounded-md px-4 py-3 text-[rgb(255,255,255)] focus:outline-none focus:border-[rgb(182,155,116)]"
              />
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-[rgb(182,155,116)] text-sm hover:text-[rgb(145,124,93)] transition-all duration-300"
              >
                {content[language].form.forgotPassword}
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[rgb(182,155,116)] text-[rgb(24,24,24)] rounded-md hover:bg-[rgb(145,124,93)] transition-all duration-300 font-medium"
            >
              {content[language].form.submit}
            </button>
          </form>

          <div className="mt-12 text-center">
            <Link href="/" className="text-[rgb(182,155,116)] hover:text-[rgb(145,124,93)] transition-all duration-300">
              {content[language].backHome}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 