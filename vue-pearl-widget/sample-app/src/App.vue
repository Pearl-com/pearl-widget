<script setup lang="ts">
import { ref } from 'vue';
// Assuming your local package is correctly linked or installed
// and its exports are set up as in the previous step.
import { PearlWidget } from '../../pearl-widget/src';//'pearl-vue-widget'; 

const accessKey = ref();
const mode = ref('pearl-ai');
</script>

<template>
  <div>
    <h1>Pearl Vue Widget - Sample App</h1>
    <div style="width: 800px; height: 600px; border: 1px solid #ccc; margin-top: 20px;">
      <PearlWidget :accessKey="accessKey" :mode="mode" />
    </div>
    <div style="margin-top: 20px;">
      <label>
        Access Key:
        <input v-model="accessKey" type="text" />
      </label>
      <br />
      <label>
        Mode:
        <select v-model="mode">
          <option value="pearl-ai">Pearl AI</option>
          <option value="expert">Expert</option>
          <option value="pearl-ai-verified">Pearl AI Verified</option>
          <option value="pearl-ai-expert">Pearl AI Expert</option>
        </select>
      </label>
    </div>
  </div>
</template>

