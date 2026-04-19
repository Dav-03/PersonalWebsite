export const playClick = () => {
  const sound = new Audio(`${import.meta.env.BASE_URL}click.mp3`)
  sound.play()
}