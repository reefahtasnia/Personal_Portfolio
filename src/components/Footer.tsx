
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex justify-center">
          <span className="text-2xl font-bold neon-text">RTH</span>
        </div>
        
        <p className="text-sm text-gray-400">
          © {currentYear} Reefah Tasnia Haque. All rights reserved.
        </p>
        
        <div className="mt-4 text-sm">
          <span className="text-gray-400">
            Full Stack Dev | CTF Player | UI/UX Designer
          </span>
        </div>
      </div>
    </footer>
  );
}
