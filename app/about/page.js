import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutBusiness from '../components/about/AboutBusiness';

export const metadata = {
  title: 'About | The Spatial Edit',
  description: 'Built from experience. Driven by belief.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutBusiness />
      </main>
      <Footer />
    </>
  );
}
