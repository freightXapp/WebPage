<template>
  <div class="card-container">
    <div class="card">
      <h2 class="card__title">Call us!</h2>
      <p class="card__text">Have Questions?</p>
      <button class="card__button card__button--purple">Contact</button>
    </div>
    <div class="card">
      <h2 class="card__title">More info?</h2>
      <p class="card__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?
      </p>
      <button class="card__button card__button--grey">Contact Us</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adds space between the cards
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.card {
  background: #fff;
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 20px;
  width: 350px; // Specific width for larger screens
  height: 250px; // Matching height to make it square
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 45%; // Makes card width responsive
    margin: 10px; // Adds a small margin for spacing
  }

  &__title {
    color: #333;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
  }

  &__text {
    color: #666;
    text-align: center;
    font-size: 1.5rem; // Smaller font size for better fit
  }

  &__button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-weight: 400;
    cursor: pointer;
    outline: none;
    width: 100%; // Button width to match card width
    text-align: center;

    &--purple {
      background-color: var(--baby-blue);
      color: white;
    }

    &--grey {
      background-color: #151e3a;
      color: #c6c6c7;
    }
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%; // Full width on very small screens
    margin: 10px 0; // Margin to add space between cards vertically
  }
}
</style>
