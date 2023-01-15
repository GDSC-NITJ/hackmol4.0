import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


export default function Modal({ setOpenModal, openModal }) {

  const [email, setEmail] = useState('')
  const [iframe, setIFrame] = useState('')


  const getPost = async () => {
    let url ;
    if(process.env.NODE_ENV === 'development'){
        url = `http://localhost:3000/api/post?page=1&limit=10`
    }else{
        url = `https://https://hackmol.tech/api/post?page=1&limit=10`
    }

    const res = await fetch(url)
    const posts = await res.json()

    console.log(posts)
  }


  const onSubmit = async () => {
    // e.preventDefault()
    if (!email) {
      alert('Please add an email')
      return
    }

    if (!iframe) {
      alert('Please add an iframe')
      return
    }

    const post = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, iframe }),
    })

    const data = await post.json()
    console.log(data)
    setEmail('')
    setIFrame('')
    setOpenModal(false)

    getPost()


  }


  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#1b2730] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-[#1b2730] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">

                    <div className="mt-3 text-center w-full sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-white">
                        Add LinkedIn Post
                      </Dialog.Title>
                      <div className="mt-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                          </label>
                          <div className="relative mt-1 rounded-md shadow-sm">

                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="block w-full rounded-md bg-[#28353e] text-gray-100 border-gray-300 pl-5 pr-12 py-2 outline-0 sm:text-sm"
                              placeholder="example@xyz.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />

                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div>
                          <label htmlFor="frame" className="block text-sm font-medium text-white">
                            iFrame
                          </label>
                          <div className="relative mt-1 rounded-md shadow-sm">

                            <input
                              type="text"
                              name="frame"
                              id="frame"
                              className="block w-full rounded-md bg-[#28353e] text-gray-100 border-gray-300 pl-5 pr-12 py-2 outline-0 sm:text-sm"
                              placeholder="<iframe src='https://www.linkedin.com/xxxxxxxxxx'>"
                              value={iframe}
                              onChange={(e) => setIFrame(e.target.value)}
                            />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1b2730]px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#28353e]  px-4 py-2 text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      // onSubmit()
                      getPost()
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 hover:bg-red-700  px-4 py-2 text-base font-medium text-white shadow-sm focus:outlineoutline-0 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpenModal(false)
                    }}

                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

