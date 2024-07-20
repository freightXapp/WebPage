<template>
  <div class="validate-email">
    <h1>Email Validation</h1>
    <div v-if="isValidating">Validating your email...</div>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script setup>
const route = useRoute();
const message = ref('');
const isValidating = ref(true);
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;

onMounted(async () => {
  const token = route.query.token;
  console.log(token)
  if (!token) {
    message.value = 'Invalid request.';
    isValidating.value = false;
    return;
  }

  try {
    const { data, error,status,refresh } = await $fetch(`${baseUrl}/auth/validate-email`, {
      method: 'GET',
      params: { token },
        credentials: 'include', 
    });


    if (error.value) {
        console.log(error.value.message)
      message.value = 'Validation failed. The token might be invalid or expired.';
    } else if(data.value) {
      message.value = 'Your email has been successfully validated!';
    }else{
        await refresh()
    }
        console.log('DATA VALUE', data.value);
    console.log('ERROR VALIE +>>>', error.value);
    console.log('STATUS +>>>', status.value);
  } catch (err) {
    console.error(err);
    message.value = 'An error occurred during validation.';
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
