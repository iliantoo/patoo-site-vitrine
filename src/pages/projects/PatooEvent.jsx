import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { projectsData } from '../../data/projectsData';
import toutou from '../../assets/logo/toutou.png';
import toutou2 from '../../assets/logo/toutou 2.png';

const PatooEvent = () => {
  const otherProjects = projectsData.filter(p => p.title !== 'Patoo Event').slice(0, 3);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-24 font-fredoka">

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-10 mb-20 items-start">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-patoo-black mb-6">Patoo Event</h1>
            <p className="text-patoo-black leading-relaxed">
              Patoo Event est un projet développé au sein de l'incubateur Patoo, avec pour
              ambition de concevoir et organiser un <strong>événement engagé</strong>. Son objectif
              principal est de créer une <strong>expérience unique</strong> tout en renforçant la
              visibilité de l'application Patoo, dont la mission est de mettre en relation les
              animaux à adopter avec des personnes souhaitant adopter. Le projet s'inscrit
              également dans une démarche écoresponsable grâce à la création de jouets pour
              animaux fabriqués à partir de matériaux recyclés, à la fois ludiques et
              respectueux de leur bien-être.
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
              Les membres de<br />l'équipe Patoo Event
            </h2>
            <p className="text-sm text-patoo-black leading-relaxed">
              Salomé Cotin - Marie Jouve - Coraline Berdou - Eliott Combe - Leyanis Reina - Marylou Jaume - Héléna Tran
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
                Organiser un événement en partenariat avec une association animale pour promouvoir le projet et l'application
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-patoo-black mb-2">#02</p>
              <p className="text-sm text-patoo-black leading-relaxed">
                Organiser une collecte de matériaux à recycler (tissus, cordes, balles de tennis, cartons)
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-patoo-black mb-2">#03</p>
              <p className="text-sm text-patoo-black leading-relaxed">
                Fabriquer des jouets grâce à la collecte à vendre sous forme de dons libre lors de l'événement
              </p>
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
                <div className="absolute -bottom-1 -right-1 bg-patoo-white pt-3 pl-3 rounded-tl-[40px]">
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

export default PatooEvent;
