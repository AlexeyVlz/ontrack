<script setup>
import BaseSelect from "@/components/BaseSelect.vue";
import BaseButton from "@/components/BaseButton.vue";
import { TrashIcon } from "@heroicons/vue/24/outline";
import {ref} from "vue";
import { PERIOD_SELECT_OPTIONS } from "@/constants";
import { isActivityValid } from "@/validators";
import { BUTTON_TYPE_DANGER } from "@/constants";


defineProps({
  activity : {
    required: true,
    type: String,
    validator: isActivityValid
  }
})

let secondsToComplete = ref(null)

</script>


<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
          class="font-mono"
          placeholder="h:mm"
          :selected="secondsToComplete"
          :options="PERIOD_SELECT_OPTIONS"
          @select="secondsToComplete = $event"/>
    </div>
  </li>
</template>
