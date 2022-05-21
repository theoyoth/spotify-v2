function Song({ track, order }) {
  return (
    <div className="grid grid-cols-2">
      <div>
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track?.album?.images[0].url}
          alt="cover song"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="hidden md:inline">{track.track?.album.name}</p>
        <p>duration</p>
      </div>
    </div>
  );
}

export default Song;
