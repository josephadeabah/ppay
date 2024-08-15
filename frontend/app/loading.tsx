export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-white/30 backdrop-blur-md">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
    </div>
  );
}
