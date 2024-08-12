<template>
    <div class="flex-1 flex pb-7 flex-col rounded-lg bg-white/10 shadow-[inset_0px_0px_10px_10px_rgba(255,255,255,0.1)]">
        <div class="flex flex-col gap-4 p-5">
            <div class="flex sm:flex-col 2xl:flex-row flex-row items-start gap-2">
              <img class="-translate-x-2 h-[40px] sm:h-[80px] p-0 m-0" src="/svg/paper.svg" alt="">
              <div class="flex items-center font-bold text-xl">{{title}}</div>
            </div>
            <div class="text-base">{{info}}</div>
        </div>
    </div>
</template>
<script>
    export default {
      props: ['title','info'],
    };
  </script>