// import prisma from '../../lib/prisma'


// export default async function handler(req, res) {


//     // const transformIframe = (iframe) =>{


//     // }

//     // post-request
//     if (req.method === 'POST') {
//         try {
//             const { email, iframe } = req.body
//             if (!email || !iframe) {
//                 res.status(400).json({ message: 'Missing email or iframe' })
//             }
    
//             const post = await prisma.post.create({
//                 data: {
//                     email,
//                     // frame: transformIframe(iframe),
//                     frame: iframe,
//                 },
//             })
    
//             res.status(200).json({ message: 'Success', post })
            
//         } catch (error) {
//             res.status(500).json({ message: error?.message , error,   post :'post' })
//         }
      
//     }

//     // get-request
//     if (req.method === 'GET') {
//         try {
//             // params  page and limit
//             const { page, limit } = req.query
//             // convert to number
//             const pageInt = parseInt(page)
//             const limitInt = parseInt(limit)

//             const count = await prisma.post.count()

//             const posts = await prisma.post.findMany({
//                 skip: (pageInt - 1) * limitInt,
//                 take: limitInt,
//                 orderBy: {
//                     createdAt: 'desc',
//                 },
                
//             })
//             res.status(200).json({ message: 'Success', posts , count })
            
//         } catch (error) {
//             res.status(500).json({ message: error?.message , error , query : req.query})
//         }
      
//     }
// }
