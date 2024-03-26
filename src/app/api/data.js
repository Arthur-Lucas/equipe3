export default function handler(req, res) {
  const data = {
    grid: [
      { name: "Epoque 1", img: "jpg" },
      { name: "Epoque 2", img: "jpg" },
      { name: "Epoque 3", img: "jpg" },
      { name: "Epoque 4", img: "jpg" },
      { name: "Epoque 5", img: "jpg" },
      { name: "Epoque 6", img: "jpg" },
      { name: "Epoque 7", img: "jpg" },
      { name: "Epoque 8", img: "jpg" },
      { name: "Epoque 9", img: "jpg" },
    ],
  };
  res.status(200).json(data);
}
