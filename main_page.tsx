/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/zpK4seN3AKg
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
function main_page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="bg-gradient-to-r from-primary to-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">John Doe</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-foreground">Frontend Developer</h2>
              <p className="text-muted-foreground">
                I'm a passionate frontend developer with a strong focus on creating beautiful and user-friendly web
                applications.
              </p>
            </div>
            <div className="flex justify-end">
              <img src="/placeholder.svg" width={300} height={300} alt="John Doe" className="rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
main_page.getInitialProps = async (ctx) => {
  return {}
}

export default main_page;