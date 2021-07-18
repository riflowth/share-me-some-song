export default function WebContent({ children }) {
  return (
    <main className="container m-auto transform -translate-y-16 sm:translate-y-0">
      {children}
    </main>
  )
}