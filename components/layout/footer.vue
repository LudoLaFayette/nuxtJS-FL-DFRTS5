<script setup>
import myIcon from '@/components/elements/myIcon.vue'
import myTitle from '@/components/elements/myTitle.vue'
import myText from '@/components/elements/myText.vue'
</script>
<template>
  <footer class="c-footer">
    <div class="c-footer__column">
      <img class="c-footer__column--logo" src="../../public/logo-footer.jpg" alt="Restaurant Logo" />
      <myText
        size="p2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id."
      />
      <div class="c-footer__column--social_icons">
        <myIcon name="facebook" background="backgroundTT" size="small" />
        <myIcon name="twitter" background="backgroundTT" size="small" />
        <myIcon name="linkedin" background="backgroundTT" size="small" />
        <myIcon name="instagram" background="backgroundTT" size="small" />
      </div>
    </div>
    <div class="c-footer__column">
      <myTitle class="c-footer__column--title" content="Opening Restaurant" type="h4" />
      <myText class="c-footer__column--text" size="p1" content="Monday-Friday: 9AM - 10PM" />
      <myText class="c-footer__column--text" size="p1" content="Thursday: 09AM - 11PM" />
      <myText class="c-footer__column--text" size="p1" content="Friday: 09AM - 8PM" />
    </div>
    <div class="c-footer__column">
      <myTitle class="c-footer__column--title" content="User Links" type="h4" />
      <ul class="c-footer__column--list-link">
        <li class="c-footer__column--text"><a href="#">About Us</a></li>
        <li class="c-footer__column--text"><a href="#">Contact Us</a></li>
        <li class="c-footer__column--text"><a href="#">Order Delivery</a></li>
        <li class="c-footer__column--text"><a href="#">Payment & Tax</a></li>
        <li class="c-footer__column--text"><a href="#">Terms of Services</a></li>
      </ul>
    </div>
    <div class="c-footer__column">
      <myTitle class="c-footer__column--title" content="Contact Us" type="h4" />
      <myText class="c-footer__column--text" size="p1" content="1234 Country Club Ave" />
      <myText class="c-footer__column--text" size="p1" content="NC 123456, London, UK" />
      <myText class="c-footer__column--text" size="p1" content="+0123 456 7891" />
      <div class="c-footer__column--input">
        <input type="email" id="email" placeholder="Enter your email...." />
        <myIcon class="" name="chevronRight" size="small" background="backgroundT" />
      </div>
    </div>
  </footer>
</template>
  <style lang="scss" scoped>
.c-footer {
  background: $light-grey;
  color: $grey;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: rem(40);
  gap: rem(5);

  &__column {
    padding: 1rem;

    &--logo {
    padding-bottom: rem(15);
  }
  &--social_icons {
    display: flex;
    margin: rem(15) rem(5);
    gap: rem(15);
  }
  &--title {
    font-weight: 700;
    color: $black;
    padding: rem(45) rem(0);
  }
  &--text {
    padding: rem(5) rem(0);
    font-weight: 400;
  }
  &--list-link {
    list-style: none;
    & li a {
      text-decoration: none;
      color: $grey;
    }
  }
  &--input {
    background-color: $white;
    border-radius: rem(40);
    box-shadow: 0px rem(1) rem(4) rgba(0, 0, 0, 0.25);
    font-family: $primary-font-familly;
    font-size: $very_tiny_font_size;
    display: flex;
    align-items: center;
    padding: rem(4) rem(10);
    width: fit-content;
    border: none;
    outline: none;
    margin-top: rem(15);
    & input {
      border: none;
      outline: none;
    }
  }
  
  }
}
</style>