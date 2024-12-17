export default function ErrorMessage({ message }) {
  return (
    <div className="text-center p-8">
      <div className="text-red-600 mb-2">Error loading templates</div>
      <div className="text-gray-600 text-sm">{message}</div>
    </div>
  );
}