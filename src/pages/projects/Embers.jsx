import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { projectsData } from '../../data/projectsData';
import toutou from '../../assets/logo/toutou.png';
import toutou2 from '../../assets/logo/toutou 2.png';
import mockup1 from '../../assets/logo/mockup_embers1.png';
import mockup2 from '../../assets/logo/mockup_embers2.png';
import mockup3 from '../../assets/logo/mockup_ember3.png';
import phone1 from '../../assets/logo/phone1_Embers.png';
import phone2 from '../../assets/logo/phone2_embers.png';
import phone3 from '../../assets/logo/phone3_embers.png';
import fleche from '../../assets/logo/fleche_embers.png';
import flechePost from '../../assets/logo/fleches post.png';

const INSTAGRAM_URL = 'https://www.instagram.com/embers_media_/';

const InstagramBadge = ({ label }) => (
  <a
    href={INSTAGRAM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 border border-patoo-black rounded-full px-4 py-1.5 text-sm font-medium hover:bg-patoo-black hover:text-white transition-colors"
  >
    <span>{label}</span>
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
);

const PhoneMockup = ({ href, image, className = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`relative mx-auto w-36 block hover:scale-105 transition-transform ${className}`}
  >
    <div className="bg-patoo-black rounded-[2rem] p-1.5 shadow-xl">
      <div className="bg-gray-800 rounded-[1.6rem] overflow-hidden aspect-[9/19.5]">
        {image ? (
          <img src={image} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Voir le post</span>
          </div>
        )}
      </div>
    </div>
  </a>
);

const Embers = () => {
  const otherProjects = projectsData.filter(p => p.title !== 'Embers').slice(0, 3);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-24 font-fredoka">

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-10 mb-20 items-start">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-patoo-black mb-6">Embers</h1>
            <p className="text-patoo-black leading-relaxed">
              Embers est un <strong>média de divertissement</strong> "par les jeunes, pour les
              jeunes", structuré sur le modèle d'une "content factory". Plus qu'un
              simple diffuseur, Embers se positionne comme un{' '}
              <strong>laboratoire créatif</strong> visant à capter l'attention, générer de
              l'engagement et affirmer une identité forte pour la{' '}
              <strong>nouvelle génération</strong>.
            </p>
          </div>

          <div className="relative bg-patoo-light rounded-3xl p-6 w-full md:w-72 shrink-0">
            <img
              src={toutou}
              alt=""
              aria-hidden="true"
              className="absolute -top-4 -right-4 w-10"
            />
            <h2 className="text-xl font-bold text-patoo-black mb-3">
              Les membres de<br />l'équipe Embers
            </h2>
            <p className="text-sm text-patoo-black leading-relaxed">
              Ilkay MEN - Clarence QUENTIN - Mehdi KOSSENTINI - Théo DUMOULIN - Eliott RUBINI - Warren CITADELLE - Gabriel DURIS
            </p>
          </div>
        </div>

        {/* Objectifs */}
        <div className="relative bg-patoo-medium rounded-3xl p-10 mb-20">
          <img
            src={toutou2}
            alt=""
            aria-hidden="true"
            className="absolute -top-4 -right-4 w-10"
          />
          <h2 className="text-3xl font-bold text-patoo-black mb-8">Objectifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-bold text-patoo-black mb-2">#01</p>
              <p className="text-sm text-patoo-black leading-relaxed">
                Produire des formats courts, dynamiques et récurrents, spécifiquement pensés pour les codes des réseaux sociaux actuels
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-patoo-black mb-2">#02</p>
              <p className="text-sm text-patoo-black leading-relaxed">
                Objectifs internes : qualité de production, de la régularité, des performances et de l'engagement
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-patoo-black mb-2">#03</p>
              <p className="text-sm text-patoo-black leading-relaxed">
                Objectifs de croissance : nombre de vidéos, d'abonnées et nombre de partenariat afin de voir notre évolution
              </p>
            </div>
          </div>
        </div>

        {/* Productions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-patoo-black mb-10">Production(s)</h2>

          {/* Vidéos */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-patoo-black">Vidéos</h3>
              <InstagramBadge label="@embers_media_" />
            </div>
            <div className="relative">
              <div className="absolute top-0 left-[45%] flex flex-col items-start z-10 pointer-events-none">
                <span style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: '16px', lineHeight: '100%', textAlign: 'center' }} className="text-patoo-black block">Clique pour<br />voir les réels</span>
                <img src={fleche} alt="" aria-hidden="true" className="w-24 mt-1 ml-4" />
              </div>
              <div className="flex gap-4 justify-center items-end pt-28">
                <a href="https://www.instagram.com/p/DW1gD4FChfH/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                  <img src={phone1} alt="Vidéo Embers 1" className="w-[600px] h-auto" />
                </a>
                <a href="https://www.instagram.com/p/DVq8_hNguSW/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                  <img src={phone2} alt="Vidéo Embers 2" className="w-[600px] h-auto" />
                </a>
                <a href="https://www.instagram.com/p/DRzyONcAlX5/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                  <img src={phone3} alt="Vidéo Embers 3" className="w-[600px] h-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-patoo-black">Posts (différentes typologies)</h3>
              <InstagramBadge label="@embers_media_" />
            </div>
            <div className="relative">
              <div className="absolute top-0 left-[58%] flex flex-col items-center z-10 pointer-events-none">
                <span style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: '16px', lineHeight: '100%', textAlign: 'center', marginLeft: '16px' }} className="text-patoo-black block mb-2">Clique pour<br />voir les posts</span>
                <img src={flechePost} alt="" aria-hidden="true" className="w-24 mt-3" />
              </div>
              <div className="flex gap-6 justify-center pt-28">
                <PhoneMockup href="https://www.instagram.com/p/DWJ6SaPgqTT/" image={mockup1} />
                <PhoneMockup href="https://www.instagram.com/p/DWWv9OfgtUc/" image={mockup2} />
                <PhoneMockup href="https://www.instagram.com/p/DWb32bfDceE/" image={mockup3} />
              </div>
            </div>
          </div>
        </div>

        {/* Autres projets */}
        <div>
          <h2 className="text-2xl font-bold text-patoo-black mb-6">Regarde aussi les autres projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-patoo-medium rounded-3xl overflow-hidden relative h-56 flex flex-col">
                <div className="p-5 font-medium border-b border-patoo-black">
                  {project.title}
                </div>
                <div className="flex-grow"></div>
                <div className="absolute -bottom-1 -right-1 bg-patoo-white pt-3 pl-3 rounded-tl-[32px]">
                  <Link to={project.link} className="bg-patoo-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Embers;
