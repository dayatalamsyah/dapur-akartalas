export default function Footer() {
  return (
    <footer className="bg-yellow-950 text-white py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dapur Akartalas. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Dibuat dengan ❤️ oleh Tim Kreatif
        </p>
      </div>
    </footer>
  );
}
