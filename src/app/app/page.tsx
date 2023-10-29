import Image from 'next/image';

// Image from public/images/login/bg.png as a background
export default async function Login() {
  //Use TailwindCSS to style the page
  //User #eea110 as the primary color
  return (
    <>
      <div className='absolute h-screen w-screen z-10'>
        <Image
          src='/images/app/bg.png'
          alt='background'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <main className='w-full flex items-center justify-center'>
        <div
          className='GoldGlass mt-10 rounded-lg p-8 max-w-md w-full space-y-4 z-20 shadow-lg'
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
      </main>
    </>
  );
}
