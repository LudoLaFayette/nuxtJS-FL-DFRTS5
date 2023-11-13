import VButton from '@/components/v-button/v-button.vue';

export default {
  title: 'vButton2/VButton2',
  component: VButton,
  args: {
    // Define your props here
    label: 'Default Value',
    number: 42,
    // Add more props as needed
  },
};

export const Default = (args) => ({
  components: { VButton },
  setup() {
    // You can access the props in the setup function
    return { args };
  },
  template: '<v-button v-bind="args" />',
});

// Additional stories for different prop variations can be defined
export const WithDifferentProps = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<v-button v-bind="args" />',
});
