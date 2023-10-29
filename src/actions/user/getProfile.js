import db from '@/database/models/index';

export default async function getUserById(id) {
  let data = await db.Users.findAll({
    attributes: [
      'id',
      'username',
      'email',
      'dayOfBirth',
      'dayOfBirth',
      'createdAt',
    ],
    include: [
      {
        model: db.Images,
        attributes: ['id', 'imgURL', 'imageStatus_id', 'createdAt'],
        as: 'images',
        include: [
          {
            model: db.ImageStatus,
            attributes: ['id', 'name'],
            as: 'ImageStatus',
          },
        ],
      },
    ],
    where: {
      id,
    },
  });

  if (data.length === 0) {
    return [];
  }

  return data;
}
