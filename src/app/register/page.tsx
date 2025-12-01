import Link from 'next/link';

const GigaLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M14.901 0.038C18.057 -0.179 21.208 0.544 23.953 2.118C26.699 3.691 28.917 6.044 30.325 8.878C31.734 11.711 32.27 14.899 31.867 18.038C31.327 22.246 29.137 26.068 25.78 28.662C22.422 31.256 18.171 32.41 13.963 31.87C10.825 31.467 7.875 30.142 5.489 28.063C3.104 25.985 1.388 23.245 0.559 20.191C-0.27 17.137 -0.175 13.906 0.832 10.906C1.84 7.906 3.714 5.272 6.218 3.338C8.722 1.403 11.744 0.255 14.901 0.038Z"
      fill="currentColor"
    />
  </svg>
);

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Logo & Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center justify-center gap-3 mb-8">
            <GigaLogo />
            <span className="text-2xl font-medium tracking-tight">Quotara</span>
          </Link>
          <h1 className="text-4xl font-light mb-3">Create your account</h1>
          <p className="text-neutral-gray">Start automating your quotes today</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full h-12 px-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-orange-accent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full h-12 px-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-orange-accent transition-all"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                autoComplete="off"
                className="w-full h-12 px-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-orange-accent transition-all"
                placeholder="Create a strong password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                autoComplete="off"
                className="w-full h-12 px-4 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-orange-accent transition-all"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-primary text-primary-foreground font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-neutral-gray">Or continue with</span>
            </div>
          </div>

          {/* Social Sign Up */}
          <button
            type="button"
            className="w-full h-12 rounded-full border border-border bg-white text-foreground font-medium transition-all duration-200 hover:bg-black/5 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </button>
        </div>

        {/* Sign In Link */}
        <p className="text-center mt-8 text-neutral-gray">
          Already have an account?{' '}
          <Link href="/login" className="text-orange-accent hover:text-orange-accent/80 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}