import { Fragment, useMemo } from 'react';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
//import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import backgroundSpr from 'assets/spr-background.jpg';
import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import dynamic from 'next/dynamic';
//import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
//import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
//import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
//import imageSprComponentsDark from 'assets/spr-components-dark.png';
//import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
//import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
//import imageSprComponentsLight from 'assets/spr-components-light.png';
//import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
//import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
//import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
//import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
//import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
//import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
//import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
//import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

//import { useAppContext } from 'hooks';

//import videoSprMotion from 'assets/spr-motion.mp4';
//import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
//import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Flash Loans: o novo tempo e espaço no mundo das finanças';
const description =
  'Neste curso você vai aprender desde os fundamentos das finanças descentralizadas até a programação de flash loans.';
const roles = [
  'Informações sobre o curso',
  'Assuntos abordados durante o Blockchain Rio',
  'Flash Loans: o novo tempo e espaço no mundo das finanças',
  
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
 // const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
 // const themes = ['dark', 'light'];

/*  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  }; */

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.defiuniversity.com.br/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Informações sobre o curso</ProjectSectionHeading>
            <ProjectSectionText>
              Ao comprar o curso, além do conteúdo indicado abaixo, que será ministrado presencialmente durante o Blockchain Rio, o aluno terá acesso
               vitalício ao curso online de programação para blockchain e finanças descentralizadas promovido pela empresa DataCurrency, em parceria com a DeFi University.
               Trata-se de um curso completo, em contínua atualização, que já conta com mais de 130 aulas gravadas.
               Além disso, usando o cupom, BlockchainRio, até 08 de julho, o aluno terá direito a 70% de desconto. Essa condição é exclusiva para comemorar a realização do evento Blockchain Rio e não será repetida em qualquer hipótese.
              
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        
        
      { /*  <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprComponentsDark, imageSprComponentsDarkLarge]
                  : [imageSprComponentsLight, imageSprComponentsLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>The aero design system</ProjectSectionHeading>
              <ProjectSectionText>
                To streamline the design process across designers and engineers for such a
                large project, it was important to lay the foundations with a strong,
                flexible design system that could evolve during the product’s development
                cycle. This would inform both the aesthetics and user experience across
                the product itself as well as the website and marketing material.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
            </ProjectSection>  */ }


       {/*<ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprDesignSystemDark, imageSprDesignSystemDarkLarge]
                  : [imageSprDesignSystemLight, imageSprDesignSystemLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Design system docs</ProjectSectionHeading>
              <ProjectSectionText>
                A design system is useless if no one knows how to use it, so we put
                together a comprehensive documentation website to cover principles, ux,
                accessibility, and component guidelines for designers and engineers
                working with the system.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
            </ProjectSection> */} 



        {/*<ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Motion design</ProjectSectionHeading>
                  <ProjectSectionText>
                    Animation was a core principle in making the authoring experience a
                    more understandable process. Elements animate in ways that indicate
                    the cause and effect of each interaction to improve the fluidity of
                    the overall experience.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotionLarge, width: 2560 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
              </ThemeProvider> */}
        
        
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Assuntos abordados durante o Blockchain Rio</ProjectSectionHeading>
              <ProjectSectionText>
                No Blockchain Rio falaremos sobre os assuntos expostos na grade curricular abaixo
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                  : [imageSprStoryboarderLight, imageSprStoryboarderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprStoryboarderDarkPlaceholder
                  : imageSprStoryboarderLightPlaceholder
              }
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Flash Loans: o novo tempo e espaço no mundo das finanças
                </ProjectSectionHeading>
                <ProjectSectionText>
                 Ainda no Blockchain Rio ingressaremos no fantástico mundo dos Flash Loans. 
                 Após a definição teórica do conceito veremos no código por que é possível, no mercado defi, a realização de empréstimos de 
                  milhares de dólares, por qualquer pessoa, sem o fornecimento de qualquer garantia, 
                  mas com zero risco de inadimplência. Entenderemos ainda por que os flash loans não encontram qualquer analogia no âmbito das finanças tradicionais, sendo uma realidade exclusiva do mercado defi.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema2Dark, imageSprSchema2DarkLarge]
                    : [imageSprSchema2Light, imageSprSchema2LightLarge]
                }
                placeholder={
                  isDark
                    ? imageSprSchema2DarkPlaceholder
                    : imageSprSchema2LightPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                    : [imageSprSchema1Light, imageSprSchema1LightLarge]
                }
                placeholder={
                  isDark
                    ? imageSprSchema1DarkPlaceholder
                    : imageSprSchema1LightPlaceholder
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'DeFi',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'IOT',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'NFT games',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Realidade aumentada',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'NFT games',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Finanças descentralizadas',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Blockchain',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Metaverso',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inteligência artificial',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Uma nova geração de profissionais para um novo mundo
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      A DeFi university contribui para a criação de novos profissionais com capacidade de atuação no novo universo das tecnologias disruptivas.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Trazendo 3D e AR ao aprendizado
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Nosso curso de programação para o metaverso prepara o aluno para trabalhar com tecnologias como threejs, webxr, unity, vuforia,
                       dentre outras utilizadas para criação de experiências no metaverso .
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Realidade aumentada',
                'Blockchain',
                'Realidade virtual',
                'NFTs',
                'pools de liquidez',
                'decentralized trading bots',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Interatividade
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      O novo mundo é descentralizado e interativo.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Realidade aumentada',
                'Blockchain',
                'Realidade virtual',
                'NFTs',
                'pools de liquidez',
                'decentralized trading bots',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Blockchain', 'Metaverso', 'IOT']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Integração
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      As novas experiências são resultado da integração.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Matricule-se já</ProjectSectionHeading>
              <ProjectSectionText>
               
                <Link href="https://pay.hotmart.com/L63442499V?checkoutMode=10">
                  use o cupom BlockchainRio
                </Link>{' '}
                para se tornar um criador de conhecimento.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
