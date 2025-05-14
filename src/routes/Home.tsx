import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Route = createFileRoute("/Home")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
      return axios.get("http://localhost:4000/todos");
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
     <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-6 justify-center">
        {data?.data.map(todos => (
          <div
            key={todos.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:bg-gray-400 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2 flex justify-center items-center">
              {todos.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
