import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg.jpg";
import Trip2 from "../assets/8.jpg.jpg";
import Trip3 from "../assets/6.jpg.jpg";

function Trip() {
  return (
    <div className="Trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
      </div>
    </div>
  );
}
export default Trip;
