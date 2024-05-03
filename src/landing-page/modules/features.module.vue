<script>
export default {
  name: 'v-features'
}
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <div class="features-summary">
        <h2 class="heading-2 features-title">Fácil y simple de usar</h2>
        <p class="paragraph features-description">
          Aplicación intuitiva, moderna y simplista para ofrecer la mejor experiencia a nuestros
          usuarios.
        </p>
      </div>

      <div class="features-list">
        <div class="feature-item">
          <div class="feature-item-container">
            <div class="feature-item-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 4C15.164 4 8 12.006 8 21C8 29.924 13.106 39.624 21.074 43.348C21.9898 43.7768 22.9887 43.9991 24 43.9991C25.0113 43.9991 26.0102 43.7768 26.926 43.348C34.894 39.624 40 29.924 40 21C40 12.006 32.836 4 24 4ZM24 24C25.0609 24 26.0783 23.5786 26.8284 22.8284C27.5786 22.0783 28 21.0609 28 20C28 18.9391 27.5786 17.9217 26.8284 17.1716C26.0783 16.4214 25.0609 16 24 16C22.9391 16 21.9217 16.4214 21.1716 17.1716C20.4214 17.9217 20 18.9391 20 20C20 21.0609 20.4214 22.0783 21.1716 22.8284C21.9217 23.5786 22.9391 24 24 24Z"
                  fill="#EF6C42"
                ></path>
              </svg>
            </div>
            <p class="subtitle-1">Escoge el espacio</p>
            <p class="body-2">Elije entre diversas opciones para estacionar en el mapa.</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-item-container">
            <div class="feature-item-icon">
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
            <p class="subtitle-1">Establece el tiempo</p>
            <p class="body-2">Ingresa el rango de horas que deseas usar el servicio.</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-item-container">
            <div class="feature-item-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="50"
                viewBox="0 0 48 50"
                fill="none"
              >
                <g clip-path="url(#clip0_25_454)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.90249 11.2647C8.46915 9.88657 9.41147 8.71224 10.6125 7.88744C11.8136 7.06264 13.2205 6.62367 14.6587 6.625H33.3471C36.2846 6.625 38.9401 8.45025 40.0975 11.2647L42.424 16.9242C42.6443 17.4601 43.0409 17.9011 43.5402 18.1614C45.009 18.9271 46.0518 20.3511 46.3749 22.0263L47.359 27.1683C47.4559 27.6613 47.5029 28.1636 47.5029 28.6689V29.9337C47.5029 32.4266 46.3573 34.6591 44.5654 36.0495V41.8438C44.5654 42.2499 44.4107 42.6393 44.1352 42.9265C43.8598 43.2137 43.4862 43.375 43.0967 43.375H37.2217C36.8321 43.375 36.4586 43.2137 36.1831 42.9265C35.9077 42.6393 35.7529 42.2499 35.7529 41.8438V37.7461C31.9577 37.8931 27.6895 38.0156 24.0029 38.0156C20.3164 38.0156 16.0482 37.8931 12.2529 37.7461V41.8438C12.2529 42.2499 12.0982 42.6393 11.8227 42.9265C11.5473 43.2137 11.1737 43.375 10.7842 43.375H4.90918C4.51964 43.375 4.14606 43.2137 3.87062 42.9265C3.59517 42.6393 3.44043 42.2499 3.44043 41.8438V36.0495C1.64855 34.6591 0.50293 32.4266 0.50293 29.9337V28.6689C0.503423 28.1649 0.551636 27.6623 0.646867 27.1683L1.63093 22.0233C1.95405 20.3511 2.99687 18.924 4.46268 18.1614C4.96439 17.9 5.36094 17.4617 5.58187 16.9242L7.90837 11.2647H7.90249ZM9.31249 31.125C10.0916 31.125 10.8387 30.8023 11.3896 30.228C11.9405 29.6537 12.25 28.8747 12.25 28.0625C12.25 27.2503 11.9405 26.4713 11.3896 25.897C10.8387 25.3227 10.0916 25 9.31249 25C8.53342 25 7.78625 25.3227 7.23537 25.897C6.68448 26.4713 6.37499 27.2503 6.37499 28.0625C6.37499 28.8747 6.68448 29.6537 7.23537 30.228C7.78625 30.8023 8.53342 31.125 9.31249 31.125ZM38.6875 31.125C39.4666 31.125 40.2137 30.8023 40.7646 30.228C41.3155 29.6537 41.625 28.8747 41.625 28.0625C41.625 27.2503 41.3155 26.4713 40.7646 25.897C40.2137 25.3227 39.4666 25 38.6875 25C37.9084 25 37.1613 25.3227 36.6104 25.897C36.0595 26.4713 35.75 27.2503 35.75 28.0625C35.75 28.8747 36.0595 29.6537 36.6104 30.228C37.1613 30.8023 37.9084 31.125 38.6875 31.125ZM18.125 25C17.3459 25 16.5988 25.3227 16.0479 25.897C15.497 26.4713 15.1875 27.2503 15.1875 28.0625C15.1875 28.8747 15.497 29.6537 16.0479 30.228C16.5988 30.8023 17.3459 31.125 18.125 31.125H29.875C30.6541 31.125 31.4012 30.8023 31.9521 30.228C32.503 29.6537 32.8125 28.8747 32.8125 28.0625C32.8125 27.2503 32.503 26.4713 31.9521 25.897C31.4012 25.3227 30.6541 25 29.875 25H18.125ZM9.03637 16.3913L11.8446 10.5328C11.9667 10.2787 12.1542 10.0651 12.3861 9.91585C12.618 9.76658 12.8851 9.68751 13.1577 9.6875H34.8423C35.1148 9.68751 35.382 9.76658 35.6139 9.91585C35.8458 10.0651 36.0333 10.2787 36.1554 10.5328L38.9636 16.3913C39.0784 16.6383 39.1288 16.9125 39.1096 17.1863C39.0904 17.46 39.0024 17.7237 38.8544 17.9506C38.7063 18.1776 38.5036 18.3599 38.2664 18.4792C38.0293 18.5985 37.7662 18.6505 37.5037 18.63C34.8306 18.4064 27.6631 18.1094 24 18.1094C20.3369 18.1094 13.1665 18.4064 10.4963 18.63C10.2338 18.6505 9.97068 18.5985 9.73355 18.4792C9.49643 18.3599 9.29364 18.1776 9.14561 17.9506C8.99758 17.7237 8.90954 17.46 8.89037 17.1863C8.87119 16.9125 8.92155 16.6383 9.03637 16.3913Z"
                    fill="#EF6C42"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_25_454">
                    <rect width="47" height="49" fill="white" transform="translate(0.5 0.5)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p class="subtitle-1">Estaciona tu vehículo</p>
            <p class="body-2">
              Acércate al lugar del servicio y estaciona en el garaje seleccionado.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-summary {
  text-align: center;
  margin-bottom: 80px;
}
.features-title {
  color: var(--color-primary-500);
  margin-bottom: 12px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}
.features-description {
  max-width: 628px;
  margin-inline: auto;
  text-wrap: pretty;
}
.features-list {
  display: flex;
  justify-content: space-between;
}
.feature-item {
  text-align: center;
}
.feature-item-container {
  max-width: 262px;
}
.feature-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  background: #fdf1ed;
  margin-inline: auto;
  margin-bottom: 28px;
}
.subtitle-1 {
  color: var(--color-primary-500);
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  margin-bottom: 4px;
}
</style>
