
export function Navbar(props) {
    return (
        <nav>
            <div class="bg-black h-[48px] text-[#ccc] text-[17px] flex justify-center items-center px-[10px] nav-family">
                <div class="w-5/6">
                    <a href="#" class="text-[19px] hover:text-white">
                        <i class="fa-brands fa-apple "></i>
                    </a>
                </div>
                <div class="flex justify-between gap-4">
                    <a href="#" class="hover:text-white px-[8px]">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="#" class="hover:text-white px-[8px]">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                    <a href="#" class="hover:text-white px-[8px]">
                        <i class="fa-solid fa-bars"></i>
                    </a>
                </div>
            </div>
            <div class="bg-[#1d1d1f] text-[#f5f5f7] text-[12px] py-[44px] h-[68px] flex justify-center items-center leading-[1.3] tracking-[-0.016em]">
                <div class="max-w-[280px] text-center">
                    Faites reprendre votre iPhone 11 (ou plus récent) <br class="block sm:hidden" /> et obtenez un crédit de  190 €–770 € sur l’achat <br class="block sm:hidden" /> d’un iPhone 15 Pro*
                    <a href="#" class="text-blue-500"> Acheter un iPhone <i class="fa-solid fa-angle-right"></i></a>
                </div>
            </div>
        </nav>
    )
}