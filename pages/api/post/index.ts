import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { catagory, title, summary, body } = req.body;
  const result = await prisma.post.create({
    data: {
      catagory: catagory,
      title: title,
      summary: summary,
      body: body,
    },
  });
  res.json(result);
}
