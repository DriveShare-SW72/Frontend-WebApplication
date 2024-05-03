<script>
export default {
  name: 'v-reviews'
}
</script>

<script setup>
import PvCarousel from 'primevue/carousel'
import reviewsJson from '../data/reviews.json'
import { ref } from 'vue'

const reviews = ref(reviewsJson)
const carouselResponsiveOptions = [
  {
    breakpoint: '1080px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  }
]
</script>

<template>
  <section id="testimonials" class="section">
    <div class="container">
      <h3 class="heading-3 testimonials-title">
        Con la confianza de miles de clientes satisfechos
      </h3>
      <pv-carousel
        :value="reviews"
        :num-visible="3"
        :num-scroll="3"
        :responsiveOptions="carouselResponsiveOptions"
        circular
        class="testimonials-carousel"
      >
        <template #item="slotProps">
          <article class="review-card">
            <header class="review-card-header">
              <div class="reviewer-profile-img">
                <img :src="slotProps.data.imageSrc" :alt="slotProps.data.name" loading="lazy" />
              </div>
              <div class="reviewer-info">
                <span class="body-1 reviewer-name">{{ slotProps.data.name }}</span>
                <span class="body-2 reviewer-address">{{ slotProps.data.address }}</span>
              </div>
              <div class="rating-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M18.8039 8.97274L15.2882 12.0063L16.3593 16.5431C16.4184 16.7893 16.4032 17.0476 16.3156 17.2852C16.228 17.5229 16.0719 17.7292 15.8671 17.8782C15.6623 18.0272 15.4179 18.1121 15.1648 18.1222C14.9118 18.1324 14.6614 18.0673 14.4453 17.9352L10.5 15.5071L6.5523 17.9352C6.33622 18.0666 6.08613 18.131 5.8335 18.1205C5.58087 18.11 5.337 18.0249 5.13261 17.8761C4.92822 17.7272 4.77243 17.5212 4.68488 17.284C4.59732 17.0468 4.58191 16.789 4.64058 16.5431L5.71558 12.0063L2.19995 8.97274C2.00878 8.80752 1.87052 8.58963 1.80244 8.34629C1.73436 8.10296 1.73947 7.84496 1.81715 7.60452C1.89483 7.36407 2.04162 7.15184 2.23919 6.99432C2.43677 6.83681 2.67637 6.74099 2.92808 6.71884L7.53745 6.34696L9.31558 2.04384C9.41182 1.80932 9.57563 1.60872 9.78618 1.46754C9.99673 1.32636 10.2445 1.25098 10.498 1.25098C10.7515 1.25098 10.9993 1.32636 11.2098 1.46754C11.4204 1.60872 11.5842 1.80932 11.6804 2.04384L13.4578 6.34696L18.0671 6.71884C18.3193 6.74017 18.5596 6.83545 18.7579 6.99275C18.9562 7.15005 19.1037 7.36236 19.1819 7.6031C19.26 7.84383 19.2654 8.10228 19.1973 8.34606C19.1292 8.58984 18.9907 8.80811 18.7992 8.97352L18.8039 8.97274Z"
                    fill="#EF6C42"
                  />
                </svg>
                <span class="body-2 rating">{{ slotProps.data.rating.toFixed(1) }}</span>
              </div>
            </header>
            <blockquote class="body-2 review-content">{{ slotProps.data.review }}</blockquote>
          </article>
        </template>
      </pv-carousel>
    </div>
  </section>
</template>

<style scoped>
.section {
  background: var(--color-primary-700);
  color: var(--color-white);
}
.testimonials-title {
  text-align: center;
  max-width: 548px;
  margin-inline: auto;
  margin-bottom: 48px;
}
.testimonials-carousel :deep(.p-carousel-content) {
  position: relative;
}
.testimonials-carousel :deep(.p-carousel-item) {
  padding-inline: 12px;
}
.testimonials-carousel :deep(.p-carousel-prev) {
  position: absolute;
  bottom: 0;
  left: 0;
}
.testimonials-carousel :deep(.p-carousel-next) {
  position: absolute;
  bottom: 0;
  right: 0;
}
.testimonials-carousel :deep(.p-carousel-indicator .p-link) {
  width: 12px;
  height: 12px;
  transition: all 0.15s ease-in-out;
}
.testimonials-carousel :deep(.p-carousel-indicator.p-highlight .p-link) {
  width: 36px;
  background: var(--color-secondary-500);
}

.review-card {
  padding: 24px;
  background: var(--color-white);
  border-radius: 10px;
  height: 100%;
}
.review-card-header {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 24px;
}
.reviewer-profile-img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--color-secondary-800);
  flex-shrink: 0;
}
.reviewer-profile-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.reviewer-info {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.reviewer-name {
  color: var(--color-title);
  font-weight: 700;
}
.reviewer-address {
  color: var(--color-text);
  font-weight: 700;
}
.rating-container {
  display: flex;
  gap: 4px;
  align-items: center;
  flex-shrink: 0;
}
.rating {
  color: var(--color-title);
  font-weight: 700;
  line-height: 1;
}
.review-content {
  color: var(--color-text);
  margin: 0;
}

@media screen and (max-width: 1080px) {
  .testimonials-title {
    margin-block: 0 32px;
  }
}
</style>
