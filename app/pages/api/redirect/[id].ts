// pages/api/redirect/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  res.redirect(302, `/media/${id}`);
}