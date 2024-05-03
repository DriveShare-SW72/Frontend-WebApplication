<script>
export default {
  name: 'v-product'
}
</script>

<script setup>
import VCard from '../components/card.component.vue'
</script>

<template>
  <section id="product" class="section">
    <div class="container">
      <div class="product-section-summary">
        <h2 class="heading-2 product-title">¿Qué es EzPark?</h2>
        <p class="paragraph product-description">
          Es una aplicación para encontrar, reservar y promocionar servicios de estacionamientos en
          garajes residenciales.
        </p>
      </div>
      <div class="product-section-benefits">
        <v-card>
          <article class="product-benefit">
            <div class="product-benefit-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M24 4C21.3736 4 18.7728 4.51732 16.3463 5.52241C13.9198 6.5275 11.715 8.00069 9.85786 9.85786C6.10714 13.6086 4 18.6957 4 24C4 29.3043 6.10714 34.3914 9.85786 38.1421C11.715 39.9993 13.9198 41.4725 16.3463 42.4776C18.7728 43.4827 21.3736 44 24 44C29.3043 44 34.3914 41.8929 38.1421 38.1421C41.8929 34.3914 44 29.3043 44 24C44 21.3736 43.4827 18.7728 42.4776 16.3463C41.4725 13.9198 39.9993 11.715 38.1421 9.85786C36.285 8.00069 34.0802 6.5275 31.6537 5.52241C29.2272 4.51732 26.6264 4 24 4ZM32.4 32.4L22 26V14H25V24.4L34 29.8L32.4 32.4Z"
                  fill="#EF6C42"
                ></path>
              </svg>
            </div>
            <p>Reduce el tiempo de búsqueda de estacionamiento.</p>
          </article>
        </v-card>
        <v-card>
          <article class="product-benefit">
            <div class="product-benefit-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_25_410)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.528 8C32.6421 8.00004 33.7342 8.31027 34.6819 8.89594C35.6297 9.48161 36.3956 10.3196 36.894 11.316L39.666 16.858C40.154 16.658 40.634 16.442 41.106 16.21C41.5807 15.9729 42.1302 15.9341 42.6336 16.1021C43.1369 16.2702 43.5529 16.6313 43.79 17.106C44.0271 17.5807 44.0659 18.1302 43.8979 18.6336C43.7298 19.1369 43.3687 19.5529 42.894 19.79C42.4133 20.004 41.9299 20.212 41.444 20.414L43.366 24.26C43.7832 25.0939 44.0002 26.0136 44 26.946V32C44.0012 32.8444 43.8237 33.6794 43.4789 34.4502C43.1342 35.221 42.6302 35.91 42 36.472V39C42 39.7956 41.6839 40.5587 41.1213 41.1213C40.5587 41.6839 39.7957 42 39 42C38.2043 42 37.4413 41.6839 36.8787 41.1213C36.3161 40.5587 36 39.7956 36 39V38H12V39C12 39.7956 11.6839 40.5587 11.1213 41.1213C10.5587 41.6839 9.79565 42 9 42C8.20435 42 7.44129 41.6839 6.87868 41.1213C6.31607 40.5587 6 39.7956 6 39V36.472C4.772 35.372 4 33.776 4 32V26.944C4.00037 26.0129 4.21743 25.0947 4.634 24.262L6.54 20.446C6.058 20.242 5.58 20.026 5.11 19.792C4.63766 19.5518 4.27862 19.1356 4.11027 18.6332C3.94191 18.1308 3.97773 17.5823 4.21 17.106C4.32732 16.8709 4.48982 16.6611 4.68823 16.4888C4.88664 16.3165 5.11706 16.185 5.36632 16.1018C5.61558 16.0186 5.8788 15.9853 6.14093 16.0039C6.40306 16.0224 6.65896 16.0925 6.894 16.21C7.366 16.444 7.848 16.658 8.334 16.858L11.106 11.318C11.6041 10.3212 12.3699 9.48282 13.3177 8.89679C14.2655 8.31075 15.3577 8.00022 16.472 8H31.528ZM15 26C14.2044 26 13.4413 26.3161 12.8787 26.8787C12.3161 27.4413 12 28.2044 12 29C12 29.7956 12.3161 30.5587 12.8787 31.1213C13.4413 31.6839 14.2044 32 15 32C15.7956 32 16.5587 31.6839 17.1213 31.1213C17.6839 30.5587 18 29.7956 18 29C18 28.2044 17.6839 27.4413 17.1213 26.8787C16.5587 26.3161 15.7956 26 15 26ZM33 26C32.2044 26 31.4413 26.3161 30.8787 26.8787C30.3161 27.4413 30 28.2044 30 29C30 29.7956 30.3161 30.5587 30.8787 31.1213C31.4413 31.6839 32.2044 32 33 32C33.7956 32 34.5587 31.6839 35.1213 31.1213C35.6839 30.5587 36 29.7956 36 29C36 28.2044 35.6839 27.4413 35.1213 26.8787C34.5587 26.3161 33.7956 26 33 26ZM31.528 12H16.472C16.1428 12 15.8187 12.0812 15.5284 12.2364C15.2382 12.3917 14.9907 12.6162 14.808 12.89L14.684 13.106L12.144 18.182C15.24 19.11 19.412 20 24 20C28.284 20 32.202 19.224 35.22 18.366L35.854 18.182L33.316 13.106C33.1688 12.8116 32.9512 12.5581 32.6826 12.368C32.414 12.1779 32.1026 12.0569 31.776 12.016L31.53 12H31.528Z"
                    fill="#EF6C42"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_25_410">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>Ayuda a la reducción de la congestión vehicular.</p>
          </article>
        </v-card>
        <v-card>
          <article class="product-benefit">
            <div class="product-benefit-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M22.5 15.6941C20.628 16.2061 19.5 17.6441 19.5 19.0001C19.5 20.3561 20.628 21.7941 22.5 22.3041V15.6941ZM25.5 25.6961V32.3041C27.372 31.7941 28.5 30.3561 28.5 29.0001C28.5 27.6441 27.372 26.2061 25.5 25.6961Z"
                  fill="#EF6C42"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44 24C44 35.046 35.046 44 24 44C12.954 44 4 35.046 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24ZM24 10.5C24.3978 10.5 24.7794 10.658 25.0607 10.9393C25.342 11.2206 25.5 11.6022 25.5 12V12.634C28.76 13.218 31.5 15.668 31.5 19C31.5 19.3978 31.342 19.7794 31.0607 20.0607C30.7794 20.342 30.3978 20.5 30 20.5C29.6022 20.5 29.2206 20.342 28.9393 20.0607C28.658 19.7794 28.5 19.3978 28.5 19C28.5 17.644 27.372 16.206 25.5 15.694V22.634C28.76 23.218 31.5 25.668 31.5 29C31.5 32.332 28.76 34.782 25.5 35.366V36C25.5 36.3978 25.342 36.7794 25.0607 37.0607C24.7794 37.342 24.3978 37.5 24 37.5C23.6022 37.5 23.2206 37.342 22.9393 37.0607C22.658 36.7794 22.5 36.3978 22.5 36V35.366C19.24 34.782 16.5 32.332 16.5 29C16.5 28.6022 16.658 28.2206 16.9393 27.9393C17.2206 27.658 17.6022 27.5 18 27.5C18.3978 27.5 18.7794 27.658 19.0607 27.9393C19.342 28.2206 19.5 28.6022 19.5 29C19.5 30.356 20.628 31.794 22.5 32.304V25.366C19.24 24.782 16.5 22.332 16.5 19C16.5 15.668 19.24 13.218 22.5 12.634V12C22.5 11.6022 22.658 11.2206 22.9393 10.9393C23.2206 10.658 23.6022 10.5 24 10.5Z"
                  fill="#EF6C42"
                ></path>
              </svg>
            </div>
            <p>Una forma de generar ingresos adicionales por arrendamiento.</p>
          </article>
        </v-card>
      </div>
    </div>
  </section>
</template>

<style>
.product-section-summary {
  margin-bottom: 48px;
}
.product-title {
  text-align: center;
  color: var(--color-primary-500);
  margin-bottom: 12px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}
.product-description {
  text-align: center;
  max-width: 628px;
  margin-inline: auto;
  text-wrap: pretty;
}
.product-section-benefits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.product-benefit {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
}

@media screen and (max-width: 1080px) {
  .product-benefit {
    margin-bottom: 8px;
  }
  .product-description {
    margin-block: 0;
  }
  .product-section-summary {
    margin-bottom: 36px;
  }
  .product-section-benefits {
    gap: 16px;
  }
  .product-benefit {
    gap: 16px;
    margin: 0;
  }
  .product-benefit-icon {
    display: flex;
    width: 36px;
    height: 36px;
  }
  .product-benefit-icon svg {
    width: inherit;
    height: inherit;
  }
  .product-benefit p {
    font-size: 14px;
    margin: 0;
  }
}
@media screen and (max-width: 768px) {
  .paragraph {
    font-size: 14px;
    line-height: 1.2;
  }
  .product-section-benefits {
    display: flex;
    flex-direction: column;
  }
  .product-benefit p {
    line-height: 1.2;
  }
}
</style>
