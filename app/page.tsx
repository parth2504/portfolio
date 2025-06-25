import HomeClient from "./HomeClient"

export const dynamic = "force-static"
export const revalidate = false

export default function HomePage() {
  return <HomeClient />
}