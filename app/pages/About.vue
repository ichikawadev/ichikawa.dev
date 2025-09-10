<template>
    <main class="py-10 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto lg:flex lg:gap-x-12 relative max-w-7xl">
            <div class="lg:w-4/5">
                <h1 class="text-4xl font-extrabold text-gray-900 mb-6">About</h1>
                <hr class="mb-8 border-gray-300" />

                <div class="space-y-8">

                    <div class="group">
                        <h2 id="ichikawadev"
                            class="text-3xl font-bold text-gray-800 scroll-mt-24 relative inline-block group-hover:text-blue-500">
                            <a href="#ichikawadev"
                                class="absolute -left-6 top-1/2 -translate-y-1/2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</a>
                            Ichikawa.devとは
                        </h2>
                        <p class="mt-4">
                            市川市周辺の技術者たちが言語を問わず気軽に相談することを目的としたコミュニティです。
                        </p>
                        <p>
                            市川市とは千葉県の北西部に位置し、江戸川区、松戸市、鎌ケ谷市、船橋市、浦安市に囲まれた人口約40万人超えの文教都市です。
                        </p>
                    </div>

                    <div class="group">
                        <h2 id="community"
                            class="text-3xl font-bold text-gray-800 scroll-mt-24 relative inline-block group-hover:text-blue-500">
                            <a href="#community"
                                class="absolute -left-6 top-1/2 -translate-y-1/2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</a>
                            どんなコミュニティか
                        </h2>
                        <p class="mt-4">
                            東葛.devのコンセプトをもとに、IT系の技術者が気軽にコミュニケーションしながらお話ができる空間を目指しています。
                        </p>
                    </div>

                    <div class="group">
                        <h2 id="activity"
                            class="text-3xl font-bold text-gray-800 scroll-mt-24 relative inline-block group-hover:text-blue-500">
                            <a href="#activity"
                                class="absolute -left-6 top-1/2 -translate-y-1/2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</a>
                            活動内容は？
                        </h2>
                        <p class="mt-4">
                            東葛.devの活動内容を参考に、オンラインやオフラインでの交流会やもくもく会などを通して親睦が深められるコミュニティを目指しています。
                        </p>
                        <p class="mt-4">
                            主に次の通りの活動内容です。
                        </p>
                        <ul class="list-disc list-inside mt-4 pl-4 space-y-2">
                            <li>不定期のオフライン交流会</li>
                            <li>Discordでのコミュニケーション</li>
                            <li>メンバーとのカンファレンス・イベント参加</li>
                            <li>有志による食事会、もくもく会</li>
                        </ul>
                    </div>

                    <div class="group">
                        <h2 id="details"
                            class="text-3xl font-bold text-gray-800 scroll-mt-24 relative inline-block group-hover:text-blue-500">
                            <a href="#details"
                                class="absolute -left-6 top-1/2 -translate-y-1/2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</a>
                            その他詳細
                        </h2>
                        <p class="mt-4">
                            その他の詳細やメンバーについてはcompassやDiscordを確認してください。
                        </p>
                        <ul class="mt-4 pl-4 space-y-2 list-disc list-inside">
                            <li><a href="https://ichikawa.connpass.com/"
                                    class="text-blue-600 hover:underline">Ichikawa.dev compassページ</a></li>
                            <li><a href="https://discord.gg/uW4XTB2p8y"
                                    class="text-blue-600 hover:underline">東葛.devDiscordサーバー</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block lg:w-1/5">
                <aside class="sticky top-24 pl-8">
                    <div class="text-lg font-bold text-gray-900 mb-4">On this page</div>
                    <nav>
                        <ul class="space-y-2">
                            <li><a href="#ichikawadev" class="text-gray-700 hover:text-blue-500">Ichikawa.devとは</a></li>
                            <li><a href="#community" class="text-gray-700 hover:text-blue-500">どんなコミュニティか</a></li>
                            <li><a href="#activity" class="text-gray-700 hover:text-blue-500">活動内容は？</a></li>
                            <li><a href="#details" class="text-gray-700 hover:text-blue-500">その他詳細</a></li>
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
  title: 'Ichikawa.devとは？ | Ichikawa.dev'
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