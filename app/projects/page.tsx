import { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Projects | Parth Dhameliya - Next.js & TypeScript Developer',
  description: 'Explore frontend projects by Parth Dhameliya, a React and Next.js developer. Portfolio includes TypeScript, modern web technologies, and freelance frontend developer work in India.',
})

export default function ProjectsPage() {
  return <ProjectsClient />;
}