<script setup>
const props = defineProps({
    testimonials: Array,
})
import { usePrismic } from "@prismicio/vue";
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
</script>

<template>
    <div v-for="item in testimonials" >

        <PrismicRichText class="c-Service__tag" :field="home.data.testimonialstitle_main"></PrismicRichText>
            <PrismicRichText class="c-Service__title" :field="home.data.testimonialstitle_secondary"></PrismicRichText>

        <div class="card" >
            <div class="card__right">
                <div class="card__right-info">
                    <div class="card__right-info-image">
                        <img :src="item.testimonialsuser_image.url">
                    </div>
                    <div class="card__right-info-desc">
                        <PrismicRichText :field="item.testimonials_name" />
                        <PrismicRichText :field="item.testimonials_job" />
                    </div>
                </div>
                <div class="card__right-text">
                    <PrismicRichText :field="item.testimonials_text" />
                </div>
                <div class="card__icons-left">
                    <MyIcon color="orange" stroke="white" name="arrowLeft"></MyIcon>
                </div>

                <div class="card__icons-right">
                    <MyIcon color="orange" stroke="white" name="arrowRight"></MyIcon>
                </div>
            </div>

            <div class="card__left">
                <img :src="item.testimonials_image.url">
            </div>
        </div>





    </div>
</template>

<style lang="scss" scoped>
.c-Service {
  margin: rem(70) rem(0);
  &__tag {
    display: block;
    font-size: $normal_font_size;
    color: $primary-color;
    margin-bottom: 1rem;
    text-align: center;
    margin: rem(30) rem(0) rem(0) rem(0);
  }
  &__title {
    font-size: $big-font-size;
    font-weight: 700;
    text-align: center;
    margin-bottom: rem(30);
  }
}
.c-text {
    display: flex;
    justify-content: center;
    color: $primary-color;
    margin-top: rem(130);
    font-size: $tiny_font_size;
}

.c-title {
    display: flex;
    justify-content: center;
    font-size: $big_font_size;
    margin-top: rem(10);
    margin-bottom: rem(40);
}

.card {

    display: flex;
    align-items: center;
    margin-bottom: rem(100);

    // gap: rem(100);
    &__right {
        position: relative;
        border-radius: rem(35);
        background: $white;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.10);
        height: rem(445);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: rem(40);
        margin-bottom: rem(40);
        flex: 1;

        &-info {
            display: flex;
            justify-content: center;
            align-items: center;

            &-image {
                margin: 0 rem(20);

                img {
                    border-radius: 100%;
                }
            }
        }

        &-text {
            width: rem(570);
            margin: 0 auto;
            text-align: center;
            margin-bottom: rem(60);
            padding: 0 40px;
        }
    }

    &__icons-left {
        position: absolute;
        top: 50%;
        left: -3.5%;
    }

    &__icons-right {
        position: absolute;
        top: 50%;
        right: -3.5%;
    }

}</style>