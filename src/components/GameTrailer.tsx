import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstVid = data?.results[0];
  return firstVid ? (
    <video src={firstVid.data[480]} poster={firstVid.preview} controls />
  ) : null;
};

export default GameTrailer;