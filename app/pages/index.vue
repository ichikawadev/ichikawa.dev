<template>
    <main class="py-10">
        <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-0 lg:gap-8">
            <div class="lg:hidden">
                <img src="~/assets/images/Ichikawa_dev_logo.png" alt="ichikawa.dev logo" class="w-60 h-auto mx-auto" />
            </div>

            <div class="lg:w-1/2 text-center lg:text-left">
                <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-10 lg:leading-16">
                    <p class="text-blue-600">Ichikawa.dev</p>
                    <p>市川を中心としたIT/Web系技術者コミュニティ</p>
                </div>
                <p class="pt-3 font-extrabold text-xl lg:text-2xl text-gray-500">地元でわいわいしましょう！</p>
                <nav class="flex flex-wrap justify-center lg:flex-nowrap lg:justify-start gap-4 mt-10">
                    <a href="/About" class="bg-blue-600 text-white font-bold py-2 px-6 rounded-full whitespace-nowrap">
                        Ichikawa.devとは
                    </a>
                    <a href="https://discord.gg/uW4XTB2p8y"
                        class="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-full hover:bg-gray-300 whitespace-nowrap">
                        Discord
                    </a>
                    <a href="/Friends"
                        class="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-full hover:bg-gray-300 whitespace-nowrap">
                        近隣コミュニティ
                    </a>
                    <a href="https://scrapbox.io/toukatsu-dev/%E8%A1%8C%E5%8B%95%E8%A6%8F%E7%AF%84" target="_blank"
                        rel="noopener"
                        class="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-full hover:bg-gray-300 whitespace-nowrap">
                        行動規範
                    </a>
                </nav>
            </div>

            <div class="lg:w-1/2 mt-8 lg:mt-0 text-center hidden lg:block">
                <img src="~/assets/images/Ichikawa_dev_logo.png" alt="ichikawa.dev logo" class="w-3/4 h-auto mx-auto">
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div class="bg-gray-100 p-6 rounded-xl shadow-sm">
                <h2 class="font-bold text-lg mb-2">市川・行徳、千葉周辺でつながりを作ろう！</h2>
                <p>市川市を中心にIT/Web系技術者コミュニティを企画しています</p>
            </div>
            <div class="bg-gray-100 p-6 rounded-xl shadow-sm">
                <h2 class="font-bold text-lg mb-2">日頃の交流に参加する</h2>
                <p>日頃の交流はDiscordサーバーで行っています。</p>
                <a href="https://discord.gg/uW4XTB2p8y"
                    class="font-extrabold text-blue-600 hover:text-pink-600 hover:border-b hover:border-pink-600">https://discord.gg/uW4XTB2p8y</a>
                <p>（東葛.dev内にIchikawa.devのカテゴリーとチャンネルがあります。）</p>
            </div>
            <div class="bg-gray-100 p-6 rounded-xl shadow-sm">
                <h2 class="font-bold text-lg mb-2">オフラインイベントに参加する</h2>
                <p>オフラインイベントの開催情報はconnpassでチェック</p>
                <a href="https://ichikawa.connpass.com/"
                    class="font-extrabold text-blue-600 hover:text-pink-600 hover:border-b hover:border-pink-600">https://ichikawa.connpass.com/</a>
                <p>（メンバーになるとメールで通知が受け取れます）</p>
            </div>
            <div class="bg-gray-100 p-6 rounded-xl shadow-sm">
                <h2 class="font-bold text-lg mb-2">ichikawadev でつぶやこう！</h2>
                <p>Xでのハッシュタグは <a href="https://x.com/search?q=%23ichikawadev" target="_blank" rel="noopener noreferrer"
                        class="font-extrabold text-blue-600 hover:text-pink-600 hover:border-b hover:border-pink-600">#ichikawadev</a>
                    です。</p>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Ichikawa.dev - 市川を中心としたIT/Web系技術者コミュニティ',
})
</script>