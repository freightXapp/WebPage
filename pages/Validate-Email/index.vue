<template>
  <div class="validate-email">
    <h1>Email Validation</h1>
    <div v-if="isValidating">Validating your email...</div>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script setup>
const route = useRoute();
const message = ref("");
const isValidating = ref(true);
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

onMounted(async () => {
  const token = route.query.token;
  console.log(token);
  if (!token) {
    message.value = "Invalid request.";
    isValidating.value = false;
    return;
  }

  try {
    const { data, error, status, refresh } = await useFetch(
      `${baseUrl}/auth/validate-email`,
      {
        method: "GET",
        params: { token },
        credentials: "include",
      }
    );
    if (!data.value) {
      await refresh();
    }
    if (error.value) {
      message.value =
        "Validation failed. The token might be invalid or expired.";
    } else if (data.value) {
      message.value = "Your email has been successfully validated!";
    } else {
      await refresh();
    }
  } catch (err) {
    console.error(err);
    message.value = "An error occurred during validation.";
  } finally {
    isValidating.value = false;
  }
});
</script>

<style scoped>
.validate-email {
  text-align: center;
  margin-top: 50px;
}

.message {
  margin-top: 20px;
  font-size: 18px;
  color: green;
}

.error {
  color: red;
}
</style>
