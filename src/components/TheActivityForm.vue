<script setup>
import BaseButton from "./BaseButton.vue"
import {PlusIcon} from "@heroicons/vue/24/solid";
import {isActivityValid} from "@/validators";

const emit = defineEmits({
  submit: isActivityValid,
})

let activity = ''

function submit() {
  emit('submit', activity)
}

</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
        type="text"
        class="w-full rounded border px-4 text-xl"
        :value="activity"
        @input="activity = $event.target.value"
        placeholder="Activity name"
    >
    <BaseButton>
      <PlusIcon class="h-8"/>
    </BaseButton>
  </form>
</template>
