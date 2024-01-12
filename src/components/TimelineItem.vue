<script setup>
import BaseSelect from "@/components/BaseSelect.vue";
import {ref} from "vue";
import {isTimelineItemValid, validateSelectOptions} from "@/validators";
import TimelineHour from "@/components/TimelineHour.vue";

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})


const selectActivityId = ref(null)


</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200p py-10 px-4">
    <TimelineHour :hour="timelineItem.hour"/>
    <BaseSelect :selected="selectActivityId"
                :options="activitySelectOptions"
                placeholder="Rest"
                @select="selectActivityId = $event"
    />
  </li>

</template>
