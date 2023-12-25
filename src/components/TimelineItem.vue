<script setup>
import BaseSelect from "@/components/BaseSelect.vue";
import {ref} from "vue";
import {isTimelineItemValid} from "@/validators";
import TimelineHour from "@/components/TimelineHour.vue";

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const options = [
  {value: 1, label: 'Coding'},
  {value: 2, label: 'Reading'},
  {value: 3, label: 'Training'}
]

const selectActivityId = ref(1)


</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200p py-10 px-4">
    <TimelineHour :hour="timelineItem.hour"/>
    <BaseSelect :selected="selectActivityId"
                :options="options"
                placeholder="Rest"
                @select="selectActivityId = $event"
    />
  </li>

</template>
