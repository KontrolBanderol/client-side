export default function spaceBarParcer(
  event: React.KeyboardEvent<HTMLInputElement>
) {
  if (event.key === " ") {
    event.preventDefault();
  }
}
