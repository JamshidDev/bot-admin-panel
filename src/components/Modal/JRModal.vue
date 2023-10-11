<template>
    <div class="fixed w-full min-h-screen top-0 bottom-0 left-0 right-0 z-[100] ">
        <div class="w-full min-h-full bg-color-modal-bg-bolor flex justify-center items-start ">

            <div class="bg-white w-[600px] min-h-[400px] mt-20 rounded-lg shadow-md jr-modal-animation p-2">
                <header>
                    <slot name="header"></slot>
                </header>

                <body>
                    <slot name="body"></slot>
                </body>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>

        </div>
    </div>
</template>


