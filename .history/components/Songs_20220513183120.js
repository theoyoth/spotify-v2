function Songs() {
  return (
    <div className="text-white">
      {playlist?.tracks?.items?.items?.map((track) => {
        <div>{track.track.name}</div>;
      })}
    </div>
  );
}

export default Songs;
