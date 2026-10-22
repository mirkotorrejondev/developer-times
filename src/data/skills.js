export const SKILLS = {
  js:       { name: 'JavaScript', icon: 'js' },
  ts:       { name: 'TypeScript', icon: 'ts' },
  cs:       { name: 'C#',         icon: 'cs' },
  html:     { name: 'HTML/CSS',       icon: 'html' },
  react:    { name: 'React',      icon: 'react' },
  angular:  { name: 'Angular',    icon: 'angular' },
  asp:      { name: 'ASP .NET Core', icon: 'dotnet' },
  three:    { name: 'Three.js (Learning)',   icon: 'threejs' },
  blender:  { name: 'Blender (Learnning)', icon: 'blender' },
  node:     { name: 'Node.js',    icon: 'nodejs' },
  express:  { name: 'Express',    icon: 'express' },
  mysql:    { name: 'MySQL',      icon: 'mysql' },
  mongo:    { name: 'MongoDB',    icon: 'mongodb' },
  git:      { name: 'GitLab',     icon: 'gitlab' },
  docker:   { name: 'Docker',     icon: 'docker' },
  figma:    { name: 'Figma',      icon: 'figma' },
}

export const pick = (keys) => keys.map((k) => SKILLS[k])