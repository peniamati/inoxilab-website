import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const projects = await Project.find({});
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los proyectos' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
