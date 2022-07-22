const skills = [
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Database', 'Languages', 'Business Intelligence'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Tools', 'Database', 'Data Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python', 'Data Engineering'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['SQL', 'Business Intelligence', 'Tools'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Azure DevOps',
    competency: 3,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Apache Airflow',
    competency: 4,
    category: ['Data Engineering', 'Tools', 'Python'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
