<template>
    <div class="flex-1 flex pb-7 flex-col rounded-lg bg-white/10 shadow-[inset_0px_0px_10px_10px_rgba(255,255,255,0.1)]">
        <div class="flex flex-col gap-4">
            <div class="flex gap-5 pt-5 pl-3 pr-5">
              <img class="h-[80px] p-0 m-0" src="/public/svg/paper.svg" alt="">
              <div class="flex items-center font-bold text-xl">{{title}}</div>
            </div>
            <div class="text-base px-5">{{info}}</div>
        </div>
    </div>
</template>
<script>
    export default {
      props: ['title','info'],
    };
  </script>