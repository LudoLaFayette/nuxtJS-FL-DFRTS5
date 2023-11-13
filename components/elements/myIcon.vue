<template>
    <i class="icon" :class="className">
        <component :is="getIcon" class="icon__" />
    </i>
</template>

<script setup>
import { computed } from 'vue';

import iconCommunity from '@/components/icons/iconCommunity.vue';
import iconDocumentation from '@/components/icons/iconDocumentation.vue';
import iconEcosystem from '@/components/icons/iconEcosystem.vue';
import iconTooling from '@/components/icons/iconTooling.vue';
import iconSupport from '@/components/icons/iconSupport.vue';

//Icones du projet
import iconArrowLeft from '@/components/icons/iconArrowLeft.vue';
import iconArrowRight from '@/components/icons/iconArrowRight.vue';
import iconChrevronLeft from '@/components/icons/iconChrevronLeft.vue';
import iconDeliveryTruck from '@/components/icons/iconDeliveryTruck.vue';
import iconFacebook from '@/components/icons/iconFacebook.vue';
import iconHour from '@/components/icons/iconHour.vue';
import iconInstagram from '@/components/icons/iconInstagram.vue';
import iconLinkedin from '@/components/icons/iconLinkedin.vue';
import iconMapPin from '@/components/icons/iconMapPin.vue';
import iconPhoneCall from '@/components/icons/iconPhoneCall.vue';
import iconPlay from '@/components/icons/iconPlay.vue';
import iconSearch from '@/components/icons/iconSearch.vue';
import iconShoppingBag from '@/components/icons/iconShoppingBag.vue';
import iconStar from '@/components/icons/iconStar.vue';
import iconTwitter from '@/components/icons/iconTwitter.vue';
import iconUstensils from '@/components/icons/iconUstensils.vue';
import iconUstensilsCrossed from '@/components/icons/iconUstensilsCrossed.vue';
import iconStarTangerine from '@/components/icons/iconStarTangerine.vue'
import iconChevronRight from '@/components/icons/iconChevronRight.vue';

const props = defineProps({
    name: String,
    background: String,
    size: String,
})
//Choix de l'icone :
const getIcon = computed(() => {
    switch (props.name) {
    case 'community':
        return iconCommunity;
    case 'documentation':
        return iconDocumentation;
    case 'ecosystem':
        return iconEcosystem;
    case 'tooling':
        return iconTooling;
    case 'arrowLeft':
        return iconArrowLeft;
    case 'arrowRight':
        return iconArrowRight
    case 'chevronLeft':
        return iconChrevronLeft;
    case 'deliveryTruck':
        return iconDeliveryTruck;
    case 'facebook':
        return iconFacebook;
    case 'hour':
        return iconHour;
    case 'instagram':
        return iconInstagram;
    case 'linkedin':
        return iconLinkedin
    case 'mapPin':
        return iconMapPin
    case 'phoneCall':
        return iconPhoneCall
    case 'play':
        return iconPlay
    case 'search':
        return iconSearch
    case 'shoppingBag':
        return iconShoppingBag
    case 'star':
        return iconStar;
    case 'twitter':
        return iconTwitter
    case 'ustensils':
        return iconUstensils
    case 'ustensilsCrossed':
        return iconUstensilsCrossed
    case 'favori':
        return iconStarTangerine
    case 'chevronRight':
        return iconChevronRight
    default:
        return iconSupport
    }
})
const className = computed(() => ({
    ' -backgroundW': props.background === 'backgroundW',
    ' -backgroundBCK': props.background === 'backgroundBCK',
    ' -backgroundT': props.background === 'backgroundT',
    ' -backgroundTT': props.background === 'backgroundTT',
    ' -backgroundPlay': props.background === 'backgroundPlay',
    ' -backgroundArrowTonWBkrd': props.background === 'backgroundArrowTonWBkrd',
    ' -smallIcon': props.size === 'smallIcon',
    ' -bigIcon': props.size === 'bigIcon',
    ' -noneStyle': props.background === 'noneStyle'
}));
</script>

<style lang="scss" scoped>
.icon {
    display: inline-flex;
    align-items: center;
    border-radius: 100%;
    box-shadow: 0 0 25px rgba(131, 165, 255, 0.25);
    height: rem(50);
    width: rem(50);
    justify-content: center;

    &.-backgroundW {
        background-color: $white;
        color: black;
        svg{
            fill: none;
        }
        
    }
    &.-backgroundArrowTonWBkrd {
        background-color: $white;
        color: $primary-color;
        svg{
            fill: none;
        }
        
    }
    &.-backgroundPlay {
        background-color: $white;
        color: $primary-color;
        svg{
            fill: $primary-color;
        }
        
    }



    &.-backgroundBCK {
        background-color: $black;
        color: white;
        svg{
            fill: none;
        }
        
    }



    &.-backgroundT {
        background-color: $primary-color;
        color: white;

        svg{
            fill: none;
        }
    }

    &.-backgroundTT {
        background-color: #F5DDC4;
        color: $primary-color;
        fill: $primary-color;
    }

    &.-smallIcon {
        height: rem(50);
        width: rem(50);

        svg {
            scale: 1.10;
        }
    }

    &.-bigIcon {

        height: rem(120);
        width: rem(120);

        svg {
            scale: 2.75 ;
        }
    }
    &.-noneStyle{
        box-shadow: none;
        border-radius: none;
    }



}
</style>