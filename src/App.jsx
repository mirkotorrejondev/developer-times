import Languages from './components/Languages';
import Masthead from './components/Masthead'
import Profile from './components/Profile';
import ProjectsList from './components/ProjectsList';
import Skills from './components/Skills';
import { profile } from './data/profile';
import { projects } from './data/projects';

function App({ date }) {

  return (
    <div>
      <Masthead date={date}/>
      <main className='layout'>
        <div className='card'>
          <Profile {...profile}/>
          <Languages languages={profile.languages}/>
          <Skills skills={profile.skills}/>
        </div>
        <ProjectsList projects={projects}/>
      </main>
    </div>
  )
}

export default App;
