export default function WebWrapper({ children }) {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-900">
      {children}
    </div>
  )
}