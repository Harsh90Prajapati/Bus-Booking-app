import SearchForm from "../components/searchForm";
import Offer from "../components/Offer"
import JourneyAssistance from "../components/Journey"
import AppDownloadSection from "../components/AppDownload"
import TravelerFeedback from "../components/TravellFeedback";
import IndianTravelDestinations from "../components/Destinations";



export default function Home() {
  localStorage.removeItem('busResults')
  localStorage.removeItem('busSeats')
  localStorage.removeItem('passengerDetail')
  return (
    <div className="min-h-screen flex flex-col">
      <main className="bg-[url(/busImage.png)] bg-cover md:h-[400px] p-4 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          <h1 className="md:text-4xl sm:text-2xl text-xl tracking-wider font-bold text-white mb-8">India's No. 1 online bus ticket booking site</h1>
          <SearchForm/>
        </div>
      </main>
      <IndianTravelDestinations/>
      <Offer/>
      <TravelerFeedback/>
      <JourneyAssistance/>
      <AppDownloadSection/>

    </div>
  );
}