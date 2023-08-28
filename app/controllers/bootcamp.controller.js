const { Bootcamp, User } = require('../models');

const createBootcamp = async (req, res) => {
  try {
    const { title, cue, description } = req.body;
    console.log(req.body);
    // Validar los datos de entrada
    if (!(title && cue && description)) {
      res.status(400).json({ message: 'Todos los campos son requeridos' });
      return;
    }
    const bootcamp = await Bootcamp.create({
      title,
      cue,
      description,
    });
    console.log(
      `Se ha creado el bootcamp ${JSON.stringify(bootcamp, null, 4)}`
    );
    res.status(201).json({
      message: `bootcamp ${bootcamp.name} fue creado con éxito`,
      Bootcamp: bootcamp,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const addUserToBootcamp = async (req, res) => {
  try {
    const { BootcampId, userId } = req.body;
    console.log('BootcampId:', BootcampId);
    console.log('userId:', userId);
    const bootcamp = await Bootcamp.findByPk(BootcampId);
    if (!bootcamp) {
      console.log(`No se encontró bootcamp con id ${BootcampId}`);
      res.status(404).json({
        message: `No se encontró bootcamp con id ${BootcampId}`,
      });
      return;
    }
    console.log('bootcamp:', bootcamp);
    const usuario = await User.findByPk(userId);
    if (!usuario) {
      console.log(`No se encontró usuario con id ${userId}`);
      res.status(404).json({
        message: `No se encontró usuario con id ${userId}`,
      });
      return;
    }
    console.log('usuario:', usuario);
    await bootcamp.addUser(usuario);
    console.log(
      `Agredado el usuario id ${usuario.id} al bootcamp con id ${bootcamp.id}`
    );
    res.status(201).json({
      message: `Se agregó el usuario id ${usuario.id} al bootcamp con id ${bootcamp.id}`,
      Bootcamp: bootcamp,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findBootcampById = async (req, res) => {
  try {
    const { id } = req.params;
    const bootcamp = await Bootcamp.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'firstName', 'lastName', 'email', 'password'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!bootcamp) {
      res.status(404).json({
        message: `bootcamp id ${id} no fue encontrado`,
      });
      return;
    }
    console.log(
      `Se ha encontrado el bootcamp ${JSON.stringify(bootcamp, null, 4)}`
    );
    res.status(200).json({
      message: `bootcamp ${bootcamp.title} fue encontrado con éxito`,
      Bootcamp: bootcamp,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findAllBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'firstName', 'lastName', 'email'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    console.log(
      `Se han encontrado los bootcamps ${JSON.stringify(bootcamps, null, 4)}`
    );
    res.status(200).json({
      message: `se encontraron ${bootcamps.length} bootcamps`,
      Bootcamps: bootcamps,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateBootcampById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!(id && name && description)) {
      res.status(400).json({ message: 'Todos los campos son requeridos' });
      return;
    }
    const actualizados = await Bootcamp.update(
      {
        name,
        description,
      },
      {
        where: { id },
      }
    );
    console.log(`actualizados: ${actualizados}`);
    console.log(`bootcamp id ${id} fue actualizado con éxito`);
    if (!actualizados[0]) {
      res.status(404).json({
        message: `bootcamp id ${id} no fue encontrado`,
      });
      return;
    }
    res.status(201).json({
      message: `bootcamp id ${id} fue actualizado con éxito`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteBootcampById = async (req, res) => {
  try {
    const { id } = req.params;
    const borrados = await Bootcamp.destroy({
      where: { id },
    });
    console.log(`borrados: ${borrados}`);
    console.log(`bootcamp id ${id} fue borrado con éxito`);
    if (!borrados) {
      res.status(404).json({
        message: `usuario id ${id} no fue encontrado`,
      });
      return;
    }
    res.status(201).json({
      message: `usuario id ${id} fue borrado con éxito`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBootcamp,
  addUserToBootcamp,
  findBootcampById,
  findAllBootcamps,
  updateBootcampById,
  deleteBootcampById,
};
