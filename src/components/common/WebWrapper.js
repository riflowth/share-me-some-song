export default function WebWrapper({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between bg-gray-900 overflow-hidden">
      {children}
    </div>
  )
}