import { PrismaClient } from '@prisma/client';

if (process.env.NODE_ENV === 'production') {
    module.exports = new PrismaClient();
}
else {
    const prisma = new PrismaClient();
    module.exports = prisma;
}

