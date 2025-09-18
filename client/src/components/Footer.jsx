export default function Footer() {
  return (
    <footer className="p-6 bg-black text-white text-center dark:bg-gray-100 dark:text-black">
      <p className="text-sm">© {new Date().getFullYear()} Muthuganesh M. All rights reserved.</p>
      <p className="text-sm mt-2">Built with ❤️ by MG &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp; Powered by MERN Stack</p>
    </footer>
  );
}
