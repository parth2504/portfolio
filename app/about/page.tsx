import { type Metadata } from "next"
import AboutClient from "./AboutClient"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: `About | ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.description,
}

export const dynamic = "force-static"
export const revalidate = false

export default function AboutPage() {
  return <AboutClient />
}