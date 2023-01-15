import Image from 'next/image'
import React from 'react'
import logo from '../../../public/mol-logo.png'
import Modal from '../../components/MOL/Modal'
import { Tab } from '@headlessui/react'
import PostWall from '../../components/MOL/PostWall'

function MOLweb() {

  const [openModal, setOpenModal] = React.useState(false)
  const [tab, setTab] = React.useState('one')



  return (
    <>
      <div className='fixed right-2 top-3'>
        <button
          onClick={() => setOpenModal(true)}
          class="p-0 w-16 h-16  bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                      C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                      C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
      </div>
    <div className=' bg-[#05141c] w-full min-h-screen flex flex-col items-center   ' >
      <Modal
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

    

      <div className='flex justify-center items-center gap-3 mt-5'>
        <Image src={logo.src} width={100} height={100} />
        <h1 className='text-white font-bold text-5xl  tracking-wider ' >Introduction To Web  </h1>
      </div>
      <Tab.Group>
      <Tab.List className="flex space-x-2 w-80 p-2 rounded-xl bg-[#1b2730]" >
        <Tab
          onClick={() => setTab('one')}
          className={`w-full rounded-lg py-3  font-medium leading-5 text-blue-700  text-white  hover:bg-white/[0.12] hover:text-white ${tab === 'one' && 'bg-white/[0.12]'} `}
         > All Posts </Tab>
        <Tab
          onClick={() => setTab('two')}
          className={`w-full rounded-lg py-3  font-medium leading-5 text-blue-700  text-white  hover:bg-white/[0.12] hover:text-white  ${tab === 'two' && 'bg-white/[0.12]'} `}
        >Resources</Tab>
        {/* <Tab
          onClick={() => setTab('three')}
          className={`w-full rounded-lg py-3  font-medium leading-5 text-blue-700  text-white  hover:bg-white/[0.12] hover:text-white  ${tab === 'three' && 'bg-white/[0.12]'} `}
        >Tab 3</Tab> */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <PostWall />
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        {/* <Tab.Panel>Content 3</Tab.Panel> */}
      </Tab.Panels>
    </Tab.Group>

    </div>
    </>
  )
}

export default MOLweb