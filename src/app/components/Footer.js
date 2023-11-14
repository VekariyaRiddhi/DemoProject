import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  return (
    <footer className="bg-gray-500 bg-opacity-25 h-24 w-full text-center mt-auto">
      <div>
        <VisitorCounter />
      </div>
    </footer>
  );
}
