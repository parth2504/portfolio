import { type Metadata } from "next"
import ContactClient from "./ContactClient"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Contact | ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.description,
}

export const dynamic = "force-static"
export const revalidate = false

export default function ContactPage() {
  return <ContactClient />
}