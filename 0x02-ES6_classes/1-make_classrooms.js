import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const size = [19, 20, 34];
  return size.map((element) => new ClassRoom(element));
}
