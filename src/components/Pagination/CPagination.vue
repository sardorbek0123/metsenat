<template>
  <ul class="pagination flex items-center gap-2">
    <li
        v-if="paginationButtons"
        :class="`${itemClass} ${hasLast ? disableClass : ''}`"
    >
      <button :disabled="hasFirst" @click="prev">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.8287 19C13.5367 19 13.2467 18.873 13.0487 18.627L8.22066 12.627C7.92266 12.256 7.92666 11.726 8.23166 11.36L13.2317 5.35998C13.5847 4.93598 14.2157 4.87898 14.6407 5.23198C15.0647 5.58498 15.1217 6.21598 14.7677 6.63998L10.2927 12.011L14.6077 17.373C14.9537 17.803 14.8857 18.433 14.4547 18.779C14.2707 18.928 14.0487 19 13.8287 19Z"
              fill="#376480"
          />
          <mask
              id="mask0_1209_20547"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="8"
              y="5"
              width="7"
              height="14"
          >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8287 19C13.5367 19 13.2467 18.873 13.0487 18.627L8.22066 12.627C7.92266 12.256 7.92666 11.726 8.23166 11.36L13.2317 5.35998C13.5847 4.93598 14.2157 4.87898 14.6407 5.23198C15.0647 5.58498 15.1217 6.21598 14.7677 6.63998L10.2927 12.011L14.6077 17.373C14.9537 17.803 14.8857 18.433 14.4547 18.779C14.2707 18.928 14.0487 19 13.8287 19Z"
                fill="white"
            />
          </mask>
          <g mask="url(#mask0_1209_20547)"></g>
        </svg>
      </button>
    </li>

    <li
        v-for="page in items"
        :key="page.label"
        :class="`${itemClass} ${page.active ? activeClass : ''} ${
          page.disable ? disableClass : ''
        }`"
    >
        <span
            v-if="page.disable"
            class="w-full h-full flex items-center justify-center"
        >
          ...
        </span>
      <button v-else class="w-full h-full" @click="goto(page.label)">
        {{ page.label }}
      </button>
    </li>

    <li
        v-if="paginationButtons"
        :class="`${itemClass} ${hasLast ? disableClass : ''}`"
    >
      <button :disabled="hasLast" @click="next">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.9995 19.0001C9.7735 19.0001 9.5465 18.9241 9.3595 18.7681C8.9355 18.4151 8.8785 17.7841 9.2315 17.3601L13.7075 11.9891L9.3925 6.62707C9.0465 6.19707 9.1145 5.56707 9.5445 5.22107C9.9755 4.87507 10.6045 4.94307 10.9515 5.37307L15.7795 11.3731C16.0775 11.7441 16.0735 12.2741 15.7685 12.6401L10.7685 18.6401C10.5705 18.8771 10.2865 19.0001 9.9995 19.0001Z"
              fill="#376480"
          />
          <mask
              id="mask0_1209_20559"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="9"
              y="5"
              width="8"
              height="14"
          >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.9995 19.0001C9.7735 19.0001 9.5465 18.9241 9.3595 18.7681C8.9355 18.4151 8.8785 17.7841 9.2315 17.3601L13.7075 11.9891L9.3925 6.62707C9.0465 6.19707 9.1145 5.56707 9.5445 5.22107C9.9755 4.87507 10.6045 4.94307 10.9515 5.37307L15.7795 11.3731C16.0775 11.7441 16.0735 12.2741 15.7685 12.6401L10.7685 18.6401C10.5705 18.8771 10.2865 19.0001 9.9995 19.0001Z"
                fill="white"
            />
          </mask>
          <g mask="url(#mask0_1209_20559)"></g>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, onMounted, watch } from "vue";

interface Props {
  currentPage: number;
  total: number;
  limit: number;
  itemClass?: string;
  activeClass?: string;
  disableClass?: string;
  paginationButtons?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  itemClass:
      "text-gray border border-gray rounded-md w-8 h-8 flex-center transition-300 hover:!bg-blue-50 hover:!border-transparent hover:!text-blue",
  activeClass: "!bg-blue-50 !border-transparent !text-blue",
});
const emit = defineEmits(["change", "input"]);
const pageCount = computed(() => Math.ceil(props.total / props.limit));
const items = computed(() => {
  const valPrev = props.currentPage > 1 ? props.currentPage - 1 : 1;
  const valNext =
      props.currentPage < pageCount.value
          ? props.currentPage + 1
          : pageCount.value; // one next page
  const extraPrev = valPrev === 3 ? 2 : null;
  const extraNext =
      valNext === pageCount.value - 2 ? pageCount.value - 1 : null;
  const dotsBefore = valPrev > 3 ? 2 : null;
  const dotsAfter = valNext < pageCount.value - 2 ? pageCount.value - 1 : null;
  const output = [];
  for (let i = 1; i <= pageCount.value; i += 1) {
    if (
        [
          1,
          pageCount.value,
          props.currentPage,
          valPrev,
          valNext,
          extraPrev,
          extraNext,
          dotsBefore,
          dotsAfter,
        ].includes(i)
    ) {
      output.push({
        label: i,
        active: props.currentPage === i,
        disable: [dotsBefore, dotsAfter].includes(i),
      });
    }
  }
  return output;
});
const hasFirst = computed(() => props.currentPage === 1);
const hasLast = computed(() => props.currentPage === pageCount.value);
watch(
    () => props.currentPage,
    () => {
      emit("change");
    }
);
function first() {
  if (!hasFirst.value) {
    emit("input", 1);
  }
}
function prev() {
  if (!hasFirst.value) {
    emit("input", props.currentPage - 1);
  }
}
function goto(page: number) {
  emit("input", page);
}
function next() {
  if (!hasLast.value) {
    emit("input", props.currentPage + 1);
  }
}
function last() {
  if (!hasLast.value) {
    emit("input", pageCount.value);
  }
}
onMounted(() => {
  if (props.currentPage > pageCount.value) {
    emit("change");
  }
});
</script>