import "../components/Trip.css";
import TripData from "./TripData";
function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trips</h1>
      <p>Your can discover unique destination using Google Maps.</p>
      <div className="tripCard">
        <TripData
          image={
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/180000/180678-Maldives-All.jpg"
          }
          heading="Trip in Maldives "
          text="Made up of nearly 1,200 coral islands strung north to south in the Indian Ocean, the Maldives is one of the most popular beach destinations on the planet. Known for world-class diving, miles of empty white-sand beaches, and resorts oozing with luxury, the Maldives isn't always the most budget-friendly destination."
        />
        <TripData
          image={
            "https://live.staticflickr.com/65535/48548286916_509fc92e59_b.jpg"
          }
          heading="Trip in South Korea "
          text="South Korea, country in East Asia. It occupies the southern portion of the Korean peninsula. The country is bordered by the Democratic People's Republic of Korea (North Korea) to the north, the East Sea (Sea of Japan) to the east, the East China Sea to the south, and the Yellow Sea to the west; to the southeast it is separated from the Japanese island of Tsushima by the Korea Strait. The capital is Seoul."
        />
         <TripData
          image={
            "https://wallpaperaccess.com/full/2925515.jpg"
          }
          heading="Trip in japan "
          text="Japan is an island country located in East Asia, consisting of four main islands (Hokkaido, Honshu, Shikoku, and Kyushu) and thousands of smaller ones. It is bordered by the Pacific Ocean to the east and the Sea of Japan to the west. Tokyo is the capital and largest city of Japan.Japan has a high-tech industry and a prosperous economy"
        />
      </div>
    </div>
  );
}
export default Trip;
