import { component$, useStylesScoped$, useContext, $ } from '@builder.io/qwik';
import { CTX } from '../../routes/layout';
import styles from './menu-wrapper.css?inline';
import gsap from 'gsap';

interface MenuStatus {
    isActive?: boolean,
}

export default component$(() => {
    useStylesScoped$(styles);

    const menu: MenuStatus = useContext(CTX);

    const closeEffect = $(() => {
        gsap.fromTo('.menu-list > li > div', { y: 0 }, { y: '100%' });
    })


    return (
        <>
            <div class={[menu.isActive ? 'h-screen' : 'h-0', 'transition-[height] duration-300 w-full bg-[#333] fixed overflow-hidden left-0 top-0 px-5 md:px-10 lg:px-20']}>
                <div class='w-full h-full relative pt-4'>
                    <button class="absolute right-0 text-white" onClick$={() => {
                        menu.isActive = false;
                        closeEffect();
                    }}>close</button> <br />
                    <ul class="menu-list">
                        <li>
                            <div>
                                Accueil
                            </div>
                        </li>
                        <li>
                            <div>
                                About
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