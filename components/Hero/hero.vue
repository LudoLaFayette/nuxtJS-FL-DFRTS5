
<script setup="">
const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array,
})
</script>

<template>
   <section class="c-hero">
    <div class="c-hero__bike">
        <div class="c-hero__bike--title">
            <p>Bike Delivery</p>
        </div>
        <div class="c-hero__bike--img">
            <img src="/bike.jpg" alt="image bike delivery">
        </div>        
    </div>

        <div class="c-hero__title">
            <PrismicRichText :field="title"/>
        </div>

        <div class="c-hero__text">
            <PrismicRichText :field="text"/>
        </div>

        <div  class="c-hero__buttons">
            <div v-for="button in buttons">
            <!-- <myButton  v-if="button.button_type === 'default'" class="c-button__button -default">
                <a :href="button.button_link.url">{{ button.button_label }}</a>
            </myButton>
            
                <myButton v-else="button.button_type === 'video'" :size="small" :variant="rounded" :hasIcon="true" class="c-hero__button -video">
                <myIcon :name="chevronRight" />
                <a :href="button.button_link.url">{{ button.button_label }}</a>
            </myButton>   -->

                    <myButton :href="button.button_link.url" :variant="button.button_type">{{ button.button_label }}
                    </myButton>      
                                    
            </div>
        </div>
        
   </section>
 </template>

<style lang="scss" >

.c-hero{
    display: grid;
    grid-template-rows: repeat(4,1fr);
    align-items: center;
    text-align: justify;
    &__bike{
        display:flex;
        justify-content:space-between;
        border-radius: 31.5px;
        background-color: #F5DDC4;
        align-items: center;
        gap: rem(-20);

    &--title{
        color: $primary-color;
        font-weight: 600;
        padding-left: rem(10);
        
    }
    &--img{        
        // border: 10px solid black;
        background-color: #ffffff;
        border-radius: 100%; 
        margin: rem(6);
        img{
            justify-content: center;
            height: 100%;
            width: 100%;
            border-radius: 100%;
        }
    }
    &__text{
        text-align: center;
    }

    }
    &__title{
        line-height: 1.2;
        font-size: 40px;
        color: black;
        font-weight: 700;
        strong{
        color: orange;
    }
    }
    &__buttons {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    &:not(:first-child) {
      margin-top: 2rem;
    }
}
    
}
</style>