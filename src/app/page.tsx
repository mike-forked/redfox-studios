import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, CodeIcon, PaletteIcon, RocketIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Building innovative{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                digital experiences
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              We craft exceptional web applications, design systems, and digital solutions 
              that help businesses thrive in the modern world.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="text-base" asChild>
              <Link href="/blog">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base" asChild>
              <Link href="/announcements">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                What we do
              </h2>
              <p className="text-lg text-muted-foreground sm:text-xl">
                We specialize in creating modern, scalable, and user-friendly digital solutions.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                    <CodeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Modern web applications built with cutting-edge technologies and best practices.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
                    <PaletteIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl">Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Beautiful, intuitive user interfaces that provide exceptional user experiences.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                    <RocketIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl">Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Strategic digital solutions that help your business grow and succeed online.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Let's work together to bring your digital vision to life.
              </p>
            </div>
            <Button size="lg" className="text-base" asChild>
              <Link href="/blog">
                View Our Work
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}