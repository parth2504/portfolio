import { type Metadata } from 'next'
import ProjectsClient from './ProjectsClient'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Projects | ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.description,
}

export const dynamic = 'force-static'
export const revalidate = false

export default function ProjectsPage() {
  return <ProjectsClient />
}