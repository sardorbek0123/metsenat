<template>
  <table
      class="w-full max-w-[1200px] mx-auto table font-rubik table-auto border-separate border-spacing-y-3"
  >
    <thead>
    <tr class="text-center text-silver text-xs uppercase tracking-widest font-medium">
      <slot name="thead"></slot>
    </tr>
    </thead>
    <tbody>
    <slot name="tbody"></slot>
    </tbody>
  </table>
</template>

<style>
.table tbody tr td {
  @apply text-center !mb-5 py-2 first:pl-4 first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r last:pr-2 text-sm text-black font-normal bg-white border-y;
}

.table td[scope='row'],
.table thead td[data-order] {
  @apply px-6;
}

.table thead tr td:last-child {
  @apply pr-6;
}

.table tbody tr td:not([data-primary]) {
  @apply py-6;
}

.table thead td {
  @apply px-2;
}

.table td:not(:first-child):not(:last-child):not([data-primary]) {
  @apply px-2 whitespace-nowrap;
}
</style>