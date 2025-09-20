import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function SoftwareTesting() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Software Testing</h1>
        <p>This is the Software Testing page.</p>
      </main>
      <Footer />
    </div>
  );
}

    