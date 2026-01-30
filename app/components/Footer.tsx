export default function Footer() {
  return (
    <footer className="bg-[#f7f3ec] py-20 px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        <div>
          <h3 className="font-bold text-xl mb-4">Lilac Template</h3>
          <p>123 Example Road</p>
          <p>Minneapolis, MN</p>
          <p className="mt-4 underline">email@example.com</p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Hours</h3>
          <p>Monday – Friday</p>
          <p>10am – 6pm</p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">Find</h3>
          <p className="underline">Home</p>
          <p className="underline">Contact</p>
          <p className="underline">Blog</p>
        </div>
      </div>

      <p className="text-center text-xs mt-20 opacity-70">
        All Rights Reserved © 2026 Lilac Clone
      </p>
    </footer>
  );
}
