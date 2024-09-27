import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/RedFox_cmyk.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} width="160px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
