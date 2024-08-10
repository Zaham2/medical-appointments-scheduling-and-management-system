const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

const getUserByToken = async (token) => {
  const user = await prisma.user.findUnique({
    where: { token },
  });

  if(!user) return null

  return user;
};

module.exports = {
  createUser,
  getUserById,
  getUserByToken,
};
