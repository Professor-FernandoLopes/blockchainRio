import { Fragment, useState } from 'react';

import { DecoderText } from 'components/DecoderText';
//import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { media } from 'utils/style';
import profileImg from 'assets/profile.jpg';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileKatakana from 'assets/katakana-profile.svg?url';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Bem vindos" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Eu sou o professor Fernando Lopes, fundador da DeFi University.{' '}
      Para ser um profissional de destaque são necessários conhecimentos interdisciplinares.  
      Por isso, após perceber a ausência no Brasil de cursos com visão holística e prática no sentido da formação de profissionais para o complexo mercado de criptoativos, decidi fundar a DeFi university.
      Contudo, o profissional do presente está em constante transformação, e a cada dia vemos a intersecção de disciplinas como blockchain, IoT, Ar, metaverso, que caminham para uma integração.
      Não podemos ficar fora desse momento histórico da humanidade, onde vemos uma mudança profunda nas relações sociais. Precisamos fazer parte disso. Por isso, junte-se à DeFi university na construção da sociedade 5.0. 


      
    </Text>
   
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
             
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                
               
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
