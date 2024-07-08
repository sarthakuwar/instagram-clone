import { PrismaClient } from "@prisma/client";

import { PrismaLibSQL } from "@prisma/adapter-libsql";
import  {createClient}  from "@libsql/client";

declare global {
  var prisma: PrismaClient | undefined;
}
console.log(process.env.TURSO_DATABASE_URL);
const libsql = createClient({
  url: 'libsql://instagram-clone-sarthakk.turso.io',
  authToken: process.env.TURSO_AUTH_TOKEN!
});

// Create the custom adapter
const adapter = new PrismaLibSQL(libsql);

// Create the PrismaClient instance with the adapter
const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;

/*declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;



import { PrismaClient } from '@prisma/client';
import { createClient } from '@libsql/client'; // Replace with actual package import
import { PrismaLibSQL } from '@prisma/adapter-libsql'; // Replace with actual adapter import

declare global {
  var prisma: PrismaClient | undefined;
}

// Create the libsql client
const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

// Create the custom adapter
const adapter = new PrismaLibSQL(libsql);

// Create the PrismaClient instance with the adapter
const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;





*/
