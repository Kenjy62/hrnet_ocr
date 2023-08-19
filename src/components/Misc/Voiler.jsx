export default function Voiler({ children }) {
  return (
    <div className="fixed flex justify-center items-center top-0 right-0 h-full w-full bg-[#00000085]">
      {children}
    </div>
  );
}
