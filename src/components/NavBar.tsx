import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/RedFox_cmyk.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} width="160px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
