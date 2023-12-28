import "../components/Destination.css";
import DestinationData from "./DestinationData";
function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give Opportunity to seen a lot,within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Mumbai"
        text="Mumbai is best described as the “city of dreams.” The diverse and captivating entertainment centre of India appeals to many. The city’s lifeline is the local railways. Delicious street food, the prominence of the Bollywood industry, and holy places like Haji Ali and Siddhivinayak unquestionably call for an experience. According to every Mumbaikar, it is Aamchi Mumbai, and everyone who has visited Mumbai will pronounce it in the same tone."
        img1="https://lp-cms-production.imgix.net/image_browser/Mumbai_nightlife_S.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=reac8.6.4"
        img2="https://wallpapercave.com/wp/wp5172698.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=reac8.6.4"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Pune"
        text="Pune is a city located in the state of Maharashtra, India. It is the second largest city in the state after Mumbai and is often referred to as the “Oxford of the East” due to its highly regarded educational institutions. Pune is one of the largest IT hubs in India and is also one of the most important automobile and manufacturing hubs of India."
        img1="https://wallpapercave.com/wp/wp8344791.jpg"
        img2="https://img.staticmb.com/mbcontent/images/uploads/2022/7/pcmc-property-tax.jpg"
      />
    </div>
  );
}
export default Destination;
