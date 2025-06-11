<template>
    <iframe ref="iframeRef" title="Pearl Widget" :src="widgetUrl" style="width: 100%; height: 100%; border: none;"
        @load="handleLoad"></iframe>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';

interface PearlWidgetProps {
    accessKey?: string;
    mode?: string; // e.g., 'expert', 'pearl-ai', 'pearl-ai-verified'
}

const props = defineProps<PearlWidgetProps>();

const iframeRef = ref<HTMLIFrameElement | null>(null);
const widgetOrigin = 'https://www.pearl.com';
const widgetUrl = computed(() => `${widgetOrigin}/api/widget`);
let initialized = false;

const postInitMessage = () => {
    if (iframeRef.value?.contentWindow && props.accessKey && props.mode) {
        iframeRef.value.contentWindow.postMessage(
            {
                type: 'init',
                payload: {
                    accessKey: props.accessKey,
                    mode: props.mode,
                },
            },
            widgetOrigin
        );
    }
};

const handleLoad = () => {
    initialized = true;
    postInitMessage();
};

// Watch for prop changes to re-initialize if necessary,
watch(() => [props.accessKey, props.mode], () => {
    console.log('Props changed, re-initializing widget:', props);
    // Attempt to re-initialize if iframe is already loaded and props change
    if (iframeRef.value && iframeRef.value.contentWindow) {
        postInitMessage();
    }
}, { deep: true });

// Fallback if load event is missed or for initial setup
onMounted(() => {
    // The load event should handle this, but as a fallback
    if (iframeRef.value) {
        // If already loaded by the time onMounted runs
        if (iframeRef.value.contentDocument?.readyState === 'complete') {
            postInitMessage();
        }
    }
});
</script>
