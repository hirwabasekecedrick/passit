// components/NotFound.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! Page not found.</p>
      <a href="/" className="text-blue-500 mt-4">Go back home</a>
    </div>
  )
}