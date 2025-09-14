export default function Reviews() {
  const reviews = [
    { name: "John D.", text: "Super comfortable hoodie!" },
    { name: "Sarah L.", text: "Great quality and fit perfectly." },
  ];

  return (
    <div className="space-y-4">
      {reviews.map((r, idx) => (
        <div key={idx} className="border p-4 rounded-lg bg-white shadow-sm">
          <p className="font-semibold">{r.name}</p>
          <p className="text-gray-600">{r.text}</p>
        </div>
      ))}
    </div>
  );
}
