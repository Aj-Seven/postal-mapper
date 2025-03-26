import PostalCard from "./PostalCard.jsx";

export default function PostalList({ postalData }) {
  return (
    <div className="max-h-[60vh] overflow-y-auto space-y-2 border border-gray-300 dark:border-gray-700 rounded-md">
      {postalData.map((office, index) => (
        <PostalCard key={index} office={office} />
      ))}
    </div>
  );
}
