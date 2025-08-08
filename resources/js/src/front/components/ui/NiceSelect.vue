


<script setup>
// import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  options: Array,
  defaultCurrent: {},
  placeholder: String,
  className: String,
  name: String,
});

const open = ref(false);
const current = ref(props.options[props.defaultCurrent]);

const onClose = () => {
  open.value = false;
};

const currentHandler = (item, index) => {
  current.value = props.options[index]; 
  onClose(); 
  // defineEmits(['onChange'])('onChange', item);
};
</script>

<template>
  <div
    :class="['nice-select', props.className, { open }]"
    :tabindex="0"
    @click.prevent="open = !open"
    role="button"
  >
    <span class="current">{{ current?.text || props.placeholder }}</span>
    <ul class="list" role="menubar" @click.prevent="$event.stopPropagation()">
      <li
        :class="['option', { 'selected focus': item.value === current.value }]"
        v-for="(item, index) in props.options"
        :key="`option-${index}`"
        @click.prevent="currentHandler(item, index)"
        role="menuitem"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>



