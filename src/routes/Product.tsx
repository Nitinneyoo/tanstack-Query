import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Route = createFileRoute('/Product')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, isError, error } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => axios.get<Post[]>("http://localhost:4000/posts").then(res => res.data),
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map(post => (
          <div
            key={post.id}
            className="bg-gradient-to-bl from-gray-400 to-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:bg-gray-900 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {post.title}
            </h3>
            <p className="text-black">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}