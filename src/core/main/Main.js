import { Box } from "@mui/material";
import BtnRouting from "./BtnRouting";
import NavBar from "./navigation/NavBar";

const Main = () => {
  return (
    // Currently 51 total catagoties, Main will have 3 column of 17

    <Box>
      <NavBar />
      <Box>
        {/* Column 1 */}

        <Box>
          <BtnRouting
            btnName="Animals"
            navigateTo="/AnimalsDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting
            btnName="Anime"
            navigateTo="/AnimeDash"
            backgroundColor="white"
            textColor="#0077ba"
          />
          <BtnRouting
            btnName="Anti-Malware"
            navigateTo="/AntiMalwareDash"
            backgroundColor="white"
            textColor="#0077ba"
          />
          <BtnRouting
            btnName="Art & Design"
            navigateTo="/ArtDesignDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting
            btnName="Authentication"
            navigateTo="/AuthenticationDash"
            backgroundColor="white"
            textColor="#0077ba"
          />
          <BtnRouting
            btnName="Blockchain"
            navigateTo="/BlockchainDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Books"
            navigateTo="/BooksDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting
            btnName="Business"
            navigateTo="/BusinessDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Calendar"
            navigateTo="/CalendarDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Cloud"
            navigateTo="/CloudDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="ContInt"
            navigateTo="/ContIntDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Cryptocurrency"
            navigateTo="/CryptocurrencyDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="CurrencyExchange"
            navigateTo="/CurrencyExchangeDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
        </Box>

        {/* Column 2 */}

        <Box></Box>

        {/* Column 3 */}

        <Box></Box>
      </Box>
    </Box>
  );
};

export default Main;
