<script setup>
// Diagonal-stripe placeholder used in place of real branch/barber photos
// (the source prototype's photos were themselves striped SVG placeholders).
defineProps({
  patId: { type: String, required: true },
  size: { type: Number, default: 62 }
});
</script>

<template>
  <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" style="display:block">
    <defs>
      <pattern :id="patId" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="3" height="7" fill="#0b0b0b"></rect>
        <rect x="3" width="4" height="7" fill="#ffffff"></rect>
      </pattern>
    </defs>
    <rect :width="size" :height="size" :fill="`url(#${patId})`"></rect>
  </svg>
</template>
