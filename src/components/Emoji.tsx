import { GiBullseye } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";
import { CiFaceMeh } from "react-icons/ci";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: {
    [key: number]: { icon: IconType; label: string; boxSize: string };
  } = {
    3: { icon: CiFaceMeh, label: "meh", boxSize: "25px" },
    4: { icon: FaThumbsUp, label: "recommended", boxSize: "25px" },
    5: { icon: GiBullseye, label: "exceptional", boxSize: "30px" },
  };

  return (
    <Icon
      as={emojiMap[rating].icon}
      aria-label={emojiMap[rating].label}
      title={emojiMap[rating].label}
      boxSize={emojiMap[rating].boxSize}
      marginTop={1}
    />
  );
};

export default Emoji;
