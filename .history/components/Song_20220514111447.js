function Song({ track, order }) {
  return (
    <div>
      <div>
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track?.album?.images[0].url}
          alt="cover song"
        />
      </div>
      <div>
        <p>{track.track?.album.name}</p>
        <p>duration</p>
      </div>
    </div>
  );
}

export default Song;
