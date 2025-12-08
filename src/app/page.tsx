import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NicheGrowth',
  description: 'NicheGrowth connects small businesses with niche expertise in micro-SaaS tools to boost their unique selling points and solve specific challenges.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">NicheGrowth</h1>
      <p className="mt-4 text-lg">NicheGrowth connects small businesses with niche expertise in micro-SaaS tools to boost their unique selling points and solve specific challenges.</p>
    </main>
  )
}
