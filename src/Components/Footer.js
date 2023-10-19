import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
      <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
            <FaLinkedin size={30}/>
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'> Location </h6>
            <ul>
              <li className='py-2 text-sm'>Montreal</li>
              <li className='py-2 text-sm'>Canada</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>Africa</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'> Location </h6>
            <ul>
              <li className='py-2 text-sm'>Montreal</li>
              <li className='py-2 text-sm'>Canada</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>Africa</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'> Location </h6>
            <ul>
              <li className='py-2 text-sm'>Montreal</li>
              <li className='py-2 text-sm'>Canada</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>Africa</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'> Location </h6>
            <ul>
              <li className='py-2 text-sm'>Montreal</li>
              <li className='py-2 text-sm'>Canada</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>Africa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer