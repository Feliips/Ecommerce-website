import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}
