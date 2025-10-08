import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WelcomeSection from "./components/WelcomeSection";
import VideoSlider from "./components/VideoSlider";
import Cakes from "./components/Cakes";
import Info from "./components/Info";
import Contacts from "./components/Contacts";
import CandyBar from "./components/CandyBar";

// Импорты для Cakes
import GirlsCakes from "./components/Cakes/GirlsCakes";
import BoysCakes from "./components/Cakes/BoysCakes";
import AdultsCakes from "./components/Cakes/AdultsCakes";
import WeddingCakes from "./components/Cakes/WeddingCakes";

// Импорты для Candy
import BoysCandy from "./components/Candy/BoysCandy";
import GirlsCandy from "./components/Candy/GirlsCandy";
import MixedCandy from "./components/Candy/MixedCandy";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          {/* Главная */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WelcomeSection />
                <VideoSlider />
              </>
            }
          />

          {/* Торты */}
          <Route path="/cakes" element={<Cakes />}>
            <Route path="girls" element={<GirlsCakes />} />
            <Route path="boys" element={<BoysCakes />} />
            <Route path="adults" element={<AdultsCakes />} />
            <Route path="wedding" element={<WeddingCakes />} />
          </Route>

         // Кенди-Бар секция в App.jsx
<Route path="/candy" element={<CandyBar />}>  {/* Добавляем основной компонент */}
  <Route index element={<MixedCandy />} />
  <Route path="girls" element={<GirlsCandy />} />
  <Route path="boys" element={<BoysCandy />} />
  <Route path="mixed" element={<MixedCandy />} />
</Route>

          {/* Остальные страницы */}
          <Route path="/info" element={<Info />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
