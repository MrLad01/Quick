import logo from './assets/Screenshot 2024-12-25 174038.png'

function App() {

  return (
    <>
      <div className='relative w-full h-[100vh]  overflow-y-auto flex items-center justify-center'>
        <div className="background w-full h-full bg-[#291036] absolute top-0 left-0 -z-1">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#291036] opacity-100">
              <div className="absolute w-full h-full bob-texture"  
              />
            </div>            
            <div className="absolute w-[45%] h-[100vh] rounded-full 
              bg-gradient-to-tr from-[#FFD66D] to-[#33212B] opacity-45
              blur-[120px] -bottom-[25%] -left-[2%] bg-blend-hard-light shadow-inner" />
          </div>
        </div>

        <div className="flex w-full h-[98vh] items-center justify-center overflow-y-auto pt-[74vh] pb-20 absolute top-0 left-0">
          <div className="w-[64%] max-md:w-[94%] rounded-3xl bg-[#1A0B26] pt-4 pb-3 px-[0.7rem] gap-6 relative z-1 flex flex-col">
            <div className="flex w-full items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
            <div className='w-full h-full bg-[#110718] rounded-3xl flex py-6 px-6 flex-col items-center'>
              <h2 className='text-white text-[2.1rem] font-medium'>Sign Up</h2>
              <h4 className='text-white font-light text-[0.84rem]' >Welcome Back! Sign in to continue</h4>
              <div className='flex gap-4 items-center my-4'>
                <div className='h-0.5 w-96 max-md:w-32 bg-[#291036]'></div>
                <h3 className='text-white font-normal text-[1rem]'>Or</h3>
                <div className='h-0.5 w-96 max-md:w-32 bg-[#291036]'></div>
              </div>
              <form className='flex flex-col w-full gap-4'>
                  <div className="flex max-md:flex-col gap-4">
                      <div className="flex flex-col w-full gap-4">
                        <h3 className='text-white text-[0.9rem]'>First Name</h3>
                        <input type="text" placeholder='First Name' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white' />
                      </div>
                      <div className="flex flex-col w-full gap-4">
                        <h3 className='text-white text-[0.9rem]'>Last Name</h3>
                        <input type="text" placeholder='Last Name' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white' />
                      </div>
                  </div>
                  <div className="flex max-md:flex-col gap-4">
                      <div className="flex flex-col w-full gap-4">
                        <h3 className='text-white text-[0.9rem]'>Phone Number</h3>
                        <div className="flex gap-4">
                          <input type="text" placeholder='+44' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white w-[30%]' />
                          <input type="text" placeholder='Contact Number' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white w-full' />
                        </div>
                      </div>
                      <div className="flex flex-col w-full gap-4">
                        <h3 className='text-white text-[0.9rem]'>Email</h3>
                        <input type="email" placeholder='Email Address' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white' />
                      </div>
                  </div>
                  <div className="flex max-md:flex-col gap-4">
                      <div className="flex flex-col w-full gap-4">
                        <h3 className='text-white text-[0.9rem]'>Country</h3>
                        <div className="flex gap-4">
                          <input type="text" placeholder='Country' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white w-full' />
                        </div>
                      </div>
                      <div className="flex flex-col w-full gap-4">
                        <h3 className='text-white text-[0.9rem]'>Password</h3>
                        <input type="password" placeholder='Password' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white' />
                      </div>
                  </div>
                  {/* <div className="flex max-md:flex-col gap-4">
                      <div className="flex flex-col w-full gap-4">
                        <h3 className='text-white text-[0.9rem]'>Country</h3>
                        <div className="flex gap-4">
                          <input type="text" placeholder='Contact Number' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white w-full' />
                        </div>
                      </div>
                      <div className="flex flex-col w-full gap-4">
                        <h3 className='text-white text-[0.9rem]'>Password</h3>
                        <input type="password" placeholder='Password' className='px-5 py-4 text-[0.86rem] rounded-lg bg-[#292030] outline-[#FFD66D] border-0 text-white' />
                      </div>
                  </div> */}
                  <div className='flex flex-col mt-5 gap-2'>
                    <h3 className='text-white text-center font-light text-[0.8rem]'>By signing up you are opting in for all marketing from Propel Capital, such as SMS, Whatsapp or Email.</h3>
                    <div className="flex gap-1 w-full items-center justify-center">
                      <label className="container text-white text-[0.72rem] font-semibold">
                        <input type="checkbox"  title='T&Cs' name="T&Cs" id="T&Cs" className='bg-[#FFD66D] bg-none checked:bg-[#FFD66D]' />
                        <span className="checkmark mr-2 max-md:-ml-9"></span>
                        I agree to the <span className='text-[#FFD66D]'>T&Cs</span> of this platform.<span className='text-red-700'>*</span> 
                      </label>
                    </div>
                    <div className="flex gap-3 items-center justify-center">
                      <label className="container text-white text-[0.72rem] font-semibold">
                       <input type="checkbox" title='offer' name="offer" id="offer" className='bg-[#FFD66D] bg-none checked:bg-[#FFD66D]' />
                        <span className="checkmark mr-2 max-md:-ml-9"></span>
                        I agree to receiving special offers and messages from Propel.<span className='text-red-700'>*</span> 
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center w-full justify-center my-8 max-md:my-2">
                    <button className='bg-[#FFD66D] w-[50%] p-4 rounded-xl max-md:w-[80%]'>Sign Up</button>
                  </div>
                  <div className="flex items-center w-full justify-center gap-2 font-light text-[0.8rem]">
                    <h3 className=' text-white'>Already have an account?</h3>
                    <a href="" title='sign-in' className='font-semibold text-white'>Sign In</a>
                  </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer w-full absolute bottom-0 z-10 bg-[#1A0B26] px-5 text-[0.8rem] max-md:text-[0.7rem] py-2 flex justify-between items-center max-md:items-start max-md:flex-col max-md:justify-start">
          <div className='flex max-lg:flex-col max-lg:gap-0 gap-2'>
            <h3 className='text-white'>&copy; 2024 Propel  Capital Group Limited. All rights reserved.</h3>
            <div className="flex gap-2 text-[#FFD66D]">
              <a href="" title="T&Cs">T&Cs</a>
              <a href="" title="Privacy Policy">Privacy Policy</a>
            </div>
          </div>
          <h3 className='text-white'>162-164 High Street, Reyleigh, Essex, England, SS67BS</h3>
        </div>
      </div>
    </>
  )
}

export default App
