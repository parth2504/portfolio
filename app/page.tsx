import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Parth Dhameliya | Creative Frontend Developer & React Developer',
  description: 'Portfolio of Parth Dhameliya, a frontend developer in Ahmedabad specializing in React, Next.js, and TypeScript. Hire a freelance frontend developer in India for high-performance web applications.',
});

export default function HomePage() {
  return <HomeClient />;
}