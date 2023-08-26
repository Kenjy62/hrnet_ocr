export default function Layout({ children }) {
  return (
    <div className="p-4 w-full flex flex-col justify-center items-center gap-4">
      {children}
    </div>
  );
}
