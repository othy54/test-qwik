import { component$, useStylesScoped$, useContext, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.css?inline';
import { CTX } from '../../routes/layout';
import gsap from 'gsap';

interface MenuStatus {
  isActive?: boolean,
}

export default component$(() => {
  useStylesScoped$(styles);
  const menu: MenuStatus = useContext(CTX);


  const toggleMenu = $(() => {
    if (menu.isActive) {
      gsap.fromTo('.menu-list > li > div', { y: '100%' }, { y: 0, stagger: 0.1 });
    } else {
      gsap.fromTo('.menu-list > li > div', { y: 0 }, { y: '100%' });
      //anim?.reverse();
    }
  })

  return (
    <>
      <header class="px-5 md:px-10 lg:px-20 mt-4">
        <div class="flex justify-between">
          <div>Logo</div>
          <div onClick$={() => {
            menu.isActive = true;
            toggleMenu();
          }}>Menu</div>
        </div>
      </header>


      <div class={[menu.isActive ? 'h-screen' : 'h-0', 'transition-[height] duration-300 w-full bg-[#333] fixed overflow-hidden left-0 top-0 px-5 md:px-10 lg:px-20']}>
        <div class='w-full h-full relative pt-4'>
          <button class="absolute right-0 text-white" onClick$={() => {
            menu.isActive = false;
            toggleMenu();
          }}>close</button> <br />
          <ul class="menu-list">
            <li>
              <div>
                Accueil
              </div>
            </li>
            <li>
              <div>
                <Link href="/about">
                  About
                </Link>
              </div>
            </li>
            <li>
              <div>
                Projects
              </div>
            </li>
            <li>
              <div>
                Contact
              </div>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
});
