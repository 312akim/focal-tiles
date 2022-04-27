export const secondsToTime = (time) => {
    let track = parseInt(time);
    const hours = Math.floor(time / 3600);
    track += (-hours * 3600);
    const minutes = Math.floor(track / 60);
    track += (-minutes * 60);
    const seconds = Math.floor(track);
  
    return `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`
}