import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from './index';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codEditora } = req.query;

  if (req.method === 'GET') {
    try {
      const editora = controleEditora.getNomeEditora(Number(codEditora));
      res.status(200).json({ nome: editora });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar editora.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
