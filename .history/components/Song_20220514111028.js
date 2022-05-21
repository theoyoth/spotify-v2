function Song({ track, order }) {
  return (
    <div>
      <div>
        <p>{order + 1}</p>
        <img className="" src={track.track?.images[0].url} alt="cover song" />
      </div>
    </div>
  );
}

export default Song;
