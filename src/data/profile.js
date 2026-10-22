import mirko from '../assets/mirko.jpeg';
import { pick } from './skills';

const paragraph1 =
  `Full-stack developer with experience in designing and implementing C#
(.NET) APIs and SPA applications using Next.js and Angular. I have worked on
multiple university projects, both as a developer and team leader, coordinating
deliverables, defining architecture, and resolving technical and organizational
issues. I specialize in building scalable solutions and collaborate well in
multidisciplinary teams.`;

const paragraph2 = 
  `In the future, I will create incredible experiences whether websites or 
  games through 3D. That’s why I spend my free time learning the fundamentals, 
  such as modeling in Blender and the basics of scene creation in Three.js, 
  including cameras, lighting, geometry, materials, and more.`;

export const profile = {
  name: 'Mirko Torrejon',
  role: 'Full Stack Developer',
  quote: 'Now I build functional products, and in the future I will create experiences that amaze you.',
  photo: mirko,
  photoCaption: 'Image of the developer who owns this portfolio',
  bio: [paragraph1, paragraph2],
  languages: [
    { code: 'us', name: 'English (Intermediate)' },
    { code: 'es', name: 'Spanish (Native)' },
  ],
  skills: [
    { title: 'Languages', items: pick(['js', 'ts', 'cs', 'html']) },
    { title: 'Frameworks or libraries',  items: pick(['react', 'angular', 'asp', 'express', 'three']) },
    { title: 'Databases or tools',    items: pick(['mysql', 'mongo', 'docker', 'blender', 'git']) },
  ],
}