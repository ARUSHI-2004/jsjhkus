/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/HsHV7qp4rJA
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext} from "@/components/ui/carousel"

function projects() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Take a look at some of our most recent and successful projects.
          </p>
        </div>
        <div className="mt-12">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <img
                    src="/placeholder.svg"
                    width={800}
                    height={500}
                    alt="Project 1"
                    className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                  />
                  <div className="flex flex-col items-start justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Project 1</h3>
                    <p className="text-muted-foreground">
                      A comprehensive website redesign for a leading e-commerce brand, resulting in a 25% increase in
                      conversions.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <img
                    src="/placeholder.svg"
                    width={800}
                    height={500}
                    alt="Project 2"
                    className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                  />
                  <div className="flex flex-col items-start justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Project 2</h3>
                    <p className="text-muted-foreground">
                      A custom web application for a fintech startup, streamlining their investment management
                      processes.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <img
                    src="/placeholder.svg"
                    width={800}
                    height={500}
                    alt="Project 3"
                    className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                  />
                  <div className="flex flex-col items-start justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Project 3</h3>
                    <p className="text-muted-foreground">
                      A mobile-first web application for a healthcare provider, improving patient engagement and
                      satisfaction.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <ChevronLeftIcon className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <ChevronRightIcon className="h-5 w-5" />
            </CarouselNext>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div />
              <div />
              <div />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
interface ChevronLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
  // Add any additional props you need here
}

function ChevronLeftIcon({...props }: ChevronLeftIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}


interface ChevronRightIconProps extends React.SVGAttributes<SVGSVGElement> {
  // Add any additional props you need here
}

function ChevronRightIcon({ ...props }: ChevronRightIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
projects.getInitialProps = async (ctx) => {
  return {}
}

export default projects;
