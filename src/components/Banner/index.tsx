import { useRouter } from 'next/router';
import { ContinentBanner } from './ContinentBanner';
import { HomeBanner } from './HomeBanner';

export function Banner() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';
  return (
    <>
      {!notHomePage && <HomeBanner />}
      {notHomePage && <ContinentBanner />}
    </>
  );
}
