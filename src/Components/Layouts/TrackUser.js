import { useEffect } from "react";
import axios from "axios";

const TrackUser = () => {
  useEffect(() => {
    const trackUser = async () => {
      try {
        await axios.post("https://fatihhsezer.xyz/api/FatihTrack");
      } catch (error) {
        console.error("Error tracking user:", error);
      }
    };

    trackUser();
  }, []);

  return null; // Bu bileşen herhangi bir şey render etmeyecek
};

export default TrackUser;
