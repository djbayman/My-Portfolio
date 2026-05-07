import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/3ersi-project-large.png';
import sprTexturePlaceholder from '~/assets/3ersi-project-large.png';
import sprTexture from '~/assets/3ersi-project-large.png';

import sprTextureLarge2 from '~/assets/maystrong-project-large.png';
import sprTexturePlaceholder2 from '~/assets/maystrong-project-large.png';
import sprTexture2 from '~/assets/maystrong-project-large.png';
import sprTextureLarge3 from '~/assets/evaclass-project-large.png';
import sprTexturePlaceholder3 from '~/assets/evaclass-project-large.png';
import sprTexture3 from '~/assets/evaclass-project-large.png';
import sprTextureLarge4 from '~/assets/akevents-project-large.png';
import sprTexturePlaceholder4 from '~/assets/akevents-project-large.png';
import sprTexture4 from '~/assets/akevents-project-large.png';
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
        title="3ersi"
        description="Responsible for developing  experience for a wedding planning platform that helps couples organize their events and discover the best wedding services, vendors, and event solutions in one place."
        buttonText="View project"
        buttonLink="https://3ersi.com"
        model={{
          type: 'laptop',
          alt: '3ersi.com website',
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
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        alternate={2}
        title="MayStrong-app"
        description="Developing the experience for a fitness and wellness platform that helps users discover gyms, wellness centers, and fitness services to support their health and lifestyle goals."
        buttonText="View project"
        buttonLink="https://maystrong-app.com"
        model={{
          type: 'laptop',
          alt: 'MayStrong-app website',
          textures: [
            {
              srcSet: `${sprTexture2} 1280w, ${sprTextureLarge2} 2560w`,
              placeholder: sprTexturePlaceholder2,
            },
          ],
        }}
      />
      {/* <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="MayStrong-app"
        description="Developing the experience for a fitness and wellness platform that helps users discover gyms, wellness centers, and fitness services to support their health and lifestyle goals."
        buttonText="View website"
        buttonLink="https://maystrong-app.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      /> */}
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Biomedical image collaboration"
        description="Responsible for developing the frontend experience for a fast, secure, and high-performance evaluation platform that allows users to create and manage evaluations across different fields on both web and mobile platforms."
        buttonText="View project"
        buttonLink="https://evalclass.com/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sprTexture3} 1280w, ${sprTextureLarge3} 2560w`,
              placeholder: sprTexturePlaceholder3,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        alternate={4}
        title="Akevents"
        description="Developing a fullstack platform for creating and managing events, with a focus on user engagement and seamless event organization."
        buttonText="View project"
        buttonLink="https://akeventsdz.com"
        model={{
          type: 'laptop',
          alt: 'Akevents website',
          textures: [
            {
              srcSet: `${sprTexture4} 1280w, ${sprTextureLarge4} 2560w`,
              placeholder: sprTexturePlaceholder4,
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
