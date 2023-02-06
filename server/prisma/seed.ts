import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
  await Promise.all([
    prisma.post.create({
      data: {
        content: {
          create: {
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, repudiandae atque rerum, quia repellendus animi nihil nisi consequatur iure quam reprehenderit voluptates, placeat quidem debitis? Numquam assumenda maiores vitae et."
          }
        },
        author: {
          create: {
            avatar_url: "https://github.com/ericDK89.png",
            name: "Eric Macedo",
            role: "Dev Full Stack"
          }
        }
      }
    })
  ])
}

main()
  .then(async () => {
    await prisma.$disconnect() //serve para desconectar o servidor após o seed acontecer
  })
  .catch(async (error) => {
    console.log(error) //captura algum erro se ocorrer durante a função do seed
    await prisma.$disconnect()
    process.exit(1)
  })