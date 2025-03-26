export default function PostalCard({ office }) {
  return (
    <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h4 className="font-semibold text-lg mb-1">{office.Name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <strong>District: </strong>
        {office.District}, <strong> State: </strong> {office.State},
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <strong> Division: </strong> {office.Division}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <strong> Branch Type: </strong> {office.BranchType}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <strong>PinCode: </strong>
        {office.Pincode}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 ">
        <strong>Delivery Option:</strong> {office.DeliveryStatus}
      </p>
    </div>
  );
}
