import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/Home" className="text-2xl font-bold tracking-tight">
            Tanstack-Query
          </Link>
        <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/Home"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-200 [&.active]:bg-blue-600 [&.active]:font-bold"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-200 [&.active]:bg-blue-600 [&.active]:font-bold"
            >
              About
            </Link>
            <Link
              to="/Product"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-200 [&.active]:bg-blue-600 [&.active]:font-bold"
            >
              Product
            </Link>
            </div>
      </div>
      <hr />
      <Outlet />
    </nav>
     
      <TanStackRouterDevtools />
    </>
  ),
})