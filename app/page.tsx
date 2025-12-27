import Link from "next/link";

// app/page.tsx
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,78,216,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.08)_0%,transparent_50%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-indigo-700/20 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/50 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Welcome to the future
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-delay font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
            <span className="text-white">Build something</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              extraordinary
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-delay-2 mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Create, innovate, and transform your ideas into reality. Join
            thousands of creators shaping the digital landscape.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold hover:scale-105 transition-transform"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 rounded-full border border-gray-500 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Log In
            </Link>
          </div>

          {/* Trust badge */}
          <p className="animate-fade-in-delay-2 mt-12 text-sm text-gray-400/70">
            Trusted by 10,000+ creators worldwide
          </p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
    </div>
  );
}
