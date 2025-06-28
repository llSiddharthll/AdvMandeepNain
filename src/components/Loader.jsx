export default function Loader({ isVisible }) {
  return (
    <div
      className={`fixed inset-0 bg-white z-[999] h-screen w-screen overflow-hidden flex items-center justify-center
        transform transition-all duration-500 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
    >
      <img src="/logo.png" alt="Mandeep Nain And Associates" className="loader h-64 md:h-80" />
    </div>
  );
}
