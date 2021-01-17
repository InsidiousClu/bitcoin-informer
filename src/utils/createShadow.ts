export default function createShadow(color: string = '#000', elevation: number = 6) {
  return {
    shadowColor: color,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation,
  };
}
