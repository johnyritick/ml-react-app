import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../Assets/Images/Clixo_logo.png"

const navigation = [
  { name: 'Home', href: '#', current: true, id: "1" },
  { name: 'Services', href: '#', current: false, id: "2" },
  { name: 'Elite Growth Plan', href: '#', current: false, id: "3" },
  { name: 'Early Stage Plan', href: '#', current: false, id: "4" },
  { name: 'About', href: '#', current: false, id: "5" },
  { name: 'Book a Call', href: '#', current: false, id: "6" },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function DesktopHeader() {
  return (
    <div className='flex justify-center pt-10'>
      <Disclosure as="nav" className="bg-[#161616] bg-opacity-100 w-[80%] rounded-xl fixed">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-999 opacity-100">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Clixo"
                  src={Logo}
                  className="h-10 w-auto"
                />
              </div>

            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    item.id === "6" ? <button className='bg-[#dff61f] px-4 py-2 rounded-xl font-semibold text-sm'>
                      {(item.name).toUpperCase()}
                    </button> :
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-[#0F0F0F] text-white border border-[#DEF71C]' : 'text-gray-300  hover:border-yellow-200 hover:border-solid hover:border hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {(item.name).toUpperCase()}
                      </a>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}
