'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('fr');

  type Language = 'fr' | 'en';
  
  type ContentType = {
    [key in Language]: {
      nav: {
        concept: string;
        development: string;
        membership: string;
        privilege: string;
        faq: string;
        memberAccess: string;
      };
      hero: {
        badge: string;
        title: string;
        subtitle: string;
        cta: string;
        motto: string;
      };
      concept: {
        title: string;
        intro: string;
        features: string[];
      };
      development: {
        title: string;
        intro: string;
        phases: {
          title: string;
          location: string;
        }[];
      };
      membership: {
        title: string;
        subtitle: string;
        founderStatus: string;
        description: string;
        benefits: string[];
        process: {
          title: string;
          steps: {
            title: string;
            description: string;
          }[];
        };
      };
      faq: {
        title: string;
        questions: {
          question: string;
          answer: string;
        }[];
      };
      newsletter: {
        title: string;
        subtitle: string;
        form: {
          name: string;
          firstName: string;
          email: string;
          submit: string;
        };
        success: {
          title: string;
          subtitle: string;
        };
      };
      footer: {
        email: string;
        rights: string;
      };
    };
  };

  const content: ContentType = {
    fr: {
      nav: {
        concept: 'Le Concept',
        development: 'Développement',
        membership: 'Devenir Membre',
        privilege: 'Cercle Privilège',
        faq: 'FAQ',
        memberAccess: 'Accès Membre'
      },
      hero: {
        badge: 'Ouverture Début 2026',
        title: 'Club Fontainebleau',
        subtitle: 'Un club privé dédié aux amateurs de cigares et spiritueux d\'exception, où l\'art de vivre rencontre l\'excellence.',
        cta: 'Découvrir l\'Adhésion',
        motto: 'Excellence & Raffinement'
      },
      concept: {
        title: 'Le Concept',
        intro: 'Le Club Fontainebleau sera un espace privé où les amateurs pourront :',
        features: [
          'Stocker leurs cigares dans des conditions optimales au sein de caves personnelles climatisées',
          'Accéder à une collection privée de spiritueux rares et d\'exception',
          'Participer à des dégustations et événements exclusifs',
          'Profiter d\'un cadre raffiné pour leurs rendez-vous professionnels'
        ]
      },
      development: {
        title: 'Développement',
        intro: 'Le premier Club Fontainebleau ouvrira ses portes début 2026 à Paris, dans un emplacement prestigieux actuellement en cours de sélection.',
        phases: [
          { title: 'Phase 1', location: 'Paris - Début 2026' },
          { title: 'Phase 2', location: 'Bordeaux - 2027' }
        ]
      },
      membership: {
        title: 'Devenir Membre',
        subtitle: 'Une expérience unique',
        founderStatus: 'Membre Fondateur',
        description: 'Les 100 premiers membres bénéficieront du statut privilégié de Membre Fondateur, donnant accès à des avantages exclusifs.',
        benefits: [
          'Accès prioritaire aux événements et dégustations',
          'Cave personnelle avec service de conciergerie dédié',
          'Accès à notre collection de spiritueux rares',
          'Invitations aux soirées privées pré-ouverture',
          'Tarifs préférentiels sur l\'ensemble des services'
        ],
        process: {
          title: 'Processus d\'Adhésion',
          steps: [
            {
              title: 'Inscription sur Liste d\'Attente',
              description: 'Inscrivez-vous à notre liste d\'attente pour être informé en priorité de l\'ouverture des adhésions.'
            },
            {
              title: 'Dossier de Candidature',
              description: 'Les candidats sélectionnés seront invités à soumettre un dossier de candidature détaillé.'
            },
            {
              title: 'Entretien Personnel',
              description: 'Un entretien permettra d\'échanger sur vos attentes et de présenter les services du club en détail.'
            },
            {
              title: 'Confirmation d\'Adhésion',
              description: 'Après validation de votre candidature, vous recevrez votre invitation officielle à rejoindre le Club Fontainebleau.'
            }
          ]
        }
      },
      faq: {
        title: 'Questions Fréquentes',
        questions: [
          {
            question: 'Comment devenir membre ?',
            answer: 'L\'adhésion se fait sur candidature. Les 100 premiers membres bénéficieront du statut de Membre Fondateur. Inscrivez-vous sur notre liste d\'attente prioritaire pour initier le processus.'
          },
          {
            question: 'Avantages Membre Fondateur',
            answer: 'Accès prioritaire aux événements, cave personnelle avec conciergerie dédiée, accès aux spiritueux rares, et tarifs préférentiels sur l\'ensemble des services.'
          },
          {
            question: 'Localisation du Club',
            answer: 'Ouverture début 2026 à Paris, dans un emplacement prestigieux en cours de sélection. Une seconde adresse est prévue à Bordeaux en 2027.'
          },
          {
            question: 'Cave Personnelle',
            answer: 'Chaque membre dispose d\'une cave climatisée pour ses cigares. Un service de conciergerie assure la gestion et l\'entretien de votre collection.'
          },
          {
            question: 'Types d\'Événements',
            answer: 'Dégustations exclusives, soirées thématiques, masterclass avec des experts, et événements de networking entre membres.'
          },
          {
            question: 'Horaires d\'Accès',
            answer: 'Accès 7j/7 pour les membres, offrant un cadre raffiné pour vos rendez-vous professionnels ou moments de détente.'
          }
        ]
      },
      newsletter: {
        title: 'Cercle Privilège',
        subtitle: 'Rejoignez le cercle privilégié des futurs membres fondateurs et soyez informé en priorité des opportunités d\'adhésion.',
        form: {
          name: 'Nom',
          firstName: 'Prénom',
          email: 'Email',
          submit: 'Rejoindre la Liste d\'Attente'
        },
        success: {
          title: 'Merci de votre intérêt au Club Fontainebleau',
          subtitle: 'Nous vous contacterons prochainement'
        }
      },
      footer: {
        email: 'contact@clubfontainebleau.com',
        rights: '© 2024 Club Fontainebleau. Tous droits réservés.'
      }
    },
    en: {
      nav: {
        concept: 'Concept',
        development: 'Development',
        membership: 'Membership',
        privilege: 'Privilege Circle',
        faq: 'FAQ',
        memberAccess: 'Member Access'
      },
      hero: {
        badge: 'Opening Early 2026',
        title: 'Club Fontainebleau',
        subtitle: 'A private club dedicated to cigar and fine spirits enthusiasts, where art of living meets excellence.',
        cta: 'Discover Membership',
        motto: 'Excellence & Refinement'
      },
      concept: {
        title: 'The Concept',
        intro: 'Club Fontainebleau will be a private space where enthusiasts can:',
        features: [
          'Store their cigars in optimal conditions within personal climate-controlled cellars',
          'Access a private collection of rare and exceptional spirits',
          'Participate in exclusive tastings and events',
          'Enjoy a refined setting for their business meetings'
        ]
      },
      development: {
        title: 'Development',
        intro: 'The first Club Fontainebleau will open its doors in early 2026 in Paris, in a prestigious location currently being selected.',
        phases: [
          { title: 'Phase 1', location: 'Paris - Early 2026' },
          { title: 'Phase 2', location: 'Bordeaux - 2027' }
        ]
      },
      membership: {
        title: 'Become a Member',
        subtitle: 'A Unique Experience',
        founderStatus: 'Founding Member',
        description: 'The first 100 members will benefit from the privileged Founding Member status, granting access to exclusive advantages.',
        benefits: [
          'Priority access to events and tastings',
          'Personal cellar with dedicated concierge service',
          'Access to our rare spirits collection',
          'Invitations to pre-opening private events',
          'Preferential rates on all services'
        ],
        process: {
          title: 'Membership Process',
          steps: [
            {
              title: 'Waitlist Registration',
              description: 'Join our waitlist to be informed first about membership openings.'
            },
            {
              title: 'Application File',
              description: 'Selected candidates will be invited to submit a detailed application file.'
            },
            {
              title: 'Personal Interview',
              description: 'An interview will allow us to discuss your expectations and present the club\'s services in detail.'
            },
            {
              title: 'Membership Confirmation',
              description: 'After validation of your application, you will receive your official invitation to join Club Fontainebleau.'
            }
          ]
        }
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            question: 'How to become a member?',
            answer: 'Membership is by application only. The first 100 members will benefit from Founding Member status. Register on our priority waitlist to initiate the process.'
          },
          {
            question: 'Founding Member Benefits',
            answer: 'Priority access to events, personal cellar with dedicated concierge service, access to rare spirits, and preferential rates on all services.'
          },
          {
            question: 'Club Location',
            answer: 'Opening early 2026 in Paris, in a prestigious location currently being selected. A second location is planned in Bordeaux for 2027.'
          },
          {
            question: 'Personal Cellar',
            answer: 'Each member has access to a climate-controlled cellar for their cigars. A concierge service ensures the management and maintenance of your collection.'
          },
          {
            question: 'Types of Events',
            answer: 'Exclusive tastings, themed evenings, masterclasses with experts, and networking events between members.'
          },
          {
            question: 'Access Hours',
            answer: 'Access 7 days a week for members, providing a refined setting for your business meetings or moments of relaxation.'
          }
        ]
      },
      newsletter: {
        title: 'Privilege Circle',
        subtitle: 'Join the privileged circle of future founding members and be informed first about membership opportunities.',
        form: {
          name: 'Last Name',
          firstName: 'First Name',
          email: 'Email',
          submit: 'Join the Waitlist'
        },
        success: {
          title: 'Thank you for your interest in Club Fontainebleau',
          subtitle: 'We will contact you soon'
        }
      },
      footer: {
        email: 'contact@clubfontainebleau.com',
        rights: '© 2024 Club Fontainebleau. All rights reserved.'
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Gestion de la navigation scrollée
      setIsScrolled(window.scrollY > 50);

      // Gestion des sections visibles
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        
        if (isVisible) {
          setActiveSection(section.id || 'hero');
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[rgb(24,24,24)]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-[rgba(182,155,116,0.1)] ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <a href="#" className="nav-logo flex items-center gap-3">
              <div className="w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[rgb(182,155,116)]">
                  <path d="M50 5 L90 30 V70 L50 95 L10 70 V30 L50 5Z" />
                  <path d="M50 20 L75 35 V65 L50 80 L25 65 V35 L50 20Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 15 L60 35 H40 L50 15Z" />
                  <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-[rgb(255,255,255)] font-bold text-xl font-['Libre_Baskerville']">
                Club Fontainebleau
              </span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[rgb(182,155,116)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#concept" className={`nav-link ${activeSection === 'concept' ? 'active' : ''}`}>
                {content[language].nav.concept}
              </a>
              <a href="#development" className={`nav-link ${activeSection === 'development' ? 'active' : ''}`}>
                {content[language].nav.development}
              </a>
              <a href="#membership" className={`nav-link ${activeSection === 'membership' ? 'active' : ''}`}>
                {content[language].nav.membership}
              </a>
              <a href="#newsletter" className={`nav-link ${activeSection === 'newsletter' ? 'active' : ''}`}>
                {content[language].nav.privilege}
              </a>
              <a href="#faq" className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}>
                {content[language].nav.faq}
              </a>
              <a href="/member" className="px-4 py-2 bg-[rgb(182,155,116)] text-[rgb(24,24,24)] rounded hover:bg-[rgb(145,124,93)] transition-all duration-300">
                {content[language].nav.memberAccess}
              </a>
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="px-3 py-1 border border-[rgba(182,155,116,0.3)] rounded text-[rgb(182,155,116)] hover:bg-[rgba(182,155,116,0.1)] transition-all duration-300"
              >
                {language === 'fr' ? 'ENGLISH' : 'FRANÇAIS'}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden fixed inset-0 bg-[rgb(24,24,24)] bg-opacity-95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ top: '72px' }}
            >
              <div className="flex flex-col items-center gap-6 p-8">
                <a
                  href="#concept"
                  className={`nav-link ${activeSection === 'concept' ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content[language].nav.concept}
                </a>
                <a
                  href="#development"
                  className={`nav-link ${activeSection === 'development' ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content[language].nav.development}
                </a>
                <a
                  href="#membership"
                  className={`nav-link ${activeSection === 'membership' ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content[language].nav.membership}
                </a>
                <a
                  href="#newsletter"
                  className={`nav-link ${activeSection === 'newsletter' ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content[language].nav.privilege}
                </a>
                <a
                  href="#faq"
                  className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content[language].nav.faq}
                </a>
                <a
                  href="/member"
                  className="w-full text-center px-4 py-2 bg-[rgb(182,155,116)] text-[rgb(24,24,24)] rounded hover:bg-[rgb(145,124,93)] transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content[language].nav.memberAccess}
                </a>
                <button
                  onClick={() => {
                    setLanguage(language === 'fr' ? 'en' : 'fr');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-center px-3 py-1 border border-[rgba(182,155,116,0.3)] rounded text-[rgb(182,155,116)] hover:bg-[rgba(182,155,116,0.1)] transition-all duration-300"
                >
                  {language === 'fr' ? 'ENGLISH' : 'FRANÇAIS'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-background"></div>
        <div className="background-overlay"></div>
        <div className="container relative z-10">
          <div className="content-wrapper text-center max-w-4xl">
            <div className="hero-badge inline-block px-6 py-3 bg-[rgba(182,155,116,0.15)] text-[rgb(182,155,116)] rounded-full text-sm mb-16 border border-[rgba(182,155,116,0.3)]">
              {content[language].hero.badge}
            </div>
            <h1 className="hero-title text-6xl md:text-7xl font-bold mb-12 text-[rgb(255,255,255)] tracking-tight leading-tight">
              {content[language].hero.title}
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-[rgb(180,180,180)] mb-16 max-w-2xl mx-auto leading-relaxed">
              {content[language].hero.subtitle}
            </p>
            <div className="flex flex-col items-center gap-8">
              <a href="#membership" className="hero-button inline-block px-12 py-6 bg-[rgb(182,155,116)] text-[rgb(24,24,24)] font-medium rounded-lg hover:bg-[rgb(145,124,93)] transition-all text-lg tracking-wide">
                {content[language].hero.cta}
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[rgba(182,155,116,0.3)]"></div>
                <span className="text-[rgb(182,155,116)] text-sm uppercase tracking-widest">{content[language].hero.motto}</span>
                <div className="w-12 h-[1px] bg-[rgba(182,155,116,0.3)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="min-h-screen flex items-center justify-center py-20">
        <div className="container">
          <div className="content-wrapper">
            <h2 className="section-title text-[rgb(255,255,255)]">{content[language].concept.title}</h2>
            <div className="service-card">
              <p className="text-lg text-[rgb(180,180,180)] leading-relaxed mb-8">
                {content[language].concept.intro}
              </p>
              <ul className="feature-list space-y-6">
                {content[language].concept.features.map((feature: string, index: number) => (
                  <li key={index} className="feature-item text-[rgb(180,180,180)]">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section id="development" className="min-h-screen flex items-center justify-center py-20 bg-[rgb(32,32,32)]">
        <div className="container">
          <div className="content-wrapper">
            <h2 className="section-title text-[rgb(255,255,255)]">{content[language].development.title}</h2>
            <div className="service-card">
              <p className="text-lg text-[rgb(180,180,180)] leading-relaxed mb-8">
                {content[language].development.intro}
              </p>
              <div className="space-y-6">
                {content[language].development.phases.map((phase: { title: string; location: string }, index: number) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <span className="text-[rgb(182,155,116)] text-lg font-semibold">{phase.title}</span>
                    <p className="text-[rgb(180,180,180)]">{phase.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="min-h-screen flex items-center justify-center py-20">
        <div className="container">
          <div className="content-wrapper">
            <h2 className="section-title text-[rgb(255,255,255)]">{content[language].membership.title}</h2>
            <div className="membership-card mb-12">
              <div className="flex flex-col items-center">
                <span className="membership-level">{content[language].membership.founderStatus}</span>
                <h3 className="card-title text-[rgb(255,255,255)]">{content[language].membership.subtitle}</h3>
                <p className="card-description text-[rgb(180,180,180)]">
                  {content[language].membership.description}
                </p>
                <ul className="membership-benefits">
                  {content[language].membership.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="text-[rgb(180,180,180)]">{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="service-card">
              <h3 className="card-title text-[rgb(255,255,255)]">{content[language].membership.process.title}</h3>
              <div className="space-y-12">
                {content[language].membership.process.steps.map((step: { title: string; description: string }, index: number) => (
                  <div key={index} className="process-step" data-step={index + 1}>
                    <h4 className="font-semibold mb-4 text-[rgb(255,255,255)]">{step.title}</h4>
                    <p className="text-[rgb(180,180,180)]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="min-h-screen flex items-center justify-center py-20 bg-[rgb(32,32,32)]">
        <div className="container mx-auto px-4">
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-['Libre_Baskerville'] text-center text-[rgb(255,255,255)] mb-8">
                {content[language].newsletter.title}
              </h2>
              <p className="text-[rgb(180,180,180)] text-center max-w-2xl mx-auto mb-12">
                {content[language].newsletter.subtitle}
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                <div>
                  <label className="block text-[rgb(182,155,116)] mb-2">{content[language].newsletter.form.name}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[rgb(24,24,24)] border border-[rgba(182,155,116,0.2)] rounded-md px-4 py-3 text-[rgb(255,255,255)] focus:outline-none focus:border-[rgb(182,155,116)]"
                  />
                </div>
                <div>
                  <label className="block text-[rgb(182,155,116)] mb-2">{content[language].newsletter.form.firstName}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[rgb(24,24,24)] border border-[rgba(182,155,116,0.2)] rounded-md px-4 py-3 text-[rgb(255,255,255)] focus:outline-none focus:border-[rgb(182,155,116)]"
                  />
                </div>
                <div>
                  <label className="block text-[rgb(182,155,116)] mb-2">{content[language].newsletter.form.email}</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[rgb(24,24,24)] border border-[rgba(182,155,116,0.2)] rounded-md px-4 py-3 text-[rgb(255,255,255)] focus:outline-none focus:border-[rgb(182,155,116)]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[rgb(182,155,116)] text-[rgb(24,24,24)] rounded-md hover:bg-[rgb(145,124,93)] transition-all duration-300"
                >
                  {content[language].newsletter.form.submit}
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[80vh] animate-fadeIn">
              <div className="w-24 h-24 mb-12">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[rgb(182,155,116)]">
                  <path d="M50 5 L90 30 V70 L50 95 L10 70 V30 L50 5Z" />
                  <path d="M50 20 L75 35 V65 L50 80 L25 65 V35 L50 20Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 15 L60 35 H40 L50 15Z" />
                  <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-8">
                <div className="w-32 h-[1px] bg-[rgba(182,155,116,0.3)]"></div>
                <h3 className="text-3xl font-['Libre_Baskerville'] text-[rgb(255,255,255)] text-center">
                  {content[language].newsletter.success.title}
                </h3>
                <div className="w-32 h-[1px] bg-[rgba(182,155,116,0.3)]"></div>
              </div>
              <p className="text-[rgb(180,180,180)] text-lg tracking-wide mt-8">
                {content[language].newsletter.success.subtitle}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="min-h-screen flex items-center justify-center py-20">
        <div className="container">
          <div className="content-wrapper">
            <h2 className="section-title text-[rgb(255,255,255)] mb-16">{content[language].faq.title}</h2>
            <div className="modern-faq max-w-3xl mx-auto">
              {content[language].faq.questions.map((item: { question: string; answer: string }, index: number) => (
                <div key={index} className="modern-faq-item" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                  <div className="modern-faq-question">
                    <h3>{item.question}</h3>
                    <span className="modern-faq-plus"></span>
                  </div>
                  <div className="modern-faq-answer">
                    <div className="modern-faq-answer-inner">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[rgba(182,155,116,0.1)]">
        <div className="container">
          <div className="content-wrapper text-center">
            <p className="text-[rgb(180,180,180)]">
              {content[language].footer.email}
            </p>
            <p className="text-[rgb(180,180,180)] text-sm mt-4">
              {content[language].footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
