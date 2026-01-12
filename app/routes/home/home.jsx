import gamestackTexturePlaceholder from '~/assets/buyLi.png';
import sliceTexture3ersi from '~/assets/3ersi.png';
import sliceTextureMaystrong from '~/assets/maystrong-app.png';
import sliceTextureEvalClass from '~/assets/evalClass.png';
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
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive,  details];

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
        title="3ersi.com"
        description="3ersi.com is Algeria’s leading wedding planning guide, offering couples the tools, knowledge, and access to trusted vendors to plan their wedding from start to finish. The platform provides curated offers and resources to make wedding organization simple, efficient, and enjoyable."
        buttonText="View project"
        buttonLink="https://3ersi.com"
        model={{
          type: 'laptop',
          alt: 'IMS',
          textures: [
            {
              srcSet: `${sliceTexture3ersi} 1280w, ${sliceTexture3ersi} 2560w`,
              placeholder: sliceTexture3ersi,
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
        title="Maystrong.com"
        description="MayStrong is a sports and wellness platform in Algeria that connects users with gyms, fitness centers, wellness hubs, and sporting events. It helps individuals discover activities, follow training programs, and access healthy lifestyle resources, while giving providers visibility to an engaged community."
        buttonText="View project"
        buttonLink="https://maystrong-app.com/"
        model={{
          type: 'laptop',
          alt: 'IMS',
          textures: [
            {
              srcSet: `${sliceTextureMaystrong} 1280w, ${sliceTextureMaystrong} 2560w`,
              placeholder: sliceTextureMaystrong,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="EvalClass.com"
        description="EvalClass is an evaluation platform designed to create, manage, and analyze assessments in any field. It provides a flexible and structured way to conduct evaluations, collect feedback, and generate insights efficiently."
        buttonText="View project"
        buttonLink="https://evalclass.com/"
        model={{
          type: 'laptop',
          alt: 'IMS',
          textures: [
            {
              srcSet: `${sliceTextureEvalClass} 1280w, ${sliceTextureEvalClass} 2560w`,
              placeholder: sliceTextureEvalClass,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Inventory Managment System"
        description="A web-based inventory management system designed to track, organize, and manage products efficiently. The platform provides real-time inventory visibility, simplifies stock control, and improves operational accuracy.           Tech Stack: React/TailwindCss/Firebase"
        buttonText="View project"
        buttonLink="https://inventory-managment-seven.vercel.app/"
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
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Buy-Li"
        description="Buy-Li is an e-commerce website designed to provide a smooth and secure online shopping experience. The platform allows users to browse products, manage orders, and complete purchases efficiently through an intuitive and user-friendly interface.           Tech Stack: React - TailwindCSS - Sanity - Stripe - Express.js"
        buttonText="View website"
        buttonLink="https://buyliecomm.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Realtor',
          textures: [
            {
              srcSet: `${gamestackTexturePlaceholder} 1280w, ${gamestackTexturePlaceholder} 2560w`,
              placeholder: gamestackTexturePlaceholder,
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
