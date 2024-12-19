import dbConnect from "../../../lib/mongodb";
import Project from "../../../models/Project";

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') { 
        try {
            const project = await Project.findById(req.query.id);
            res.status(200).json(project);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el proyecto', error });
        }
    } else {
        res.status(405).json({ message: 'Metodo no permitido' });

    }
}