<script setup>
import BaseSelect from "@/components/BaseSelect.vue";
import BaseButton from "@/components/BaseButton.vue";
import { TrashIcon } from "@heroicons/vue/24/outline";
import { PERIOD_SELECT_OPTIONS } from "@/constants";
import {isActivityValid, isNumber, isUndefined} from "@/validators";
import { BUTTON_TYPE_DANGER } from "@/constants";


defineProps({
  activity : {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const emit = defineEmits({
  setSecondsToComplete: isNumber,
  delete: isUndefined
})

</script>


<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
          class="font-mono"
          placeholder="hh:mm"
          :selected="activity.secondsToComplete || null"
          :options="PERIOD_SELECT_OPTIONS"
          @select="emit('setSecondsToComplete', $event || 0)"/>
    </div>
  </li>
</template>
