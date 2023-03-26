export function EpisodeCurrent({item}) {
  return (
    <>
      <h1>Episode: {item.id}</h1>
      <p>{item.name}</p>
      <p>{item.air_date}</p>
      <p>{item.episode}</p>
      <p>{item.created}</p>
    </>
  );
}
