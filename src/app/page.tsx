'use client';

import Image from 'next/image';
import GridLayout from 'react-grid-layout';

import { FloatingDock } from '~/components/ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';

const links = [
  {
    title: 'Home',
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },

  {
    title: 'Products',
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },
  {
    title: 'Aceternity UI',
    icon: (
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: '#',
  },
  {
    title: 'Changelog',
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },

  {
    title: 'Twitter',
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },
  {
    title: 'GitHub',
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },
];

const layout = [
  {
    w: 2,
    h: 7,
    x: 0,
    y: 0,
    i: '1',
  },
  {
    w: 4,
    h: 2,
    x: 2,
    y: 0,
    i: '2',
  },
  {
    w: 2,
    h: 5,
    x: 2,
    y: 2,
    i: '3',
  },
  {
    w: 2,
    h: 2,
    x: 4,
    y: 2,
    i: '4',
  },
  {
    w: 2,
    h: 3,
    x: 4,
    y: 4,
    i: '5',
  },
  {
    w: 2,
    h: 4,
    x: 0,
    y: 7,
    i: '6',
  },
];

export default function Root() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="w-1/2 flex z-50 fixed bottom-[40px] justify-center">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
      <div className="w-full flex items-center justify-center h-full border border-red-500 relative z-30 noselect">
        <GridLayout
          className="layout"
          layout={layout}
          cols={6}
          rowHeight={40}
          width={1400}
          isResizable={true}
          isDraggable={true}
          onLayoutChange={layout => console.log(layout)}
          style={{
            border: '1px solid red',
            width: '90%',
          }}
        >
          <div key="1" className="cursor-pointer bg-red-400 rounded-lg px-5">
            Item 1
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              tempore deleniti assumenda? Ut dolor aliquam eius corrupti.
              Dolorum consectetur a earum nulla eaque nisi, blanditiis assumenda
              ut similique in.
            </p>
          </div>
          <div key="2" style={{ background: '#FF4500', color: 'white' }}>
            Item 2
          </div>
          <div key="3" style={{ background: '#32CD32', color: 'white' }}>
            Item 3
          </div>
          <div key="4" style={{ background: '#FFD700', color: 'black' }}>
            Item 4
          </div>
          <div key="5" style={{ background: '#FF69B4', color: 'white' }}>
            Item 5
          </div>
          <div key="6" style={{ background: '#8A2BE2', color: 'white' }}>
            Item 6
          </div>
        </GridLayout>
      </div>
    </section>
  );
}
