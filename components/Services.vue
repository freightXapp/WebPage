<template>
  <section id="services">
    <h2>Our Services</h2>
    <ul>
      <li>
        <!-- <img src="path/to/icon.png" alt="Logistics Planning"> -->
        <h3>Logistics Planning</h3>
        <p>Efficient route and load planning.</p>
      </li>
      <li>
        <!-- <img src="path/to/icon.png" alt="Fleet Management"> -->
        <h3>Fleet Management</h3>
        <p>Comprehensive fleet monitoring and maintenance.</p>
      </li>
      <!-- Add more services here -->
    </ul>
    <button @click="exploreServices">Explore Services</button>
  </section>
</template>

<script>
export default {
  methods: {
    exploreServices() {
      // Navigate to services page
    }
  }
}
</script>
