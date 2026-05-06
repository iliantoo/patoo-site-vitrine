import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { projectsData } from '../data/projectsData';

import patooLogo from '../assets/logo/logo.png';
import vectorRays from '../assets/logo/Vector 1.png';
import vectorCurves from '../assets/logo/Vector 2.png';
import toutou from '../assets/logo/toutou.png';
import bgAccueil from '../assets/logo/background_page_accueil.png';
import animauxAccueil from '../assets/logo/logo_page_accueil.png';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center relative">
        <div className="inline-flex items-center justify-center border border-gray-300 rounded-full px-5 py-1.5 mb-8 text-sm relative bg-patoo-white">
          Hello!
          <img
            src={vectorRays}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-4 -right-5 w-6 md:w-7"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-5 text-patoo-black">
          <span className="relative">
            <img
              src={vectorCurves}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -left-10 md:-left-12 -bottom-6 w-10 md:w-12"
            />
            Bienvenue sur
          </span>
          <img
            src={patooLogo}
            alt="Patoo"
            className="h-20 md:h-24 w-auto -mb-1"
            loading="eager"
          />
        </h1>

        <div className="absolute left-6 md:left-10 top-[230px] md:top-[250px] text-left">
          <img src={toutou} alt="" aria-hidden="true" className="w-10 h-auto" />
          <p className="mt-2 font-bold text-sm leading-tight text-patoo-dark">
            L'adoption, rendue
            <br />
            simple et significative !
          </p>
        </div>

        {/* Illustration Hero */}
        <div className="relative w-full max-w-2xl mx-auto mt-8 pt-[14%]">
          <img
            src={bgAccueil}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 inset-x-0 w-full block select-none pointer-events-none"
          />
          <img
            src={animauxAccueil}
            alt="Un chat et un chien Patoo"
            className="relative z-10 block w-[90%] ml-[22%] -translate-y-[18%] select-none pointer-events-none"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-left">Découvre nos projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {projectsData.slice(0, 3).map((project) => (
            <div key={project.id} className="bg-patoo-medium rounded-3xl overflow-hidden relative h-72 flex flex-col">
              <div className="p-5 font-medium border-b border-patoo-black">
                {project.title}
              </div>
              <div className="flex-grow"></div>
              
              {/* Bottom Right Cutout with Button */}
              <div className="absolute -bottom-1 -right-1 bg-patoo-white pt-3 pl-3 rounded-tl-[32px]">
                <Link to={project.link} className="bg-patoo-black text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {projectsData.slice(3, 5).map((project) => (
            <div key={project.id} className="bg-patoo-medium rounded-3xl overflow-hidden relative h-72 flex flex-col">
              <div className="p-5 font-medium border-b border-patoo-black">
                {project.title}
              </div>
              <div className="flex-grow"></div>
              
              <div className="absolute -bottom-1 -right-1 bg-patoo-white pt-3 pl-3 rounded-tl-[32px]">
                <Link to={project.link} className="bg-patoo-black text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
