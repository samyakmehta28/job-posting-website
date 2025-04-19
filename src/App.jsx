import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Jobs from './components/Jobs';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  const title = 'Become a React Dev';
  const subtitle = 'Find the React job that fits your skills and needs';
  return (
    <>
      <Navbar />
      <Hero title={title} subtitle={subtitle} />
      <Cards />
      <Jobs />
      <ViewAllJobs />
    </>
  );
};
export default App;
