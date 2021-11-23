// req is http.IncomingMessage, res is http.ServerResponse
export default function handler(req, res) {
  res.status(200).json({ text: "こんにちは" });
}
