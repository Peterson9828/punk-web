<script setup lang="ts">
import { LANGUAGES } from "~/constants";
</script>

<template>
  <div class="px-8 py-5">
    <div class="grid grid-cols-3 mb-6">
      <div>
        <p>{{ $t("made") }}</p>
      </div>
      <p class="text-center text-xl">{{ $t("welcome") }}</p>
      <div class="text-right">
        <select
          class="text-gray-900 shadow-lg text-sm rounded-lg p-2.5"
          id="locale-select"
          v-model="$i18n.locale"
        >
          <option v-for="lang in LANGUAGES" :value="lang.value">
            {{ lang.name }}
          </option>
        </select>
      </div>
    </div>

    <NuxtPage />
  </div>
</template>
<style></style>
