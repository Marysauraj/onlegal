import axios from "axios";

export default function handler(req, res) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contracts`;

  if (req.method === "POST") {
    return axios
      .post(url, req.body)
      .then((response) => {
        res.setHeader("Set-Cookie", [
          `onlegal_contractid=${response.data.id}; Path=/; Max-Age=86400`,
          `onlegal_contracttype=${response.data.type}; Path=/; Max-Age=86400`,
        ]);
        return res.status(200).json({});
      })
      .catch((error) => {
        throw res.status(500).json(error);
      });
  } else {
    throw res.status(403).json({ message: "Method not allowed" });
  }
}
