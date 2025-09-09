<template>
    <main class="py-10 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto lg:flex lg:gap-x-12 relative max-w-7xl">
            <div class="lg:w-4/5">
                <h1 class="text-4xl font-extrabold text-gray-900 mb-6">近隣コミュニティ紹介</h1>
                <p class="mb-6">Ichikawa.devと関わりのある、近隣や親交のあるコミュニティについて紹介します。</p>
                <hr class="mb-8 border-gray-300" />

                <div class="space-y-8">

                    <div class="group">
                        <h2 id="母体コミュニティリスト"
                            class="text-3xl font-bold text-gray-800 scroll-mt-24 relative inline-block group-hover:text-blue-500">
                            <a href="#母体コミュニティリスト"
                                class="absolute -left-6 top-1/2 -translate-y-1/2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</a>
                            母体コミュニティリスト
                        </h2>
                        <p class="mt-4">
                            Ichikawa.devの母体となったコミュニティです。松戸市、柏市、流山市、我孫子市、鎌ケ谷市、白井市、印西市などの千葉県東葛地区を中心に活動しています。
                        </p>
                        <ul class="list-disc list-inside mt-4 pl-4 space-y-2">
                            <li>東葛.dev<ul class="list-disc list-inside mt-1 pl-4 space-y-2">
                                    <li>サイト：<a href="https://toukatsu.dev/" target="_blank"
                                            rel="noopener noreferrer"
                                            class="font-extrabold text-blue-600 hover:text-pink-600 hover:border-b hover:border-pink-600">東葛.devのサイト</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="group">
                        <h2 id="姉妹コミュニティリスト"
                            class="text-3xl font-bold text-gray-800 scroll-mt-24 relative inline-block group-hover:text-blue-500">
                            <a href="#姉妹コミュニティリスト"
                                class="absolute -left-6 top-1/2 -translate-y-1/2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</a>
                            姉妹コミュニティリスト
                        </h2>
                        <p class="mt-4">
                            東葛.devを母体としたIchikawa.devの姉妹コミュニティです。
                        </p>
                        <ul class="list-disc list-inside mt-4 pl-4 space-y-2">
                            <li>松戸.dev<ul class="list-disc list-inside mt-1 pl-4 space-y-2">
                                    <li>Connpassページ：<a href="https://matsudo-dev.connpass.com/" target="_blank"
                                            rel="noopener noreferrer"
                                            class="font-extrabold text-blue-600 hover:text-pink-600 hover:border-b hover:border-pink-600">松戸.devのConnpass</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="group">
                        <h2 id="近隣コミュニティリスト"
                            class="text-3xl font-bold text-gray-800 scroll-mt-24 relative inline-block group-hover:text-blue-500">
                            <a href="#近隣コミュニティリスト"
                                class="absolute -left-6 top-1/2 -translate-y-1/2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</a>
                            近隣コミュニティリスト
                        </h2>
                        <p class="mt-4">
                            千葉県北西部を中心とした近隣のIT/Web系技術者コミュニティです。
                        </p>
                        <ul class="list-disc list-inside mt-4 pl-4 space-y-2">
                            <li>Funabashi.dev<ul class="list-disc list-inside mt-1 pl-4 space-y-2">
                                    <li>サイト：<a href="https://funabashi.dev/" target="_blank" rel="noopener noreferrer"
                                            class="font-extrabold text-blue-600 hover:text-pink-600 hover:border-b hover:border-pink-600">Funabashi.devサイト</a>
                                    </li>
                                </ul>
                            </li>
                            <li>Kashiwa.rb<ul class="list-disc list-inside mt-1 pl-4 space-y-2">
                                    <li>Connpassページ：<a href="https://kashiwarb.connpass.com/" target="_blank"
                                            rel="noopener noreferrer"
                                            class="font-extrabold text-blue-600 hover:text-pink-600 hover:border-b hover:border-pink-600">Kashiwa.rbのConnpass</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block lg:w-1/5">
                <aside class="sticky top-24 pl-8">
                    <div class="text-lg font-bold text-gray-900 mb-4">On this page</div>
                    <nav>
                        <ul class="space-y-2">
                            <li><a href="#母体コミュニティリスト" class="text-gray-700 hover:text-blue-500">母体コミュニティリスト</a></li>
                            <li><a href="#姉妹コミュニティリスト" class="text-gray-700 hover:text-blue-500">姉妹コミュニティリスト</a></li>
                            <li><a href="#近隣コミュニティリスト" class="text-gray-700 hover:text-blue-500">近隣コミュニティリスト</a></li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: '近隣コミュニティ紹介 | Ichikawa.dev'
})
</script>

<style scoped>
/* Tailwind CSSの@applyを使ってカスタムクラスを定義 */
/* #アイコンのスタイルを定義します */
h2.group-hover:before {
    content: "#";
    color: #3b82f6;
    /* Tailwindのblue-500 */
    position: absolute;
    left: -24px;
    /* -6rem = -24px */
    font-size: 1.875rem;
    /* text-3xl */
    font-weight: 700;
    /* font-bold */
    opacity: 1;
    transition: opacity 200ms ease-in-out;
}
</style>