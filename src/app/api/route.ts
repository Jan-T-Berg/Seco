import { NextRequest, NextResponse } from 'next/server';
import db from '@/database/models/index';

export async function GET(request: NextRequest) {
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
  });
  console.log(data);
  return NextResponse.json(data, {
    status: 200,
  });
}
