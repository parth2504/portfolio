import { type Metadata } from "next"
import ExperienceClient from "./ExperienceClient"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Experience | ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.description,
}

export const dynamic = "force-static"
export const revalidate = false

export default function ExperiencePage() {
  return <ExperienceClient />
}