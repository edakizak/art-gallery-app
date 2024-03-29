import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtPiecesList({
  pieces,
  onArtPiecesInfo,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        onArtPiecesInfo={onArtPiecesInfo}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
