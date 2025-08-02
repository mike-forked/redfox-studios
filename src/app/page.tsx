import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, CodeIcon, PaletteIcon, RocketIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Building innovative{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            We craft exceptional web applications, design systems, and digital solutions 
            that help businesses thrive in the modern world.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link href="/blog">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/announcements">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            What we do
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We specialize in creating modern, scalable, and user-friendly digital solutions.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <CodeIcon className="h-10 w-10" />
              <CardTitle>Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Modern web applications built with cutting-edge technologies and best practices.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <PaletteIcon className="h-10 w-10" />
              <CardTitle>Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Beautiful, intuitive user interfaces that provide exceptional user experiences.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <RocketIcon className="h-10 w-10" />
              <CardTitle>Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Strategic digital solutions that help your business grow and succeed online.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Ready to get started?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Let's work together to bring your digital vision to life.
          </p>
          <Button size="lg" asChild>
            <Link href="/blog">
              View Our Work
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
