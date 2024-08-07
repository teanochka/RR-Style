<template>
    <div class="p-6 flex-1 flex pb-7 flex-col rounded-lg bg-white/10 shadow-[inset_0px_0px_10px_10px_rgba(255,255,255,0.1)]">
        <div class="flex flex-col gap-3">
            <div class="flex gap-1">
              <img class="h-[80px]" src="/public/svg/paper.svg" alt="">
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