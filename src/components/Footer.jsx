export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 w-full text-center">
      <p className="text-sm">© {currentYear} Aj7</p>
      <p className="text-sm">
        API Credits to{" "}
        <a
          className="text-blue-500 hover:underline"
          href="http://www.postalpincode.in/Api-Details"
          target="_blank"
          rel="noreferrer"
        >
          Postalpincode
        </a>
      </p>
    </footer>
  );
}
