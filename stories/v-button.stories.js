import VButton from '@/components/v-button/v-button.vue'

export default {
    title: 'Buttons/VButton',
    component: VButton,
    argTypes: {}
}
const Template = (args) => ({
    components: {VButton},
    setup() {
        return {
            args
        }
    },
    template: '<v-button v-bing="args"/>'
})

export const Primary = Template.bind({})
Primary.args = {
    label: 'test',
    icon: 'test'
}
        

// export default {
//     title: 'Elements/MyButton',
//     component: myButton,
//     argTypes: {
//         text : {
//             control: "text"
//         },
//         href: {
//             control: "text"
//         },
//         size: {
//             control: "select",
//             options: ['regular', 'small', 'verySmall']
//         },
//         variant: {
//             control: "select",
//             options: ['default', 'rounded']
//         },
//         hasIcon : {
//             control : "boolean"
//         }
//     }
// }

// export const PrimaryButton = {
//     render: (args) => {
//         return {
//             components: {
//                 myButton,
//             },
//             setup() {
//                 return {args}
//             },
//             template: `<myButton v-bind="args">My link Button</myButton>`
//         }
//     },
//     args: {
//         size: "regular",
//         variant: "default"
//     }
// }

// export const SecondaryButton = {
//     render: (args) => {
//         return {
//             components: {
//                 myButton,
//             },
//             setup() {
//                 return {args}
//             },
//             template: `<myButton v-bind="args">My link Button</myButton>`
//         }
//     },
//     args: {
//         size: "regular",
//         variant: "rounded"
//     }
// }

// export const TeritiaryButton = {
//     render: (args) => {
//         return {
//             components: {
//                 myButton,
//             },
//             setup() {
//                 return {args}
//             },
//             template: `<myButton v-bind="args">My link Button</myButton>`
//         }
//     },
//     args: {
//         size: "small",
//         variant: "rounded"
//     }
// }
// // Pour le projet

// export const OrderNow = {
//     render: (args) => {
//         return {
//             components: {
//                 myButton,
//             },
//             setup() {
//                 return {args}
//             },
//             template: `<myButton v-bind="args">Order Now</myButton>`
//         }
//     },
//     args: {
//         size: "regular",
//         variant: "default",
//         hasIcon: false,
//     }
// }

// export const LearnMore = {
//     render: (args) => {
//         return {
//             components: {
//                 myButton,
//             },
//             setup() {
//                 return {args}
//             },
//             template: `<myButton v-bind="args">Learn More</myButton>`
//         }
//     },
//     args: {
//         size: "small",
//         variant: "rounded",
//         hasIcon: false,
//     }
// }

// export const SeeMoreProduct = {
//     render: (args) => {
//         return {
//             components: {
//                 myButton,
//             },
//             setup() {
//                 return {args}
//             },
//             template: `<myButton v-bind="args">See More Products</myButton>`
//         }
//     },
//     args: {
//         size: "small",
//         variant: "rounded",
//         hasIcon: true,
//     }
// }
// export const AddToCart = {
//     render: (args) => {
//         return {
//             components: {
//                 myButton,
//             },
//             setup() {
//                 return {args}
//             },
//             template: `<myButton v-bind="args">Add to my Cart</myButton>`
//         }
//     },
//     args: {
//         size: "verySmall",
//         variant: "rounded",
//         hasIcon: false,
//     }
// }