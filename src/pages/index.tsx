import { Flex, Heading } from '@chakra-ui/react';
import Banner from '../components/Banner';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { Slider } from '../components/Slider';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrimiscClient } from '../services/prismic';

export interface ContinentProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ continents }: ContinentProps) {
  return (
    <Flex direction="column" w="100%" h="100%">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        fontWeight="500"
        fontSize={['xl', '2xl', '3xl', '4xl']}
        lineHeight={['30px', '54px']}
        textAlign="center"
        color="gray.700"
        mt={['1.5rem', '2rem', '2.25rem', '3.25rem']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrimiscClient();

  const response = await prismic.query<any>([
    Prismic.Predicates.at('document.type', 'continent')
  ]);

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url
    };
  });

  return {
    props: {
      continents
    },
    revalidate: 1000
  };
};
