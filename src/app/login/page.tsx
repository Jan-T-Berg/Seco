import Image from 'next/image';

// Image from public/images/login/bg.png as a background
export default async function Login() {
  //Use TailwindCSS to style the page
  //User #eea110 as the primary color
  return (
    <>
      <div className='absolute h-screen w-screen z-10'>
        <Image
          src='/images/login/bg.png'
          alt='background'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <main className='w-full flex items-center justify-center'>
        <div
          className='GoldGlass mt-40 rounded-lg p-8 max-w-md w-full space-y-4 z-20 shadow-lg'
          style={{}}
        >
          <div className='w-full'>
            <form>
              <div className='w-full space-y-2'>
                <label className=' text-sm font-medium text-gray-600'>
                  Email
                </label>
                <input
                  type='email'
                  className='w-full border-2 rounded-lg p-2 text-gray-700'
                  placeholder='Your email'
                />
              </div>
              <div className='space-y-2 '>
                <label className='text-sm font-medium text-gray-600'>
                  Password
                </label>
                <input
                  type='password'
                  className='w-full border-2 rounded-lg p-2 text-gray-700 opacity-100'
                  placeholder='Password'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-green-500 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-green-600'
              >
                Login
              </button>
              <button
                type='button'
                className='w-full bg-yellow-700 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-yellow-600'
              >
                Registrieren
              </button>
            </form>
          </div>
        </div>
        <footer
          className='bg-yellow-900 py-5 px-16 font-[sans-serif] z-40 w-full'
          style={{ position: 'absolute', bottom: '0' }}
        >
          <div className='sm:flex sm:items-center sm:justify-between sm:flex-row'>
            <p className='text-gray-400 text-sm sm:order-1'>
              © 2023
              <a
                href='https://readymadeui.com/'
                target='_blank'
                className='hover:underline mx-1'
              >
                Jan ter Hazeborg
              </a>
              - All Rights Reserved.
            </p>
            <p className='text-gray-400 text-sm sm:order-1'>
              <a
                href='https://readymadeui.com/'
                target='_blank'
                className='hover:underline mx-1'
              >
                Impressum
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
