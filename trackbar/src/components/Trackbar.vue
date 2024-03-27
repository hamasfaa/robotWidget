<template>
    <div
        class="w-fit max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div class="relative overflow-x-auto">
            <!-- Header -->
            <div class="grid grid-cols-3 grid-rows-2">
                <div class="cursor-pointer py-1 pl-3 align-middle"
                    :class="{ 'bg-green-500 font-normal text-white hover:bg-green-600': isLinked, 'bg-red-600 font-normal text-white hover:bg-red-700': !isLinked }">
                    Robot {{ index }}
                </div>
                <div class="col-span-2 row-span-2 flex h-full flex-row flex-wrap items-center justify-around">
                    <div class="relative flex h-full w-1/5 items-end rounded-md border">
                        <p class="absolute flex h-full w-full items-center justify-center border text-sm">
                            50%
                        </p>
                        <div class="w-full rounded-sm bg-green-500" :style="{ height: '50%' }"></div>
                    </div>
                    <div
                        class="cursor-pointer rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:outline-none focus:ring-gray-200">
                        Control Box
                    </div>
                </div>
                <div class="cursor-pointer py-1 pl-3 align-middle "
                    :class="{ 'bg-green-500 text-white font-bold': isLinked, 'bg-red-600 font-bold text-white': !isLinked }">
                    {{ isLinked ? 'Linked' : 'Unlinked' }}
                </div>
            </div>
            <!-- Slider -->
            <div class="w-fit max-w sm rounded-lg-border border-gray-200 bg-white p-4">
                <div class="flex items-center">
                    <label for="velocity" class="mb-2 block w-14 text-xs font-normal text-gray-900">Velocity</label>
                    <input id="velocity" type="range" max="100" min="0"
                        class="range-sm mt-5 mb-6 mr-2 h-1 w-36 cursor-pointer appearance-none rounded-lg bg-green-500"
                        v-model="velocity" />
                    <input type="number" max="100" min="0"
                        class="p-2 block w-16 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                        v-model="velocity">
                </div>
                <div class="flex items-center">
                    <label for="sudut" class="mb-2 block w-14 text-xs font-normal text-gray-900">Sudut</label>
                    <input id="sudut" type="range" max="100" min="0"
                        class="range-sm mt-5 mb-6 mr-2 h-1 w-36 cursor-pointer appearance-none rounded-lg bg-green-500"
                        v-model="sudut" />
                    <input type="number" max="100" min="0"
                        class="p-2 block w-16 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                        v-model="sudut">
                </div>
                <div class="flex items-center">
                    <label for="shoot" class="mb-2 block w-14 text-xs font-normal text-gray-900">Shoot</label>
                    <input id="shoot" type="range" max="100" min="0"
                        class="range-sm mt-5 mb-6 mr-2 h-1 w-36 cursor-pointer appearance-none rounded-lg bg-green-500"
                        v-model="shoot" />
                    <input type="number" max="100" min="0"
                        class="p-2 block w-16 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                        v-model="shoot">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* input[type=range]::-webkit-slider-thumb {
    background: green;
}

input[type=range]::-moz-range-thumb {
    background: green;
    border-radius: 50%;
}

input[type=range]::-ms-thumb {
    background: green;
} */
</style>

<script>
export default {
    props: {
        index: Number
    },
    data() {
        return {
            velocity: 0,
            sudut: 0,
            shoot: 0,
            isLinked: false,
        }
    }
}
</script>