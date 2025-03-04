import { NextResponse } from 'next/server';

// import Together from "together-ai"

import { GoogleGenerativeAI } from '@google/generative-ai';
// import Jimp from 'jimp';
// import fs from 'fs/promises';


// import { extractLastFrameFromGif } from '../utils/extractLastFrameFromGif';
// import saveBase64Image from '../utils/saveBase64Image';

// import getDiff from '../utils/getDiff';
// import { limiter } from '../utils/rateLimit';

// export const IdealImagePath = "ideal.png";
// const writingImagePath = "../utils/temp/writing.png";

// export const IdealImagePath = "./src/app/api/analyze/ideal.png";
// const writingImagePath = "./src/app/api/utils/temp/writing.png";

// // Apply the rate limit function
// const applyRateLimit = async (req) => {
//   try {
//     await limiter(req);
//   } catch (err) {
//     return new NextResponse(JSON.stringify({ error: 'Too many requests' }), { status: 429 });
//   }
// };

interface ImageDataType {
  imageToExportBase64: string;
}

export async function POST(req:Request) {
  
  // // Apply rate limit before processing the request
  // const rateLimitError = await applyRateLimit(req);
  // if (rateLimitError) return rateLimitError;
  
  try {
    const body = await req.json();

    const { data } : {data : ImageDataType}= body;
    // console.log("data >>>>>>>>>>", data);
    // console.log("req.json >>>>>>>>>>", req.json());
    
    
    if (!data) {
      return new NextResponse(JSON.stringify({ error: 'Input data required' }), { status: 400 });
    }
    
    const imageToExportBase64 : string = data.imageToExportBase64.replace(/^data:image\/\w+;base64,/, "")
    // console.log("imageToExportBase64 without the >>>>> data:image >>>>>>", imageToExportBase64);

    if(!imageToExportBase64){
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }
    // const serialNo = data.item.serialNo;
    // const drawingBase64 = data.imageToExportBase64;
    // const idealGifPath = data.item.imageHiragana.url;
    
    // // Extract the last frame from the GIF and save it
    // await extractLastFrameFromGif(idealGifPath);
    
    
    // // Invert and save the image
    // const image = await Jimp.read(IdealImagePath);
    // const idealInBase64 = await image.invert().getBase64Async(Jimp.MIME_PNG);
    // await image.writeAsync(IdealImagePath);

    // // Save drawing image from base64
    // await saveBase64Image(writingImagePath, drawingBase64);
    // // console.log("got here bro>>>>");



    // // send to ai and the get response
    

    const gemini_api_key  = process.env.NEXT_PUBLIC_GEMINI_API_KEY

    if(!gemini_api_key){
      return new NextResponse(JSON.stringify({ error: 'Api key error' }), { status: 500 }); 
    }

    // if(gemini_api_key){

    
    const genAI = new GoogleGenerativeAI(gemini_api_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
    // const prompt : string = "Let's say you are a doctor. Now read the image which is a hand written prescription and give me all information in mdx format (try not to exclude any valid data). If there are other languages, translate them to english."
    const prompt : string = "Let's say you are a doctor. Now read the image which is a hand written prescription and give me all information in json format (try not to exclude any valid data). If there are other languages, translate them to english."
    
    const result = await model.generateContent(
      [
        {
          inlineData: {
            mimeType: "image/png",
            data: imageToExportBase64,
          },
        },
        prompt
      ]
    )
    console.log("result.response form gemini >>> ",result.response)


      const prescripData = result.response.text()

      
      const dataFromBackend = {
        // serialNo,
        // idealInBase64,
        // drawingBase64,
        prescripData,
      };

      // Now delete the images
      // await Promise.all([fs.unlink(writingImagePath), fs.unlink(IdealImagePath)]);

      // Return the NextResponse with status 201 and the JSON data
      // return dataFromBackend; //wrong!!!!!!!1
      console.log("dataFromBackend>>>>> ",dataFromBackend);
      return new NextResponse(JSON.stringify({ dataFromBackend }), { status: 201 });
      

      // }

    }
   catch (error) {
    // return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
}



// // // pages/api/example.js

// // import Jimp from 'jimp';
// // import fs from "mz/fs";
// import { limiter, runMiddleware } from '../utils/rateLimit';
// // import { runCors } from '../utils/cors';
// // import { extractLastFrameFromGif } from '../utils/extractLastFrameFromGif';
// // import saveBase64Image from '../utils/saveBase64Image';
// // import getDiff from '../utils/getDiff';
// // import { NextResponse } from 'next/server';


// // export const IdealImagePath = "ideal.png";
// // const writingImagePath = "./utils/temp/writing.png";

// const applyRateLimit = async (req, res) => {
//   await runMiddleware(req, res, limiter);
// };


// export async function  POST(req, res)  {
//     console.log('API route /api/analyze hit');
//     res.status(200).json({ message: 'API route is working' });
//   try {

//     await runCors(req, res);
    
//     await applyRateLimit(req, res);

//     const { method } = req;

//     if (method === 'POST') {
//       const { data } = req.body;

//       if (!data) {
//         return res.status(400).json({ error: 'Input data required' });
//       }

//       const serialNo = data.item.serialNo;
//       const drawingBase64 = data.imageToExportBase64;
//       const idealGifPath = data.item.imageHiragana.url;

//       console.log('Received data:', { data });

//       // Extract the last frame from the GIF and save it
//       await extractLastFrameFromGif(idealGifPath);

//       // Invert and save the image
//       const image = await Jimp.read(IdealImagePath);
//       const idealInBase64 = await image.invert().getBase64Async(Jimp.MIME_PNG);

//       // Already inverted in base64 so no need to do it again
//       await image.writeAsync(IdealImagePath);

//       // Save drawing image from base64
//       await saveBase64Image(writingImagePath, drawingBase64);

//       // Get the difference between images
//       const diffWithoutBuffer = await getDiff(IdealImagePath, writingImagePath);

//       if (diffWithoutBuffer.getBuffer) {
//         const getBufferData = await diffWithoutBuffer.getBuffer(false);

//         // Convert the buffer to base64
//         const diffImageInBase64 = `data:image/png;base64,${getBufferData.toString('base64')}`;

//         const diffData = {
//           diffWithoutBuffer,
//           diffImageInBase64,
//         };

//         const dataFromBackend = {
//           serialNo,
//           idealInBase64,
//           drawingBase64,
//           diffData,
//         };

//         // Send response to client
//         // res.status(201).json({ dataFromBackend });
//         return new NextResponse(JSON.stringify({ dataFromBackend }), { status: 201 });

//         // Delete the images
//         await fs.unlink(writingImagePath);
//         await fs.unlink(IdealImagePath);

//         // Optionally, log file removal
//         // console.log("Files removed");
//       }

//     } else {
//       res.setHeader('Allow', ['POST']);
//       return res.status(405).end(`Method ${method} Not Allowed`);
//     }
//   } catch (error) {
//     if (error.status === 429) {
//       return res.status(429).json({ error: 'Too many requests' });
//     }
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// export default handler;



// // import { limiter, runMiddleware } from "./utils/rateLimit";


// // const applyRateLimit = async (req, res) => {
// //     await runMiddleware(req, res, limiter);
// //   };
// // export const IdealImagePath = "ideal.png" 
// // const writingImagePath = "./utils/temp/writing.png"

// // const handler = async (req, res) => {

// //   applyRateLimit(req, res, () => {
// //     const { method } = req;

// //     if (method === 'POST') {
// //       try {

// //         //start form here
// //         const { data } = req.body;
// //         // console.log("kkkkkkkkkkkkkk",data);
// //         if (!data) {
// //           return res.status(400).json({ error: 'Input data required' });
// //         }
      
// //         const serialNo = data.item.serialNo
// //         const drawingBase64 = data.imageToExportBase64
// //         const idealGifPath = data.item.imageHiragana.url
// //         // const { name, email } = req.body;
// //         console.log('Received data:', {data});

        
// //          //  extract the last frame from the GIF and save it
// //     await extractLastFrameFromGif(idealGifPath);
// //     // console.log("Extraciton done.");

// //     // invert and saved image
// //     const image = await Jimp.read(IdealImagePath);
// //     const idealInBase64 = await image.invert().getBase64Async(Jimp.MIME_PNG)
// //     // console.log("Inverted image: ",idealInBase64);

// //     //already inverted in base64 so no need  to do it again.
// //     await image.writeAsync(IdealImagePath);
// //     // console.log("Inversion done.");

// //     // drawing image from base64
// //     await saveBase64Image(writingImagePath, drawingBase64);

// //     //difference between images
// //     const diffWithoutBuffer = await getDiff(IdealImagePath, writingImagePath);

// //     if(diffWithoutBuffer.getBuffer){
// //     const getBufferData:Buffer =  diffWithoutBuffer.getBuffer(false);

// //     // convert the buffer to base64 
// //     const diffImageInbase64 = `data:image/png;base64,${getBufferData.toString('base64')}`

// //     const diffData = {
// //       diffWithoutBuffer,
// //       diffImageInbase64,
// //     };

// //     const dataFromBackend = {
// //       serialNo,
// //       idealInBase64,
// //       drawingBase64,
// //       diffData,
// //     };

// //     // Send  response to client
// //     res.status(201).json({ dataFromBackend })

// //     //now delete the images
// //     fs.unlink(writingImagePath)
// //     fs.unlink(IdealImagePath)
// //     // console.log("file removed");
    
// //   }


// //         // res.status(200).json({
// //         //   message: 'Data received successfully',
// //         //   receivedData: { name, email },
// //         // });
// //       } catch (error) {
// //         res.status(500).json({ error: 'Internal Server Error' });
// //       }
// //     } else {
// //       res.setHeader('Allow', ['POST']);
// //       res.status(405).end(`Method ${method} Not Allowed`);
// //     }
// //   });
// // };

// // export default handler;
