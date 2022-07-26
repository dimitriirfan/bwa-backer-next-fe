import { faBars, faChevronCircleDown, faChevronDown, faGlobe, faLanguage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment } from "react"
import Button from "./Button"

const Header = () => {
    const router = useRouter()
    const handleLocaleChange = (locale) => {
      router.push(router.route, router.asPath, {
        locale: locale
      })
    }

    return (
        <div className='font-medium'>
        <div className='container mx-auto flex justify-between p-8 items-center'>
          <div className='flex gap-8'>
            <div className='text-2xl font-medium'>
              bwabacker.
            </div>
            <nav className='hidden sm:flex items-center gap-4 '>
              <a className="cursor-pointer p-1 hover:text-orange-400">Home</a>
              <a className="cursor-pointer p-1 hover:text-orange-400">Project</a>
              <a className="cursor-pointer p-1 hover:text-orange-400">Features</a>
              <a className="cursor-pointer p-1 hover:text-orange-400">Success Stories</a>
            </nav>
          </div>
          <div className='hidden sm:flex gap-4'>
            
            <Menu as="div" className="relative self-center">
              <Menu.Button>
                <div className="inline-flex items-center gap-2 text-xl cursor-pointer">
                  <FontAwesomeIcon className="" icon={faGlobe}/>
                  <p className="">{router.locale.toUpperCase()}</p>
                  <FontAwesomeIcon className="" icon={faChevronDown} />
                </div>
              </Menu.Button>
             <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
             >
                <Menu.Items className="absolute bg-white rounded-lg text-gray-900 flex flex-col right-0 mt-2 w-56 p-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && 'bg-blue-500 rounded-lg text-white'} p-2`}
                        onClick={() => handleLocaleChange('id')}
                      >
                        Bahasa Indonesia - ID
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && 'bg-blue-500 rounded-lg text-white'} p-2`}
                        onClick={() => handleLocaleChange('en')}
                      >
                        English - EN
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
             </Transition>
            </Menu>
            <Link href="/signup">
              <Button className="rounded-full" type="hollow">
                Sign up
              </Button>
            </Link>
            <Link href="/my-account">
              <Button className="rounded-full" type="hollow">
                My Account
              </Button>            
            </Link>
          </div>
          <div className='sm:hidden cursor-pointer p-1'>
            <FontAwesomeIcon className='text-2xl' icon={faBars} />
          </div>
        </div>
      </div>
    )
}

export default Header