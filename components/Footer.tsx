export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {currentYear} | Clive Musika | All rights reserved</p>
      </div>
    </footer>
  );
}