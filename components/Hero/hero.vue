
<script setup="">
const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array,
})

const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
</script>

<template>
    <div class='c-hero'>


        <div class="c-hero__leftSide">
            
            <div class="c-hero__leftSide--bike">
                <div class="c-hero__leftSide--bike--title">
                    <p>Bike Delivery</p>
                </div>
                <div class="c-hero__leftSide--bike--img">
                    <img src="/bike.jpg" alt="image bike delivery">
                </div>        
            </div>

                <div class="c-hero__leftSide--title">
                    <PrismicRichText :field="title"/>
                </div>

                <div class="c-hero__leftSide--text">
                    <PrismicRichText :field="text"/>
                </div>

        <div  class="c-hero__leftSide--buttons">
            <div v-for="button in buttons">
                    <myButton :href="button.button_link.url" :variant="button.button_type">{{ button.button_label }}
                    </myButton>                             
            </div>
        </div>
        
    </div>
      

      <div class="c-hero__middleSide">
        <img src="/Abstract.svg" alt="flèche">
      </div>

    <div class="c-hero__rightSide">
        <HeroCard :item="home.data.hero_item"></HeroCard>
            <div class="c-hero__rightSide--bg"></div>
      
  </div>  
</div>
   
 </template>

<style lang="scss" >
.c-hero{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(50);
  align-items: center;
 margin-top: rem(-190);
 margin-left: rem(50);
margin-right: rem(50);


  &__leftSide{
    display: grid;
    grid-template-rows: repeat(4,1fr);
    align-items: center;
    text-align: justify;


    &--bike{
        margin-top: rem(200);
        background-color: #F5DDC4;        
        width: 270px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      padding: 5px;
      border-radius: 30px;
    &--title{
        color: $primary-color;
        font-weight: 600;
        padding-left: rem(10);
    }
    &--img{        
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
    &--text{
        // text-align: center;
        font-size: $tiny-font-size;

    }

    }
    &--title{
        line-height: 1.2;
        color: black;
        font-weight: 700;
        text-align: left;
        font-size: $title_size;
        strong{
        color: orange;        
        }
    }
    &--buttons {
        margin-top: rem(-260);
        display: flex;
        gap: rem(40);
        align-items: center;
        &-order {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: rem(20);
        }
}
   
}
&__middleSide{
    img{
        width: 100%;
    }
}
&__rightSide{
    position: relative;
        padding-right: rem(40);
    &--bg{
        position: absolute;
            width: rem(445);
            height: rem(837);
            background: #D9D9D9;
            z-index: -99;
            top: 0;
            right: 0;
            border-radius: rem(30);
            background: linear-gradient(200deg, #D9D9D9 -18.39%, rgba(217, 217, 217, 0.00) 89.51%);
    }

}
}

</style>