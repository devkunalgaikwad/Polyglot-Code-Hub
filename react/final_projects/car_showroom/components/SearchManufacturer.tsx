'use client'

import {Combobox,Transition} from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React,{useState, Fragment} from 'react'
import Image from 'next/image'
import {manufacturers} from '@/constants'

// ... other imports ...

const SearchManufacturer = ({ selected, setSelected}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  const filterManufacturers = query === '' ? manufacturers : manufacturers.filter((item) => {
    return item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""));
  });

  return (
    <div className='z-10 search-manufacturer'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative w-full'>
          <Combobox.Button className={'absolute top-[14px]'}>
            <Image src={'/car-logo.svg'} width={20} height={20} className='ml-4' alt='Car logo' />
          </Combobox.Button>
          <Combobox.Input className={'search-manufacturer__input'} placeholder={'Maker'} displayValue={(manufacturers: string) => manufacturers} onChange={(e) => setQuery(e.target.value)} />
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery('')}>
            <Combobox.Options>
              {filterManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option value={'null'} className={'search-manufacturer__option relative cursor-default select-none py-2 px-4 text-gray-700'}>
                  Nothing found.
                </Combobox.Option>
              ) : (
                filterManufacturers.map((item) => (
                  <Combobox.Option key={item} value={item} className={({ active }) => `search-manufacturer__option relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
