'use client'
// import { Button } from '@/components/ui/button'
import React from 'react'
// import { ReactSketchCanvas } from 'react-sketch-canvas'
import Drawing from '@/components/Drawing'
// import Mdxoutput from '@/components/Mdxoutput'
// import Wrapper from '@/components/Wrapper'
// const styles = {
//     border: '0.0625rem solid #9c9c9c',
//     borderRadius: '0.25rem',
//      width: "100%",
//       height: "100%"
// };

const prescripDraw = () => {
    return (
        <div className='min-h-100vh container p-4'>
            <div className='text-2xl font-bold  md:text-4xl'>
                Start Writinig Your Prescription
            </div>
            <div className='bg-black h-1 w-full my-2' />
            <br />
            {/* jp-drawing */}
            <br />

            <Drawing />


            {/* <Wrapper/> */}

            {/* <Mdxoutput /> */}
        </div>
    )
}

export default prescripDraw




// <div className='flex justify-center items-center'>

// <Button
//     onClick={() => { alert("Button clicked") }}
    
//     >Submit</Button>
//     </div>

// {/* sketch */}
// {/* <div className=' border-2 border-red-500 rounded-lg p-4 m-4 bg-blue-700 ' > */}
// <div className="border-2 border-red-500 rounded-lg p-4 m-4 bg-blue-700 flex justify-center items-center h-[500px]">

//     <ReactSketchCanvas
//         style={styles}  
//         //   width="600"
//         // width="100%"
//         // height="full"
//         strokeWidth={4}
//         strokeColor="red"
//         // backgroundImage='https://media.istockphoto.com/id/149296558/photo/prescription.jpg?s=612x612&w=0&k=20&c=VUwZGQaY3_eXJROW9BP4OGmFRw5emYZwnJKQbr3ZBVU='
//         // preserveBackgroundImageAspectRatio='true'
//         // className='min-h-screen'
//     />
// </div>
