<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { BUTTON_TYPE_NEUTRAL } from "@/constants";
import { isSelectValueValid, isUndefinedOrNull, validateSelectOptions} from "@/validators";
import {computed} from "vue";
import {normalizeSelectValue} from "@/functions";

const props = defineProps({
  selected: [String, Number],
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  placeholder: {
    required: true,
    type: String
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <XMarkIcon class="h-8"/>
    </BaseButton>
    <select
        class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
        @change="select($event.target.value)">
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option v-for="{value, label} in options"
              :key="value"
              :value="value"
              :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>
