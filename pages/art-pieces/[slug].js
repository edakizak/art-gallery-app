import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtDetails({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  addComment,
  comments,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);
  console.log("slug", slug);
  console.log("Selected Art Piece", selectedArtPiece);
  return (
    <>
      <ArtPieceDetails
        data={selectedArtPiece}
        image={selectedArtPiece.imageSource}
        name={selectedArtPiece.name}
        year={selectedArtPiece.year}
        genre={selectedArtPiece.genre}
        artist={selectedArtPiece.artist}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        addComment={addComment}
        slug={slug}
      />
    </>
  );
}
