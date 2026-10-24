import { Button, Label } from '../components/ui'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center pt-24">
      <div className="crosshairs absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="wrap relative">
        <Label><span className="text-accent">404</span>&nbsp;&nbsp;Page not found</Label>
        <h1 className="mt-6 max-w-3xl font-wide text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-fg md:text-7xl">
          This page has moved <span className="text-dim">or never existed.</span>
        </h1>
        <Button to="/" className="mt-10">Back to home</Button>
      </div>
    </section>
  )
}
