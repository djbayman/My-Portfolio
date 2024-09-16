import gamestackTexture2Large from '~/assets/realtor.png';
import gamestackTexture2Placeholder from '~/assets/realtor.png';
import gamestackTexture2 from '~/assets/realtor.png';
import gamestackTextureLarge from '~/assets/realtor.png';
import gamestackTexturePlaceholder from '~/assets/realtor.png';
import gamestackTexture from '~/assets/realtor.png';
import cryptoImg from '~/assets/crypto.png';
import sliceTextureLarge from '~/assets/gymrats.png';
import sliceTexturePlaceholder from '~/assets/gymrats.png';
import sliceTexture from '~/assets/gymrats.png';
import sprTextureLarge from '~/assets/inv.png';
import sprTexturePlaceholder from '~/assets/inv.png';
import sprTexture from '~/assets/inv.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Inventory Managment System"
        description="Designing a platform to help business owener to manage his transactions.           Tech Stack: React/TailwindCss/Firebase"
        buttonText="View project"
        buttonLink="https://inventory-managment-9mvlx3nb2-aymanes-projects-27be667b.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'IMS',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Website for real estate"
        description="Realtor is a platform where you can purchase or rent apartments, houses, and
various types of properties. Tech Stack: React/TailwindCss/RESTful API"
        buttonText="View website"
        buttonLink="https://realtor-r235zuww2-aymanes-projects-27be667b.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Realtor',
          textures: [
            {
              srcSet: `${gamestackTexturePlaceholder} 1280w, ${gamestackTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Gym Rats"
        description="Gym-rats is a fitness website designed to help you get in shape. It offers a
wide range of exercises. Tech Stack: React/TailwindCss/RESTful API"
        buttonText="View project"
        buttonLink="https://gym-rats-iiry2kwo2-aymanes-projects-27be667b.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Crypto Universe"
        description="CryptoVerse is your go-to source for the latest updates on the currency market. Tech Stack: React/TailwindCss/RESTful API
"
        buttonText="View website"
        buttonLink="https://crypto-verse-8vjvm6piu-aymanes-projects-27be667b.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Crypto',
          textures: [
            {
              srcSet: `${cryptoImg} 1280w, ${cryptoImg} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
