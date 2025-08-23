export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} CSI SB SJCET - All rights reserved.</p>
      </div>
    </footer>
  );
}